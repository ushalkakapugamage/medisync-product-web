'use client'

import { useRef, useMemo } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Heart, Wifi, Battery } from 'lucide-react'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  x: (i * 137.5) % 100,
  y: (i * 97.3) % 100,
  duration: 3 + (i % 5),
  delay: (i * 0.3) % 3,
}))

const SHOWCASE_FEATURES = [
  {
    icon: Zap,
    iconColor: 'text-brand',
    heading: 'Instant fall detection',
    body: 'The ESP32 C3 SuperMini with MPU6050 sensor detects falls in milliseconds and immediately alerts your entire care network.',
    progress: 0.2,
  },
  {
    icon: Heart,
    iconColor: 'text-red-400',
    heading: 'Continuous health monitoring',
    body: 'Real-time motion tracking runs 24/7, building a picture of daily activity and flagging anomalies before they become emergencies.',
    progress: 0.4,
  },
  {
    icon: Wifi,
    iconColor: 'text-accent-green',
    heading: 'Always connected',
    body: 'Wi-Fi enabled and cloud-synced. Every event is logged, timestamped, and instantly visible to caregivers in the family dashboard.',
    progress: 0.6,
  },
  {
    icon: Battery,
    iconColor: 'text-brand',
    heading: 'All-day battery life',
    body: 'Designed to last through the day on a single charge, so the people you care about are always protected.',
    progress: 0.8,
  },
]

const SPEC_PILLS = [
  'ESP32 C3 SuperMini',
  'MPU6050 Sensor',
  'Wi-Fi Enabled',
  'Fall Detection AI',
]

export default function WearableShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const watchY = useTransform(scrollYProgress, [0, 0.15], [60, 0])
  const watchOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1])
  const watchScale = useTransform(scrollYProgress, [0, 0.15], [0.6, 1])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden bg-navy-900">
      {/* ── Background effects ── */}

      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 70, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-brand-dark/15 blur-[120px]"
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            className="absolute w-1 h-1 rounded-full bg-brand/30"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}
      </div>

      {/* Scan line */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Watch hero + feature reveal ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left: Feature reveal (desktop) */}
          <div className="hidden lg:flex flex-col gap-10 order-2 lg:order-1">
            {SHOWCASE_FEATURES.map((feat) => {
              const Icon = feat.icon
              return (
                <FeatureBlock
                  key={feat.heading}
                  icon={<Icon size={20} className={feat.iconColor} />}
                  heading={feat.heading}
                  body={feat.body}
                  scrollYProgress={scrollYProgress}
                  threshold={feat.progress}
                />
              )
            })}
          </div>

          {/* Right: Watch display */}
          <motion.div
            style={{ y: watchY, opacity: watchOpacity, scale: watchScale }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px] rounded-full border border-dashed border-brand/20"
              >
                {[0, 90, 180, 270].map((deg) => (
                  <span
                    key={deg}
                    className="absolute w-2 h-2 rounded-full bg-brand top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${deg}deg) translateX(calc(50% + 10px)) translate(-50%, -50%)`,
                      transformOrigin: '0 0',
                    }}
                  />
                ))}
              </motion.div>

              {/* Counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-10px] rounded-full border border-brand/10"
              />

              {/* Glow halo */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    '0 0 80px rgba(114,168,232,0.2), 0 0 160px rgba(114,168,232,0.1)',
                }}
              />

              {/* Watch image with float */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0, y: 60 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={{ y: [0, -16, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/wearable.png"
                    alt="MediSync Band wearable device"
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 480px"
                    className="object-contain drop-shadow-2xl relative z-10"
                  />
                  {/* Shine overlay */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none rounded-full"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(114,168,232,0.05) 100%)',
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Status badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="absolute -top-4 -left-4 lg:-left-16 z-30 bg-navy-700/90 backdrop-blur-sm border border-brand/20 rounded-2xl px-4 py-3 flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-dot" />
                <div>
                  <div className="text-white text-xs font-medium">Fall Detection</div>
                  <div className="text-accent-green text-xs">Active</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/4 -right-4 lg:-right-20 z-30 bg-navy-700/90 backdrop-blur-sm border border-brand/20 rounded-2xl px-4 py-3 flex items-center gap-3"
              >
                <Battery size={16} className="text-brand" />
                <div>
                  <div className="text-white text-xs font-medium">Battery</div>
                  <div className="text-brand text-xs font-bold">87%</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 bg-navy-700/90 backdrop-blur-sm border border-brand/20 rounded-2xl px-4 py-3 flex items-center gap-3"
              >
                <Heart size={16} className="text-red-400" />
                <div>
                  <div className="text-white text-xs font-medium">Heart Rate</div>
                  <div className="text-red-400 text-xs font-bold">72 BPM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile feature list */}
          <div className="flex lg:hidden flex-col gap-8 order-3">
            {SHOWCASE_FEATURES.map((feat) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-1 rounded-full bg-brand flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className={feat.iconColor} />
                      <h3 className="font-display font-semibold text-white text-lg">
                        {feat.heading}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feat.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20 lg:mt-32"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-brand to-brand-dark bg-clip-text text-transparent">
              Meet the MediSync Band
            </span>
          </h2>
          <p className="text-text-secondary text-xl mt-4">
            Engineered for safety. Designed for life.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {SPEC_PILLS.map((spec) => (
              <span
                key={spec}
                className="bg-navy-700 border border-brand/10 rounded-full px-6 py-3 text-sm text-text-secondary"
              >
                {spec}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Feature block with scroll-driven opacity ── */
function FeatureBlock({
  icon,
  heading,
  body,
  scrollYProgress,
  threshold,
}: {
  icon: React.ReactNode
  heading: string
  body: string
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  threshold: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold + 0.04],
    [0, 1],
  )
  const x = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold + 0.04],
    [-30, 0],
  )

  return (
    <motion.div style={{ opacity, x }} className="flex gap-4">
      <div className="w-1 rounded-full bg-brand flex-shrink-0" />
      <div>
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="font-display font-semibold text-white text-lg">
            {heading}
          </h3>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
      </div>
    </motion.div>
  )
}
