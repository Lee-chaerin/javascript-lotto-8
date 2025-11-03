export function checkLotto(lottoArray, winningNumber, bonusNumber) {
  const resultArray = new Array(6).fill(0);

  for (const lotto of lottoArray) {
    const result = lotto.checkNumbers(winningNumber, bonusNumber);

    resultArray[result]++;
  }

  return resultArray;
}
