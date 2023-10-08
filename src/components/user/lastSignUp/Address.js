import { useRef } from "react";
import Input from "../../form/input/Input";

const Address = ({ setReadyStage, setFullStage, setShowInputs }) => {

    const postalCodeLSU = useRef(null);

    const handleSubmit = () => {

        setReadyStage(2);
        setFullStage(1);
        // setShowInputs(
        //     {
        //         name: false,
        //         userName: true,
        //         email: false,
        //         city: false,
        //         address: false,
        //     }
        // );
    }

    return (

        <>

            <Input type='text' id='postalCode_LSU' name='postalCode' ref={postalCodeLSU} label=' کد پستی ' direction='ltr' required={true} error={' کد پستی را صحیح وارد کنید.'} />

            <textarea cols="30" rows="10"></textarea>

            <input type="button" className='btnForm' id="" value=' ثبت ' onClick={handleSubmit} />

        </>

    );
}
export default Address;