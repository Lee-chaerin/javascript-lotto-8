import { Console } from "@woowacourse/mission-utils";
import { checkLotto } from "../lotto/checkLotto.js";
import { RESULT_MESSAGE } from "../constant/output.js";

export function resultOutput(lottoArrary, winningNumber, bonusNumber) {
  const resultArray = checkLotto(lottoArrary, winningNumber, bonusNumber);

  Console.print("");
  Console.print("당첨 통계\n---");
  Console.print(RESULT_MESSAGE.FIFTH + resultArray[5] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.FOURTH + resultArray[4] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.THIRD + resultArray[3] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.SECOND + resultArray[2] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.FIRST + resultArray[1] + RESULT_MESSAGE.COUNT);
}
