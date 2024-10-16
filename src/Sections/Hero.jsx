import React, {Suspense} from 'react'
import {PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../Constants/index.js";
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

                        <PerspectiveCamera makeDefault position={[0,0,30]}/>
                        <HackerRoom  position={sizes.deskPosition} rotation ={[0.4, -3.6, 0.0]} scale={sizes.deskScale} />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>

                </Canvas>
            </div>
        </section>

    )
}

export default Hero
