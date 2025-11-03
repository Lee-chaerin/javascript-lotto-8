import { Random, Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./constant/error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    const lottoNumbers = numbers ?? this.#makeNumbers();
    this.#validate(lottoNumbers);
    this.#numbers = lottoNumbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_COUNT_MISMATCH);
    }

    const checkDuplicate = new Set(numbers);
    if (checkDuplicate.size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE);
    }
  }

  #makeNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumbers.sort((a, b) => a - b);

    return lottoNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  checkNumbers(winningNumber, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumber.includes(number)
    ).length;
    const bonusMatch = this.#numbers.includes(bonusNumber);

    if (matchCount === 6) return 1;
    if (matchCount === 5 && bonusMatch) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 0;
  }
}

export default Lotto;
