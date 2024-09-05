import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";

export default function Project() {
    return (
        <>
            <section id="projects" className="project-container">
                <h2 className="fs-30 m-0 pb-3 border-bottom">Web Creations</h2>
                <div className="row m-0 projects">
                    <div className="col-lg-4 col-md-6 col-12 m-0 mb-4">
                        <FirstProject />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 m-0 mb-4">
                        <SecondProject />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 m-0 mb-4">
                        <ThirdProject />
                    </div>
                </div>
            </section>
        </>
    )
}
