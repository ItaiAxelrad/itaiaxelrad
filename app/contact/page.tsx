import ContactForm from '@components/ContactForm';

function ContactPage() {
  return (
    <div className='max-w-2xl my-16 p-2'>
      <h2 className='my-6 font-semibold text-2xl text-center text-slate-600 dark:text-slate-400'>
        Contact
      </h2>
      <p className='my-4'>
        Please feel free to reach out to me with any questions or inquiries.
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
