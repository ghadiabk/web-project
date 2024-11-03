let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
function toggleSidebar() {
    if (sidebar.style.right === "-250px") {
      sidebar.style.right = "0";
      overlay.style.display = "block";
    } 
    else {
        sidebar.style.right = "-250px";
        overlay.style.display = "none";
      }
}
function closeSidebar() {
    sidebar.style.right = "-250px";
    overlay.style.display = "none";
}
