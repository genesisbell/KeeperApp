import React from "react"

const year = new Date().getFullYear();

function Footer(){
    return (
        <footer>
        <p>Made by Genesis Bell</p>
        <p>Copyright ⓒ {year}</p>
        </footer>
        
    );
}

export default Footer;