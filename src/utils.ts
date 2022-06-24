export const scrollHandler = (
  setScroll: React.Dispatch<React.SetStateAction<number>>
) => {
  const position = window.pageYOffset;
  setScroll(position);
};
