export default function ScribbleText({ children }) {
  return (
    <span className='relative whitespace-nowrap'>
      <svg
        aria-hidden='true'
        role='presentation'
        viewBox='-347 -30.1947 694 96.19'
        preserveAspectRatio='none'
        className='absolute -left-3 top-1/2 h-[1em] w-full fill-blue-500/70 '
      >
        <path
          d='M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2'
          stroke-width='8'
          fill='none'
          className='stroke-blue-500/70'
        />
      </svg>
      <span className='relative'>{children}</span>
    </span>
  );
}
