import ContactForm from '@components/ContactForm';

function ContactPage() {
  return (
    <div className='max-w-2xl my-8 p-2'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-10' />
      <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-20deg] bg-white shadow-xl shadow-blue-400/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
      <h2 className='text-2xl text-center my-6'>Contact</h2>
      <p className='my-4'>
        Please feel free to reach out to me with any questions or inquiries.
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
