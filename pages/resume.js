import Layout from '../components/Layout'
import Container from '../components/Container'
import resume from '../data/resume'

const Resume = () => {
  const { work, education, skills, certification } = resume
  return (
    <Layout>
      <section>
        <main className={`mb-2 u-flex align-items-center`}>
          <h2
            className={`u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf`}>
            Work Experience
          </h2>
        </main>
        {work.map((resume, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column u-textColorDark mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {resume.year}
                </p>
              </div>
              <div className="u-flex25 phone-mb-2">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {resume.company}
                </p>
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {resume.position}
                </p>
              </div>
              <div className="u-flex50">
                <ul className="u-listStyleTypeDisc u-textColorDarker pl-4 phone-pl-8">
                  {resume.achievements.map((item, index) => (
                    <li
                      key={index.toString()}
                      className={`${
                        resume.achievements.length === index + 1
                          ? 'mb-0'
                          : 'mb-1'
                      } u-fontSize16`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </section>
      <section>
        <main className={`mb-2 u-flex align-items-center`}>
          <h2
            className={`u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf`}>
            Education
          </h2>
        </main>
        {education.map((education, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {education.year}
                </p>
              </div>
              <div className="u-flex25 phone-mb-2">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {education.institution}
                </p>
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {education.program}
                </p>
              </div>
              <div className="u-flex50">
                <ul className="u-listStyleTypeDisc u-textColorDarker pl-4 phone-pl-8">
                  {education.classes.map((item, index) => (
                    <li
                      key={index.toString()}
                      className={`${
                        education.classes.length === index + 1 ? 'mb-0' : 'mb-1'
                      } u-fontSize16`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </section>
      <section>
        <main className={`mb-2 u-flex align-items-center`}>
          <h2
            className={`u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf`}>
            Skills + Software
          </h2>
        </main>
        {skills.map((skills, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {skills.type}
                </p>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ul className="u-listStyleTypeDisc u-textColorDarker pl-4 phone-pl-8">
                  {skills.skills.map((item, index) => (
                    <li
                      key={index.toString()}
                      className={`${
                        skills.skills.length === index + 1 ? 'mb-0' : 'mb-1'
                      } u-fontSize16`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </section>
      <section>
        <main className={`mb-2 u-flex align-items-center`}>
          <h2
            className={`u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf`}>
            Certifications
          </h2>
        </main>
        {certification.map((certi, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {certi.year}
                </p>
              </div>
              <div className="phone-mb-2">
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {certi.institution}
                </p>
                <p className="u-textColorDarker fontWeightRegular u-fontSize16">
                  {certi.program}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Resume
