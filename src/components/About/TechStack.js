import React from 'react'
import { SiVisualstudiocode, } from "react-icons/si"
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiGit } from "react-icons/di"

function TechStack() {
    return (
        <section className='professional-skills'>
            <h1> Professional <strong className='yellow' style={{ fontSize: '30px;' }}>Skillset</strong></h1>
            <div className='technical'>
                <DiHtml5 className='techStack' />
                <DiCss3 className='techStack' />
                <DiJavascript1 className='techStack' />
                <DiGit className='techStack' />
                <DiReact className='techStack' />
            </div>
            <span>
                <h1><span className='yellow'>Tools </span> I Use</h1>
                <SiVisualstudiocode className='toolStack' />
            </span>
        </section>
    )
}

export default TechStack;
