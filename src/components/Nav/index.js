// Localization
import { useTranslation } from 'react-i18next';
// Utils
import { onScroll } from '../../utils';
// Styles
import Styles from './styles.module.scss';

const Nav = (props) => {
    const { t } = useTranslation();

    return (
        <nav className = { `${Styles.nav_wrap} ${props.class}` }>
            <ul className = { Styles.nav_list }>
                <li className = { Styles.nav_item }>
                    <span className = { Styles.nav_link } onClick = { () => onScroll('about') }>{ t('nav_about') }</span>
                </li>
                <li className = { Styles.nav_item }>
                    <span className = { Styles.nav_link } onClick = { () => onScroll('what_expect') }>{ t('nav_benefits') }</span>
                </li>
                <li className = { Styles.nav_item }>
                    <span className = { Styles.nav_link } onClick = { () => onScroll('steps') }>{ t('nav_steps') }</span>
                </li>
                <li className = { Styles.nav_item }>
                    <span className = { Styles.nav_link } onClick = { () => onScroll('faq') }>{ t('nav_faq') }</span>
                </li>
                <li className = { Styles.nav_item }>
                    <span className = { Styles.nav_link } onClick = { () => onScroll('social') }>{ t('nav_social') }</span>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
