'use client'

import { useState } from 'react'
import {
  Mic, FileText, Users, Camera,
  Brain, Globe, Zap, Check, ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Real-Time Voice Translation',
    description: 'Speak naturally and hear instant translations. Perfect for international calls, meetings, and conversations.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    benefits: ['0.3s response time', 'Auto speaker detection', '100+ languages', 'Noise filtering'],
    tag: 'Most Popular'
  },
  {
    icon: FileText,
    title: 'Document Translation',
    description: 'Upload any document and get professional-quality translation preserving original formatting.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    benefits: ['PDF, Word, Excel', 'Format preserved', 'Bulk upload', 'Instant download'],
    tag: null
  },
  {
    icon: Users,
    title: 'Meeting Translation',
    description: 'Join Zoom, Teams, or Meet with AI translation bot. Everyone hears in their own language.',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20',
    benefits: ['Zoom/Teams/Meet', 'Live captions', 'Auto summary', 'Action items'],
    tag: 'Business'
  },
  {
    icon: Camera,
    title: 'AR Camera Translation',
    description: 'Point camera at any text. Watch it transform instantly in your language. Like magic.',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    benefits: ['Menu reader', 'Sign translation', 'Real-time overlay', 'Works offline'],
    tag: null
  },
  {
    icon: Brain,
    title: 'Cultural Intelligence',
    description: 'Beyond words. Understands cultural context, warns about sensitive phrases, adapts tone.',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
    benefits: ['Cultural alerts', 'Tone selector', 'Idiom explanation', 'Business etiquette'],
    tag: 'Unique'
  },
  {
    icon: Globe,
    title: 'Voice Cloning',
    description: 'Speak Japanese but sound like YOU. Your voice, any language. Revolutionary technology.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    benefits: ['30sec voice sample', 'Natural output', 'Video messages', 'International calls'],
    tag: 'Premium'
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="features" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Powerful Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="gradient-text"> Go Global</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            One platform. All languages. Every format.
            Built for businesses that move fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer card-hover ${
                activeFeature === i
                  ? 'border-blue-600 shadow-xl shadow-blue-500/10'
                  : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'
              }`}
              onClick={() => setActiveFeature(i)}
            >
              {feature.tag && (
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                  feature.tag === 'Premium'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  feature.tag === 'Unique'
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                  feature.tag === 'Business'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {feature.tag}
                </div>
              )}

              <div className={`inline-flex p-3 rounded-2xl ${feature.bg} mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 blue-gradient text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-all glow shadow-xl shadow-blue-500/30"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
