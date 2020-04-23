import Layout from '../components/Layout'
import ResumeList from '../components/ResumeList'
import ResumeHeading from '../components/ResumeHeading'
import ResumeCopy from '../components/ResumeCopy'
import resume from '../data/resume'

const Resume = () => {
  const { work, education, skills, certification } = resume
  return (
    <Layout>
      <section>
        <ResumeHeading>Work Experience</ResumeHeading>
        {work.map((work, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column u-textColorDark mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{work.year}</ResumeCopy>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ResumeCopy>{work.company}</ResumeCopy>
                <ResumeCopy>{work.position}</ResumeCopy>
              </div>
              <div className="u-flex50">
                <ResumeList list={work.list} />
              </div>
            </div>
          )
        })}
      </section>
      <section>
        <ResumeHeading>Education</ResumeHeading>
        {education.map((education, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{education.year}</ResumeCopy>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ResumeCopy>{education.institution}</ResumeCopy>
                <ResumeCopy>{education.program}</ResumeCopy>
              </div>
              <div className="u-flex50">
                <ResumeList list={education.list} />
              </div>
            </div>
          )
        })}
      </section>
      <section>
        <ResumeHeading>Skills + Software</ResumeHeading>
        {skills.map((skills, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{skills.type}</ResumeCopy>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ResumeList list={skills.list} />
              </div>
            </div>
          )
        })}
      </section>
      <section>
        <ResumeHeading>Certifications</ResumeHeading>
        {certification.map((certi, index) => {
          return (
            <div
              className="u-flex f-row phone-f-column mb-8 phone-mb-6"
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{certi.year}</ResumeCopy>
              </div>
              <div className="phone-mb-2">
                <ResumeCopy>{certi.institution}</ResumeCopy>
                <ResumeCopy>{certi.program}</ResumeCopy>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Resume
