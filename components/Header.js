import { useState } from 'react'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import Hamburger from './Hamburger'

const navigation = [
  {
    name: 'Portfolio',
    link: '/',
  },
  {
    name: 'Blogs',
    link: '/blogs',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Resume',
    link: '/resume',
  },
]

export default function Header() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true)

  return (
    <header className="u-flex align-items-center u-width100Percent u-height80 u-top0 u-left0 u-backgroundColor u-zIndex9 sticky">
      <nav className="u-flex justify-content-between align-items-center u-width100Percent u-height100Percent mx-auto u-maxWidth980 tabLand-pl-6 tabLand-pr-6 phone-pl-3 phone-pr-3 u-relative u-zIndex5">
        <Link href="/">
          <a
            className="u-fontSize20 u-textColorDarker u-fontWeightBold"
            aria-label="Return to homepage">
            Abhishek Jakhar
          </a>
        </Link>
        <ul className="u-flex align-items-end justify-content-between u-phoneHide">
          {navigation.map((item, index) => (
            <li
              key={`${item.name}-desktop`}
              className={index === 0 ? 'ml-0' : 'ml-3 phone-ml-3'}>
              <ActiveLink href={item.link} activeClassName="link-active">
                <a className="link u-fontSize16 u-textColorNormal u-textColorDarkerHover u-transition--transform300Spring">
                  {item.name}
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
        <div className="u-phoneShow">
          <Hamburger
            isCollapsed={isMenuCollapsed}
            toggleHandler={setIsMenuCollapsed}
          />
        </div>
      </nav>
      {!isMenuCollapsed ? (
        <div className="u-fixed u-backgroundColorWhite u-bottom0 u-left0 u-width100Percent u-height100Percent u-zIndex1">
          <nav className="u-relative u-width100Percent u-height100Percent">
            <ul className="u-flex f-column align-items-center u-width100Percent u-absolute u-top50Percent u-transformYNegative50pct">
              {navigation.map(item => (
                <li
                  className="u-width100Percent u-textAlignCenter pt-2 pb-2"
                  key={`${item.name}-mobile`}>
                  <ActiveLink
                    activeClassName="u-textColorDarkest"
                    href={item.link}
                    replace>
                    <a className="u-fontSize28 u-textColorNormal u-textColorDarkerHover u-width100Percent u-transition--transform300Spring">
                      {item.name}
                    </a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
      <style jsx>{`
        header.sticky {
          position: sticky;
          top: 0;
        }

        .link {
          transition: all 250ms;
          padding: 0.6rem 1rem;
          border-radius: 4px;
        }

        .link:hover,
        .link-active {
          color: var(--text-color-darkest);
          background-color: var(--color-link);
        }
      `}</style>
    </header>
  )
}
