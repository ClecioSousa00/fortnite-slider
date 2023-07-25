'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CharacterInfos } from '../CharacterInfos'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import bannerDuende from '@/assets/bannerDuende.png'
import bannerDoctor from '@/assets/bannerDoctor.png'
import bannerMadcap from '@/assets/bannerMadcap.png'

import 'swiper/css'
import 'swiper/css/pagination'
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
      loop
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <CharacterInfos />
      </SwiperSlide>
      <SwiperSlide>
        <CharacterInfos />
      </SwiperSlide>
      <SwiperSlide>
        <CharacterInfos />
      </SwiperSlide>
    </Swiper>
  )
}
