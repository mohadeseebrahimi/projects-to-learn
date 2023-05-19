import './Header.css'


function Header(){
    return(
        <header>
            <div className='navbar-container'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <h2 className='logo'>life</h2>
                    <nav className='navbar'>
                        <ul className='d-flex'>
                            <li><a className='nav-link' href='#hero'>home</a></li>
                            <li><a className='nav-link' href='#about'>about</a></li>
                            <li><a className='nav-link' href='#services'>services</a></li>
                            <li><a className='nav-link' href='#blog'>blog</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <h1 className='hero-title'>i am gholamreza</h1>
            <p className='hero-desc'>hello, world</p>
            
        </header>

    )
}

export default Header;