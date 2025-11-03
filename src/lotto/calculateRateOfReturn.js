export function calculateRateOfReturn(price, result) {
  const prize = {
    0: 0,
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  };

  let totalPrize = 0;

  for (let count = 1; count <= 5; count++) {
    totalPrize += prize[count] * result[count];
  }

  const rateOfReturn = (totalPrize / price) * 100;

  return Math.round(rateOfReturn * 10) / 10;
}
