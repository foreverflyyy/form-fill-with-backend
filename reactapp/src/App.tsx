import {useSelector} from "react-redux";
import BankInputsForm from "./components/BankInputsForm";
import SelectTypeProperty from "./components/SelectTypeProperty";
import ActivityInputsForm from "./components/ActivityInputsForm";
import {selectActivity} from "./store/features/activitySlice";
import {ReactComponent as ArrowIcon} from "./assets/arrow.svg";

const App = () => {

    const {showBankDetails} = useSelector(selectActivity);

    return (
        <div className={"p-[80px]"}>
            {showBankDetails
                ? <BankInputsForm/>
                : (
                    <>
                        <SelectTypeProperty/>
                        <ArrowIcon/>
                        <ActivityInputsForm/>
                    </>
                )
            }
        </div>
    )
}

export default App;