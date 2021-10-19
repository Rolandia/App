import { Price } from "./Price";
import { User } from "./User";

export class Client extends User {
  pay(price: Price): void {
    console.log(
      "Salva no banco de dados que um pagamento foi feito para o preço",
      price
    );
  }
}
