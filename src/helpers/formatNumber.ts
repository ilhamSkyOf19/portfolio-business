export const formatNumberPhoneWithDash = (value: string) => {
  const numbers = value.replace(/\D/g, "");

  const parts = [];

  if (numbers.length > 0) {
    parts.push(numbers.slice(0, 4));
  }

  if (numbers.length > 4) {
    parts.push(numbers.slice(4, 8));
  }

  if (numbers.length > 8) {
    parts.push(numbers.slice(8));
  }

  return parts.join(" - ");
};

export const unformatPhoneNumber = (value: string) => {
  return value.replace(/\D/g, "");
};
