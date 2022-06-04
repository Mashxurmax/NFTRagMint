// Localization
import { useTranslation } from 'react-i18next';
// Hooks
import { useToggle } from '../../hooks';
// Utils
import { onScroll } from '../../utils';
// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/main_logo.png';
// Components
import Localization from '../Localization';

const BurgerMenu = () => {
    const [toggle, setToggle] = useToggle();
    const { t } = useTranslation();

    const dropdown = toggle ? Styles.burger_menu_open : Styles.burger_menu;

    const onDown = (href) => {
        onScroll(href);
        setToggle(!toggle);
    };

    return (
        <div className = { Styles.burger }>
            <div
                onClick = { () => setToggle(true) }
                className = { Styles.burger_icon }>
                <span />
                <span />
                <span />
            </div>
            <div className = { dropdown }>
                <div className = { Styles.menu_header }>
                    <div className = { Styles.header_logo }>
                        <img src = { logo } alt = 'logo' />
                    </div>
                    <button className = { Styles.header_btn }>{ 'Connect' }</button>
                    <div
                        onClick = { () => setToggle(false) }
                        className = { Styles.burger_icon_close } />
                </div>
                <ul>
                    <li>
                        <span onClick = { () => onDown('about') }>{ t('nav_about') }</span>
                    </li>
                    <li>
                        <span onClick = { () => onDown('what_expect') }>{ t('nav_benefits') }</span>
                    </li>
                    <li>
                        <span onClick = { () => onDown('steps') }>{ t('nav_steps') }</span>
                    </li>
                    <li>
                        <span onClick = { () => onDown('faq') }>{ t('nav_faq') }</span>
                    </li>
                    <li>
                        <span onClick = { () => onDown('social') }>{ t('nav_social') }</span>
                    </li>
                </ul>
                <Localization />
            </div>
        </div>
    );
};

export default BurgerMenu;
