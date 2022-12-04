'use client';

import Image from 'next/image'
import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative border-t`}
  >
  <div className="footer-gradient" />
  <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className='flex items-end w-auto h-auto relative'>
        <div className="absolute top-2 left-3 w-2 h-2 bg-black border border-black"></div>
        <h1 className="font-black md:text-[24px] text-[20px] text-black">
          XNL 
        </h1>
        <span>&#8482;</span>
      </div>
      <button type="button" className="flex items-center h-fit py-2 px-8 bg-black rounded-[32px] gap-[12px]">
        <span className="font-normal text-[16px] text-white">
          Enter your Design
        </span>
      </button>
    </div>

    <div className='grid grid-cols-12 gap-2 w-full h-auto py-4 border-b'>
      <div className='col-span-full md:col-span-6 w-auto h-auto'>
        <div className='flex flex-col -space-y-1 w-auto h-auto justify-start items-start'>
          <span className='font-black text-xl text-neutral-900'>Website</span>
          <span className='font-black text-xl text-neutral-900'>Branding & Design</span>
          <span className='font-black text-xl text-neutral-900'>Ecommerce</span>
          <span className='font-black text-xl text-neutral-900'>Development</span>
          <span className='font-black text-xl text-neutral-900'>Photo & Video</span>
          <span className='font-black text-xl text-neutral-900'>Consulting</span>
          <span className='font-black text-xl text-neutral-900'>SEO & Search</span>
        </div>
      </div>

      <div className='col-span-full md:col-span-3 w-auto h-auto'>
        <div className='flex flex-col w-auto h-auto justify-center items-start'>
          <span className='font-black text-black mb-2'>Find Us</span>
          <div className='flex flex-col -space-y-0 w-auto h-auto justify-start items-start'>
            <span className='font-normal text-xs text-neutral-900'>F41 Karawaci Street</span>
            <span className='font-normal text-xs text-neutral-900'>Karawaci City, Tangerang</span>
            <span className='font-normal text-xs text-neutral-900'>15810</span>
          </div>
          <div className='w-auto h-autp mt-2 border-b'>
             <button className='bg-transparent h-fit py-2 px-4'>
              <span className='font-bold text-black text-sm'>Get Direction</span>
             </button>
          </div>
        </div>
      </div>
      <div className='col-span-full md:col-span-3 w-auto h-auto'>
        <div className='flex flex-col w-auto h-auto justify-center items-center'>
          <span className='font-black text-black mb-2'>Reach Out</span>
          <div className='flex flex-col -space-y-0 w-auto h-auto justify-start items-start'>
            <span className='font-normal text-xs text-neutral-900'>Insights ( Blog )</span>
            <span className='font-normal text-xs text-neutral-900'>Careers</span>
            <span className='font-normal text-xs text-neutral-900'>Contact</span>
            <span className='font-normal text-xs text-neutral-900'>Newsletter</span>
          </div>

        </div>
      </div>
    </div>

    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10" />

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className='flex flex-col w-auto h-auto -space-y-1'>
          <h4 className="font-extrabold text-[10px] text-black">
            Created. /
          </h4>
          <h4 className="font-black text-[10px] text-black uppercase">
            Design by Ikziriv
          </h4>
        </div>
        <p className="font-normal text-[10px] text-black opacity-50">
          Copyright © 2021 - 2022 XNL. All Rights Reserved.
        </p>

        <div className='flex flex-col w-auto h-auto'>
          <span className='font-black text-black mb-2'>Follow Us</span>
          <div className="flex space-x-0 gap-4">
            {socials.map((social) => (
              <div key={social.name} className='flex justify-center items-center w-auto h-auto p-2 border border-black'>
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] object-contain cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  </motion.footer>
);

export default Footer;