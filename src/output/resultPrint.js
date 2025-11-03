import { Console } from "@woowacourse/mission-utils";
import { checkLotto } from "../lotto/checkLotto.js";
import { OUTPUT_MESSAGE, RESULT_MESSAGE } from "../constant/output.js";
import { calculateRateOfReturn } from "../lotto/calculateRateOfReturn.js";

export function resultPrint(price, lottoArray, winningNumber, bonusNumber) {
  const result = checkLotto(lottoArray, winningNumber, bonusNumber);

  Console.print("");
  Console.print(OUTPUT_MESSAGE.STATISTICS);
  statisticsPrint(result);

  Console.print("");
  rateOfReturnPrint(price, result);
}

function statisticsPrint(result) {
  Console.print(RESULT_MESSAGE.FIFTH + result[5] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.FOURTH + result[4] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.THIRD + result[3] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.SECOND + result[2] + RESULT_MESSAGE.COUNT);
  Console.print(RESULT_MESSAGE.FIRST + result[1] + RESULT_MESSAGE.COUNT);
}

function rateOfReturnPrint(price, result) {
  const rateOfReturn = calculateRateOfReturn(price, result);

  Console.print(OUTPUT_MESSAGE.RATE_OF_RETURN.replace("%s", rateOfReturn));
}
