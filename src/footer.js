import Logo from './assets/logo-infi.png';
export const Footer = () => {
    return (
        <>
            <div className="footer d-flex justify-content-center bg-black">
                <div className="footer-subdiv m-5 p-5">
                    <img src={Logo} className='px-5 mx-5' alt="brand image" />
                    <div className='d-flex justify-content-center p-5'>
                        <div class="icon-circle">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div class="icon-circle">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </div>
                        <div class="icon-circle">
                            <i class="fa fa-vimeo" aria-hidden="true"></i>
                        </div>
                        <div class="icon-circle">
                            <i class="fa fa-skype" aria-hidden="true"></i>
                        </div>
                    </div>
                    <p className='text-secondary'>2017 © HTMLBEANS. All rights reserved.</p>
                </div>
            </div>
            <div class="horizontal-line"></div>
        </>
    )
}