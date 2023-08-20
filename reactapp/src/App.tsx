import {useSelector} from "react-redux";
import BankInputsForm from "./components/BankInputsForm";
import SelectTypeProperty from "./components/SelectTypeProperty";
import FormFilling from "./components/FormFilling";
import {selectActivity} from "./store/features/activitySlice";
import {ReactComponent as ArrowIcon} from "./assets/arrow.svg";

const App = () => {

    console.log(1, process.env.REACT_APP_SERVER_PATH)

    const {showBankDetails} = useSelector(selectActivity);

    return (
        <div className={"p-[80px]"}>
            {showBankDetails
                ? <BankInputsForm/>
                : (
                    <>
                        <SelectTypeProperty/>
                        <ArrowIcon/>
                        <FormFilling/>
                    </>
                )
            }
        </div>
    )
}

export default App;