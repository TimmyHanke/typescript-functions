export const max = (number1: number, number2: number): number => {
  return number1 > number2 ? number1 : number2;
};

max(1, 2);

export const landscape = (
  number1: number,
  number2: number
): number | string => {
  return number1 > number2 ? "true" : "false";
};

export const area = (
  type: string,
  number1: number,
  number2: number
): number | string => {
  const nameType = type;
  if (type === "rectangle") return number1 * number2;
  if (type === "triangle") return (number1 * number2) / 2;
  if (type === "circle") {
    const total = (number1 / 2) * Math.PI;
    return Math.ceil(total);
  } else return "error";
};

export const tellFortune = (
  profession: string,
  partner: string,
  childrenAmount: number
): number | string => {
  return `You will be ${profession} in Antarctica, married to ${partner} and have ${childrenAmount} children`;
};

export const calculateDogAge = (number1: number, number2: number): number => {
  return number1 * number2;
};

export const daysOfSupply = (number1: number, number2: number): number => {
  const total = number1 / number2;

  return Math.ceil(total);
};

export const degrees = (type: string, number: number): number | string => {
  if (type === "celcius") return (number * 9) / 5 + 32;
  if (type === "farenheit") return ((number - 32) * 5) / 9;
  else return "error";
};

export const ageInSeconds = (number: number): number => {
  return number * 365 * 24 * 60 * 60;
};

export const checkSpeed = (number: number): number | string => {
  const speed = number - 70;
  const points = Math.ceil(speed / 5);
  if (number > 70 && points < 13) return points;
  if (number <= 70) return "Ok";
  if (points > 12) return "Indraget körkort";
  else return "error";
};

const allFunctions = [
  max,
  landscape,
  area,
  tellFortune,
  calculateDogAge,
  daysOfSupply,
  degrees,
  checkSpeed,
];
