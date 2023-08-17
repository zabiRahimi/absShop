
import './footer.css';
export default function Footer() {
    return <footer className="containerFooter">
        <div className='containerWebFooter'>
            <div className='webFooter'>absShop.ir</div>
            <div className='flagFooter'>
                <img src={require(`../../assets/logos/iran.png`)} alt="iran" />

            </div>
        </div>
        <div className='containerShopFooter'>
            <div className='logoFooter'>logo</div>
            <div className='shopFooter'>
                <div className='itmeShopFooter'>
                    <button><i className='icofont-info-circle ' /> <span>درباره ما</span></button>
                </div>
                <div className='itmeShopFooter'>
                    <button><i className='icofont-phone-circle ' /> <span>تماس با ما</span></button>
                </div>
                <div className='itmeShopFooter'>
                    <button><i className='icofont-handshake-deal ' /> <span>همکاری با ما</span></button>
                </div>
                <div className='itmeShopFooter'>
                    <button><i className='icofont-google-talk ' /> <span>انتقاد و پیشنهاد</span>
                    </button>
                </div>
                <div className='itmeShopFooter'>
                    <button><i className='icofont-law-order ' /> <span>شکایات</span></button>
                </div>
            </div>
        </div>
        <div className='containerContractFooter'>
            <div className='titleFooter'>
                <span >قراردادها</span>
                <div className='lineFooter'>

                </div>
            </div>
            <div className='contractFooter'>

                <div className='itmeContractFooter'></div>
                <div className='itmeContractFooter'></div>
                <div className='itmeContractFooter'></div>
                <div className='itmeContractFooter'></div>
                <div className='itmeContractFooter'></div>

            </div>

        </div>

        <div className='containerLicenseFooter'>
            <div className='titleFooter'>
                <span >مجوزها</span>
                <div className='lineFooter'></div>
            </div>
            <div className='licenseFooter'>

                <div className='itmeLicenseFooter'></div>
                <div className='itmeLicenseFooter'></div>
                <div className='itmeLicenseFooter'></div>
                <div className='itmeLicenseFooter'></div>
                <div className='itmeLicenseFooter'></div>

            </div>

        </div>

        <div className='containerFollowFooter'>
            <div className='titleFooter'>
                <span >ما را دنبال کنید</span>
                <div className='lineFooter'></div>
            </div>
            <div className='followFooter'>

                <div className='itmeFollowFooter'>
                    <img src={require(`../../assets/logos/aparat.png`)} alt="aparat" />
                </div>
                <div className='itmeFollowFooter'>
                    <img src={require(`../../assets/logos/Bale.png`)} alt="bale" />

                </div>
                <div className='itmeFollowFooter'>
                    <img src={require(`../../assets/logos/instagram.png`)} alt="instagram" />
                </div>
                <div className='itmeFollowFooter'>
                    <img src={require(`../../assets/logos/sorush.png`)} alt="sorush" />

                </div>
                <div className='itmeFollowFooter'>
                    <img src={require(`../../assets/logos/whatsapp.png`)} alt="whatsapp" />


                </div>

            </div>

        </div>
    </footer>
}