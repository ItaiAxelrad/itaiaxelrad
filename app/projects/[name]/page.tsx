export default function Page({ params }) {
  return (
    <div className='max-w-2xl my-16 p-2'>
      <h2 className='my-6 font-semibold text-2xl text-center text-slate-600 dark:text-slate-400'>
        {params.name}
      </h2>
      <p>Some info goes here...</p>
    </div>
  );
}
