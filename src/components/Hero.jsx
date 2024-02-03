import React from "react"

const Hero = () => {
    return (
        <section className="px-2 w-screen h-screen flex flex-col justify-center items-center gap-2">
                <img src="./logo.png" className="w-90 h-auto py-4 max-sm:w-1/3" />
                <p className="text-xl font-medium mb-0 max-sm:text-base">Welcome to</p>
                <p className="text-4xl font-bold font-mono mb-0 max-sm:text-3xl max-sm:text-center"><span className="text-red-600">Google</span> <span className="text-blue-600">Student</span> <span className="text-yellow-600">Developer</span> <span className="text-green-600">Club</span></p>
                <p className="text-2xl font-semibold font-mono mb-0 text-center max-sm:px-2 max-sm:text-lg">Trinity College of Engineering And Research</p>
                <button className="text-2xl text-white font-semibold px-4 py-1.5 mt-2 rounded-full bg-blue-600 shadow-xl hover:bg-blue-400 max-sm:text-lg">Become a Member</button>
            </section>
    )
}

export default Hero