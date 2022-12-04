'use client';

import Image from 'next/image'
import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
    <section className={`${styles.yPaddings} flex flex-col justify-start items-start w-full h-auto md:h-screen relative border sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-start flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Discover Minimalist
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row space-x-2 justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Design</h1>
            <h1 className={styles.heroHeading}>with</h1>
            <h1 className={styles.heroHeading}>Value</h1>
          </motion.div>
          <motion.div
            variants={textVariant(1.3)}
            className="flex flex-row space-x-2 justify-center items-center border-t"
          >
            <h1 className={styles.heroSubHeading}>Growth your business now</h1>
          </motion.div>
        </div>
        
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:mt-[20px] mt-[12px]"
        >
          <div className="absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]" />

          <Image
            src="/cover.jpg"
            alt="hero_cover"
            width={1024}
            height={350}
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <div className='flex items-end w-auto h-auto relative'>
                <div className="absolute top-2 left-3 w-2 h-2 bg-black border border-black"></div>
                <h1 className="font-black md:text-[24px] text-[20px] text-black">
                  XNL 
                </h1>
                <span>&#8482;</span>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
  
  export default Hero;