// Core
import React, { useState } from 'react';
// Localization
import { useTranslation } from 'react-i18next';
// Hooks
import { useToggle } from '../../hooks';
// Styles
import Styles from './styles.module.scss';

const Localization = () => {
    const [lang, setLang] = useState('Deu');
    const [toggle, setToggle] = useToggle();
    const { i18n } = useTranslation();

    const arrowClass = !toggle ? Styles.dropdown_arrow : Styles.dropdown_arrow_open;
    const dropdownList = !toggle ? Styles.dropdown_list : Styles.dropdown_list_open;

    const onChangeLang = (event) => {
        setToggle(false);

        if (event.currentTarget.id === 'de') {
            setLang('Deu');
        } else if (event.currentTarget.id === 'en') {
            setLang('Eng');
        }

        i18n.changeLanguage(event.currentTarget.id);
    };

    return (
        <div className = { Styles.localization_wrapper }>
            <div onClick = { () => setToggle(!toggle) } className = { Styles.dropdown }>
                <span className = { Styles.dropdown_title }>{ lang }</span>
                <span className = { arrowClass } />
            </div>
            <div className = { dropdownList }>
                <div>
                    <span
                        id = 'de'
                        onClick = { onChangeLang }
                        className = { Styles.list_item }>{ 'Deu' }</span>
                    <span
                        id = 'en'
                        onClick = { onChangeLang }
                        className = { Styles.list_item }>{ 'Eng' }</span>
                </div>
            </div>
        </div>
    );
};

export default Localization;
