import SecondImage from '../../assets/pic02.webp'
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

export default function SecondProject() {
    return (
        <>
            <div className="card">
                <img src={SecondImage} className="card-img-top" alt="Second Image" />
                <div className="card-body p-4">
                    <h5 className="card-title">Second Project</h5>
                    <p className="card-text lh-lg mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.</p>
                    <div className='d-flex align-items-center'>
                        <a href="https://www.example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='me-2 icon'>
                            <AiOutlineGlobal size={30} />
                        </a>
                        <a href="https://github.com/Poornima545"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='me-2 icon'>
                            <AiFillGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}