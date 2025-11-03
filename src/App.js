import { priceInput } from "./input/priceInput.js";
import { lottoOutput } from "./output/lottoOutput.js";

class App {
  async run() {
    const lottoCount = await priceInput();
    lottoOutput(lottoCount);
  }
}

export default App;
