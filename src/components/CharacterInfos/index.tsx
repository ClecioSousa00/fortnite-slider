import Image, { StaticImageData } from 'next/image'

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
      />
      <div className="relative h-full z-20 w-full  flex items-center justify-between px-20">
        <div className=" max-w-[420px]">
          <h1 className="  break-words font-mono w-full max-w-[460px] text-[8.75rem] font-black leading-[140px] uppercase">
            {data.title}
          </h1>
          <p className="mt-8 text-lg text-primary-dark font-normal">
            {data.description}
          </p>
        </div>
        <div>
          <div className="absolute w-full  inset-0 bg-gradient-character -z-10"></div>
          <Image className="-z-20 relative " src={data.img} alt={data.title} />
        </div>
        <div className="">
          <p className="text-base text-secondary font-semibold uppercase">
            {data.serie}
          </p>
          <h2 className="font-mono text-3xl uppercase mb-5">{data.subTitle}</h2>
          <p className="text-primary-dark ">{data.subDescription}</p>
          <div className="flex gap-5 mt-10">
            <Skills power={3} title="Pumpkin Bomb">
              <SwordSvg />{' '}
            </Skills>
            <Skills power={4} title="Pumpkin P'axe">
              <TargetSvg />{' '}
            </Skills>
            <Skills power={4} title="Goblin Glider">
              <RaySvg />{' '}
            </Skills>
          </div>
        </div>
      </div>
    </div>
  )
}
