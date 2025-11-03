import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/input.js";

export async function winningInput() {
  Console.print("");
  
  const winningInput = await Console.readLineAsync(INPUT_MESSAGE.WINNING);
  const winningNumber = winningInput.split(",");

  return winningNumber;
}
