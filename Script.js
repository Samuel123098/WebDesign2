/* Set the width of the side navigation to 250px */
function openNav() {
    toggleMenu();
    setTimeout(() => {
        document.getElementById("mySidenav").style.width = "300px";
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }, 100); // Adjust the delay time as needed
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
        toggleMenu();
    }, 350); // Adjust the delay time as needed

  }

  function toggleMenu() {
    const menuIcon = document.getElementById("menuIcon");
    menuIcon.classList.toggle("change");
  }