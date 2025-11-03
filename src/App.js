import { priceInput } from "./input/priceInput.js";
import { bonusInput, winningInput } from "./input/winningNumberInput.js";
import { lottoOutput } from "./output/lottoOutput.js";
import { resultOutput } from "./output/resultOutput.js";

class App {
  async run() {
    const lottoCount = await priceInput();
    const lottoArray = lottoOutput(lottoCount);

    const winningNumber = await winningInput();
    const bonusNumber = await bonusInput(winningNumber);

    resultOutput(lottoArray, winningNumber, bonusNumber);
  }
}

export default App;
