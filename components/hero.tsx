'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Play, Globe, CheckCircle, Star } from 'lucide-react'

const languages = ['Spanish', 'Japanese', 'Arabic', 'French', 'Hindi', 'German', 'Chinese', 'Portuguese']

const stats = [
  { number: '100+', label: 'Languages' },
  { number: '50K+', label: 'Users' },
  { number: '99.2%', label: 'Accuracy' },
  { number: '0.3s', label: 'Response Time' },
]

export default function Hero() {
  const [currentLang, setCurrentLang] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const lang = languages[currentLang]
    let i = 0
    setDisplayText('')
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (i <= lang.length) {
        setDisplayText(lang.slice(0, i))
        i++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        setTimeout(() => {
          setCurrentLang((prev) => (prev + 1) % languages.length)
        }, 1500)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentLang])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 pt-20">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-50 dark:bg-blue-800/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                AI-Powered Translation Platform
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Speak to the
                <br />
                <span className="gradient-text">World</span> in
                <br />
                <span className="text-blue-600 relative">
                  {displayText}
                  <span className={`inline-block w-1 h-12 lg:h-14 bg-blue-600 ml-1 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`} />
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Break language barriers instantly. Real-time AI translation for
                <strong className="text-gray-800 dark:text-gray-200"> text, voice, documents and meetings</strong>.
                Save time. Close more deals. Go global.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Translate in 100+ languages with 99.2% accuracy',
                'Real-time voice & meeting translation',
                'Documents, audio files & video translation',
                'GDPR compliant & enterprise secure',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/signup"
                className="group flex items-center justify-center gap-2 blue-gradient text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-all glow shadow-xl shadow-blue-500/30 text-lg"
              >
                Start Free 7-Day Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#demo"
                className="group flex items-center justify-center gap-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br ${
                    i === 1 ? 'from-blue-400 to-blue-600' :
                    i === 2 ? 'from-purple-400 to-purple-600' :
                    i === 3 ? 'from-green-400 to-green-600' :
                    i === 4 ? 'from-yellow-400 to-yellow-600' :
                    'from-red-400 to-red-600'
                  }`} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">50,000+</strong> businesses trust TranscriptAI
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">

            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-6 animate-float">

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-500 font-mono">TranscriptAI Live</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 mb-2 font-medium">English (Source)</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    &quot;We are pleased to confirm the partnership agreement for Q4.&quot;
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
                  <div className="blue-gradient p-2 rounded-xl">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-600 via-blue-600 to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { flag: 'JP', lang: 'Japanese', text: 'Q4の提携契約を確認します' },
                    { flag: 'SA', lang: 'Arabic', text: 'يسعدنا تأكيد اتفاقية الشراكة' },
                    { flag: 'ES', lang: 'Spanish', text: 'Confirmamos el acuerdo de asociación' },
                    { flag: 'DE', lang: 'German', text: 'Wir bestätigen die Partnerschaft' },
                  ].map((item, i) => (
                    <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 border border-blue-100 dark:border-blue-800">
                      <p className="text-xs text-gray-400 mb-1">{item.flag} {item.lang}</p>
                      <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 rounded-xl p-3 border border-green-100 dark:border-green-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-700 dark:text-green-400 font-medium">Translated in 0.3s</span>
                  </div>
                  <span className="text-xs text-gray-500">4 languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.number}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-8">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40 dark:opacity-30">
            {['Microsoft', 'Salesforce', 'HubSpot', 'Zendesk', 'Stripe'].map((company) => (
              <span key={company} className="text-xl font-bold text-gray-600 dark:text-gray-400">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
