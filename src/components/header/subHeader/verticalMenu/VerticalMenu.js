
import { forwardRef, useRef } from 'react';
import { Link } from 'react-router-dom';

import VerticalSubmenu from './verticalSubmenu/VerticalSubmenu';
import './verticalMenu.css'

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

        ref.verticalMenu.current.classList.remove('--width100');
        ref.verticalMenu_VME.current.classList.remove('--width100');

        setTimeout(function () {

            ref.verticalMenu.current.classList.add('--displayNone');

        }, 500);

    }


    const handleCloseSubMenu = () => {
        handleShowIDown();
        handleHideIUp();
        handleHideSubMenu();
    }


    const handleShowIDown = () => {

        const elements = Array.from(document.getElementsByClassName('down_VMe'));

        elements.forEach((element) => {

            element.classList.remove('--displayNone');

        });

    }


    const handleHideIUp = () => {

        const elements = Array.from(document.getElementsByClassName('up_VMe'));

        elements.forEach((element) => {

            element.classList.add('--displayNone');

        });

    }


    const handleHideSubMenu = () => {

        const elements = Array.from(document.getElementsByClassName('divShowSubMenu_VMe'));

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

        <div ref={ref.verticalMenu} className='containerMain_VMe --displayNone ' >

            {/**
                * The bottom layer has opacity
            */}
            <div className="divOpacity_VMe" onClick={handleClose}></div>

            <div className='verticalMenu_VMe' ref={ref.verticalMenu_VMe}>

                <div className='divBtnClose_VMe'>

                    <button onClick={handleClose} className='--styleLessBtn btnClose_VMe'>
                        <i className='icofont-close ' />
                    </button>

                </div>

                <div className='cotainerItems_VMe'>

                    <div className='divItems_VMe ' >

                        <button className='--styleLessBtn btnItem_VMe' onClick={() => (handleShowSubMenu(iDownPros, iUpPros, SubMenuPros))} >

                            <i className='icofont-tasks-alt ' />
                            <span> محصولات </span>
                            <i className='icofont-rounded-down down_VMe lastChild_VMe' ref={iDownPros} />
                            <i className='icofont-rounded-up up_VMe lastChild_VMe --displayNone' ref={iUpPros} />

                        </button>

                        <div className='divShowSubMenu_VMe  --displayNone' ref={SubMenuPros}>

                            <VerticalSubmenu />

                        </div>

                        <button className='--styleLessBtn btnItem_VMe'  >

                            <i className='icofont-tasks-alt ' />
                            <span>موبایل</span>
                            <i className='icofont-rounded-down lastChild_VMe' />
                            <i className='icofont-rounded-up lastChild_VMe --displayNone ' />

                        </button>

                    </div>

                    <div className='divItems_VMe '>

                        <button className='--styleLessBtn btnItem_VMe' >

                            <i className='icofont-login ' />
                            <span>ورود</span>

                        </button>

                        <button className='--styleLessBtn btnItem_VMe' >

                            <i className='icofont-ui-user ' />
                            <span>ثبت نام</span>

                        </button>

                    </div>

                    <div className='divItems_VMe '>

                        <button className='--styleLessBtn btnItem_VMe' >

                            <i className='icofont-ebook ' />
                            <span>راهنمای ثبت سفارش</span>

                        </button>

                    </div>

                    <div className='divItems_VMe '>

                        <Link className='--styleLessLink linkItem_VMe' to='/aboutUs' onClick={handleBodyScrollShow}>

                            <i className='icofont-info-circle ' />
                            <span>درباره ما</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_VMe' to='/contactUs' onClick={handleBodyScrollShow}>

                            <i className='icofont-phone-circle ' />
                            <span>تماس با ما</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_VMe' to='/cooperationUs' onClick={handleBodyScrollShow}>

                            <i className='icofont-handshake-deal ' />
                            <span>همکاری با ما</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_VMe' to='/criticismAndSuggestions' onClick={handleBodyScrollShow}>

                            <i className='icofont-google-talk ' />
                            <span>انتقاد و پیشنهاد</span>

                        </Link>

                        <Link className='--styleLessLink linkItem_VMe' to='/complaint' onClick={handleBodyScrollShow}>

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