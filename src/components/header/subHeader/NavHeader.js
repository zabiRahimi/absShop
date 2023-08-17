

import { useRef } from 'react';
import ContainerMenu from './containerMenu/ContainerMenu';
import styleNavHeader from './styleNavHeader.module.css';



const NavHeader = () => {

    const btnMenu = useRef(null);
    const containerMenu = useRef(null);
    const containerMenu_CME= useRef(null)

    const showMenu = () => {
        handleBodyScrollHidden();

        handleHideBtn();
        handleShowContainerMenu();
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
        setTimeout(()=>{
            containerMenu.current.classList.add('--width100');
            containerMenu_CME.current.classList.add('--width100');
        },2)
        
    }

    return (
        <div className={styleNavHeader.container} >

            <div className={styleNavHeader.cart_container}>
                <div className={styleNavHeader.cart_div_icon}>
                    <i className={`icofont-cart ${styleNavHeader.cart_icon} `}></i>
                </div>
                <div className={styleNavHeader.cart_count}>0</div>
            </div>

            <div className={styleNavHeader.serch_container}>
                <div className={styleNavHeader.serch_icon}>
                    <i className={`icofont-search-2 `}></i>
                </div>
                <input type="text" className={styleNavHeader.serch_input} />

            </div>
            <nav className={styleNavHeader.nav}>
                <div className={styleNavHeader.nav_item}>
                    <div className={styleNavHeader.nav_item_icon_sub}>
                        <i className={`icofont-curved-down `}></i>
                        {/* <i className={`icofont-rounded-down `}></i>
                        <i className={`icofont-caret-down `}></i> */}
                    </div>
                    <div className={styleNavHeader.nav_item_name}>محصولات</div>

                </div>

                <div className={styleNavHeader.menu}>
                    <button onClick={showMenu} className='--styleLessBtn' ref={btnMenu}>< i className={`icofont-navigation-menu --block `}></i></button>

                    <ContainerMenu ref={ {containerMenu, containerMenu_CME}} refBtn={btnMenu}  />
                </div>
            </nav>


        </div>
    )
}

export default NavHeader;