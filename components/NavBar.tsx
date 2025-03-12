/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Center, Header, Image, Drawer, Burger, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

const Links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/committee', label: 'Committee' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/papers', label: 'Call for Papers' },
  { href: '/awards', label: 'Awards' },
  { href: '/registration', label: 'Registration' },
  { href: '/sponsorship', label: 'Sponsors' },
  { href: '/tracks', label: 'Tracks' },
  { href: '/contact', label: 'Contact Us' },
]

const MobileNav = ({ opened, onClose }: { opened: boolean; onClose: () => void }) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      // title={
      //   <div className="flex items-center space-x-3">
      //     <Image
      //       src="RVCE NEW-HEADER_onlyLogo.png"
      //       alt="CSITSS Logo"
      //       width={40}
      //       height={40}
      //     />
      //     <span className="text-blue-900 font-semibold text-xl">CSITSS</span>
      //   </div>
      // }
      padding="xl"
      size="xs"
      position="right"
      zIndex={1000}
      styles={{
        drawer: {
          background: 'white',
        },
        title: {
          marginBottom: '1rem',
        },
      }}
    >
      <div className="flex flex-col space-y-4">
        {Links.map((link) => (
          <Link href={link.href} key={link.label}>
            <a
              onClick={onClose}
              className="text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200 text-lg font-medium"
            >
              {link.label}
            </a>
          </Link>
        ))}
        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="text-blue-700 font-semibold text-lg px-4 mb-3">
            Download Links
          </p>
          {/* Add your download links here */}
        </div>
      </div>
    </Drawer>
  )
}

