import React from 'react'
import '../../css/homepage_styles.css';
import assets from '../../assets/assets';
import "https://use.fontawesome.com/releases/v6.3.0/js/all.js"
import { useEffect } from 'react';
import '../../js/admin_scripts.js'
import '../../js/admin-datatables-simple-demo.js'

function Portfolio() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../../js/admin_scripts.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

      useEffect(() => {
        const script = document.createElement('script');
        script.src = '../../js/admin-datatables-simple-demo.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">BLOG</h2>
                    <h3 className="section-subheading text-muted">This part include students blog about classes and tutorials.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 1*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><svg className="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path></svg>{/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}</div>
                                </div>
                                <img className="img-fluid" src={assets.e} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Threads</div>
                                <div className="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 2*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><svg className="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path></svg>{/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}</div>
                                </div>
                                <img className="img-fluid" src={assets.f} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Explore</div>
                                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 3*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><svg className="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path></svg>{/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}</div>
                                </div>
                                <img className="img-fluid" src={assets.g} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Finish</div>
                                <div className="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* Portfolio item 4*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><svg className="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path></svg>{/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}</div>
                                </div>
                                <img className="img-fluid" src={assets.h} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Lines</div>
                                <div className="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        {/* Portfolio item 5*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><svg className="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path></svg>{/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}</div>
                                </div>
                                <img className="img-fluid" src={assets.i} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Southwest</div>
                                <div className="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        {/* Portfolio item 6*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><svg className="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path></svg>{/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}</div>
                                </div>
                                <img className="img-fluid" src={assets.j} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Window</div>
                                <div className="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Portfolio    