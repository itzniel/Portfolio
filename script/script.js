
function showPDF() {
  let x = document.getElementById("pdf-container");
  x.classList.toggle("show-pdf");
}


 window.addEventListener("scroll", function() {
      var navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-scroll");
      } else {
        navbar.classList.remove("navbar-scroll");
      }
    });

    const currentYear = new Date().getFullYear();
		document.getElementById('current-year').textContent = currentYear;

    //Change Nav Color when user click on the hamburger button
  const changeNavBgColor = document.querySelector('.navbar-toggler');
  const navbar = document.getElementById('newnav')
  let isColored = false;
  changeNavBgColor.addEventListener("click", function() {
   
    if(isColored){

      navbar.style.backgroundColor = "";
      isColored = false;

    } else {
    navbar.style.backgroundColor = "#05002a";
    isColored = true;
    }
  });

