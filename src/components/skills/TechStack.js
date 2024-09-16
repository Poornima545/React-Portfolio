import React from 'react';
import { DiJavascript1, DiReact, DiHtml5, DiBootstrap } from "react-icons/di"

function TechStack() {
    return (
        <>
            <section id="tech-stack" className="tech-stack px-5">
                <section>
                    <h2 className="m-0 pb-3 border-bottom fs-30">Tech Stack</h2>
                    <div className='technical row row-gap-4'>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <DiHtml5 size={80} className='text-success' />
                            <h4 className="text-uppercase fs-6 mt-4 mb-0">html&css</h4>
                            <p className="mt-2 mb-0 para">Proficient in crafting responsive and visually appealing web pages using HTML5 and CSS3.</p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <DiJavascript1 size={80} className='text-success' />
                            <h4 className="text-uppercase fs-6 mt-4 mb-0">Javascript</h4>
                            <p className="mt-2 mb-0 para">Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.</p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <DiReact size={80} className='text-success' />
                            <h4 className="text-uppercase fs-6 mt-4 mb-0">React</h4>
                            <p className="mt-2 mb-0 para">Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <DiBootstrap size={80} className='text-success' />
                            <h4 className="text-uppercase fs-6 mt-4 mb-0">Bootstrap</h4>
                            <p className="mt-2 mb-0 para">Comfortable using Bootstrap to create responsive, mobile-first designs with pre-built components and utilities.</p>
                        </div>

                        {/* <div className="col-md-4 col-sm-6">
                            <DiGit size={80} className='text-success' />
                            <h4 className="text-uppercase fs-6 mt-4 mb-0">React</h4>
                            <p className="mt-2 mb-0 para">Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
                        </div> */}
                    </div>
                </section>
            </section>


        </>
    )
}

export default TechStack;

