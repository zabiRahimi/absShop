import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
// import { useResolvedPath } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import './input.css';

const Input = forwardRef(({ type, id, name, label, direction, required, error }, ref) => {

    // const MySwal = withReactContent(Swal);

    const inputWrapper_IF = useRef(null);
    const iStar_IF = useRef(null);
    const iTrue_IF = useRef(null);
    const iFalse_IF = useRef(null);
    const input = useRef(null);
    const labelInput_IF = useRef(null);
    const errorDiv_IF = useRef(null);
    const iEye_IF = useRef(null);
    const iEyeBlocked_IF = useRef(null);


    useEffect(() => {

        input.current.style.direction = direction;

        required && iStar_IF.current.classList.remove('--displayNone');

        type === 'password' && iEye_IF.current.classList.remove('--displayNone');

    }, []);


    useImperativeHandle(ref, () => ({

        getInput: () => {

            return input.current

        },

        errorStyle: () => {

            errorStyle();

        },

        trueStyle: () => {

            trueStyle();

        },


    }));


    const handleFocus = () => {

        inputWrapper_IF.current.classList.add('borderBottomColor');

        inputWrapper_IF.current.classList.remove('greenBorder');

        inputWrapper_IF.current.classList.remove('redBorder');

        iTrue_IF.current.classList.add('--displayNone');

        iFalse_IF.current.classList.add('--displayNone');

        required && iStar_IF.current.classList.remove('--displayNone');

        errorDiv_IF.current.classList.add('--displayNone');

    }


    const handleBlur = () => {

        inputWrapper_IF.current.classList.remove('borderBottomColor');

    }

    // const star = (props.star == 'ok') ? <i className="fa fa-star star" aria-hidden="true"></i> : '';
    // const classInput='form-control inputForm '+props.id+'Input';
    // const classValidFeedback = 'validFeedback' + ' ' + props.id + 'Feedback';

    const handleInput = (e) => {

        labelInput_IF.current.classList.remove('hidden');

        let value = e.target.value;

        value || labelInput_IF.current.classList.add('hidden');

        // name === 'userName' && checkCharUserName(e);

    }

    const trueStyle = () => {

        borderStyle('greenBorder');
        hiddenStarIcon();
        showIcon(iTrue_IF);

    }


    const errorStyle = () => {

        borderStyle('redBorder');
        hiddenStarIcon();
        showIcon(iFalse_IF);
        showErrorDiv();

    }


    const borderStyle = (colorBorder) => {

        inputWrapper_IF.current.classList.add(colorBorder);

    }


    const hiddenStarIcon = () => {

        iStar_IF.current.classList.add('--displayNone');

    }


    const showIcon = (iRef) => {

        iRef.current.classList.remove('--displayNone');

    }


    const showErrorDiv = () => {

        errorDiv_IF.current.classList.remove('--displayNone');
    }


    const showPassword = () => {

        displayEyes();

        input.current.type = 'text';

    }


    const hidePassword = () => {

        displayEyes();
        input.current.type = 'password';

    }


    const displayEyes = () => {

        iEye_IF.current.classList.toggle('--displayNone');

        iEyeBlocked_IF.current.classList.toggle('--displayNone');

    }


    return (

        <div className="divInputWrapper_IF" >

            <div className='inputWrapper_IF' ref={inputWrapper_IF}>

                <i className='icofont-ui-rating --displayNone iStar_IF' ref={iStar_IF} />

                <i className='icofont-eye --displayNone iEye_IF' ref={iEye_IF} onClick={showPassword} />

                <i className='icofont-eye-blocked --displayNone  iEye_IF' ref={iEyeBlocked_IF} onClick={hidePassword} />

                <i className="icofont-tick-mark --displayNone iTrue_IF" ref={iTrue_IF} />

                <i className='icofont-exclamation --displayNone iFalse_IF' ref={iFalse_IF} />

                <label className='lable_IF hidden' htmlFor={name} ref={labelInput_IF}> {label} </label>

                <input type={type} className='input_IF' ref={input} id={name} name={name} onInput={handleInput}
                    onFocus={handleFocus} onBlur={handleBlur} placeholder={label} />

            </div>


            <div className='errorDiv_IF --displayNone' ref={errorDiv_IF}> {error} </div>

            {/* <label htmlFor={props.id} className='labelForm'>
                // {/* css code label in form/main.scss 
                {props.label}
                {star}
            </label>
            
                <input type="text" ref={input} className={classInput} id={props.id} defaultValue={props.value} onBlur={props.blur} onFocus={handleFocus}  />
                
           
            <div className={classValidFeedback}>
                css code label in form/main.scss
                
                
            </div> */}

        </div>

    )

});


export default Input;