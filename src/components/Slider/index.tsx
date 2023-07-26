'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CharacterInfos } from '../CharacterInfos'
import { Autoplay, Navigation } from 'swiper/modules'
import { data } from '@/CharacterData'

import 'swiper/css'

import 'swiper/css/navigation'

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="w-full h-full"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <CharacterInfos data={item} />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>
        <CharacterInfos />
      </SwiperSlide>
      <SwiperSlide>
        <CharacterInfos />
      </SwiperSlide> */}
    </Swiper>
  )
}
