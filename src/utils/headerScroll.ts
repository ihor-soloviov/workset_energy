export const onHeaderScroll = () => {
  let headerBottom;
  let prevScrollPos = window.scrollY;
  const headerDiv = document.querySelector('header');
  if (headerDiv) {
    headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos <= currentScrollPos) {
        headerDiv.classList.remove('fixedToTop');
        headerDiv.style.top = '-7.2rem';
      } else {
        headerDiv.classList.add('fixedToTop');
        headerDiv.style.top = '0';
      }

      prevScrollPos = currentScrollPos;
    });
  }
};
