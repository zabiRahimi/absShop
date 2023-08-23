
import { Link, Outlet } from "react-router-dom";

import styleTopHeader from './topHeader.module.css';

const TopHeader = () => {

    return (

        <div className={styleTopHeader.container_header_logo}>


            <div className={styleTopHeader.logo}>absShopdfg.ir</div>


            <div className={styleTopHeader.about_us} >
                <Link className="--styleLessLink" to='/aboutUs'>

                    <i className={`icofont-info-circle ${styleTopHeader.hover_icon}`}></i>

                </Link>

            </div>

            <div className={styleTopHeader.contact_us}>
                <Link className="--styleLessLink" to='/contactUs'>

                    <i className={` icofont-phone-circle ${styleTopHeader.hover_icon}`}></i>

                </Link>

            </div>


            <div className={`${styleTopHeader.sing} ${styleTopHeader.hover_icon}`}>
                <Link className="--styleLessLink" to='/sing'>

                    <i className="icofont-ui-user"></i>
                    /
                    <i className="icofont-login"></i>

                </Link>

            </div>

        </div>

    )
}

export default TopHeader;