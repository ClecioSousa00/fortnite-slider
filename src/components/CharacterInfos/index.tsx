import Image from 'next/image'
import bannerDuende from '@/assets/bannerDuende.png'
import bannerDoctor from '@/assets/bannerDoctor.png'
import bannerMadcap from '@/assets/bannerMadcap.png'

import duende from '@/assets/characters/duende.png'
import { Skills } from '../Skills'
import { SwordSvg } from '../icons/SwordSvg'
import { RaySvg } from '../icons/RaySvg'
import { TargetSvg } from '../icons/TargetSvg'

export const CharacterInfos = () => {
  return (
    <div className=" h-full w-full relative ">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={bannerDuende}
        alt=""
      />
      <div className="relative h-full z-20 w-full  flex items-center justify-between px-20">
        <div className=" max-w-[360px] ">
          <h1 className=" font-mono text-[6.75rem] font-black tracking-tighter leading-[90px] uppercase">
            green goblin
          </h1>
          <p className="mt-8  text-lg text-primary-dark font-normal">
            Green Goblin is a Marvel Series Outfit in Fortnite: Battle Royale
          </p>
        </div>
        <div className=" relative ">
          <div className="absolute inset-0  bg-gradient-character "></div>
          <Image className="max-w-lg" src={duende} alt="perso" />
        </div>
        <div>
          <p className="text-base text-secondary font-semibold uppercase">
            Marvel Series
          </p>
          <h2 className="font-mono text-3xl uppercase mb-5">
            Attack of the goblin
          </h2>
          <p className="text-primary-dark ">
            He’s absolutely insane! But just the kind of crazy we’re after.
          </p>
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
