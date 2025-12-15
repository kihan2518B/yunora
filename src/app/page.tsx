import HeroSection from '@/components/HeroSection';
import { CollectionSection } from '@/components/CollectionSection';
import { BlogSection } from '@/components/BlogSection';
import { InspirationSection } from '@/components/InspirationSection';
import { FAQSection } from '@/components/FAQSection';
import Header  from '@/components/Header';
import { PopularProductsSection } from '@/components/PopularProductsSection';
import { GeoDeliverySection } from '@/components/GeoDeliverySection';
import BrandStorySection from '@/components/BrandStorySection';
import WhyChooseSection from '@/components/WhyChooseSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <main className='px-20'>
        <CollectionSection />
        <PopularProductsSection />
        <WhyChooseSection />
        <GeoDeliverySection/>
        <BrandStorySection />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
