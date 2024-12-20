import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("esiey.brhan4@gmail.com")
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 3000);
    }
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" className="w-full sm:h-[276px] h-fit object-contain" alt="grid-1"/>
                        <div>
                            <p className="grid-headtext"> Hi, I am Esiey </p>
                            <p className="grid-subtext"> I am a programmer!</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" className="w-full sm:h-[276px] h-fit object-contain" alt="grid-2"/>
                        <div>
                            <p className="grid-headtext"> Tech Stack</p>
                            <p className="grid-subtext"> I am a programmer! </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                               height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5}
                               showAtmosphere showGraticules
                               globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                               bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />

                        </div>
                        <div>
                            <p className="grid-headtext"> I am from Ottawa, Canada!</p>
                            <p className="grid-subtext"> I can work both remotely and in Ottawa across various
                                timezones. </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10">
                                Contact Me
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" className="w-full sm:h-[266px] h-fit object-contain" alt="grid-3"/>
                        <div>
                            <p className="grid-headtext"> My passion for coding.</p>
                            <p className="grid-subtext"> I love coding! </p>
                        </div>

                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" className="w-full md:h-[126px] sm:h-[266px] h-fit object-cover sm:object-top" alt="grid-4"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center"> Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src = {hasCopied? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg: text-2xl md:text-xl font-medium text-gray_gradient text-white">Esiey.brhan4@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
