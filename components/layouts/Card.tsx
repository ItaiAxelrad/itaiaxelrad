export default function Card({ children }) {
  return (
    <div className='bg-white ring-1 ring-slate-200 shadow-sm rounded-md p-4 dark:bg-slate-800 dark:ring-slate-700'>
      {children}
    </div>
  );
}
