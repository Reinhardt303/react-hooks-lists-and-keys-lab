import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navRef = links.map((link) => {

    return (<a key={link} href={`#${link}`}>{link}</a>)
    
  })

  return <nav>
    {navRef} 
    </nav>;
}

export default NavBar;
