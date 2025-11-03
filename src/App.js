import { priceInput } from "./input/priceInput.js";
import { bonusInput, winningInput } from "./input/winningNumberInput.js";
import { lottoPrint } from "./output/lottoPrint.js";
import { resultOutput } from "./output/resultOutput.js";

class App {
  async run() {
    const [price, lottoCount] = await priceInput(); //1. 구입

    const lottoArray = lottoPrint(lottoCount); //2. 구매한 로또 반환 및 출력

    const winningNumber = await winningInput();
    const bonusNumber = await bonusInput(winningNumber);

    resultOutput(lottoArray, winningNumber, bonusNumber);
  }
}

export default App;
