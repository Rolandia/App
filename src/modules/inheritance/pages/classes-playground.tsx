import React, { Component } from "react";
import PropTypes from "prop-types";
import { Store } from "../classes/Store";
import { Address } from "../classes/Address";

export class ClassesPlayground extends Component {
  static propTypes = {};

  render() {
    const rolanches = new Store(
      1,
      "Rolanches",
      "RolanchesDaSilva",
      123123123,
      new Address(
        "Rua lindolfo pinheiro",
        "00",
        "rosário",
        "Minas Gerais",
        "36700-000"
      )
    );
    const digao = new Store(
      2,
      "digao",
      "digaoasdasd",
      123123123,
      new Address(
        "Rua lindolfo pinheiro",
        "00",
        "rosário",
        "Minas Gerais",
        "36700-000"
      )
    );
    const vilelao = new Store(
      3,
      "vilelao",
      "vilelaoNome",
      123123123,
      new Address(
        "Rua lindolfo pinheiro",
        "00",
        "rosário",
        "Minas Gerais",
        "36700-000"
      )
    );
    const stores: Store[] = [rolanches, vilelao, digao];
    return (
      <div>
        <ul>
          {stores.map((st) => {
            return (
              <li
                key={st.id}
                style={{
                  color: "blue",
                  fontWeight: 900,
                  fontFamily: "Comic Sans",
                }}
              >
                {st.businessName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ClassesPlayground;
