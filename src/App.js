import { Console } from "@woowacourse/mission-utils";
import { priceInput } from "./input/priceInput.js";

class App {
  async run() {
    const lottoCount = await priceInput();
    Console.print(lottoCount);
  }
}

export default App;
