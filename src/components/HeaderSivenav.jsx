import React from 'react';

function toggleMenu() {
    const menuIcon = document.getElementById("menuIcon");
    menuIcon.classList.toggle("change");
  }

  export default function navi() {
    const openNav = () => {
        toggleMenu();
        setTimeout(() => {
            document.getElementById("mySidenav").style.width = "300px";
            document.getElementById("overlay").style.display = "grid";
            setTimeout(() => {
              document.getElementById("overlay").style.transition = "background-color 0.5s ease";
              document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";
              }, 50);

        }, 100); // Adjust the delay time as needed
      };
    

    const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0)";
      setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
      }, 500);
      setTimeout(() => {
          toggleMenu();
      }, 360); // Adjust the delay time as needed
    };

    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="/Home">Home page</a>
          <a href="/CodingLan">Coding Lang</a>
          <a href="https://github.com/Samuel123098">Github</a>
          <a href="https://leetcode.com/u/SamSBx/">LeetCode</a>
          <a href="/Animal">Animals</a>
          <a href="/Credit">Credit</a>
        </div>
        <div className="banner">
          <a href="https://sambsx.com/">
            <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/93660168_AhjVt7W2Q3fWTiL.png" id="Logo_Button" alt="Logo"/>
          </a>
          <div onClick={openNav} id="nav_button">
            <div className="menu-icon" id="menuIcon">
              <div className="bar1"></div>
              <div className="bar2"></div>  
              <div className="bar3"></div>
            </div>
            <div id="overlay"></div>
          </div>
        </div>
      </div>

    );
  }


