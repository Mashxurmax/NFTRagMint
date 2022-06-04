// Styles
import Styles from './styles.module.scss';
// Video
import main_bg from '../../theme/assets/images/main_bg.mp4';

const VideoBg = () => {
    return (
        <div className = { Styles.container }>
            <video
                loop
                autoPlay
                muted
                className = { Styles.video_bg }>
                <source src = { main_bg } type = 'video/mp4' />
            </video>
            <div className = { Styles.video_bg_shadow } />
        </div>
    );
};

export default VideoBg;
