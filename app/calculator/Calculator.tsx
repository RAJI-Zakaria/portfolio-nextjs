"use client";
import { useState } from "react";
import styles from "./calculator.module.css";

const CalculatorPage = () => {
  const [expression, setExpression] = useState("");
  //hold the result
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult);
      } catch (error) {
        //if the expression is not correct show error message
        setResult("Invalid expression");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calcContainer + " sm:w-[400px] sm:!px-[44px]"}>
        <label htmlFor="expression" className={styles.label}>
          Expression
        </label>
        <div className="w-full">
          <div className="flex !justify-center !items-center w-auto">
            <div className="w-full">
              <input
                id="expression"
                type="text"
                className={styles["input-field"]}
                value={expression}
                readOnly
              />
            </div>
          </div>
          <label htmlFor="result" className={styles.label}>
            Result
          </label>
          <div className="flex">
            <div className="w-full">
              <input
                id="result"
                type="text"
                className={styles["input-field"]}
                value={result}
                readOnly
              />
            </div>
          </div>

          <div className="flex ">
            <button
              className={styles.button}
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className={`${styles.button} ${styles.orange}`}
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
          <div className="flex">
            <button
              className={styles.button}
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className={`${styles.button} ${styles.orange}`}
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </div>
          <div className="flex">
            <button
              className={styles.button}
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className={`${styles.button} ${styles.orange}`}
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
          </div>
          <div className="flex">
            <button
              className={styles.button}
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className={`${styles.button} ${styles.orange}`}
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            <button
              className={`${styles.button} ${styles.equal}`}
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
            <button
              className={`${styles.button} ${styles.orange}`}
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
          </div>
          <div className="flex">
            <button
              className={`${styles.button} ${styles.fullButton} ${styles.clear}`}
              onClick={() => handleButtonClick("C")}
            >
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
