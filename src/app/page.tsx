import { Header } from '@/components/Header'
import { Slider } from '@/components/Slider'

export default function Home() {
  return (
    <div className="h-screen ">
      <Header />
      <main className="h-full w-full">
        <Slider />
      </main>
    </div>
  )
}
