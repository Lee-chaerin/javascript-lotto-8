import { priceInput } from "./input/priceInput.js";
import { bonusInput, winningInput } from "./input/winningNumberInput.js";
import { lottoOutput } from "./output/lottoOutput.js";

class App {
  async run() {
    const lottoCount = await priceInput();
    lottoOutput(lottoCount);

    const winningNumber = await winningInput();
    const bonusNumber = await bonusInput(winningNumber);
  }
}

export default App;
