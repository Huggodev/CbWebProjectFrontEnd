import React from "react";
import headerStyles from "./Header.module.css"
import LogoImage from "../../assets/LogoImg/LogoDos.png"

const Header = () => {

    return (
        <div className={headerStyles.headerContainer}>
            <div>
                <img src={LogoImage} alt="Logo" />
            </div>
            <div>
                <h1 className={headerStyles.headerTitle }>Carina Boujon</h1>
            </div>
        </div>
    )
}

export default Header;