import Hero from './sections/Hero';
import Services from './sections/Services';
import Stack from './sections/Stack';
import Testimonials from './sections/Testimonials';

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
