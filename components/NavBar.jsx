import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import Logo from '@/components/Logo';
import utilStyles from '@/styles/utils.module.css';

const NavBar = ({ name }) => {
  const [isOpen, setOpen] = useState(true);
  useEffect(function mount() {
    const setNav = () => {
      if (window.innerWidth > 700) {
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
          @media screen and (max-width: 700px) {
            nav {
              display: block;
              background: var(--light);
              padding: 0.5rem 0;
            }
            div#mobile-links {
              display: block;
              position: absolute;
              width: 100%;
              background: var(--light);
              box-shadow: 0 1rem 2rem var(--light);
            }
            div > a {
              display: block;
              font-size: larger;
              text-align: center;
              width: 100%;
              padding: 1rem;
              border-top: 1px solid var(--opaque);
            }
            div > a:last-of-type {
              border-bottom: 1px solid var(--opaque);
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
              className={utilStyles.close}
              onClick={() => setOpen(!isOpen)}
            >
              <span className={utilStyles.visuallyHidden}>Close Menu</span>
              <FaTimes />
            </button>
            <div
              className={utilStyles.flexContainer}
              id="mobile-links"
              role="navigation"
              aria-expanded="true"
              onClick={() => {
                window.innerWidth > 700 ? setOpen(isOpen) : setOpen(!isOpen);
              }}
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
            className={utilStyles.hamburger}
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
