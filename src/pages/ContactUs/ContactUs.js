import React from 'react';
import styles from './ContactUs.module.css';
import whiteHegonal from '../../assets/img/icons/white-hegonal.svg'
import greenHegonal from '../../assets/img/icons/green-hegonal.svg'
import Footer from '../../components/Footer'
import Form from '../../components/form';

export const ContactUs = () => {

    return (
        <div>
            <div className={styles.wrapperMainText}>
                <img alt=''
                    src={whiteHegonal}
                    className={styles.hegonal1} />
                <img alt=''
                    src={greenHegonal}
                    className={styles.hegonal2} />
                <h1><p className={styles.primaryTextContactUs}>CONTACT US</p></h1>
                <h6><p className={styles.secondaryTextTontactUs}>We are here to <span className={styles.accentWord}>help</span> and <span className={styles.accentWord}>answer</span>  all your questions.</p></h6>
                <img alt=''
                    src={whiteHegonal}
                    className={styles.hegonal3} />
                <img alt=''
                    src={greenHegonal}
                    className={styles.hegonal4} />
            </div>
            <main className={styles.wrapperContactUs}>
                <article className={styles.wrapperData}>
                    <div className={styles.formWrapper}>
                    <Form/>
                    </div>
                    <div className={styles.locationWrapper}>
                        <h2><p className={styles.primaryTextContactUsLocation}>Contact our DRIVEN CUSTOM locations directly</p></h2>

                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default ContactUs;
