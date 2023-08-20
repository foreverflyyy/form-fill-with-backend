import {useDispatch, useSelector} from "react-redux";
import {selectActivity, setTypeActivity} from "../store/features/activitySlice";
import Select from "./UI/Select";
import {TypeForm} from "../models/enum/TypeForm";

const options = Object.values(TypeForm).filter(option => option !== TypeForm.BankDetails);

const SelectTypeProperty = () => {

    const {typeActivity} = useSelector(selectActivity);
    const dispatch = useDispatch();

    return (
        <div className={"pb-[64px]"}>
            <h2 className={"text-[18px] text-[#222] opacity-90"}>Форма собственности:</h2>
            <div className={"pt-[32px]"}>
                <h5 className={"pb-[12px] text-[14px] text-[#222] opacity-60"}>Вид деятельности*</h5>
                <Select
                    value={typeActivity}
                    setValue={(value) => dispatch(setTypeActivity(value as TypeForm))}
                    options={options}
                />
            </div>
        </div>
    );
};

export default SelectTypeProperty;
