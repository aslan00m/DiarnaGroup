import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingActions } from './FloatingActions'

interface LayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C9A96A]/30">
      <Header />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
