
import './Design.css';

  function toggleMenu() {
    const menuIcon = document.getElementById("menuIcon");
    menuIcon.classList.toggle("change");
  }



  function App() {
    const openNav = () => {
        toggleMenu();
        setTimeout(() => {
            document.getElementById("mySidenav").style.width = "300px";
            document.body.style.transition = "background-color 0.5s ease";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }, 100); // Adj§ust the delay time as needed
      };
    

    const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0px";
      document.body.style.backgroundColor = "white";
      setTimeout(() => {
          toggleMenu();
      }, 350); // Adjust the delay time as needed
    };

    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="https://sambsx.com/">Home page</a>
          <a href="subwebsites/CodingLan.html">Coding Languages</a>
          <a href="https://github.com/Samuel123098">Github</a>
          <a href="https://leetcode.com/u/SamSBx/">LeetCode</a>
          <a href="#">Animals</a>
          <a href="#">Credit</a>
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
          </div>
        </div>
      </div>
    );
  }


export default App
