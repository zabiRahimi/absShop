
import styleNavHeader from './styleNavHeader.module.css';

const NavHeader = () => {

    return (
        <div className={styleNavHeader.container}>

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
                    < i className={`icofont-navigation-menu `}></i>
                </div>
            </nav>


        </div>
    )
}

export default NavHeader;