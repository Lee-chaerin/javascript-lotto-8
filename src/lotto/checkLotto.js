import { Console } from "@woowacourse/mission-utils";

export function checkLotto(lottoArrary, winningNumber, bonusNumber) {
  const resultArray = new Array(6).fill(0);

  for (const lotto of lottoArrary) {
    const result = lotto.checkNumbers(winningNumber, bonusNumber);

    resultArray[result]++;
  }

  return resultArray;
}
