export class Price {
  createdAt: Date;
  constructor(
    public storeId: number,
    public productId: number,
    public amount: number
  ) {
    this.createdAt = new Date();
  }
}
