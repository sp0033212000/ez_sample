export const randomImage = () => {
  const width = Math.floor(Math.random() * 50) + 700;
  const height = Math.floor(Math.random() * 50) + 250;
  return `https://source.unsplash.com/random/${width}x${height}`;
};
