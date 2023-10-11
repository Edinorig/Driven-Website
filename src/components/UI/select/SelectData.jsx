import React from "react";
import styles from "./SelectData.module.css";

const SelectData = ({ textSelect, sizeSelect, name, arrayOptions }) => {
  return (
    <div className={styles.wrapperSelectData}>
      <h6>
        <p className={styles.selectPrimaryText}>{textSelect}</p>
      </h6>
      <select
        required
        name={name}
        className={`${styles.selectData} ${styles[sizeSelect]}`}
      >
        <option value="null" defaultValue>
          SELECT
        </option>
        {arrayOptions.map((value, key) => (
          <option key={key}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectData;
