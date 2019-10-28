var buyButton = document.querySelector(".button-buy");
var buyPopup = document.querySelector(".modal-buy-message");
var buyClose = buyPopup.querySelector(".modal-close");
var buyNextPurchase = buyPopup.querySelector(".white-button");

buyButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
});

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

buyNextPurchase.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    };
  };
});

var mapButton = document.querySelector(".map-small");
var mapPopup = document.querySelector(".modal-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      };
    };
  });
};

var writeUsButton = document.querySelector(".write-us-button");
var writeUsPopup = document.querySelector(".modal-wrire-us");

if (writeUsPopup) {
  var writeUsClose = writeUsPopup.querySelector(".modal-close");
  var writeUsForm = writeUsPopup.querySelector("form");
  var writeUsLogin = writeUsPopup.querySelector("[name=name]");
  var writeUsEmail = writeUsPopup.querySelector("[name=email]");

  writeUsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");
  });

  writeUsClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
  });

  writeUsForm.addEventListener("submit", function(evt) {
    if (!writeUsLogin.value || !writeUsEmail) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-error");
      writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
      writeUsPopup.classList.add("modal-error");
    };
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (writeUsPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-show");
        writeUsPopup.classList.remove("modal-error");
      };
    };
  });
};

