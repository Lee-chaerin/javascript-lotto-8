import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/input.js";

export async function winningInput() {
  Console.print("");

  const winningInput = await Console.readLineAsync(INPUT_MESSAGE.WINNING);
  const winningNumber = winningInput.split(",").map((x) => parseInt(x));

  return winningNumber;
}

export async function bonusInput(winningNumber) {
  Console.print("");

  const bonusInput = await Console.readLineAsync(INPUT_MESSAGE.BONUS);
  if (winningNumber.includes(bonusInput)) {
    throw new Error("[ERROR] 당첨 번호와 중복입니다.");
  }

  return parseInt(bonusInput);
}
