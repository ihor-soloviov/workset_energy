export const stopScroll = (isScrolling: boolean) => {
  const html = document.getElementsByTagName('html')[0] as HTMLElement;
  const body = document.body as HTMLElement;

  if (isScrolling) {
    [html, body].forEach(el => {
      el.style.overflow = 'hidden';
      el.style.height = '100%';
      el.style.margin = '0';
    });
  } else {
    [html, body].forEach(el => {
      el.style.overflow = '';
      el.style.height = '';
      el.style.margin = '';
    });
  }
};
