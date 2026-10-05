/** Total TTC en centimes. vatRate est une fraction, par exemple 0.2. */
export function total(amountCents: number, vatRate = 0.2): number {
  const vat = Math.trunc(amountCents * vatRate);
  return amountCents + vat;
}
