'use client'

import { useState } from 'react'
import { Check, X, Star, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    inr: { monthly: 0, yearly: 0 },
    description: 'Perfect to get started',
    color: 'border-gray-200 dark:border-gray-700',
    buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    popular: false,
    features: [
      '1,000 words/day translation',
      '5 voice translations/day',
      '2 document uploads/month',
      '10 core languages',
      'Basic conversation mode',
      'Translation history (7 days)',
      null,
      null,
      null,
    ]
  },
  {
    name: 'Starter',
    price: { monthly: 19, yearly: 15 },
    inr: { monthly: 1599, yearly: 1199 },
    description: 'For individuals & freelancers',
    color: 'border-gray-200 dark:border-gray-700',
    buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    popular: false,
    features: [
      '50,000 words/month',
      '100 voice translations/month',
      '20 document uploads/month',
      'All 100+ languages',
      'Basic conversation mode',
      'Audio file translation',
      'Translation history (30 days)',
      'Email support',
      null,
    ]
  },
  {
    name: 'Professional',
    price: { monthly: 49, yearly: 39 },
    inr: { monthly: 3999, yearly: 3199 },
    description: 'For growing businesses',
    color: 'border-blue-600',
    buttonStyle: 'blue-gradient text-white hover:opacity-90',
    popular: true,
    features: [
      '200,000 words/month',
      'Unlimited voice translations',
      '100 document uploads/month',
      'All 100+ languages',
      'Smart conversation mode',
      'Meeting translation (10/month)',
      'AR camera + Menu reader',
      'Cultural intelligence engine',
      'Priority support',
    ]
  },
  {
    name: 'Business',
    price: { monthly: 149, yearly: 119 },
    inr: { monthly: 12499, yearly: 9999 },
    description: 'For teams & companies',
    color: 'border-gray-200 dark:border-gray-700',
    buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    popular: false,
    features: [
      'Unlimited words',
      'Unlimited everything',
      'Up to 10 team members',
      'Unlimited meetings',
      'Meeting summaries + AI analysis',
      'Glossary management',
      'Translation memory',
      'CRM integrations',
      'Analytics dashboard',
    ]
  },
  {
    name: 'Enterprise',
    price: { monthly: 499, yearly: 399 },
    inr: { monthly: 41999, yearly: 33999 },
    description: 'For large organizations',
    color: 'border-gray-900',
    buttonStyle: 'bg-gray-900 text-white hover:opacity-90',
    popular: false,
    features: [
      'Everything unlimited',
      'Up to 50 team members',
      'Voice cloning feature',
      'Legal/Medical platforms',
      'HIPAA + GDPR compliance',
      'SSO + Active Directory',
      'Custom AI training',
      'Dedicated account manager',
      'SLA guarantee + API access',
    ]
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')

  return (
    <section id="pricing" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start free. Upgrade when ready. Cancel anytime.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                billing === 'monthly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all relative ${
                billing === 'yearly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>

          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                currency === 'USD'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              $ USD
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                currency === 'INR'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              ₹ INR
            </button>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 text-center mb-10">
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            🎉 All paid plans include a <strong>7-day free trial</strong>. No credit card required to start.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white dark:bg-gray-900 rounded-3xl border-2 ${plan.color} p-6 flex flex-col card-hover ${
                plan.popular ? 'shadow-2xl shadow-blue-500/20 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="blue-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {currency === 'USD'
                      ? `$${plan.price[billing]}`
                      : `₹${plan.inr[billing].toLocaleString()}`
                    }
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-500 text-sm">/month</span>
                  )}
                </div>
                {billing === 'yearly' && plan.price.monthly > 0 && (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    Billed yearly
                  </p>
                )}
              </div>

              <div className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2">
                    {feature ? (
                      <>
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </>
                    ) : (
                      <>
                        <X className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 dark:text-gray-600">—</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={plan.price.monthly === 0 ? '/signup' : '/signup?plan=' + plan.name.toLowerCase()}
                className={`block text-center font-bold py-3 px-4 rounded-2xl transition-all ${plan.buttonStyle}`}
              >
                {plan.price.monthly === 0 ? 'Get Started Free' : 'Start Free Trial'}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
          All prices in {currency}. Taxes may apply. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
