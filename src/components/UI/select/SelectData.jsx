import React from "react";
import styles from "./SelectData.module.css";

const SelectData = ({ textSelect, sizeSelect, name, arrayOptions, onChange, value, validation }) => {
  return (
    <div className={styles.wrapperSelectData}>
      <h6>
        <p className={styles.selectPrimaryText}>{textSelect}</p>
      </h6>
      <select
        required
        name={name}
        className={`${styles.selectData} ${styles[sizeSelect]} ${
          validation === false ? styles.errorMessage : ""
        }`}
        onChange={onChange}
        value={value || ""}
      >
        <option value="">SELECT</option>
        {arrayOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectData;
