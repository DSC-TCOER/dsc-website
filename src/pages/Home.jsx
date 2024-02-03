import React, { useState } from "react";
import { About, Hero } from "../components";
import { Aim } from "../components";
import HallOfFame from "../components/HallOfFame";

const Home = () => {
    const [introVideoEnd, setIntroVideoEnd] = useState(false)

    const introEnd = (e) => {
        setIntroVideoEnd(true)
    }
    return (
        <div className="flex flex-col justify-center items-start gap-4">
            <Hero />
            <section className="px-4">
                <About />
                <Aim />
                <HallOfFame />
            </section>
        </div>
    )
}

export default Home