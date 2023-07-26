import { StaticImageData } from 'next/image'

import bannerDuende from '@/assets/bannerDuende.png'
import duende from '@/assets/characters/duende.png'

import bannerSlone from '@/assets/bannerDoctor.png'
import slone from '@/assets/characters/slone.png'

import bannerMadcap from '@/assets/bannerMadcap.png'
import madcap from '@/assets/characters/madcap.png'

import bannerSludge from '@/assets/bannerSludge.png'
import sludge from '@/assets/characters/sludge.png'

import bannerTeef from '@/assets/bannerTeef.png'
import teef from '@/assets/characters/teef.png'

import bannerMandalorian from '@/assets/bannerMandalorian.png'
import mandalorian from '@/assets/characters/manalorian.png'

// type CharacterProps = {
//   title: string
//   description: string
//   img: StaticImageData
//   serie: string
//   subTitle: string
//   subDescription: string
// }

export const data = [
  {
    banner: bannerDuende,
    title: 'Green Goblin',
    description:
      'Green Goblin is a Marvel Series Outfit in Fortnite: Battle Royale',
    img: duende,
    serie: 'Marvel Series',
    subTitle: 'Attack of the Goblin',
    subDescription:
      'He’s absolutely insane! But just the kind of crazy we’re after.',
  },
  {
    banner: bannerSlone,
    title: 'Doctor Slone',
    description:
      'Doctor Slone is the central antagonist of the "battle royale" video game Fortnite: Battle Royale.',
    img: slone,
    serie: 'Fortnite Series',
    subTitle: 'Attack of the Slone',
    subDescription:
      'He’s absolutely insane! But just the kind of crazy we’re after.',
  },
  {
    banner: bannerMadcap,
    title: 'Madcap',
    description:
      'Madcap is an Unreleased Epic Outfit in Battle Royale. The Bello Bag Back Bling is bundled with this Outfit.',
    img: madcap,
    serie: 'Fortnite Series',
    subTitle: 'Attack of the Madcap',
    subDescription:
      'He’s absolutely insane! But just the kind of crazy we’re after.',
  },
  {
    banner: bannerSludge,
    title: 'Sludge',
    description:
      'Rippley Vs Sludge is a Slurp Series Outfit in Battle Royale that could be obtained as a reward from Level 20 of Chapter 2 Season 1 Battle Pass.',
    img: sludge,
    serie: 'Fortnite Series',
    subTitle: 'Attack of the Sludge',
    subDescription:
      'He’s absolutely insane! But just the kind of crazy we’re after.',
  },
  {
    banner: bannerTeef,
    title: 'Teef',
    description:
      'Teef is an Epic Outfit in Battle Royale that can be purchased from the Item Shop. The Nosh Back Bling is bundled with this Outfit.',
    img: teef,
    serie: 'Fortnite Series',
    subTitle: 'Attack of the Teef',
    subDescription:
      'He’s absolutely insane! But just the kind of crazy we’re after.',
  },
  {
    banner: bannerMandalorian,
    title: 'mandalorian',
    description:
      'Bounty hunter from the outer reaches of the galaxy. Mandalorian is a Star Wars Series Outfit in Fortnite: Battle Royale.',
    img: mandalorian,
    serie: 'Fortnite Series',
    subTitle: 'Attack of the mandalorian',
    subDescription:
      'He’s absolutely insane! But just the kind of crazy we’re after.',
  },
]
