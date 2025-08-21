const Navigation =()=>{
    return (
            <nav className="container">
             <div className="logo">
                <img src="adidaslogo.png" className="logoimg" />
             </div>
             <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">contact</a></li>
             </ul>
             <button className="login">Login</button>
            </nav>
    )
};

export default Navigation;