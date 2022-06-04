// Core
import { useState } from 'react';
// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const PopupMint = (props) => {
    const [amount, setAmount] = useState('0');
    const { t } = useTranslation();

    const { height } = getComputedStyle(document.body);
    const total = (amount * 0.077).toFixed(3);

    const onChange = (event) => {
        const { value } = event.target;

        if (value > 10) return null;

        setAmount(event.target.value);
    };

    return (
        <section className = { Styles.popup_wrapper } style = { { height } }>
            <div
                style = { { height } }
                onClick = { () => props.onSetToggle(false) }
                className = { Styles.shadow } />
            <div className = { Styles.popup }>
                <div className = { Styles.container }>
                    <div className = { Styles.description }>
                        <h2 className = { Styles.description_caption }>
                            <span>{ t('popup_title') }</span>
                            <span>{ 'TORNADO CARD' }</span>
                        </h2>
                        <p className = { Styles.description_info }>
                            <span>{ t('popup_amount') }</span>
                            <span>{ 'MAX 10' }</span>
                        </p>
                    </div>
                    <div className = { Styles.calculate }>
                        <input
                            type = 'text'
                            name = 'amount'
                            value = { amount }
                            maxLength = { 2 }
                            onChange = { onChange }
                            className = { Styles.calculate_field } />
                        <div className = { Styles.calculate_sum }>
                            <span>{ `${t('popup_price')} ----- 0.077 ETH` }</span>
                            <span>{ `${t('popup_total')} ----- ${total} ETH` }</span>
                        </div>
                        <button className = { Styles.btn }>{ 'Mint' }</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopupMint;
