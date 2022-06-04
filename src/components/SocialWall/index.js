// Core
import { useEffect, useState } from 'react';
// Localization
import { useTranslation } from 'react-i18next';
// Instruments
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Styles
import Styles from './styles.module.scss';
// Images
import comment_avatar from '../../theme/assets/images/comment_avatar.svg';
import comment_img from '../../theme/assets/images/comment_img.svg';

const comments = [
    {
        id:      1,
        name:    'Brandwatch',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
    {
        id:      2,
        name:    'Namesecondname',
        company: 'Ceo Company',
        descr:   'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. Onsectetur adipiscing elit',
    },
    {
        id:      3,
        name:    'Ron',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
    {
        id:      4,
        name:    'Brandwatch',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
    {
        id:      5,
        name:    'Namesecondname',
        company: 'Ceo Company',
        descr:   'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. Onsectetur adipiscing elit',
    },
    {
        id:      6,
        name:    'Ron',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
];

const SocialWall = () => {
    const { t } = useTranslation();
    const { width } = getComputedStyle(document.body);
    const slidesToShow = parseFloat(width) < 1333 ? 2 : 3;

    const settings = {
        dots:           false,
        infinite:       true,
        slidesToShow:   parseFloat(width) > 768 ? slidesToShow : 1,
        slidesToScroll: parseFloat(width) > 768 ? slidesToShow : 1,
        autoplay:       true,
        speed:          2000,
        autoplaySpeed:  10000,
        pauseOnHover:   true,
    };

    // useEffect(() => {
    //     fetch('http://164.92.170.228:8000/v1/feed/', {
    //         method:  'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((data) => {
    //             if (data.status === 200) {
    //                 return data.json();
    //             }
    //
    //             return console.log(data.status);
    //         })
    //         .then((data) => {
    //             if (data) {
    //                 console.log(data);
    //             }
    //
    //             return null;
    //         })
    //         .catch((event) => console.log(event));
    // }, []);

    return (
        <section id = { 'social' } className = { Styles.social_wall }>
            <div className = { Styles.container }>
                <div className = { Styles.description }>
                    <h2 className = { Styles.description_caption }>{ 'Social wall' }</h2>
                    <p className = { Styles.description_info }>{ t('social_wall_info') }</p>
                </div>
                <div className = { Styles.comments }>
                    <Slider { ...settings }>
                        {
                            comments.map((item) => {
                                return (
                                    <div key = { item.id } className = { Styles.comments_card }>
                                        <div className = { Styles.card_caption }>
                                            <div className = { Styles.caption_avatar }>
                                                <img src = { comment_avatar } alt = 'avatar image' />
                                            </div>
                                            <div className = { Styles.caption_text }>
                                                <span>{ item.name }</span>
                                                <span>{ `@${item.name}` }</span>
                                            </div>
                                        </div>
                                        <div className = { Styles.card_img }>
                                            <img src = { comment_img } alt = 'social image' />
                                        </div>
                                        <p className = { Styles.card_descr }>{ item.descr }</p>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className = { Styles.bg_texture } />
            <div className = { Styles.bg_texture_left } />
        </section>
    );
};

export default SocialWall;
