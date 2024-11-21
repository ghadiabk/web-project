document.addEventListener("DOMContentLoaded", () => {
    fetch("contact.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("popupContainer").innerHTML = html;
        let openPopupBtn = document.getElementById("contactBtn");
        let popupOverlay = document.getElementById("popupOverlay");
        let openPopupLink = document.getElementById("openPopupLink");
        let closePopupBtn = document.getElementById("closePopupBtn");

        openPopupLink.addEventListener("click", (e) => {
          e.preventDefault();
          popupOverlay.style.display = "flex";
        });

        closePopupBtn.addEventListener("click", () => {
          popupOverlay.style.display = "none";
        });

        popupOverlay.addEventListener("click", (e) => {
          if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
          }
          openPopupBtn.addEventListener("click", () => {
            popupOverlay.style.display = "flex";
          });

          closePopupBtn.addEventListener("click", () => {
            popupOverlay.style.display = "none";
          });

          popupOverlay.addEventListener("click", (e) => {
            if (e.target === popupOverlay) {
              popupOverlay.style.display = "none";
            }
          });
        });
      });
  });
  
  