import React from 'react';
import styles from './ContactUs.module.css';
import whiteHegonal from '../../assets/img/icons/white-hegonal.svg'
import halfHesagonal from '../../assets/img/icons/halfHesagon.svg'
import greenHegonal from '../../assets/img/icons/green-hegonal.svg'
import Footer from '../../components/Footer'
import Form from '../../components/Form';

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
                        <Form />
                    </div>
                    <div className={styles.locationWrapper}>
                        <h2><p className={styles.primaryTextContactUsLocation}>Contact our DRIVEN CUSTOM locations directly</p></h2>
                        <div className={styles.wraperShopInformation}>
                            <div className={styles.wraperHorizontal}>
                                <h5><p >Location :</p></h5>
                                <h6><p className={styles.secondaryTextShopInformation}>3208 W Lake Ave Glenview, IL 60026</p></h6>
                            </div>
                            <div className={styles.wraperHorizontal}>
                                <h5><p >Tel :</p></h5>
                                <h6><p className={styles.secondaryTextShopInformation}>708.834.9116</p></h6>
                            </div>
                            <div className={styles.wraperHorizontal}>
                                <h5><p >Email :</p></h5>
                                <h6><p className={styles.secondaryTextShopInformation}>dmytro@drivencustomsllc.com</p></h6>
                            </div>
                        </div>
                        <div className={`${styles.wraperGaleryShop} ${styles.wraperLocation}`}>
                            <h5><p>Photos of shop</p></h5>
                            <div className={styles.wraperGallery}>

                            </div>
                        </div>
                        <div className={`${styles.wraperGaleryShop} ${styles.wraperLocation}`}>
                            <h5><p>Map</p></h5>
                            <div className={styles.wraperGallery}>
                            </div>
                        </div>
                        <div className={`${styles.wraperLocation}`}>
                            <img alt=''
                                src={whiteHegonal}
                                className={styles.hegonal5}
                            />
                            <img alt=''
                                src={whiteHegonal}
                                className={styles.hegonal6}
                            />
                            <img alt=''
                                src={whiteHegonal}
                                className={styles.hegonal7}
                            />
                            <img alt=''
                                src={whiteHegonal}
                                className={styles.hegonal8}
                            />
                            <img alt=''
                                src={whiteHegonal}
                                className={styles.hegonal9}
                            />
                            <img alt=''
                                src={whiteHegonal}
                                className={styles.hegonal10}
                            />
                            <img alt=''
                                src={halfHesagonal}
                                className={styles.hegonal11}
                            />
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default ContactUs;
