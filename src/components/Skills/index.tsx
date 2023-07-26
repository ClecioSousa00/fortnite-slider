import { ReactNode } from 'react'
import { StarSvg } from '../icons/StarSvg'
import { TargetSvg } from '../icons/TargetSvg'
import { StarInactive } from '../icons/StarInactive'

type SkillsProps = {
  children: ReactNode
  title: string
  power: number
}

export const Skills = ({ power, title, children }: SkillsProps) => {
  const starsArray = [1, 2, 3, 4, 5]

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full w-12 h-12 border-secondary border-2 flex items-center justify-center">
        {children}
      </div>
      <p className="text-xs text-primary-dark font-semibold mt-4">{title}</p>
      <div className="flex mt-2">
        {starsArray.map((item, index) => {
          return item <= power ? (
            <StarSvg key={index} />
          ) : (
            <StarInactive key={index} />
          )
        })}
      </div>
    </div>
  )
}
