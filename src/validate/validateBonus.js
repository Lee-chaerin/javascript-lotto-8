import { ERROR_MESSAGE } from "../constant/error.js";

export function validateBonus(bonusNumber, winningNumber) {
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_NOT_NUMBER);
  }

  if (winningNumber.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE);
  }

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.BONUS_OUT_RANGE);
  }
}
