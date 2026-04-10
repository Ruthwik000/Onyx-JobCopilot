import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import JobSprintSection from './components/JobSprintSection'
import MentorSection from './components/MentorSection'
import ChatSupportSection from './components/ChatSupportSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080F]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MentorSection />
      <JobSprintSection />
      <ChatSupportSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
