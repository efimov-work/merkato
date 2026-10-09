import Calculator from '@/components/Calculator';
import Complex from '@/components/Complex';
import Figures from '@/components/Figures';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Infrastructure from '@/components/Infrastructure';
import Location from '@/components/Location';
import Management from '@/components/Management';
import Market from '@/components/Market';
import Motion from '@/components/Motion';
import Plans from '@/components/Plans';
import Request from '@/components/Request';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Figures />
        <Market />
        <Complex />
        <Infrastructure />
        <Gallery />
        <Plans />
        <Calculator />
        <Management />
        <Location />
        <Request />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
