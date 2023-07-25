import Image from 'next/image'
import bannerDuende from '@/assets/bannerDuende.png'
import bannerDoctor from '@/assets/bannerDoctor.png'
import bannerMadcap from '@/assets/bannerMadcap.png'

export const CharacterInfos = () => {
  return (
    <div className=" h-full w-full relative ">
      {/* <div className="absolute inset-0  z-10 "></div> */}
      <Image
        className="relative w-full h-full object-cover"
        src={bannerDuende}
        alt=""
      />
    </div>
  )
}
