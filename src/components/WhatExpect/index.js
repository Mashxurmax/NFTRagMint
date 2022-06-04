// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const ListItem = ({ info }) => {
    const setClass = (number) => {
        if (number === '8') return Styles.item_img_infinity;
        if (number === '64') return Styles.item_img_diskette;
    };

    return (
        <div className = { Styles.list_item }>
            <span className = { setClass(info.number) }>{ info.number !== '8' && info.number !== '64' ? info.number : '' }</span>
            <h3>{ info.title }</h3>
            { info.descr && <p>{ info.descr }</p> }
        </div>
    );
};

const WhatExpect = () => {
    const { t } = useTranslation();

    const list = [
        {
            id: 1, number: '4', title: t('what_expect_major_title'), descr: t('what_expect_major_descr'),
        },
        {
            id: 2, number: '6+', title: t('what_expect_surprise_title'), descr: t('what_expect_surprise_descr'),
        },
        {
            id: 3, number: '8', title: t('what_expect_raffels_title'), descr: t('what_expect_raffels_descr'),
        },
        {
            id: 4, number: '64', title: t('what_expect_content_title'), descr: t('what_expect_content_descr'),
        },
        {
            id: 5, number: '250+', title: t('what_expect_other_title'),
        },
    ];

    return (
        <section id = { 'what_expect' } className = { Styles.what_expect }>
            <div className = { Styles.container }>
                <div className = { Styles.description }>
                    <div className = { Styles.description_caption }>
                        <h2 className = { Styles.caption }>{ t('what_expect_title') }</h2>
                    </div>
                    <div className = { Styles.description_list }>
                        <div>
                            {
                                list.slice(0, 2).map((item) => {
                                    return <ListItem key = { item.id } info = { item } />;
                                })
                            }
                        </div>
                        <div>
                            {
                                list.slice(2).map((item) => {
                                    return <ListItem key = { item.id } info = { item } />;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className = { Styles.images }>
                    <span className = { Styles.images_logo } />
                    <span className = { Styles.images_bottle } />
                    <span className = { Styles.images_spiral } />
                    <span className = { Styles.images_ball } />
                    <span className = { Styles.images_helicopter } />
                </div>
            </div>
        </section>
    );
};

export default WhatExpect;
