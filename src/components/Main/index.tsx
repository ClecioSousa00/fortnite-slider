'use client'
import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { Slider } from '@/components/Slider'
import { FortniteSvg } from '@/components/icons/FortniteSvg'

export const Main = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <FortniteSvg />
        </div>
      ) : (
        <div className="h-screen ">
          <Header />
          <main className="h-full w-full">
            <Slider />
          </main>
        </div>
      )}
    </>
  )
}
