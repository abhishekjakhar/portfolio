import React, { useState } from 'react'
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

const Header = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true)

  let mobileLinkClass =
    'u-fontSize28 u-textColorNormal u-textColorDarkerHover u-width100Percent u-transition--transform300Spring'

  return (
    <header className="u-flex align-items-center u-width100Percent u-height80 u-top0 u-left0 u-backgroundColor u-zIndex9">
      <nav className="u-flex justify-content-between align-items-center u-width100Percent u-height100Percent mx-auto u-maxWidth1140 tabLand-pl-6 tabLand-pr-6 phone-pl-3 phone-pr-3 u-relative u-zIndex5">
        <Link href="/">
          <a
            className={`u-fontSize20 u-textColorDarker u-fontWeightBold`}
            aria-label="Return to homepage">
            Abhishek Jakhar
          </a>
        </Link>
        <ul className="u-lineHeight12 u-flex align-items-end justify-content-between u-phoneHide">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? 'u-lineHeight12'
                  : 'u-lineHeight12 ml-5 phone-ml-3'
              }>
              <ActiveLink
                href={item.link}
                activeClassName="u-textColorDarkest"
                replace>
                <a className="u-fontSize16 u-textColorNormal u-textColorDarkerHover u-transition--transform300Spring">
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
              {navigation.map((item, index) => (
                <li
                  className="u-width100Percent u-textAlignCenter pt-2 pb-2"
                  key={index}>
                  <ActiveLink
                    activeClassName="u-textColorDarkest"
                    href={item.link}
                    replace>
                    <a className={mobileLinkClass}>{item.name}</a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
