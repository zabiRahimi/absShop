
import Input from '../form/input/Input';
import { SimpleHeader } from '../simpleHeader/SimpleHeader';
import './sign.css';
import '../form/form.css';
import { useEffect, useRef, useState } from 'react';
import useMethodsFormUser from '../hooks/useMethodsFormUser';
import TitleForm from '../form/TitleForm';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SignIn = () => {

    const MySwal = withReactContent(Swal);

    const userName = useRef(null);
    const password = useRef(null);

    const [element, setElement] = useState({
        mobile: '',
    });

    /**
     * modeUserName = mobile or userName
     */
    const [modeUserName, setModeUserName] = useState('');

    useEffect(() => {

        const checkCharUserName = (e) => {
            let value = e.target.value;

            const alphanumericRegex = /^[a-zA-Z0-9_]+$/;
            const bool = alphanumericRegex.test(e.target.value);

            if (!bool && value) {

                MySwal.fire({

                    title: 'هشدار',
                    icon: 'warning',
                    html: <ul className='swalUl_IF'>
                        <li> شما می‌توانید از موبایل یا نام‌کاربری استفاده کنید. </li>
                        <li> دقت کنید، نام‌کاربری فقط شامل اعداد و حروف انگلیسی و علامت ( _ ) می‌باشد. </li>
                        <li> نام‌کاربری فقط با حروف و یا علامت ( _ ) شروع می‌شود. </li>
                    </ul>,
                    confirmButtonText: 'متوجه شدم',
                    customClass: {
                        popup: 'swalPopup_IF',
                        title: 'swalTitle_IF',
                        icon: 'swalIcon_IF',
                        htmlContainer: 'swalHtmlContainer',
                    }

                })

            }
        }

        const input = userName.current.getInput();

        input.addEventListener('input', checkCharUserName);

        return () => {
            input.removeEventListener('input', checkCharUserName);
        };

    }, []);


    useEffect(() => {

        const onBlur = (e) => {
            let valueInput = e.target.value;
            if (valueInput) {

                const mode = handleSetMobileOrUserName(valueInput);

                if (mode === 'mobile') {

                    valueInput = checkFirstCharIsZero(valueInput);
                    mobileValidation(valueInput);

                } else {
                    userNameValidation(valueInput)
                }

            }

        }
        const handleSetMobileOrUserName = (val) => {
            const firstChar = val[0];

            const checkMobile = /^[0-9]+$/;
            const checkUserName = /^[a-zA-Z_]+$/;

            if (checkMobile.test(firstChar)) {

                setModeUserName('mobile');
                return 'mobile';

            } else if (checkUserName.test(firstChar) && firstChar) {

                setModeUserName('userName');
                return 'userName'

            }


        }


        /**
        * چنانچه کاربر صفر ابتدایی شماره موبایل را نگذاشته باشد این متد صفر را اضافه می کند
        * checks the first char mobile is zero
        * @param id 
        * @param value 
        */
        const checkFirstCharIsZero = (val) => {

            return val[0] == 0 ? val : 0 + val;

        }


        const mobileValidation = (vla) => {

            const regex = /^09\d{9}$/;
            const check = regex.test(vla);
            if (check) {
                userName.current.trueStyle();
                return true;
            } else {

                userName.current.errorStyle();

                return false;
            }
        }

        const userNameValidation = (val) => {

            // const regex = /^(?=.*[a-zA-Z_])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_]{4,}$/;
            const regex = /^(?=.*[a-zA-Z_])[a-zA-Z0-9_]{4,}$/;
            const check = regex.test(val);

            if (check) {
                userName.current.trueStyle();
                return true;
            } else {

                userName.current.errorStyle();

                return false;
            }

        }


        const input = userName.current.getInput();

        input.addEventListener('blur', onBlur);

        return () => {
            input.removeEventListener('blur', onBlur);
        }

    }, []);


    useEffect(() => {

        const onBlur = (e) => {
            let valueInput = e.target.value;
            if (valueInput) {

                passwordValidation(valueInput)
            }
        }

        const passwordValidation = (val) => {

            const regex = /^(?=.*[a-zA-Z_0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_]{4,}$/;
            const check = regex.test(val);

            if (check) {
                password.current.trueStyle();
                return true;
            } else {

                password.current.errorStyle();

                return false;
            }

        }


        const input = password.current.getInput();

        input.addEventListener('blur', onBlur);

        return () => {
            input.removeEventListener('blur', onBlur);
        }

    }, []);
    // const { changeCaptcha, handleCheckValue, backStyle, ChangeStyle, setValue, errorSubmit } = useMethodsFormUser(path, element, setElement,true);

    const { changeCaptcha, handleCheckValue, backStyle, ChangeStyle, setValue, errorSubmit } = useMethodsFormUser('path', element, setElement, true);


    return (
        <>

            <SimpleHeader />

            <form className='form'>

                <TitleForm title='ورود' />

                <div className='errorAllContiner errorAll --displayNone' id='errorAll'>
                    <p> خطایی رخ داده است. لطفا دوباره تلاش کنید. </p>
                </div>

                <Input type='text' id='userName_SI' name='userName' ref={userName} label='نام کاربری یا موبایل' direction='ltr' required={true} error={' نام کاربری یا موبایل صحیح نمی باشد.'} />

                <Input type='password' id='password_SI' ref={password} name='password' label='رمز عبور' direction='ltr' required={true} error={' رمز عبور صحیح نمی باشد'} />



                <input type="submit" className='btnForm' id="" value='ثبت' />

                <div className='divBtnGetBtn_SI'>
                    <p> مایل هستم بجای وارد کردن رمزعبور از طریق <button className='--styleLessBtn btnGetBtn_SI '> پیامک کد تایید </button> دریافت کنم.</p>
                </div>

                <div className='divBtnGetBtn_SI'>
                    <p> رمزعبور را <button className='--styleLessBtn btnGetBtn_SI '> فراموش کرده‌ام. </button> </p>
                </div>

            </form>

        </>

    );
}

export default SignIn;
