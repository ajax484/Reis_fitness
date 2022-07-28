import React from 'react';
import HeroBg from '../../Assets/Img/hero/hero-bg.jpg';
import {Instagram, Telegram, Youtube} from '../../Assets/svg';

export default function Hero() {
    return (
        <section>
            <img src={HeroBg} className="w-screen h-screen blur-[2px] brightness-[65%]" alt="" />

            <div className="absolute top-1/2 left-1/2 lg:left-16 -translate-y-1/2 -translate-x-1/2 lg:translate-x-0 w-[90%] lg:w-5/12 flex flex-col items-center lg:items-start space-y-16 md:space-y-12 lg:space-y-6">
                <h1 className="text-hero text-white capitalize leading-tight text-center lg:text-left">
                    Are you ready to get fit, strong and motivated?
                </h1>

                <div className="inline space-x-6">
                    <button className="button button-primary rounded-sm py-2 px-6 font-medium tracking-wide">Get Started</button>
                    <button className="button button-secondary rounded-sm py-2 px-6 font-medium tracking-wide">Learn More</button>
                </div>
            </div>

            <div className="absolute bottom-12 lg:bottom-4 left-1/2 lg:left-16 flex -translate-x-1/2 lg:translate-x-0 space-x-12 lg:space-x-6">
                <Instagram className="h-8 md:h-10 text-white"/>
                <Telegram className="h-8 md:h-10 text-white"/>
                <Youtube className="h-8 md:h-10 text-white"/>
            </div>
        </section>
    )
}
