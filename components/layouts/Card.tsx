export default function Card({ children }) {
  return (
    <div className='miw-12 bg-white ring-1 ring-slate-200 shadow-sm shadow-blue-500/40 rounded-md p-4 dark:bg-slate-800 dark:ring-slate-700'>
      {children}
    </div>
  );
}
