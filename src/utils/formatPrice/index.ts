export const formatPrice = (amount: number): string => {
  const numberString = String(amount);

  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
