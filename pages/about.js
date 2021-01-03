import Head from 'next/head'
import Layout from '../components/Layout'
import {
  aboutHeading,
  aboutCopyFirst,
  aboutCopySecond,
  aboutCopyThird,
  author,
  aboutPage,
} from '../config/website'

const socialMenu = [
  {
    id: 1,
    link: 'https://medium.com/@abhishekjakhar',
    name: 'Medium',
  },
  {
    id: 2,
    link: 'https://github.com/abhishekjakhar',
    name: 'Github',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/abhishekjakhar',
    name: 'Linkedin',
  },
]

export default function About() {
  return (
    <Layout>
      <Head>
        <title>
          {aboutPage} | {author}
        </title>
      </Head>
      <div className="mb-12 u-flex f-column">
        <div className="mb-8 phone-mb-6 u-width100Percent">
          <h2 className="u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf">
            {aboutHeading}
          </h2>
        </div>
        <div className="mb-8 phone-mb-6 u-width70Percent u-phone-width100Percent">
          <div className="mb-4">
            <p className="u-textColorDarker u-fontSize16">{aboutCopyFirst}</p>
          </div>
          <div className="mb-4">
            <p className="u-textColorDarker u-fontSize16">{aboutCopySecond}</p>
          </div>
          <div className="mb-4">
            <p className="u-textColorDarker u-fontSize16">{aboutCopyThird}</p>
          </div>
        </div>
        <nav>
          <ul className="u-flex f-row">
            {socialMenu.map(item => (
              <li
                className="u-cursorPointer u-transition-all150Ease mr-4"
                key={item.id.toString()}>
                <a
                  className="u-fontWeight u-textColorDarker link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .link {
          box-shadow: 0 1px 0 0 currentColor;
          background-color: transparent;
        }

        .link:hover,
        .link:active {
          box-shadow: none;
          outline-width: 0;
        }
      `}</style>
    </Layout>
  )
}
