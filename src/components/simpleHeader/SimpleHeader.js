import { Link, useNavigate } from 'react-router-dom';

import './simpleHeader.css';

export const SimpleHeader = () => {

    const navigate = useNavigate();

    return (

        <header className='containerHeader_SHe'>

            <div className='containerLogo_SHe'>

                <div className='logo_SHe'>logo</div>
                <div className='name_SHe'>فروشگاه اینترنتی </div>

            </div>

            <div className='containerLink_She'>

                <div className='divLink_SHe'>

                    <button className='--styleLessBtn link_SHe' onClick={() => { navigate(-1) }}>

                        <i className='icofont-undo i_SHe' />
                        <span className='span_SHe'>بازگشت</span>

                    </button>

                </div>

                <div className='divLink_SHe'>

                    <Link className='--styleLessLink link_SHe' to='/' >

                        <i className='icofont-ui-home i_SHe' />
                        <span className='span_SHe'> خانه </span>

                    </Link>

                </div>

            </div>

        </header>

    );

}