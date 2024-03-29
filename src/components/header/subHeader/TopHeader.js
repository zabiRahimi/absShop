
import { useContext, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './topHeader.css';

const TopHeader = () => {
    const { user, setUser } = useContext(UserContext);

    const sign_THe = useRef(null);
    const iUpSign_THe = useRef(null);
    const showSignLink_THe = useRef(null);
    const showProfileLink_THe = useRef(null);
    const iDownAvatar_THe = useRef(null);
    const iUpAvatar_THe = useRef(null)

    const showSubMenuSign = () => {

        sign_THe.current.classList.toggle('bgColorSign_THe');
        iUpSign_THe.current.classList.toggle('--displayNone');
        showSignLink_THe.current.classList.toggle('--displayNone');

    }


    const showSubMenuAvatar = () => {

        sign_THe.current.classList.toggle('bgColorSign_THe');
        iDownAvatar_THe.current.classList.toggle('--displayNone');
        iUpAvatar_THe.current.classList.toggle('--displayNone');
        showProfileLink_THe.current.classList.toggle('--displayNone');

    }



    let login;

    if (user.login) {

        login = user.login;

    }
    else {

        /**
         * هنگامی که کاربر صفحه را رفرش می کند تمامی مقادیر متغیرهای کانتکس پاک می شود و یا
         * مقادیر پیش فرض را بر می گرداند، برای رفع این مشکل علاوه بر کانتکس برخی از مقادیر 
         * را در سشن استوریج ذخیره می کنیم، کد زیر نیز اینکار را انجام می دهد به این صورت که
         *  اگر کاربر لاگین کرده باشد تا موقعه ای که از حساب کاربری خارج نشده باشد و یا تب مرورگر 
         * بسته نشده باشد با رفرش کردن صفحه اطلاعات از سشن بازخوانی می شود
         */
        const data = sessionStorage.getItem('userData');

        const objData = JSON.parse(data);

        login = objData ? objData.login : false;

    }


    const logout = () => {
        // هنگام توسعه سرور تکمیل شود

        Swal.fire({
            title: 'آیا می‌خواهید خارج شوید؟',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'خیر',
            confirmButtonText: 'بله'
        }).then((result) => {
            if (result.isConfirmed) {

                sessionStorage.removeItem('userData');
                setUser(prev => ({ ...prev, login: false, name: '', email: '' }));

                sign_THe.current.classList.remove('bgColorSign_THe');
                showProfileLink_THe.current.classList.add('--displayNone');


            }
        })

    }

    return (

        <div className='container_header_logo'>


            <div className='logo'>absShopdfg.ir</div>


            <div className='about_us' >
                <Link className="--styleLessLink" to='/aboutUs'>

                    <i className='icofont-info-circle hover_icon'></i>

                </Link>

            </div>

            <div className='contact_us'>
                <Link className="--styleLessLink" to='/contactUs'>

                    <i className='icofont-phone-circle hover_icon'></i>

                </Link>

            </div>


            <div className='sign ' ref={sign_THe}>


                {

                    !user.login ?
                        <button className="--styleLessBtn hover_icon" onClick={showSubMenuSign}>
                            <i className="icofont-rounded-up  iUpSign_THe --displayNone" ref={iUpSign_THe} />

                            <i className="icofont-ui-user"></i>
                            /
                            <i className="icofont-login"></i>

                        </button>
                        :

                        <button className="--styleLessBtn hover_icon btnAvatar_THe" onClick={showSubMenuAvatar}>

                            <span className="avatar_THe">
                                <i className="icofont-business-man-alt-1  iAvatar_THe" />
                            </span>

                            <i className="icofont-rounded-down iDownAvatar_THe  " ref={iDownAvatar_THe} />
                            <i className="icofont-rounded-up  iUpAvatar_THe --displayNone" ref={iUpAvatar_THe} />

                        </button>
                }



                <div className="showSignLink_THe --displayNone" ref={showSignLink_THe}>
                    <i className="icofont-caret-up iCaretUp" />

                    <Link className="--styleLessLink signLink_THe" onClick={showSubMenuSign} to='signIn' >

                        <i className="icofont-login iSignIn" ></i>
                        <span className="spanSignIn"> ورود </span>

                    </Link>

                    <Link className="--styleLessLink signLink_THe" onClick={showSubMenuSign} to='signUp' >

                        <i className="icofont-ui-user iSignUp"></i>
                        <span> ثبت نام </span>

                    </Link>
                </div>

                <div className="showProfileLink_THe --displayNone" ref={showProfileLink_THe}>
                    <i className="icofont-caret-up iCaretUp" />

                    <Link className="--styleLessLink profileLink_THe" to='profile'>

                        <i className="icofont-business-man-alt-1" />
                        <span> پیش خوان </span>

                    </Link>

                    <button className="--styleLessBtn btnSignOut_THe" onClick={logout}>

                        <i className="icofont-sign-out  " />
                        <span> خروج </span>

                    </button>


                </div>

            </div>

        </div>

    )
}

export default TopHeader;