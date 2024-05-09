import { Code } from "@nextui-org/code";
import Calculator from "./Calculator";

const CalculatorPage = () => {
  return (
    <div className="w-full">
      <Calculator />
      <div className=" text-center">
        <h1 className="text-4xl mb-5">How did i create this calculator ?</h1>

        <div className="space-y-4 mb-5">
          <p>
            The idea was really simple. I set up buttons with an onClick action,
            handleButtonClick("1").
            <br />
            This function concatenates the new parameter value (the button
            value)
            <br />
            to the currently inserted expression.
          </p>
          <p>
            If the clicked button is '=', then I use the eval function to parse
            and calculate the expression.
            <br />
            Easy peasy lemon squeezy!
          </p>
          <p>
            Note: Of course, this calculator needs enhancement, such as <br />
            accepting parentheses, cos, sin, and so on.
          </p>
        </div>
      </div>
      <pre className="bg-neutral-800 p-5">
        {`  //expression to be calculated
    const [expression, setExpression] = useState("");

    //result of the expression
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
    };`}
      </pre>
    </div>
  );
};

export default CalculatorPage;
