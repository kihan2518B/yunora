import { HeroSection } from '@/components/HeroSection';
import { CollectionSection } from '@/components/CollectionSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { BlogSection } from '@/components/BlogSection';
import { InspirationSection } from '@/components/InspirationSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CollectionSection />
        <WhyChooseSection />
        <BlogSection />
        <InspirationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
