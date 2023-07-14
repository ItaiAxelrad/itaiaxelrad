import ContactForm from '@components/ContactForm';
import Heading from '@components/Heading';

export default function Page() {
  return (
    <div className='max-w-2xl my-16 p-2'>
      <Heading>Contact</Heading>
      <p className='my-4'>
        Please feel free to reach out to me with any questions or inquiries.
      </p>
      <ContactForm />
    </div>
  );
}