const NavBar = () => {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] = useDisclosure(false);

  return (
    <header>
      <div className="navbar mx-auto w-full bg-gradient-to-r from-blue-900 to-blue-700 p-2 shadow-lg">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center pl-4 md:pl-8 lg:pl-14 transition-transform duration-300 ease-in-out">
                <div className="bg-white rounded-full p-2.5 shadow-md hover:shadow-yellow-300/50 hover:shadow-lg transition-all duration-300">
                  <Image
                    src="RVCE NEW-HEADER_onlyLogo.png"
                    alt="CSITSS Logo"
                    className="logo w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px]"
                    width={60}
                    height={60}
                  />
                </div>
              </a>
            </Link>
          </div>

          <nav className="hidden space-x-8 lg:space-x-12 text-1.5xl font-medium md:flex p-4">
            {Links.filter(link => 
              ['Home', 'About', 'Call for Papers', 'Registration', 'Contact Us'].includes(link.label)
            ).map((link) => (
              <Link href={link.href} key={link.label}>
                <a className="nav-link text-white font-sans font-medium transition-colors duration-300 hover:text-yellow-200">
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end space-x-8 md:flex-1 lg:flex lg:w-0 pr-4 md:pr-8 lg:pr-16">
            <Menu
              shadow="md"
              position="bottom"
              withinPortal
              closeOnItemClick
              styles={{
                item: { minWidth: '240px' },
                itemLabel: { fontSize: '1.1rem' },
              }}
              control={
                <button
                  className="bg-blue-800 hover:bg-blue-900 rounded-lg py-2.5 px-4 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                  type="button"
                  name="More Options"
                >
                  <span className="text-1.5xl mr-2 hidden lg:inline font-normal">More</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              }
            >
              <Menu.Label>
                <p className="font-sans text-blue-700 font-semibold text-1.5xl px-2 pb-1 border-b border-gray-600">Conference Links</p>
              </Menu.Label>
              {Links.filter(link => 
                !['Home', 'About', 'Call for Papers', 'Registration', 'Contact Us'].includes(link.label)
              ).map((link) => (
                <Menu.Item key={link.label}>
                  <Link href={link.href}>
                    <a className="font-sans text-gray-800 hover:text-blue-700 hover:bg-blue-50 block w-full py-2 px-3 rounded transition-colors duration-200 text-1.5xl">
                      {link.label}
                    </a>
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Label>
                <p className="font-sans text-blue-400 font-semibold text-1.5xl mt-2 px-2 pb-1 border-b border-gray-100">
                  Download Links
                </p>
              </Menu.Label>
            </Menu>
          </div>

          <div className="lg:hidden pr-4">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              color="white"
              size="sm"
              className="hover:bg-blue-800 rounded p-1 transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      <MobileNav opened={mobileOpened} onClose={closeMobile} />

      <div className="bg-blue-800 bg-opacity-25 text-white py-0 z-10 border-t border-blue-600 border-opacity-50 shadow-md">
        <Marquee className="marquee overflow-hidden z-10" speed={40} gradientWidth={50}>
          <div className="content1 flex items-center">
            <span className="ml-20 font-medium text-white text-1xl">
              <span className="text-yellow-300 font-bold mr-2">Important Notice :</span> 
              Our website is currently under construction.  | 
              <span className="ml-2 text-yellow-200">Stay tuned for updates from IEEE CSITSS!</span>
            </span>
          </div>
        </Marquee>
      </div>

      <style jsx>{`
        .navbar {
          animation: fadeIn 0.8s ease-in-out;
          backdrop-filter: blur(10px);
        }
        .logo {
          transition: transform 0.3s;
        }
        .logo:hover {
          transform: scale(1.05);
        }
        .nav-link {
          position: relative;
          transition: color 0.3s, border-bottom 0.3s;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #fef08a;
          transition: all 0.3s ease-in-out;
        }
        .nav-link:hover::before {
          width: 100%;
        }
        .marquee {
          margin-top: 0;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 1024px) {
    .lg\\:hidden {
      display: flex !important;
    }
    .lg\\:flex {
      display: none !important;
    }
    .nav-link {
      font-size: 19px;
    }
  }
      `}</style>
    </header>
  );
}

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
            <a href="/" className="transition-transform duration-300 hover:scale-105">
              <img 
              src="/logo_rvce.jpg" 
              alt="RVCE logo" 
              className="h-20 w-20 rounded-full bg-white p-1 shadow-md transition-shadow duration-300 hover:shadow-yellow-300/50 hover:shadow-lg" 
              />
            </a>
            </div>
          
            <div className="flex justify-center relative">
              <img
              src="https://i.ibb.co/dBDxKQt/GO-CHANGE-THE-WORLD.png"
              alt="GO-CHANGE-THE-WORLD"
              className="h-16 object-contain"
              style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 10, 1)) drop-shadow(0 0 10px rgba(255, 255, 10, 1))' }}
              />
            </div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h1 className="text-xl font-bold uppercase text-yellow-300">
              RV College of Engineering
            </h1>
            <h2 className="text-base text-blue-100 mt-1">
              RV Vidyanikethan Post, Mysuru Road<br />Bengaluru - 560059
            </h2>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div>
            <p className="text-base text-blue-100">
              &copy; 2022
              {new Date().getFullYear() > 2022
                ? `-${new Date().getFullYear()}`
                : ''}{' '}
              IEEE RVCE
            </p>
          </div>
          
          {/* Developer Credits */}
          <div className="mt-4 md:mt-0">
            <p className="text-base text-blue-200">
              <span className="block md:inline text-center">Developed by</span>{' '}
              <a
                target="_blank"
                className="font-bold text-yellow-300 hover:text-yellow-200 transition-colors duration-300 inline-flex items-center group"
                href="https://ieee-rvce.org/#/devs"
                rel="noreferrer"
              >
                IEEE RVCE SE Team
                <svg 
                  className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 500px) {
          footer {
            padding: 10px;
          }
          .text-xs {
            font-size: 14px;
          }
        }
        @media (max-width: 1035px) {
          .abc {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

const WrapApp = ({ children }: any) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={80}>
          <NavBar />
        </Header>
      }
      footer={<Footer />}
    >
      {children}
    </AppShell>
  )
}

export default WrapApp