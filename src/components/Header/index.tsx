import Image from 'next/image'
import logo from '@/assets/logoFortnite.png'

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 pt-7 px-20 flex items-center justify-between">
      <div className="flex items-center gap-9">
        <Image
          className="w-32"
          src={logo}
          alt="Logo do fortnite na cor preta"
        />
        <span>Characters</span>
        <span>Pricing</span>
      </div>
      <button>Sign In</button>
    </header>
  )
}
