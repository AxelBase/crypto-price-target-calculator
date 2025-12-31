// Single file for all core logic (FR1 + FR2)
// Handles API fetching, calculations, volatility, and risk adjustments

export async function fetchCryptoList() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    return data.map(coin => ({ id: coin.id, name: coin.name, symbol: coin.symbol }));
  } catch (error) {
    console.error('Error fetching crypto list:', error);
    return [];
  }
}

export async function fetchCurrentPrice(cryptoId) {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    return data[cryptoId]?.usd || null;
  } catch (error) {
    console.error('Error fetching current price:', error);
    return null;
  }
}

export async function fetchHistoricalData(cryptoId, days = 7) {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`);
    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    return data.prices.map(price => price[1]); // Array of prices
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return [];
  }
}

export function calculateRequiredMove(current, target) {
  if (current <= 0 || target <= 0) return { percentage: 0, absolute: 0 };
  const absolute = target - current;
  const percentage = (absolute / current) * 100;
  return { percentage: percentage.toFixed(2), absolute: absolute.toFixed(2) };
}

export function calculateVolatility(prices) {
  if (prices.length < 2) return 0;
  const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
  const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (prices.length - 1);
  const stdDev = Math.sqrt(variance);
  return (stdDev / mean) * 100; // Volatility as percentage
}

export async function calculateRiskAdjustedMove(cryptoId, current, target) {
  const historical = await fetchHistoricalData(cryptoId);
  const volatility = calculateVolatility(historical);
  const required = calculateRequiredMove(current, target);
  const volatilityFactor = volatility / 100; // Normalize
  const adjustedPercentage = required.percentage * (1 + volatilityFactor);
  const adjustedAbsolute = (adjustedPercentage / 100) * current;
  return {
    requiredPercentage: required.percentage,
    requiredAbsolute: required.absolute,
    volatility: volatility.toFixed(2),
    adjustedPercentage: adjustedPercentage.toFixed(2),
    adjustedAbsolute: adjustedAbsolute.toFixed(2)
  };
}