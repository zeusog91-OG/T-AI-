'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Globe, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Use Cases', href: '#usecases' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl blue-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">Transcript</span>
              <span className="text-gray-900 dark:text-white">AI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-accent font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            <a
              href="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors px-4 py-2"
            >
              Log In
            </a>

            <a
              href="/signup"
              className="blue-gradient text-white font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all glow shadow-lg shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 px-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium py-2 border-b border-gray-50 dark:border-gray-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href="/login"
                className="block text-center border-2 border-brand-blue text-brand-blue font-semibold py-3 rounded-xl hover:bg-brand-blue hover:text-white transition-all"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="block text-center blue-gradient text-white font-semibold py-3 rounded-xl"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
