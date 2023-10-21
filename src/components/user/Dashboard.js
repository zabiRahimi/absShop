

import { useContext, useRef } from 'react';
import './dashboard.css';
import UserContext from '../contexts/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { SimpleHeader } from '../simpleHeader/SimpleHeader';
import LastSignUp from './lastSignUp/LastSignUp';
import UseVerticalMenu from '../hooks/UseVerticalMenu';


const Dashboard = () => {

    const refVerticalMenu = useRef(null);

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const closeAlert = (e) => {

        e.currentTarget.parentNode.classList.add('--displayNone');

    }


    const showVerticalMenu = () => {
        refVerticalMenu.current.handleShowVerticalMenu();
    }

    return (
        <div>

            <SimpleHeader showLogout={true} />

            <div>

                <div className='containerTop_Dash'>

                    <div className='divAvatar_Dash'>

                        <button className='--styleLessBtn  btnAddAvatar_Dash'>
                            <i className='icofont-plus ' />
                        </button>

                        <div className='divOverAvatar_Dash'></div>
                        <img className='avatar_Dash' src={require(`../../assets/avatar/images.png`)} alt='avatar' />
                    </div>

                    <div className='divUserName_Dash'>
                        <h3 className='userName_Dash'> @zabihalla </h3>
                    </div>

                    <div className='containerAlarm_Dash'>

                        <div className='divMessage_Dash'>

                            <i className='icofont-speech-comments iMessage_Dash' />

                            <span className='spanMessage_Dash'>68</span>

                        </div>

                        <div className="divAlarm_Dash">

                            <i className='icofont-alarm  iAlarm_Dash' />

                            <span className='spanAlarm_Dash'>98</span>

                        </div>



                    </div>

                </div>

                <div className='containerAlert_Dash'>


                    {/* به سورت موقت تعداد آلرتها زیادی اعمال شده است */}
                    <div className='--divAlert --alertWarning'>
                        <button className='--styleLessBtn --alertClose' onClick={(e) => closeAlert(e)}>
                            <i className="icofont-close --alertIClose" />
                        </button>
                        <p className='--alertP'> لطفا ثبت نام را کامل کنید. </p>
                    </div>

                    <div className='--divAlert --alertInfo'>
                        <button className='--styleLessBtn --alertClose' onClick={(e) => closeAlert(e)}>
                            <i className="icofont-close --alertIClose" />
                        </button>
                        <p className='--alertP'> لطفا ثبت نام را کامل کنید. </p>
                    </div>

                    <div className='--divAlert --alertError'>
                        <button className='--styleLessBtn --alertClose' onClick={(e) => closeAlert(e)}>
                            <i className="icofont-close --alertIClose" />
                        </button>
                        <p className='--alertP'> لطفا ثبت نام را کامل کنید. </p>
                    </div>

                    <div className='--divAlert --alertPrimary'>
                        <button className='--styleLessBtn --alertClose' onClick={(e) => closeAlert(e)}>
                            <i className="icofont-close --alertIClose" />
                        </button>
                        <p className='--alertP'> لطفا ثبت نام را کامل کنید. </p>
                    </div>


                    <div className='--divAlert --alertSecondary'>
                        <button className='--styleLessBtn --alertClose' onClick={(e) => closeAlert(e)}>
                            <i className="icofont-close --alertIClose" />
                        </button>
                        <p className='--alertP'> لطفا ثبت نام را کامل کنید. </p>
                    </div>






                </div>

                <div className='containerMain_Dash'>

                    <main className='main_Dash'>

                        <nav className='navHorizontal_Dash'>

                            <button className='--styleLessBtn btnMenu_Dash' onClick={showVerticalMenu}>

                                <i className='icofont-navigation-menu ' />

                            </button>

                            <UseVerticalMenu
                                ref={{ refVerticalMenu }}
                            />

                            <button className='--styleLessBtn btnNavHori_Dash'>
                                خریدها
                            </button>

                            <button className='--styleLessBtn btnNavHori_Dash'>
                                پیگیری سفارش
                            </button>



                        </nav>

                        <LastSignUp />

                    </main>

                    <aside className='aside_dash'>

                        <nav className='navVertical'></nav>

                    </aside>


                </div>

            </div>

        </div>
    )
}

export default Dashboard;