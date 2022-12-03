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
      <h4 className="font-bold md:text-[64px] text-[44px] text-black">
        Enter the MNL.
      </h4>
      <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#292929] rounded-[32px] gap-[12px]">
        <span className="font-normal text-[16px] text-white">
          Enter Design
        </span>
      </button>
    </div>

    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10" />

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-extrabold text-[24px] text-black">
          MNL.
        </h4>
        <p className="font-normal text-[14px] text-black opacity-50">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <Image
              key={social.name}
              src={social.url}
              alt={social.name}
              width={24}
              height={24}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  </motion.footer>
);

export default Footer;