export interface CardDetails {
  cardType: string;
  cardNumber: string;
  validThru: string;
  cvv: string;
  usage: {
    usageLimit: string;
    spendings: string;
  };
  deactivated: boolean;
  freezeCard: boolean;
}
