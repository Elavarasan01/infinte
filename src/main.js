import shirt from './assets/img02.jpg';
import cap from './assets/img03.jpg';
import tree from './assets/img04.jpg';
import ladies from './assets/img05.jpg';
import sea from './assets/img06.jpg';
import garden from './assets/img07.jpg';
import Tallgirl from './assets/infi-girl.jpeg';
import slide1 from './assets/img09.jpg';
import slide2 from './assets/img14.png';
import slide3 from './assets/img13.png';
import Template from './assets/img10.jpg';
import Logo1 from './assets/logo1.png';
import Logo2 from './assets/logo2.png';
import Logo3 from './assets/logo3.png';
import Logo4 from './assets/logo4.png';
import Logo5 from './assets/logo5.png';
import Logo6 from './assets/logo6.png';
import { useEffect } from 'react';
export const Main = () => {

    useEffect(() => {
        const logosContainer = document.querySelector('.logos');
        const logos = document.querySelectorAll('.logos img');

        logos.forEach((logo) => {
            const clone = logo.cloneNode(true);
            logosContainer.appendChild(clone);
        });
    }, [])


    return (
        <div className='main'>
            <div id="sec1" className="jumbotron section d-flex justify-content-between p-5">
                <div className='left-div'>
                    <h1 className='text-uppercase fw-bold p-5'><span>Infinite</span> Templete <br /> Promoto your services</h1>
                    <p className='mt-5 text-white'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text
                        ever since the 1500s</p>
                </div>
                <div className='right-div'>
                    <div className='login-form'>
                        <form id="contactForm" data-toggle="validator" novalidate="true">
                            <h3>Your form headline</h3>
                            <p style={{ color: "#999" }}>Supporting call-to-action goes here</p>
                            <div className="form-group has-error">
                                <input type="text" id="name" placeholder="Your Name" className="form-control" required="" data-error="NEW ERROR MESSAGE" />
                            </div>
                            <div className="form-group has-error">
                                <input type="email" id="email" placeholder="Your Email" className="form-control" required="" data-error="NEW ERROR MESSAGE" />
                            </div>
                            <div className="form-group has-error">
                                <input type="tel" id="phone" placeholder="Phone Number" className="form-control" required="" data-error="NEW ERROR MESSAGE" />
                            </div>
                            <button className="btn text-white" type="submit" id="form-submit">GET A QUOTE</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="sec2" className='image-row section'>
                <div className='d-flex justify-content-center p-5 mt-5'>
                    <div className="image-container">
                        <div className="image-box">
                            <img src={shirt} alt="Your Image" />
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-box">
                            <img src={cap} alt='a boy with cap' />
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-box">
                            <img src={tree} alt='trees and river' />
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-box">
                            <img src={ladies} alt='ladies talking' />
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-box">
                            <img src={sea} alt='girl standing in sea' />
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="image-box">
                            <img src={garden} alt='girl looking towards garden' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-subcontent d-flex justify-content-center'>
                <div className='content-box mb-5'>
                    <h5>Our Company</h5>
                    <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been indust...</p>
                </div>
                <div className='content-box'>
                    <h5>Our Mission</h5>
                    <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been indust...</p>
                </div>
                <div className='content-box'>
                    <h5>Our Vision</h5>
                    <p className='text-secondary'> Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been indust...</p>
                </div>
                <div className='content-box'>
                    <h5>Our Process</h5>
                    <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been indust...</p>
                </div>
            </div>
            <div id="sec3" className='girl-ad section d-flex mt-5'>
                <div className='left-div mt-5 mx-5'>
                    <h1 className='mb-5 mt-5'><span>The Great Template</span><br /> That Converts For You</h1>
                    <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text
                        ever since the 1500s</p>
                    <div className='d-flex p-2'>
                        <div className='sub-content mt-5'>
                            <h5><i className="fa fa-lightbulb-o px-3" aria-hidden="true"></i>Our Mission</h5>
                            <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been indust...</p>
                        </div>
                        <div className='sub-content mt-5'>
                            <h5><i className="fa fa-users px-3" aria-hidden="true"></i> Our Mission</h5>
                            <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been indust...</p>
                        </div>
                    </div>
                </div>
                <div className='right-div p-0'>
                    <img src={Tallgirl} alt="The standing lady add" />
                </div>
            </div>
            <div id="sec4" className='slider-div section text-white'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='d-flex justify-content-center'>
                                <img src={slide1} alt="First slide" />
                            </div>
                            <div className='templete-subdiv d-flex flex-column text-center m-auto'>
                                <p className='mt-5 text-white mb-5'>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text
                                    ever since the 1500s Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. </p>
                                <i className="fa fa-users" aria-hidden="true"></i>
                                <span className='subsp'>-Ahmed hamdy-</span>
                                <p>Google Outsourcing & hh manager</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='d-flex justify-content-center'>
                                <img src={slide2} alt="First slide" />
                            </div>
                            <div className='templete-subdiv d-flex flex-column text-center m-auto'>
                                <p className='mt-5 text-white mb-5'>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text
                                    ever since the 1500s Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. </p>
                                <i className="fa fa-users" aria-hidden="true"></i>
                                <span className='subsp'>-Umair Razaq-</span>
                                <p>Full stack developer</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='d-flex justify-content-center'>
                                <img src={slide3} alt="First slide" />
                            </div>
                            <div className='templete-subdiv d-flex flex-column text-center m-auto'>
                                <p className='mt-5 text-white mb-5'>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text
                                    ever since the 1500s Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. </p>
                                <i className="fa fa-users" aria-hidden="true"></i>
                                <span className='subsp'>-Adnan Akram-</span>
                                <p>Front end Developer</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className='subslider bg-black p-5'>
                <div class="logo-container">
                    <div class="logos">
                        <img src={Logo1} alt="Logo 1" />
                        <img src={Logo2} alt="Logo 2" />
                        <img src={Logo3} alt="Logo 3" />
                        <img src={Logo4} alt="Logo 4" />
                        <img src={Logo5} alt="Logo 5" />
                        <img src={Logo6} alt="Logo 6" />
                    </div>
                </div>
            </div>
            <div id="sec5" className='template-div section text-center d-flex justify-content-center'>
                <div className='templete-subdiv mt-5'>
                    <h1><span>Our Best Servicer</span><br /> For The Clients</h1>
                    <p className='mt-5 text-secondary mb-5'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. </p>
                    <img className="mt-5" src={Template} alt="Template Image" />
                    <div className='d-flex'>
                        <div className='sub-content mt-5 mb-5'>
                            <i className="fa fa-lightbulb-o fa-2x px-3" aria-hidden="true"></i><br />
                            <h5 className='mt-3'>User friendly interface</h5>
                            <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been indust...</p>
                        </div>
                        <div className='sub-content mt-5'>
                            <i className="fa fa-users fa-2x px-3" aria-hidden="true"></i> <br />
                            <h5 className='mt-3'>Multipurpose Template</h5>
                            <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been indust...</p>
                        </div>
                        <div className='sub-content mt-5'>
                            <i className="fa fa-thumbs-up fa-2x" aria-hidden="true"></i> <br />
                            <h5 className='mt-3'>Perfect Design</h5>
                            <p className='text-secondary'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been indust...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sec6' className='pricing-div section bg-light text-center d-flex justify-content-center'>
                <div className='templete-subdiv mt-5'>
                    <h1 className='mt-5'><span>Pricing & Plans</span><br /> That Suits For You</h1>
                    <p className='mt-5 text-secondary mb-5'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. </p>
                    <div className='d-flex mb-5'>
                        <div className='price-card'>
                            <h4 className='text-uupercase'>student</h4>
                            <h1>$19</h1>
                            <p> typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text
                                ever</p>
                            <button className='btn text-white p-2'>GET A QUATE</button>
                        </div>
                        <div className='price-card'>
                            <h4 className='text-uppercase'>user</h4>
                            <h1>$29</h1>
                            <p> typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text
                                ever</p>
                            <button className='btn text-white p-2'>GET A QUATE</button>
                        </div>
                        <div className='price-card'>
                            <h4 className='text-uppercase'>company</h4>
                            <h1>$39</h1>
                            <p> typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text
                                ever</p>
                            <button className='btn text-white p-2 text-uppercase'>get a quote</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='trail-div text-center d-flex justify-content-center'>
                <div className='templete-subdiv p-5'>
                    <h1 className='text-uppercase pt-5'>need a super trial?</h1>
                    <p className='mt-5 text-white mb-5'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text
                        ever since the 1500s Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. </p>
                    <button className='btn btn-lg text-uppercase mb-5'>Get a Quate</button>
                </div>
            </div>
        </div>
    )
}