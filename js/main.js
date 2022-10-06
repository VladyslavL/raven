
(function () {
  if (document.querySelector('.hero__animation')) {
    let parent = document.querySelector('.hero__animation');
    parent.style.width = parent.children[0].clientWidth + "px";
  }

  MicroModal.init({
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  });
})();