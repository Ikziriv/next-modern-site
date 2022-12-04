'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} flex flex-col justify-center items-start w-full h-auto md:h-screen relative border z-10`}>
    <div className="gradient-02 z-0" />
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexStart} flex-col md:mt-[64px] mt-[24px]`}
    >
      <div className='flex flex-row items-end space-x-1 relative mb-4 md:mb-16'>
        <motion.h2 variants={fadeIn('center', 'tween', 0.1, 1)} className={`font-black text-[32px] text-neutral-900`}>01.</motion.h2>
        <TypingText title="Who We Are" textStyles="text-center" />
        <div className='bg-neutral-800 w-12 h-1'></div>
      </div>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-left text-secondary-white"
      >
        <span className="font-extrabold text-black">
          We create cutting-edge online experiences that elevate brands, maximize ROI, and generate conversions. We’re hard-working creatives who let our work speak for itself.
        </span> 
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[8px] font-normal sm:text-[16px] text-[8px] text-left text-secondary-white"
      >
        <span className='font-thin text-neutral-900'>We are honored to be considered among the best Web Design Agencies in Kansas City, offering best-practice SEO, Top Website Development, and ongoing marketing services.</span>
      </motion.p>

    </motion.div>
  </section>
);

export default About;