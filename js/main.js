
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

  if (document.querySelector("form")) {
    var Forms = document.querySelectorAll("form");
    Forms.forEach((Form) => {
      Form.onsubmit = function (event) {
        event.preventDefault();

        var request = new XMLHttpRequest();
        // POST to httpbin which returns the POST data as JSON
        request.open("POST", Form.getAttribute("action"), true);

        var formData = new FormData(Form);

        formData.append("website-url", window.location.href);

        request.onload = function () {
          if (request.status === 200) {
            Form.classList.add("success");
            console.log("success");
          } else {
            Form.classList.add("error");
            console.log("error");
          }
        };

        request.send(formData);

        Form.reset();
      };
    });
  }


  MicroModal.init({
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  });
})();