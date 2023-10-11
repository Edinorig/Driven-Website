import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CommonButton from './UI/button/CommonButton/CommonButton';
import SelectData from './UI/select/SelectData'
import addIcon from '../assets/img/icons/add-icon.svg'
import InputData from './UI/input/InputData'
import styles from '../css/form.module.css';

const Form = () => {

    const [inputsArray, setInputsArray] = useState([
        {
            id: 1,
            textInput: "First Name",
            typeInput: "text",
            placeholder: "Input your first name",
            name: "First_Name",
            initials: "initialWrapper",
            value: "",
            validation: null
        },
        {
            id: 2,
            textInput: "Last Name",
            typeInput: "text",
            placeholder: "Input your last name",
            name: "Last_Name",
            initials: "initialWrapper",
            value: "",
            validation: null
        },
        {
            id: 3,
            textInput: "Phone",
            typeInput: "tel",
            placeholder: "Input your phone number",
            name: "Phone",
            value: "",
            validation: null
        },
        {
            id: 4,
            textInput: "Email",
            typeInput: "email",
            placeholder: "Input your email",
            name: "Email",
            value: "",
            validation: null
        },
        {
            id: 5,
            textInput: "Vehicle Type",
            typeInput: "text",
            placeholder: "Input your Vehicle Type",
            name: "Vehicle_Type",
            value: "",
            validation: null
        }
    ]);
    const [selectsArray, setSelectsArray] = useState([
        {
            id: 1,
            textSelect: "Veichle Year",
            typeSelect: "Veichle Yype",
            sizeSelect: "smallSize",
            name: "Veichle_Year",
            arrayOptions: { vehicleYear }
        },
        {
            id: 2,
            textSelect: "Veichle Year",
            typeSelect: "Veichle Yype",
            sizeSelect: "smallSize",
            name: "Veichle_Year",
            arrayOptions: { vehicleYear }
        },
        {
            id: 3,
            textSelect: "Veichle Year",
            typeSelect: "Veichle Yype",
            sizeSelect: "smallSize",
            name: "Veichle_Year",
            arrayOptions: { vehicleYear }
        },
    ]);

    const form = useRef();

    const vehicleYear = ['2020', '2021', '2022', '2023'];
    const vehicleModel = ['Model A', 'Model B', 'Model C'];
    const vehicleColor = ['Red', 'Blue', 'Green', 'Yellow'];
    const vehicleService = ['Wash car', 'wrap', 'tinting'];

    const [servicesInput, setServicesInput] = useState([
        <SelectData textSelect="Services 1" type-select="Service" sizeSelect="largeSize" name="Service 1" arrayOptions={vehicleService} />
    ]);

    const onChange = (e) => {
        const { name, value, type } = e.target;
        const isValid = validateType(type, value);
        setInputsArray(prevInputs => prevInputs.map(input =>
            input.name === name ? { ...input, value, validation: isValid } : input
        ));
    }

    function validateType(typevalidation, text) {
        switch (typevalidation) {
            case "text":
                const regex = /^[A-Za-z'-]+$/;
                if (text && regex.test(text)) {
                    return true;
                }
                return false;
            case "tel":
                const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
                return phoneRegex.test(text);
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(text);

            default:
                return false;
        }
    }

    const addServices = (e) => {
        console.log(e.target);
        if (servicesInput.length < 2) {
            setServicesInput([...servicesInput, <SelectData
                textSelect={`Services ${servicesInput.length + 1}`}
                type-select="Service"
                sizeSelect="largeSize"
                name={`Services ${servicesInput.length + 1}`}
                arrayOptions={vehicleService}
            />])
        }
    }

    const sendEmail = (e) => {
        console.log(form.current);

        emailjs.sendForm('service_1306a2q', 'template_9rotvow', form.current, 'WypVsQtlrimhZVvSQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <h2><p className={styles.primaryTextContactUsInsertData}>Message us</p></h2>
                <div className={styles.wrapperInputs}>
                    <div className={styles.wrappesInputsHoryzontaly}>
                        {inputsArray.map((input) => (
                            input.id <= 2 ? (
                                <InputData
                                    key={input.id}
                                    {...input}
                                    onChange={onChange}
                                />
                            ) : null
                        ))}

                    </div>
                    {inputsArray.map((input) => (
                        input.id > 2 ? (
                            <InputData
                                key={input.id}
                                {...input}
                                onChange={onChange}
                            />
                        ) : null
                    ))}
                </div>
                <div className={styles.wrapperSelectCarInsormation}>
                    <SelectData
                        textSelect="Veichle Year"
                        type-select="Veichle Yype"
                        sizeSelect="smallSize"
                        name="Veichle_Year"
                        arrayOptions={vehicleYear}
                    />
                    <SelectData
                        textSelect="Veichle Model"
                        type-select="Veichle Model"
                        sizeSelect="smallSize"
                        name="Veichle_Model"
                        arrayOptions={vehicleModel}
                    />
                    <SelectData
                        textSelect="Veichle Color"
                        type-select="Veichle Type"
                        sizeSelect="smallSize"
                        name="Veichle_Color"
                        arrayOptions={vehicleColor}
                    />
                </div>
                <div className={styles.wraperServices}>
                    <div className={styles.wrapperServiceText}>
                        <div className={styles.wraperPrimaryText}><h5><p>Service</p></h5></div>
                        <div className={styles.wrapperAddService} onClick={addServices}>
                            <img
                                src={addIcon}
                                alt='addIcon'
                                className={styles.addIcon} />
                            <h6><p>Add Service</p></h6>
                        </div>
                    </div>
                    <div className={styles.wrapperInputServices}>
                        {servicesInput.map((input, index) => (
                            <div key={index}>{input}</div>
                        ))}
                    </div>
                </div>
                <div className={styles.wrapperTextarea}>
                    <h5><p className={styles.primaryText}>Message</p></h5>
                    <textarea placeholder='Input your questions if it is(optional)' name='message' className={styles.messageTextarea}></textarea>
                </div>
                <div className={styles.wrapper_btn}>
                    <CommonButton
                        color="greenText"
                        background="blackBackground"
                        size="largeSize"
                        hover="darkHover"
                        text="BOOK NOW"
                        link="contact-us"
                        onClick={sendEmail}
                        value="Send"
                    />
                </div>

            </form>
        </div>
    );
}

export default Form;
