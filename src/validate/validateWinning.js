import { ERROR_MESSAGE } from "../constant/error.js";

export function validateWinning(winningNumber) {
  if (winningNumber.some(isNaN)) {
    throw new Error(ERROR_MESSAGE.WINNING_NOT_NUMBER);
  }

  if (winningNumber.length !== 6) {
    throw new Error(ERROR_MESSAGE.WINNING_COUNT_MISMATCH);
  }

  if (new Set(winningNumber).size !== winningNumber.length) {
    throw new Error(ERROR_MESSAGE.WINNING_DUPLICATE);
  }

  if (winningNumber.some((number) => number < 1 || number > 45)) {
    throw new Error(ERROR_MESSAGE.WINNING_OUT_RANGE);
  }
}
