export const handleHeader = (style: string) => {
  const header = document.querySelector('#header') as HTMLElement;
  if (header) {
    header.style.display = style;
  }
};
