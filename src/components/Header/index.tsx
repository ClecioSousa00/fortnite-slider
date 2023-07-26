import Image from 'next/image'
import logo from '@/assets/logoFortnite.png'

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 pt-7 px-20 flex items-center justify-between">
      <div className="flex items-center gap-9 text-primary-dark text-base">
        <Image
          className="w-32"
          src={logo}
          alt="Logo do fortnite na cor preta"
        />
        <span>Characters</span>
        <span>Pricing</span>
      </div>
      <button className="rounded-lg border-primary-dark border-2 text-base text-primary-dark px-4 py-2">
        Sign In
      </button>
    </header>
  )
}
