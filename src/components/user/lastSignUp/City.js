
const City = ({ setReadyStage, setFullStage, setShowInputs }) => {

    const handleSubmit = () => {

        setReadyStage(5);
        setFullStage(4);
        setShowInputs(
            {
                name: false,
                userName: false,
                email: false,
                city: false,
                address: true,
            }
        );
    }

    return (

        <>
            <span>city</span>

            <input type="button" className='btnForm' id="" value=' ثبت ' onClick={handleSubmit} />

        </>

    );
}
export default City;