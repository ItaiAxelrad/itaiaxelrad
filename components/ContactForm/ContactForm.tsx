export function ContactForm() {
  return (
    <form data-netlify='true' netlify-honeypot='bot-field'>
      <div hidden aria-hidden='true'>
        <label>
          Do not fill this out if you are human:
          <input name='bot-field' />
        </label>
      </div>
      <div>
        <label className='block'>Email</label>
        <input
          type='text'
          placeholder='your@email.com'
          className='rounded-md w-full border-slate-200 placeholder:text-slate-400'
        />
        <label className='block mt-4'>Message</label>
        <textarea
          placeholder='Hello world'
          className='rounded-md w-full border-slate-200 placeholder:text-slate-400'
        />
        <button
          type='submit'
          role='link'
          className='my-4 block bg-blue-600 py-2 px-4 rounded-md font-semibold text-white hover:bg-blue-500 shadow-sm'
        >
          Send <span aria-hidden='true'>📧</span>
        </button>
      </div>
    </form>
  );
}
