import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default ({history}) => {

    const menuItems = [
        {name: "Home", to: "/"},
        {name: "Features", to: "/count"},
        {name: "Pricing", to: "/"},
    ]

    return (
        <nav className="app-header navbar navbar-expand-lg navbar-light bg-ebony">

            <Link className="navbar-brand" to={"/"}>
                <img src={logo} className="App-logo App-logo-size" alt="logo"/>
                <span className="header-name ft-color-turquoiseBlue ">React CMS</span>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon className="navbar-toggler-icon" icon={['fas', 'bars']} color={"#fff"}/>
            </button>

            <NavItems payload={menuItems}/>

            <form className="search-form form-inline">
                <div className="btn  mr-sm-2" type="button">
                    <FontAwesomeIcon icon={['fas', 'search']} color={"#fff"}/>
                </div>
                <input className="form-control my-2 my-sm-0" type="search" placeholder="Search" aria-label="Search"/>
            </form>

            <div className="ml-2">
                <Link type="button" className="btn btn-outline-danger" to={"/login"}>
                    <FontAwesomeIcon className="mr-2" icon={['fas', 'sign-in-alt']}/>
                    Sign in
                </Link>
            </div>

        </nav>
    )

}

const NavItems = (props) => {

    const menuItems = props.payload

    const _onIsActive = idx => {
        console.log("onIsActive", idx)
    }

    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                {
                    menuItems.map((item, idx) => (
                        <NavItem key={idx} payload={item} idx={idx} click={_onIsActive}/>
                    ))
                }
            </ul>
        </div>
    )

}

const NavItem = (props) => {

    const item = props.payload

    const idx = props.idx

    const isActive = props.isActive

    const _onClick = props.click

    const className = isActive ? 'ft-color-turquoiseBlue' : 'text-light'

    return (
        <li className="nav-item">
            <Link className={`nav-link ${className}`} to={item.to} onClick={() => _onClick(idx)}>
                {item.name}
                <span></span>
            </Link>
        </li>
    )

}

const NavToggleItem = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
    )
}
