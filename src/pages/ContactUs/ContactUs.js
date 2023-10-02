import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div>
            <div className={styles.wrapperMainText}>
                <h1><p className={styles.primaryTextContactUs}>CONTACT US</p></h1>
                <h6><p className={styles.secondaryTextTontactUs}>We are here to <span className='accent-word'>help</span> and <span className='accent-word'>answer</span>  all your questions.</p></h6>
            </div>
            <main>
                <article>
                    <div>
                        
                    </div>
                </article>
            </main>
        </div>
    );
}

export default ContactUs;
