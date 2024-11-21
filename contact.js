// Load the popup HTML dynamically
document.addEventListener("DOMContentLoaded", () => {
    fetch("contact.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("popupContainer").innerHTML = html;
  
        // Attach popup functionality after loading
        const popupOverlay = document.getElementById("popupOverlay");
        const openPopupLink = document.getElementById("openPopupLink");
        const closePopupBtn = document.getElementById("closePopupBtn");
  
        // Open popup when the link is clicked
        openPopupLink.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent the default link behavior
          popupOverlay.style.display = "flex";
        });
  
        // Close the popup
        closePopupBtn.addEventListener("click", () => {
          popupOverlay.style.display = "none";
        });
  
        // Close the popup when clicking outside the popup box
        popupOverlay.addEventListener("click", (e) => {
          if (e.target === popupOverlay) {
            popupOverlay.style.display = "none";
          }
        });
      });
  });
  
  