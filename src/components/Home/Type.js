import React from 'react'
import TypeWriter from 'typewriter-effect'

function Type() {
    return (
        <TypeWriter options={{
            strings: [
                'Software Developer (Fresher)',
                'Web Developer'
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    )
}

export default Type;
