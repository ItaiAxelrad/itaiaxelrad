'use client';

import Button from '@components/Button';

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
            required
            type='text'
            name='email'
            placeholder='your@email.com'
            className='rounded-md w-full border-slate-200 placeholder:text-slate-400 dark:bg-slate-800 dark:border-slate-700'
          />
        </label>
        <label>
          Subject
          <input
            required
            type='text'
            name='subject'
            placeholder='Inquiry'
            className='rounded-md w-full border-slate-200 placeholder:text-slate-400 dark:bg-slate-800 dark:border-slate-700'
          />
        </label>
        <label>
          Message
          <textarea
            required
            name='text'
            placeholder='Hello world'
            className='rounded-md w-full border-slate-200 placeholder:text-slate-400 dark:bg-slate-800 dark:border-slate-700'
          />
        </label>
        <Button type='submit' role='link'>
          Send{' '}
          <span aria-hidden='true' role='img' className='ml-2'>
            📧
          </span>
        </Button>
      </div>
    </form>
  );
}
