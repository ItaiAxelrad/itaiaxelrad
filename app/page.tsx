import Hero from '@components/sections/Hero';
import Services from '@components/sections/Services';
import Stack from '@components/sections/Stack';
import Testimonials from '@components/sections/Testimonials';

export default function Page() {
  return (
    <div className='w-screen'>
      <Hero />
      <Services />
      <Testimonials />
      <Stack />
    </div>
  );
}
