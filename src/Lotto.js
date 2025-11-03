import { Random, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    const lottoNumbers = numbers ?? this.#makeNumbers();
    this.#validate(lottoNumbers);
    this.#numbers = lottoNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const checkDuplicate = new Set(numbers);
    if (checkDuplicate.size !== 6) {
      throw new Error("[ERROR] 로또 번호가 중복입니다.");
    }
  }

  #makeNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return lottoNumbers;
  }
}

export default Lotto;
