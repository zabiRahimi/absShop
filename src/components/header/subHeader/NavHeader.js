

import { useRef, useState } from 'react';
import VerticalSubmenu from './verticalMenu/VerticalMenu';
import './navHeader.css';
import SubMenuHorizontal from './subMenuHorizontal/SubMenuHorizontal';



const NavHeader = () => {

    const ref = useRef();
    const container_NHS = useRef(null);
    const btnMenu = useRef(null);
    const containerMenu = useRef(null);
    const containerMenu_CME = useRef(null);
    const divSubMenu = useRef(null);

    const divItemProNHS = useRef(null);
    const downProNHS = useRef(null);
    const upProNHS = useRef(null);
    const proNHS = useRef(null);

    const divItemMobileNHS = useRef(null);
    const downMobileNHS = useRef(null);
    const upMobileNHS = useRef(null);
    const mobileNHS = useRef(null);

    const divItemHomeNHS = useRef(null);
    const downHomeNHS = useRef(null);
    const upHomeNHS = useRef(null);
    const homeNHS = useRef(null);

    const divItemSetOrderNHS = useRef(null);
    const downSetOrderNHS = useRef(null);
    const upSetOrderNHS = useRef(null);
    const setOrderNHS = useRef(null);

    const [modelSubMenu, setModelSubMenu] = useState();
    const [arraySubMenu, setArraySubMenu] = useState();

    const showMenu = () => {

        positionStatic(true);

        closeAllSubMenu();

        handleBodyScrollHidden();

        handleHideBtn();

        handleShowContainerMenu();

    }


    const positionStatic = (add) => {
        if (add) {
            container_NHS.current.classList.add('positionStatic');

        } else {
            container_NHS.current.classList.remove('positionStatic');

        }
    }


    const handleBodyScrollHidden = () => {

        const body = document.getElementsByTagName('body');
        body[0].classList.add('--scrollHidden');

    }


    const handleHideBtn = () => {

        btnMenu.current.classList.toggle('--displayNone');
    }


    const handleShowContainerMenu = () => {

        containerMenu.current.classList.remove('--displayNone');
        setTimeout(() => {
            containerMenu.current.classList.add('--width100');
            containerMenu_CME.current.classList.add('--width100');
        }, 2)

    }


    const showSupMenu = (model, array, divItem, iDown, iUp, subMenu) => {

        const hasClass = iDown.current.classList.contains('--displayNone');

        if (!hasClass) {
            setModelSubMenu(model);
            setArraySubMenu(array);

            positionStatic(false);
            closeAllSubMenu();

            divItem.current.classList.add('bgColorItem_NHS')
            iDown.current.classList.add('--displayNone');
            iUp.current.classList.remove('--displayNone');
            divSubMenu.current.classList.remove('--displayNone');

        } else {
            closeAllSubMenu();
        }




    }


    const closeAllSubMenu = () => {

        const divItems = Array.from(document.getElementsByClassName('nav_item_NHS'));
        const iDowns = Array.from(document.getElementsByClassName('iDown_NHS'));
        const iUps = Array.from(document.getElementsByClassName('iUp_NHS'));

        divItems.forEach((btn) => {

            btn.classList.remove('bgColorItem_NHS');

        });


        iDowns.forEach((down) => {

            down.classList.remove('--displayNone');

        });


        iUps.forEach((up) => {

            up.classList.add('--displayNone');

        });


        divSubMenu.current.classList.add('--displayNone');
    }

    return (
        <div className='container_NHS' ref={container_NHS}>

            <div className='cart_container_NHS'>
                <div className='cart_div_icon_NHS'>
                    <i className='icofont-cart cart_icon_NHS' />
                </div>
                <div className='cart_count_NHS'>0</div>
            </div>

            <div className='serch_container_NHS'>
                <div className='serch_icon_NHS'>
                    <i className='icofont-search-2 '></i>
                </div>
                <input type="text" className='serch_input_NHS' />

            </div>
            <nav className='nav_NHS'>
                <div className='nav_item_NHS' ref={divItemProNHS}>

                    <button className='--styleLessBtn btn_NHS' onClick={() => (showSupMenu('subMenu', 'products', divItemProNHS, downProNHS, upProNHS, proNHS), ref.current.closeAllItemsChild())}>
                        <i className='icofont-curved-down iDown_NHS' ref={downProNHS} />
                        <i className='icofont-curved-up iUp_NHS --displayNone' ref={upProNHS} />
                        <span>محصولات</span>
                    </button>
                </div>

                <div className='nav_item_NHS' ref={divItemMobileNHS}>

                    <button className='--styleLessBtn btn_NHS' onClick={() => (showSupMenu('items', 'mobile', divItemMobileNHS, downMobileNHS, upMobileNHS, mobileNHS), ref.current.closeAllItemsChild())}>
                        <i className='icofont-curved-down iDown_NHS' ref={downMobileNHS} />
                        <i className='icofont-curved-up iUp_NHS --displayNone' ref={upMobileNHS} />
                        <span>موبایل</span>
                    </button>
                </div>


                <div className='nav_item_NHS' ref={divItemHomeNHS}>

                    <button className='--styleLessBtn btn_NHS' onClick={() => (showSupMenu('items', 'homeAndKitchen', divItemHomeNHS, downHomeNHS, upHomeNHS, homeNHS), ref.current.closeAllItemsChild())}>
                        <i className='icofont-curved-down iDown_NHS' ref={downHomeNHS} />
                        <i className='icofont-curved-up iUp_NHS --displayNone' ref={upHomeNHS} />
                        <span>خانه و آشپزخانه</span>
                    </button>
                </div>


                <div className='nav_item_NHS' ref={divItemSetOrderNHS}>

                    <button className='--styleLessBtn btn_NHS' onClick={() => (ref.current.closeAllItemsChild())}>
                        <i className='icofont-curved-down iDown_NHS' ref={downSetOrderNHS} />
                        <i className='icofont-curved-up iUp_NHS --displayNone' ref={upSetOrderNHS} />
                        <span>راهنمای ثبت سفارش</span>
                    </button>
                </div>


                <div className='subMenu_NHS --displayNone' ref={divSubMenu}>

                    <SubMenuHorizontal ref={ref} modelSubMenu={modelSubMenu} arraySubMenu={arraySubMenu} />

                </div>

                {/* <div className='subMenu_NHS --displayNone' ref={proNHS}>

                    <SubMenuHorizontal ref={ref} modelSubMenu={modelSubMenu} arraySubMenu={arraySubMenu} />

                </div> */}

                <div className='menu_NHS'>
                    <button onClick={showMenu} className='--styleLessBtn menubutton_NHS' ref={btnMenu}>< i className='icofont-navigation-menu --block'></i></button>

                    <VerticalSubmenu ref={{ containerMenu, containerMenu_CME }} refBtn={btnMenu} />
                </div>
            </nav>


        </div>
    )
}

export default NavHeader;