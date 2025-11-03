import { priceInput } from "./input/priceInput.js";
import { bonusInput, winningInput } from "./input/numberInput.js";
import { lottoPrint } from "./output/lottoPrint.js";
import { resultOutput } from "./output/resultOutput.js";

class App {
  async run() {
    const [price, lottoCount] = await priceInput(); //1. 구입

    const lottoArray = lottoPrint(lottoCount); //2. 구매한 로또 반환 및 출력

    const winningNumber = await winningInput(); //3. 당첨 번호, 보너스 입력
    const bonusNumber = await bonusInput(winningNumber);

    resultOutput(lottoArray, winningNumber, bonusNumber);
  }
}

export default App;
