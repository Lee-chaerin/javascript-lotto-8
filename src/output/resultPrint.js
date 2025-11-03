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
  Console.print(RESULT_MESSAGE.FIFTH.replace("%s", result[5]));
  Console.print(RESULT_MESSAGE.FOURTH.replace("%s", result[4]));
  Console.print(RESULT_MESSAGE.THIRD.replace("%s", result[3]));
  Console.print(RESULT_MESSAGE.SECOND.replace("%s", result[2]));
  Console.print(RESULT_MESSAGE.FIRST.replace("%s", result[1]));
}

function rateOfReturnPrint(price, result) {
  const rateOfReturn = calculateRateOfReturn(price, result);

  Console.print(OUTPUT_MESSAGE.RATE_OF_RETURN.replace("%s", rateOfReturn));
}
