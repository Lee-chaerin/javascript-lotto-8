import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/input.js";
import { validateWinning } from "../validate/validateWinning.js";
import { validateBonus } from "../validate/validateBonus.js";

export async function winningInput() {
  Console.print("");

  const winningInput = await Console.readLineAsync(INPUT_MESSAGE.WINNING);
  const winningNumber = winningInput.split(",").map((x) => parseInt(x));
  validateWinning(winningNumber);

  return winningNumber;
}

export async function bonusInput(winningNumber) {
  Console.print("");

  const bonusInput = await Console.readLineAsync(INPUT_MESSAGE.BONUS);
  const bonusNumber = parseInt(bonusInput);
  validateBonus(bonusNumber, winningNumber);

  return bonusNumber;
}
