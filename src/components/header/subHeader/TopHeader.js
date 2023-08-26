
import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

import './topHeader.css';

const TopHeader = () => {

    const sign_THe = useRef(null);
    const iUpSign_THe = useRef(null);
    const showSignLink_THe = useRef(null);

    const showSubMenuSign = () => {
        console.log('sign');
        sign_THe.current.classList.toggle('bgColorSign_THe');
        iUpSign_THe.current.classList.toggle('--displayNone');
        showSignLink_THe.current.classList.toggle('--displayNone');
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
                <button className="--styleLessBtn hover_icon"  onClick={showSubMenuSign}>
                    <i className="icofont-rounded-up  iUpSign_THe --displayNone" ref={iUpSign_THe} />

                    <i className="icofont-ui-user"></i>
                    /
                    <i className="icofont-login"></i>

                </button>
                <div className="showSignLink_THe --displayNone" ref={showSignLink_THe}>
                    <i className="icofont-caret-up iCaretUp" />
                    {/* <button className="--styleLessBtn btnCloseSign_THe">
                        <i className="icofont-close" />
                    </button> */}
                    <Link className="--styleLessLink signLink_THe" to='signIn' >

                        <i className="icofont-login iSignIn" ></i>
                        <span className="spanSignIn"> ورود </span>

                    </Link>

                    <Link className="--styleLessLink signLink_THe" to='signUp' >

                        <i className="icofont-ui-user iSignUp"></i>
                        <span> ثبت نام </span>

                    </Link>
                </div>

            </div>

            {/* <div className="containerShowSignLink_THe">

                <div className="divOpacity_THe"></div>

                <div className="showSignLink_THe">

                     <button className="--styleLessBtn btnCloseSign_THe">
                        <i className="icofont-close" />
                    </button>   
                    <Link className="--styleLessLink signLink_THe" to='signIn' >

                        <i className="icofont-login iSignIn" ></i>
                        <span className="spanSignIn"> ورود </span>

                    </Link>

                    <Link className="--styleLessLink signLink_THe" to='signUp' >

                        <i className="icofont-ui-user iSignUp"></i>
                        <span> ثبت نام </span>

                    </Link>
                </div>

            </div> */}


        </div>

    )
}

export default TopHeader;