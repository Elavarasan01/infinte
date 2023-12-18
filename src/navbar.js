import logo from './assets/logo.png';
export const Navbar = () => {
    return (
        <>
        <div class="horizontal-line"></div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white p-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt='infinite logo' />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#sec1">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sec2">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sec3">What We do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sec4">Testmonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sec5">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sec6">Pricing Table</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}