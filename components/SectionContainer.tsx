'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  const pathname = usePathname()

  return (
    <section
      className={` ${
        pathname === '/loginregistration'
          ? 'container mx-auto px-4 '
          : 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'
      }`}
    >
      {children}
    </section>
  )
}
