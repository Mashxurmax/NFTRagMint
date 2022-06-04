// Localization
import { useTranslation } from 'react-i18next';
// Hooks
import { useToggle } from '../../hooks';
// Styles
import Styles from './styles.module.scss';
import PopupMint from '../PopupMint';

const Step = ({ item, onToggle }) => {
    return (
        <div className = { Styles.step_item }>
            <div className = { `${Styles.wrapper} ${item.classWrap}` }>
                <div className = { Styles.number }>{ item.number }</div>
                <div className = { Styles.step }>
                    <h3>{ item.title }</h3>
                </div>
                <div className = { Styles.border } />
            </div>
            {
                item.btnContent
                    ? <div
                        onClick = { onToggle }
                        className = { `${Styles.btn} ${item.classBtn}` }>
                        { item.btnContent }
                    </div>
                    : <div className = { `${Styles.btn} ${item.classBtn}` }>
                        <a
                            href = { item.link } target = { '_blank' }
                            rel = 'noreferrer' />
                    </div>
            }
        </div>
    );
};

const Steps = () => {
    const { t } = useTranslation();

    const [toggle, setToggle] = useToggle();

    const onToggle = () => {
        setToggle(true);
        window.scrollTo(0, 0);
    };

    const steps = [
        {
            id: 1, number: '1', title: t('steps_youtube'), classWrap: Styles.first_wrap, classBtn: Styles.btn_youtube, link: t('steps_youtube_link'),
        },
        {
            id: 2, number: '2', title: t('steps_connect'), classWrap: Styles.second_wrap, classBtn: Styles.btn_connect, btnContent: 'Connect',
        },
        {
            id: 3, number: '3', title: t('steps_mint'), classWrap: Styles.third_wrap, classBtn: Styles.btn_mint, btnContent: 'Mint',
        },
        // {
        //     id: 4, number: '4', title: t('steps_opensea'), classWrap: Styles.fourth_wrap, classBtn: Styles.btn_openSea, link: '#',
        // },
        {
            id: 4, number: '4', title: t('steps_discord'), classWrap: Styles.fourth_wrap, classBtn: Styles.btn_discord, link: 'https://discord.gg/mpwvRC8hUm',
        },
    ];

    return (
        <>
            { toggle && <PopupMint onSetToggle = { setToggle } /> }
            <section id = { 'steps' } className = { Styles.steps }>
                <div className = { Styles.container }>
                    <h2 className = { Styles.caption }>{ t('steps_title') }</h2>
                    <p className = { Styles.info }>{ t('steps_info') }</p>
                    <div className = { Styles.steps_wrap }>
                        {
                            steps.map((item) => {
                                return <Step
                                    key = { item.id }
                                    item = { item }
                                    onToggle = { item.btnContent === 'Mint' ? onToggle : null } />;
                            })
                        }
                    </div>
                </div>
                <div className = { Styles.bg_texture } />
                <div className = { Styles.bg_texture } />
                <div className = { Styles.bg_texture } />
            </section>
        </>
    );
};

export default Steps;
