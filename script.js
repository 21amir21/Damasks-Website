function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
<<<<<<< HEAD

  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
=======

  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", () => {
>>>>>>> 3f29790cf349b498928be4ee0920f21766359aa4
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }


  // this is a topUp function in Customer Service Page // Might remove it later
  const myButton = document.getElementById("myBtn");

<<<<<<< HEAD
          window.onscroll = function() {
=======
          window.onscroll = () => {
>>>>>>> 3f29790cf349b498928be4ee0920f21766359aa4
            scrollFunction();
          };

          function scrollFunction() {
            if (
              document.body.scrollTop > 20 ||
              document.documentElement.scrollTop > 20
            ) {
              myButton.style.display = "block";
            } else {
              myButton.style.display = "none";
            }
          }

          function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }