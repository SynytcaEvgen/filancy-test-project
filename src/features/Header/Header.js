import {ReactComponent as Logo} from '../../logo.svg';
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a href="/">
                        <div className="logo">
                            <Logo />
                            <div className="logo__text">
                                <span>Repos Search app</span>
                                <span className="sub_text">powered by GitHub</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;