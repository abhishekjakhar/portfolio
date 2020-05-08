import Head from 'next/head'
import Layout from '../components/Layout'
import ResumeList from '../components/ResumeList'
import ResumeHeading from '../components/ResumeHeading'
import ResumeCopy from '../components/ResumeCopy'
import Divider from '../components/Divider'
import resume from '../data/resume'
import { author, resumePage } from '../config/website'

const Resume = () => {
  const { work, education, skills, certification } = resume
  return (
    <Layout>
      <Head>
        <title>
          {resumePage} | {author}
        </title>
      </Head>
      <section>
        <ResumeHeading>Work Experience</ResumeHeading>
        {work.map((w, index) => {
          return (
            <div
              className={`u-flex f-row phone-f-column u-textColorDark ${
                work.length === index + 1 ? '' : 'mb-8 phone-mb-6'
              }`.trim('')}
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{w.year}</ResumeCopy>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ResumeCopy>{w.company}</ResumeCopy>
                <ResumeCopy>{w.position}</ResumeCopy>
              </div>
              <div className="u-width100Percent">
                <ResumeList list={w.list} />
              </div>
            </div>
          )
        })}
      </section>
      <Divider />
      <section>
        <ResumeHeading>Education</ResumeHeading>
        {education.map((e, index) => {
          return (
            <div
              className={`u-flex f-row phone-f-column ${
                education.length === index + 1 ? '' : 'mb-8 phone-mb-6'
              }`.trim('')}
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{e.year}</ResumeCopy>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ResumeCopy>{e.institution}</ResumeCopy>
                <ResumeCopy>{e.program}</ResumeCopy>
              </div>
              <div className="u-flex50">
                <ResumeList list={e.list} />
              </div>
            </div>
          )
        })}
      </section>
      <Divider />
      <section>
        <ResumeHeading>Skills + Software</ResumeHeading>
        {skills.map((s, index) => {
          return (
            <div
              className={`u-flex f-row phone-f-column ${
                skills.length === index + 1 ? '' : 'mb-8 phone-mb-6'
              }`.trim('')}
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{s.type}</ResumeCopy>
              </div>
              <div className="u-flex25 phone-mb-2">
                <ResumeList list={s.list} />
              </div>
            </div>
          )
        })}
      </section>
      <Divider />
      <section>
        <ResumeHeading>Certifications</ResumeHeading>
        {certification.map((c, index) => {
          return (
            <div
              className={`u-flex f-row phone-f-column ${
                certification.length === index + 1 ? '' : 'mb-8 phone-mb-6'
              }`.trim('')}
              key={index.toString()}>
              <div className="u-flex15 phone-mb-1">
                <ResumeCopy>{c.year}</ResumeCopy>
              </div>
              <div className="phone-mb-2">
                <ResumeCopy>{c.institution}</ResumeCopy>
                <ResumeCopy>{c.program}</ResumeCopy>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Resume
