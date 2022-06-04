// Core
import { useState } from 'react';
// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const Question = ({ info, openId, setOpenId }) => {
    const arrowClass = openId === info.id ? Styles.title_arrow_open : Styles.title_arrow;
    const titleClass = openId === info.id ? Styles.title_text_open : Styles.title_text;
    const descrClass = openId === info.id ? Styles.question_descr_open : Styles.question_descr;

    const onToggle = (id) => {
        if (id === openId) return setOpenId(0);

        setOpenId(id);
    };

    return (
        <div className = { Styles.question }>
            <div onClick = { () => onToggle(info.id) } className = { Styles.question_title }>
                <span className = { arrowClass } />
                <span className = { titleClass }>{ info.title }</span>
            </div>
            <p className = { descrClass }>{ info.descr }</p>
        </div>
    );
};

const FAQ = () => {
    const [openId, setOpenId] = useState(0);
    const { t } = useTranslation();

    const questions = [
        {
            id:    1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id:    2,
            title: 'Tempor incididunt ut labore et dolore magna aliqua? ',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id:    3,
            title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id:    4,
            title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat? ',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id:    5,
            title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id:    6,
            title: 'Tempor incididunt ut labore et dolore magna aliqua? ',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];

    return (
        <section id = { 'faq' } className = { Styles.faq }>
            <div className = { Styles.container }>
                <div className = { Styles.content_wrapper }>
                    <div className = { Styles.description }>
                        <h2 className = { Styles.description_caption }>{ 'FAQ' }</h2>
                        <p className = { Styles.description_info }>
                            { 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
                        </p>
                    </div>
                    <div className = { Styles.questions_list }>
                        {
                            questions.map((item) => {
                                return <Question
                                    key = { item.id }
                                    openId = { openId }
                                    setOpenId = { setOpenId }
                                    info = { item } />;
                            })
                        }
                    </div>
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

export default FAQ;
