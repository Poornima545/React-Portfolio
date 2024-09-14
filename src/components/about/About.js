import React from 'react';
import AboutImage from '../../assets/aboutImg.svg'

function About() {
    return (
        <>
            <section id='about' className='about-container'>
                <article className='about-content row align-items-center m-0'>
                    <article className='col-lg-6 p-0 text-center pb-5'>
                        <img src={AboutImage} alt='About Image' className='aboutImg img-fluid' />
                    </article>
                    <article className='col-lg-6'>
                        <h2 className='fs-30 pb-4 mb-0 border-bottom'>About Me</h2>
                        <p className='mb-0 mt-4 lh-lg'>Hi! I'm Poornima, a passionate and dedicated web developer with a strong foundation in
                            HTML, CSS, JavaScript, React, and Bootstrap. I graduated in 2023  from S.J.M institute Technology, Chitradurga
                            with a degree in Computer Science and Engineering, where I developed a keen interest in creating dynamic and responsive web applications.
                            I’m eager to apply my knowledge and continue learning in a professional setting. </p>
                        <p className='mt-4'>In my free time, I enjoy Cooking, Listening to Music, Watching Series,
                            which keeps me inspired and motivated. I’m excited to start my career and contribute to
                            innovative projects that make a difference.</p>
                    </article>
                </article>
            </section>
        </>
    )
}

export default About