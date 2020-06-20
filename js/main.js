function modalInit() {
  const mainModal = document.querySelector("#main-modal");
  const grayOut = document.querySelector(".grayOut");
  const mainCotainer = document.querySelector(".main-container");
  const openModal = document.querySelector(".btn.primary.open");
  //succes modal
  const succesModal = document.querySelector("#succes-modal");
  const errorModal = document.querySelector("#error-modal");
  //botones accept and cancel
  const btnCloses = document.querySelectorAll(".icon-close-modal");

  const btnAccept = document.querySelector(".btn.primary.accept");
  const btnCancel = document.querySelector(".btn.secondary.cancel");

  btnCloses.forEach((btnClose) => {
    btnClose.addEventListener("click", () => {
      mainModal.classList.add("close");
      grayOut.style.display = "none";
      mainCotainer.classList.remove("unactive");
    });
  });

  btnAccept.addEventListener("click", () => {
    succesModal.style.display = "block";
    mainModal.style.display = "none";
  });

  btnCancel.addEventListener("click", () => {
    errorModal.style.display = "block";
    mainModal.style.display = "none";
  });

  openModal.addEventListener("click", () => {
    mainModal.style.display = "block";
    mainModal.classList.remove("close");
    grayOut.style.display = "flex";
    // mainCotainer.style.display = "block";
    succesModal.style.display = "none";
    errorModal.style.display = "none";
    mainCotainer.classList.add("unactive");
  });
}

modalInit();
