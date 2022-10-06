
(function () {
  if (document.querySelector('.hero__animation')) {
    let parent = document.querySelector('.hero__animation');
    parent.style.width = parent.children[0].clientWidth + "px";
  }

  if (document.querySelector('.media__overlay')) {
    document.querySelector('.media__overlay').addEventListener('click', function (e) {
      e.target.classList.add('hide')
    })

    document.querySelector('.media__overlay_button').addEventListener('click', function (e) {
      document.querySelector('.media__overlay').classList.remove('hide')
    })
  }

  if (document.querySelector('#edition-number')) {
    const element = document.querySelector('#edition-number');
    const url = window.location.search
    element.innerHTML = url.replace('?edition=', '') || '01';
  }


  MicroModal.init({
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  });
})();