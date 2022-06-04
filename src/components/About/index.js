// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';
// Images
import photo1 from '../../theme/assets/images/about_img1.png';
import photo2 from '../../theme/assets/images/about_img2.png';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id = { 'about' } className = { Styles.about }>
            <div className = { Styles.container }>
                <div className = { Styles.photos }>
                    <div className = { Styles.photos_first }>
                        <img src = { photo1 } alt = 'photo' />
                        <span className = { Styles.first_logo_icon } />
                    </div>
                    <div className = { Styles.photos_second }>
                        <img src = { photo2 } alt = 'photo' />
                    </div>
                </div>
                <div className = { Styles.description }>
                    <h2 className = { Styles.description_caption }>
                        <span>{ t('about_title') }</span>
                        <span>{ 'Ron Bielecki' }</span>
                    </h2>
                    <p className = { Styles.description_info_first }>
                        <span>{ t('about_info_first') }</span>
                        <span>{ t('about_info_second') }</span>
                    </p>
                    <p className = { Styles.description_info_second }>
                        <span>{ t('about_info_third') }</span>
                    </p>
                </div>
            </div>
            <div className = { Styles.line_wrap }>
                <div className = { Styles.line_thin }>
                    <div>
                        <span>{ t('banner_ribbon_start') }</span>
                        <span>{ t('banner_ribbon_middle') }</span>
                        <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                        <span>{ t('banner_ribbon_middle') }</span>
                        <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                        <span>{ t('banner_ribbon_middle') }</span>
                        <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                        <span>{ t('banner_ribbon_middle') }</span>
                        <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                        <span>{ t('banner_ribbon_middle') }</span>
                        <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                        <span>{ t('banner_ribbon_middle') }</span>
                        <span>{ t('banner_ribbon_end') }</span>
                    </div>
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default About;
