import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import Logo from '@/components/Logo';
import utilStyles from '@/styles/utils.module.css';

const NavBar = ({ name }) => {
  const [isOpen, setOpen] = useState(true);
  useEffect(function mount() {
    const setNav = () => {
      if (window.innerWidth > 750) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    setNav();
    window.addEventListener('resize', setNav);
    return function unMount() {
      window.removeEventListener('resize', setNav);
    };
  }, []);

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
          <Logo />
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
              <span className={utilStyles.visuallyHidden}>Close Menu</span>
              <FaTimes />
            </button>
            <div
              className={utilStyles.flexContainer}
              id="mobile-links"
              role="navigation"
              aria-expanded="false"
            >
              <Link href="/resume/">
                <a>Resume</a>
              </Link>
              <Link href="/projects/">
                <a>Portfolio</a>
              </Link>
              <Link href="/contact/">
                <a>Contact</a>
              </Link>
              <a
                href="https://github.com/ItaiAxelrad"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <span className={utilStyles.visuallyHidden}>
                  GitHub profile
                </span>
                <FaGithub style={{ height: '1.5rem' }} />
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
            <span className={utilStyles.visuallyHidden}>Open Menu</span>
            <FaBars />
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;
