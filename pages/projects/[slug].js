import { useRouter } from 'next/router'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import ProjectTitle from '../../components/ProjectTitle'
import ProjectSubTitle from '../../components/ProjectSubTitle'
import ProjectParagraph from '../../components/ProjectParagraph'
import ProjectBody from '../../components/ProjectBody'
import ProjectNav from '../../components/ProjectNav'

export default function Project({ project, projects }) {
  const {
    title,
    subTitle,
    type,
    result,
    contribution,
    description,
    website,
    code,
  } = project

  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const updatedType = type.join(', ')

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mb-10 phone-mb-0">
        <div className="mb-2">
          <ProjectTitle>{title}</ProjectTitle>
        </div>
        <div className="u-flex phone-f-column">
          <div className="f-1 phone-mb-4">
            <ProjectSubTitle>{subTitle}</ProjectSubTitle>
          </div>
          <div className="f-1 u-flex phone-f-column">
            <div className="f-1 pr-4 phone-pr-0 phone-mb-2">
              <div className="mb-4 phone-mb-2">
                <ProjectParagraph title="Project Type" desc={updatedType} />
              </div>
              {result ? (
                <div>
                  <ProjectParagraph title="Result" desc={result} />
                </div>
              ) : null}
            </div>
            {contribution ? (
              <div className="f-1 phone-mb-2">
                <ProjectParagraph title="My Contribution" desc={contribution} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ProjectBody description={description} website={website} code={code} />
      <ProjectNav projects={projects} />
    </Layout>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    result: PropTypes.string,
    contribution: PropTypes.string,
    description: PropTypes.array,
    website: PropTypes.string,
    code: PropTypes.string,
  }),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'subTitle',
    'contribution',
    'slug',
    'result',
    'coverImage',
    'description',
    'website',
    'code',
    'type',
  ])

  const allProjects = getAllProjects(['title', 'slug'])

  return {
    props: {
      project: {
        ...project,
      },
      projects: [...allProjects],
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map(projects => {
      return {
        params: {
          slug: projects.slug,
        },
      }
    }),
    fallback: false,
  }
}
