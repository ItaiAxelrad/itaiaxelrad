'use client';

export function ContactForm() {
  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    // You can pass formData as a fetch body directly:
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formJson),
    });
  }

  return (
    <form method='post' onSubmit={handleSubmit} className='p-2 rounded-md'>
      <div className='flex flex-col gap-4'>
        <label>
          Email
          <input
            type='text'
            name='email'
            placeholder='your@email.com'
            className='rounded-md w-full border-slate-200 placeholder:text-slate-400 dark:bg-slate-800 dark:border-slate-700'
          />
        </label>
        <label>
          Subject
          <input
            type='text'
            name='subject'
            placeholder='Inquiry'
            className='rounded-md w-full border-slate-200 placeholder:text-slate-400 dark:bg-slate-800 dark:border-slate-700'
          />
        </label>
        <label>
          Message
          <textarea
            name='text'
            placeholder='Hello world'
            className='rounded-md w-full border-slate-200 placeholder:text-slate-400 dark:bg-slate-800 dark:border-slate-700'
          />
        </label>
        <button
          type='submit'
          role='link'
          className='block bg-blue-600 py-2 px-4 rounded-md font-semibold text-white hover:bg-blue-500 shadow-sm'
        >
          Send <span aria-hidden='true'>📧</span>
        </button>
      </div>
    </form>
  );
}
