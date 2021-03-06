import React from 'react';
//react icons
import {MdOutlineCreate} from 'react-icons/md'
// image
import Hero from '../../assets/images/hero.jpg'
// react router dom
import { Link } from 'react-router-dom';

const HeroScreen = () => {
    return (
        <section className='text-white w-full mt-20 lg:mt-32'>
            <div className='max-w-[640px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto h-full px-4 flex flex-col lg:flex-row items-center justify-center'>
                <div className='lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-start justify-center mt-10'>
                    <p className= ' w-full font-bold leading-snug text-2xl md:text-3xl xl:text-4xl'>Discover rare digital art and collect <span className='text-3xl md:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-[#4b50e6] via-[#e250e5] to-[#4b50e6]'>sell extraordinary</span> NFT.</p>
                    <p className='mt-10 leading-10 text-stone-300'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi omnis neque adipisci sequi ullam unde in minus quis quos.
                    </p>
                    <div className='flex mt-10 w-full justify-center lg:justify-start'>
                        <Link className='flex items-center px-6 py-2 border border-[#4b50e6] rounded-3xl' to='/create'><MdOutlineCreate className='mr-2'/>Create</Link>
                    </div>
                </div>
                <div className='lg:w-1/2 mt-16 lg:mt-0 overflow-hidden flex mx-auto items-center justify-center lg:justify-end '>
                    <img className='w-[500px] lg:w-[400px] xl:w-[500px] rounded-2xl' src={Hero} alt="Hero"/>
                </div>
                
            </div>
        </section>
    );
};

export default HeroScreen;