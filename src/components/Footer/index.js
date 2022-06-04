// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/main_logo.png';
// Components
import Nav from '../Nav';
import Socials from '../Socials';

const Footer = () => {
    return (
        <footer id = 'footer' className = { Styles.footer }>
            <div className = { Styles.container }>
                <div className = { Styles.footer_logo }>
                    <img src = { logo } alt = 'logo' />
                </div>
                <Nav />
            </div>
            <Socials
                classWrapper = { Styles.footer_socials }
                classList = { Styles.socials_list } />
        </footer>
    );
};

export default Footer;
