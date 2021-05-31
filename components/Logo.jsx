import utilStyles from '@/styles/utils.module.css';

const Logo = () => {
  return (
    <>
      <style jsx>
        {`
          .logo {
            color: var(--brand);
            fill: var(--brand);
            display: inline-block;
            height: 1.25rem;
            padding: 0;
            margin-inline-end: 0.75rem;
          }
          @media screen and (max-width: 700px) {
            .logo {
              margin-inline: 1rem;
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45 36"
        height="1.5rem"
        width="1.5rem"
        aria-hidden="true"
        focusable="false"
        className="logo"
      >
        <g id="logo">
          <path
            id="mountain"
            d="M44.643,32.534l-20.25-31.5a2.25,2.25,0,0,0-3.786,0L.357,32.534A2.25,2.25,0,0,0,2.25,36h40.5a2.25,2.25,0,0,0,1.893-3.466ZM22.5,6.411l6,9.339h-6L18,20.25l-2.676-2.676Z"
            fill="dodgerblue"
          />
          <path
            id="tint"
            transform="translate(12.439 3.911)"
            fill="#fff"
            d="M11.66,1.294a1.712,1.712,0,0,0-3.32,0C5.682,10.538,0,13.05,0,19.565A10.218,10.218,0,0,0,10,30,10.218,10.218,0,0,0,20,19.565c0-6.548-5.67-8.985-8.34-18.271ZM10,26.25a6.473,6.473,0,0,1-6.364-6.562.91.91,0,1,1,1.818,0A4.624,4.624,0,0,0,10,24.375a.938.938,0,0,1,0,1.875Z"
          />
        </g>
      </svg>
    </>
  );
};

export default Logo;
