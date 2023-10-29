import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CommonButton from './UI/button/CommonButton/CommonButton';
import SelectData from './UI/select/SelectData'
import addIcon from '../assets/img/icons/add-icon.svg'
import InputData from './UI/input/InputData'
import styles from '../css/form.module.css';

const Form = () => {

    const vehicleYear = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009",
        "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994",
        "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979",
        "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964",
        "1963", "1962", "1961", "1960", "1959 and before"];
    const vehicleMake = ["Acura", "Alfa Romeo", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari", "Fiat",
        "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus",
        "Lincoln", "Maserati", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Porsche", "Ram", "Rivian",
        "Rolls-Royce", "Saab", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo", "Other"];
    const vehicleType = ["Sedan", "SUV", "Truck", "Van", "Convertible", "Coupe", "Wagon", "Hatchback", "Sports Car", "Electric", "Hybrid", "Crossover", "Luxury Car", "Other"];
    const vehicleService = ['Wash car', 'wrap', 'tinting'];

    const [dataArray, setDataArray] = useState([
        {
            id: 1,
            textInput: "First Name",
            typeInput: "text",
            placeholder: "Input your first name",
            name: "First_Name",
            initials: "initialWrapper",
            typeComponent: "inputData",
            errorMessage: "errorMessage",
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
            typeComponent: "inputData",
            errorMessage: "errorMessage",
            value: "",
            validation: null
        },
        {
            id: 3,
            textInput: "Phone",
            typeInput: "tel",
            placeholder: "Input your phone number",
            name: "Phone",
            initials: "restWrapper",
            typeComponent: "inputData",
            errorMessage: "errorMessage",
            value: "",
            validation: null
        },
        {
            id: 4,
            textInput: "Email",
            typeInput: "email",
            placeholder: "Input your email",
            name: "Email",
            initials: "restWrapper",
            typeComponent: "inputData",
            errorMessage: "errorMessage",
            value: "",
            validation: null
        },
        {
            id: 5,
            textInput: "Vehicle Model",
            typeInput: "text",
            placeholder: "Input your Vehicle Model",
            name: "Vehicle_Model",
            value: "",
            typeComponent: "inputData",
            initials: "restWrapper",
            errorMessage: "errorMessage",
            validation: null
        },
        {
            id: 6,
            textSelect: "Veichle Make",
            typeSelect: "Veichle Make",
            sizeSelect: "smallSize",
            name: "Veichle_Type",
            value: null,
            initials: "restWrapper",
            arrayOptions: vehicleMake,
            typeComponent: "selectData",
            errorMessage: "errorMessage",
            validation: null
        },
        {
            id: 7,
            textSelect: "Veichle Type",
            typeSelect: "Veichle Type",
            sizeSelect: "smallSize",
            name: "Veichle_Model",
            value: null,
            initials: "restWrapper",
            arrayOptions: vehicleType,
            typeComponent: "selectData",
            errorMessage: "errorMessage",
            validation: null
        },
        {
            id: 8,
            textSelect: "Veichle Year",
            typeSelect: "Veichle Yype",
            sizeSelect: "smallSize",
            name: "Veichle_Year",
            value: null,
            initials: "restWrapper",
            arrayOptions: vehicleYear,
            typeComponent: "selectData",
            errorMessage: "errorMessage",
            validation: null
        },
    ]);

    const [servicesInput, setServicesInput] = useState([
        {
            id: 1,
            textSelect: "Services 1",
            typeSelect: "Service",
            sizeSelect: "largeSize",
            name: "Service_1",
            value: null,
            initials: "restWrapper",
            arrayOptions: vehicleService,
            typeComponent: "selectData",
            errorMessage: "errorMessage",
            validation: null
        },
    ]);

    const form = useRef();

    const onChangeInput = (e) => {
        const { name, value, type } = e.target;
        const isValid = validateType(type, value);
        setDataArray(prevInputs => prevInputs.map(input =>
            input.name === name && input.typeComponent === "inputData" ? { ...input, value: value, validation: isValid } : input
        ));

    }
    const onChangeSelect = (e) => {
        const { name, value } = e.target;

        let checked = value !== null || value !== false ? true : false;

        setDataArray(prevInputs => prevInputs.map(select =>
            select.name === name && select.typeComponent === "selectData" ? { ...select, value: value, validation: checked } : select
        ));

    }
    const onChangeSelectServices = (e) => {
        const { name, value } = e.target;

        let checked = value !== null || value !== false ? true : false;

        setServicesInput(prevInputs => prevInputs.map(select =>
            select.name === name && select.typeComponent === "selectData" ? { ...select, value: value, validation: checked } : select
        ));
    }

    const validateType = (typevalidation, text) => {
        switch (typevalidation) {
            case "text":
                const regex = /^[A-Za-z'-]+$/;
                if (text && regex.test(text)) {
                    return true;
                }
                return false;
            case "tel":
                const phoneRegex = /^\d{10}$/;
                return phoneRegex.test(text);
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(text);

            default:
                return false;
        }
    }

    const addServices = (e) => {
        if (servicesInput.length < 2) {
            setServicesInput([...servicesInput, {
                id: 2,
                textSelect: "Services_2",
                typeSelect: "Service",
                sizeSelect: "largeSize",
                name: "Service 2",
                value: null,
                initials: "restWrapper",
                arrayOptions: vehicleService,
                typeComponent: "selectData",
                errorMessage: "errorMessage",
                validation: null
            },])
        }
    }

    const sendEmail = (e) => {


        const isValidData = dataArray.every(ele => ele.validation === true);
        const isValidDataServices = servicesInput.every(ele => ele.validation === true);

        dataArray.forEach((ele) => {
            if (ele.value === "" || ele.value === null) {
                setDataArray((prevInputs) =>
                    prevInputs.map((input) =>
                        input.id === ele.id ? { ...input, validation: false } : input
                    )
                );
            }
        });

        servicesInput.forEach((ele) => {
            if (ele.value === null) {
                setServicesInput((prevInputs) =>
                    prevInputs.map((input) =>
                        input.id === ele.id ? { ...input, validation: false } : input
                    )
                );
            }
        });


        if (isValidData && isValidDataServices) {
            setDataArray(prevInputs =>
                prevInputs.map(ele => {
                    if (ele.typeComponent === "selectData") {
                        return {
                            ...ele,
                            value: null,
                            validation: null
                        };
                    } else {
                        return {
                            ...ele,
                            value: "",
                            validation: null
                        };
                    }
                })
            );
            setServicesInput((prevInputs) =>
                prevInputs.map((input) => ({ ...input, value: null, validation: null }))
            );

            emailjs.sendForm('service_1306a2q', 'template_9rotvow', form.current, 'WypVsQtlrimhZVvSQ')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <h2><p className={styles.primaryTextContactUsInsertData}>Message us</p></h2>
                <div className={styles.wrapperInputs}>
                    <div className={styles.wrappesInputsHoryzontaly}>
                        {dataArray.map((input) => (
                            input.initials === "initialWrapper" && input.typeComponent === "inputData" ? (
                                <InputData
                                    key={input.id}
                                    {...input}
                                    onChange={onChangeInput}
                                />
                            ) : null
                        ))}

                    </div>
                    {dataArray.map((input) => (
                        input.initials === "restWrapper" && input.typeComponent === "inputData" ? (
                            <InputData
                                key={input.id}
                                {...input}
                                onChange={onChangeInput}
                            />
                        ) : null
                    ))}
                </div>
                <div className={styles.wrapperSelectCarInsormation}>
                    {dataArray.map((select) => (
                        select.initials === "restWrapper" && select.typeComponent === "selectData" ? (
                            <SelectData
                                key={select.id}
                                {...select}
                                onChange={onChangeSelect}
                            />
                        ) : null
                    ))}
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
                        {servicesInput.map((select, index) => (
                            select.initials === "restWrapper" && select.typeComponent === "selectData" ? (
                                <SelectData
                                    key={select.id}
                                    {...select}
                                    onChange={onChangeSelectServices}
                                />
                            ) : null
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
