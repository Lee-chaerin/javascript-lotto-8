import Lotto from "../Lotto.js";

export function getLotto(count) {
  const lottoArray = [];

  for (let index = 0; index < count; index++) {
    const lotto = new Lotto();
    lottoArray.push(lotto);
  }

  return lottoArray;
}
