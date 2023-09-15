
import { forwardRef, useRef } from 'react';
import { Link } from 'react-router-dom';

import './containerMenu.css'
import SubMenuVertical from '../subMenuVertical/SubMenuVertical';

const ContainerMenu = forwardRef(({ refBtn }, ref) => {

    const SubMenuPros = useRef(null);
    const iDownPros = useRef(null);
    const iUpPros = useRef(null);

    const handleClose = () => {

        handleBodyScrollShow();
        handleShowBtn();
        handleHideContainer();
        handleCloseSubMenu();

    }


    const handleBodyScrollShow = () => {

        const body = document.getElementsByTagName('body');
        body[0].classList.remove('--scrollHidden');

    }


    const handleShowBtn = () => {

        refBtn.current.classList.remove('--displayNone');

    }


    const handleHideContainer = () => {

        ref.containerMenu.current.classList.remove('--width100');
        ref.containerMenu_CME.current.classList.remove('--width100');

        setTimeout(function () {

            ref.containerMenu.current.classList.add('--displayNone');

        }, 500);

    }


    const handleCloseSubMenu = () => {
        handleShowIDown();
        handleHideIUp();
        handleHideSubMenu();
    }


    const handleShowIDown = () => {

        const elements = Array.from(document.getElementsByClassName('down_CME'));

        elements.forEach((element) => {

            element.classList.remove('--displayNone');

        });

    }


    const handleHideIUp = () => {

        const elements = Array.from(document.getElementsByClassName('up_CME'));

        elements.forEach((element) => {

            element.classList.add('--displayNone');

        });

    }


    const handleHideSubMenu = () => {

        const elements = Array.from(document.getElementsByClassName('divShowSubMenu_CME'));

        elements.forEach((element) => {

            element.classList.add('--displayNone');

        });

    }


    const handleShowSubMenu = (iDown, iUp, subMenu) => {

        iDown.current.classList.toggle('--displayNone');
        iUp.current.classList.toggle('--displayNone');
        subMenu.current.classList.toggle('--displayNone');

    }


    return (

        <div ref={ref.containerMenu} className='containerMain_CME --displayNone ' >

            {/**
                * The bottom layer has opacity
            */}
            <div className="divOpacity_CME" onClick={handleClose}></div>

            <div className='containerMenu_CME' ref={ref.containerMenu_CME}>

                <div className='divBtnClose_CME'>

                    <button onClick={handleClose} className='--styleLessBtn btnClose_CME'>
                        <i className='icofont-close ' />
                    </button>

                </div>

                <div className='cotainerItems_CME'>

                    <div className='divItems_CME ' >

                        <button className='--styleLessBtn btnItem_CME' onClick={() => (handleShowSubMenu(iDownPros, iUpPros, SubMenuPros))} >

                            <i className='icofont-tasks-alt ' />
                            <span>محصولات</span>
                            <i className='icofont-rounded-down down_CME lastChild_CME' ref={iDownPros} />
                            <i className='icofont-rounded-up up_CME lastChild_CME --displayNone' ref={iUpPros} />

                        </button>

                        <div className='divShowSubMenu_CME  --displayNone' ref={SubMenuPros}>

                            <SubMenuVertical />

                        </div>

                        <button className='--styleLessBtn btnItem_CME'  >

                            <i className='icofont-tasks-alt ' />
                            <span>موبایل</span>
                            <i className='icofont-rounded-down lastChild_CME' />
                            <i className='icofont-rounded-up lastChild_CME --displayNone ' />

                        </button>

                    </div>

                    <div className='divItems_CME '>

                        <button className='--styleLessBtn btnItem_CME' >

                            <i className='icofont-login ' />
                            <span>ورود</span>

                        </button>

                        <button className='--styleLessBtn btnItem_CME' >

                            <i className='icofont-ui-user ' />
                            <span>ثبت نام</span>

                        </button>

                    </div>

                    <div className='divItems_CME '>

                        <button className='--styleLessBtn btnItem_CME' >

                            <i className='icofont-ebook ' />
                            <span>راهنمای ثبت سفارش</span>

                        </button>

                    </div>

                    <div className='divItems_CME '>

                        <Link className='--styleLessLink linkItem_CME' to='/aboutUs' onClick={handleBodyScrollShow}>

                            <i className='icofont-info-circle ' />
                            <span>درباره ما</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_CME' to='/contactUs' onClick={handleBodyScrollShow}>

                            <i className='icofont-phone-circle ' />
                            <span>تماس با ما</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_CME' to='/cooperationUs' onClick={handleBodyScrollShow}>

                            <i className='icofont-handshake-deal ' />
                            <span>همکاری با ما</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_CME' to='/criticismAndSuggestions' onClick={handleBodyScrollShow}>

                            <i className='icofont-google-talk ' />
                            <span>انتقاد و پیشنهاد</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_CME' to='/complaint' onClick={handleBodyScrollShow}>

                            <i className='icofont-law-order ' />
                            <span>شکایت</span>

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

});


export default ContainerMenu;