
import styleTopHeader from './topHeader.module.css';

const TopHeader = () => {

    return (

        <div className={styleTopHeader.container_header_logo}>


            <div className={styleTopHeader.logo}>absShopdfg.ir</div>


            <div className={styleTopHeader.about_us} >
                <i className={`icofont-info-circle ${styleTopHeader.hover_icon}`}></i>
            </div>

            <div className={styleTopHeader.contact_us}>
                <i className={` icofont-phone-circle ${styleTopHeader.hover_icon}`}></i>
            </div>


            <div className={`${styleTopHeader.sing} ${styleTopHeader.hover_icon}`}>
                <i className="icofont-ui-user"></i>
                /
                <i className="icofont-login"></i>
            </div>

        </div>

    )
}

export default TopHeader;