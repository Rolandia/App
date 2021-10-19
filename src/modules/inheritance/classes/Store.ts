import { Address } from "./Address";

export class Store {
  constructor(
    public id: number,
    public businessName: string,
    public legalName: string,
    public cnpj: number,
    public address: Address
  ) {}
}
