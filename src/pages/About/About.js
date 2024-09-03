import React from 'react'
import assets from '../../assets/assets';
import { useEffect } from 'react';
import '../../js/admin_scripts.js'
import '../../js/admin-datatables-simple-demo.js'

function About() {

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
    <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">How To Use</h2>
                <h3 className="section-subheading text-muted">This part shows how to use this website.</h3>
            </div>
            <ul className="timeline">
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={assets.a} alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>First Let's</h4>
                            <h4 className="subheading">Register/Login</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={assets.b} alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>After Login</h4>
                            <h4 className="subheading">Find yourself a Class</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={assets.c} alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>If You Choose The Class</h4>
                            <h4 className="subheading">Connect with teacher and talk!</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={assets.d} alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Then If You Agree The Conditions</h4>
                            <h4 className="subheading">Join the class</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <h4>
                            And
                            <br/>
                            Let's Start
                            <br/>
                            Studying
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
