interface Range {
  min: number;
  max: number;
}

function getRandomNumber({ min, max }: Range): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNumber;
