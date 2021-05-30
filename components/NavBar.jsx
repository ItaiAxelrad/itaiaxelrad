import { useState, useEffect } from 'react';
import Link from 'next/link';
import utilStyles from '@/styles/utils.module.css';

const NavBar = ({ name }) => {
  const [isOpen, setOpen] = useState(true);
  useEffect(function mount() {
    function onResize() {
      console.log(window.innerWidth);
      if (window.innerWidth > 750) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

    window.addEventListener('resize', onResize);

    return function unMount() {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <>
      <style jsx>
        {`
          button {
            display: none;
          }
          @media screen and (max-width: 750px) {
            nav {
              display: block;
              background: var(--light);
            }
            div#mobile-links {
              display: block;
              position: absolute;
              background: var(--light);
              width: 100%;
            }
            div > a {
              display: block;
              text-align: center;
              width: 100%;
              padding: 0.75rem;
            }
            button {
              display: inline-block;
            }
          }
        `}
      </style>
      <nav>
        <div className={utilStyles.flexContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 36"
            aria-hidden="true"
            focusable="false"
            className={utilStyles.logo}
            style={{ padding: '0' }}
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
          <strong className={utilStyles.headingLg}>
            <Link href="/">
              <a className={`${utilStyles.colorInherit} ${utilStyles.home}`}>
                {name}
              </a>
            </Link>
          </strong>
        </div>
        {isOpen ? (
          <>
            <button
              style={{
                pointerEvents: 'all',
                background: 'transparent',
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
              }}
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                height="1.3rem"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
            <div
              className={utilStyles.flexContainer}
              id="mobile-links"
              role="navigation"
              aria-expanded="false"
            >
              <a href="/resume/">Resume</a>
              <a href="/projects/">Portfolio</a>
              <a href="/contact/">Contact</a>
              <a
                href="https://github.com/ItaiAxelrad"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  width="1.2rem"
                  height="1.2rem"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
            </div>
          </>
        ) : (
          <button
            style={{
              pointerEvents: 'all',
              background: 'transparent',
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
            }}
            onClick={() => setOpen(!isOpen)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="1.3rem"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;
