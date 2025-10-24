const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const formatRupiah = (number) => {
  if (number === null || number === undefined) return "";

  return rupiahFormatter.format(number);
};
