'use client'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

import { Skills } from '../Skills'
import { SwordSvg } from '../icons/SwordSvg'
import { RaySvg } from '../icons/RaySvg'
import { TargetSvg } from '../icons/TargetSvg'

type CharacterProps = {
  data: {
    banner: StaticImageData
    title: string
    description: string
    img: StaticImageData
    serie: string
    subTitle: string
    subDescription: string
  }
}

export const CharacterInfos = ({ data }: CharacterProps) => {
  return (
    <div className=" h-full w-full">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={data.banner}
        alt={`background do ${data.title}`}
        priority
      />
      <div className="relative h-full z-20 w-full  flex items-center justify-between px-20  ">
        <motion.div
          className=" max-w-[420px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="  break-words font-mono w-full max-w-[460px] text-[7.75rem] font-black leading-[140px] uppercase">
            {data.title}
          </h1>
          <p className="mt-8 text-lg text-primary-dark font-normal">
            {data.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="absolute w-full  inset-0 bg-gradient-character -z-10"></div>
          <Image
            className="-z-20 relative "
            src={data.img}
            alt={data.title}
            priority
          />
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-base text-secondary font-semibold uppercase">
            {data.serie}
          </p>
          <h2 className="font-mono text-3xl uppercase mb-5">{data.subTitle}</h2>
          <p className="text-primary-dark ">{data.subDescription}</p>
          <div className="flex gap-5 mt-10">
            <Skills power={3} title="Pumpkin Bomb">
              <SwordSvg />
            </Skills>
            <Skills power={4} title="Pumpkin P'axe">
              <TargetSvg />
            </Skills>
            <Skills power={4} title="Goblin Glider">
              <RaySvg />
            </Skills>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
