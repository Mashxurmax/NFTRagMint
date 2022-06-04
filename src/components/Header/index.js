// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/main_logo.png';
// Components
import Nav from '../Nav';
import Localization from '../Localization';
import BurgerMenu from '../BurgerMenu';

const Header = () => {
    const { t } = useTranslation();

    const { width } = getComputedStyle(document.body);

    return (
        <header className = { Styles.header }>
            <div className = { Styles.container }>
                <div className = { Styles.header_logo }>
                    <img src = { logo } alt = 'logo' />
                </div>
                <Nav class = { Styles.nav_wrap_small } />
                <button id='btn_meta' className = { Styles.btn } >{ 'Connect' }</button>
                { parseFloat(width) > 1024 && <Localization /> }
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
