import {Suspense} from 'react'
import {PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../Constants/index.js";
import Target from "../components/target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Rings from "../components/Rings.jsx";
import Cube from "../components/Cube.jsx";

import HeroCamera from "../components/HeroCam.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023})
    const isSmall = useMediaQuery({maxWidth: 480})
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsanst"> I am Esiey
                    <span className="waving-hand"> 👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    I like learning new things.
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom position={sizes.deskPosition} rotation={[0.2, -Math.PI, 0.0]}
                                        scale={sizes.deskScale}/>
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7  left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Lets work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "></Button>
                </a>
            </div>
        </section>

    )
}

export default Hero
