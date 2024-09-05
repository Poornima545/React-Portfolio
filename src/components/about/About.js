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
                        <h2 className='fs-30 pb-4 mb-0 border-bottom'>Code and coffee</h2>
                        <p className='mb-0 mt-4 lh-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores itaque doloribus asperiores dolorum quas voluptates distinctio, porro beatae quam provident libero animi totam, praesentium voluptatem corrupti dignissimos ipsum accusantium!</p>
                    </article>
                </article>
            </section>
        </>
    )
}

export default About