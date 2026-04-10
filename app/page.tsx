import HeroSection from '@/components/HeroSection'
import SocialProofBar from '@/components/SocialProofBar'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorks from '@/components/HowItWorks'
import FallDetectionSpotlight from '@/components/FallDetectionSpotlight'
import PricingSection from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'
import WearableShowcase from '@/components/WearableShowcase'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProofBar />
      <FeaturesSection />
      <HowItWorks />
      <WearableShowcase />  
      <FallDetectionSpotlight />
      <PricingSection />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
