'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'
import { PLANS } from '@/lib/constants'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Badge>Pricing</Badge>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mt-4">
            <span className="bg-gradient-to-r from-white to-brand bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Start free and upgrade as your needs grow.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={`text-sm ${!isAnnual ? 'text-white font-semibold' : 'text-text-secondary'}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-navy-600 rounded-full relative border border-brand/20 cursor-pointer"
            aria-label="Toggle billing period"
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-brand absolute top-1"
              animate={{ x: isAnnual ? 28 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-sm ${isAnnual ? 'text-white font-semibold' : 'text-text-secondary'}`}
          >
            Annual
          </span>
          <span className="bg-accent-green/20 text-accent-green text-xs px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {PLANS.map((plan, index) => {
            const annualPrice = (plan.monthlyPrice * 0.8).toFixed(2)
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-navy-700 rounded-2xl p-8 relative ${
                  plan.highlighted
                    ? 'border-2 border-brand shadow-[0_0_40px_rgba(114,168,232,0.12)]'
                    : 'border border-brand/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-navy-900 text-xs font-bold px-5 py-1 rounded-full">
                    Most popular
                  </div>
                )}

                <h3 className="font-display font-bold text-white text-xl mb-1">
                  {plan.name}
                </h3>
                <p className="text-text-secondary text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="h-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {plan.monthlyPrice === 0 ? (
                        <span className="text-4xl font-display font-bold text-white">
                          Free
                        </span>
                      ) : (
                        <div className="flex flex-col">
                          {isAnnual && (
                            <span className="text-text-secondary text-sm line-through">
                              ${plan.monthlyPrice}/mo
                            </span>
                          )}
                          <div>
                            <span className="text-4xl font-display font-bold text-white">
                              ${isAnnual ? annualPrice : plan.monthlyPrice}
                            </span>
                            <span className="text-text-secondary text-sm font-normal">
                              /mo
                            </span>
                          </div>
                          {isAnnual && (
                            <span className="text-xs text-text-secondary">
                              billed annually
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    variant={plan.highlighted ? 'filled' : 'outline'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Divider */}
                <div className="border-t border-brand/10 my-6" />

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-accent-green flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feat}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <XCircle size={16} className="text-text-secondary/30 flex-shrink-0" />
                      <span className="text-sm text-text-secondary/40">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Below cards */}
        <p className="text-center mt-8 text-text-secondary text-sm">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}
