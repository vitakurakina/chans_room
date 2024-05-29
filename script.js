function setTopBackgroundHeight() {
    const windowInnerHeight = window.innerHeight;
    const topBackground = document.querySelector('.topBackground');
    topBackground.style.height = `${windowInnerHeight}px`;
  }
  
  setTopBackgroundHeight();
  
  window.addEventListener('resize', setTopBackgroundHeight);