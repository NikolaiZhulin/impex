export const scrollToElement = (elementId: string) => {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    const yOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  }
};
