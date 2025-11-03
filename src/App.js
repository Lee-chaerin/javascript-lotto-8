import { priceInput } from "./input/priceInput.js";
import { bonusInput, winningInput } from "./input/numberInput.js";
import { lottoPrint } from "./output/lottoPrint.js";
import { resultPrint } from "./output/resultPrint.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const [price, lottoCount] = await priceInput(); //1. 구입

      const lottoArray = lottoPrint(lottoCount); //2. 구매한 로또 반환 및 출력

      const winningNumber = await winningInput(); //3. 당첨 번호, 보너스 입력
      const bonusNumber = await bonusInput(winningNumber);

      resultPrint(price, lottoArray, winningNumber, bonusNumber); //4. 통계
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
