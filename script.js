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
function filter(e) {
  let products = document.querySelectorAll(".productContainer div");
  let filter = e.target.dataset.filter;
  if (filter === '*') {
    products.forEach(product => product.classList.remove('hidden'));
  }  else {
    products.forEach(product => {
      product.classList.contains(filter) ? 
      product.classList.remove('hidden') : 
      product.classList.add('hidden');
    });
  };
};