import './app-header.css';

const AppHeader = function () {

    return (
        <header>
            <div className="logo_container">
                <div className="logo">
                    CF
                </div>
            </div>

            <nav>
                <div className="menu_option">
                    <a>About</a>
                </div>

                <div className="menu_option">
                    <a>Explore countries</a>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;