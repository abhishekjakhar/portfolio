import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import Layout from '../../components/layout'
import ProjectTitle from '../../components/project-title'
import ProjectSubTitle from '../../components/project-subtitle'
import ProjectParagraph from '../../components/project-paragraph'
import ProjectBody from '../../components/project-body'
import ProjectNav from '../../components/project-nav'
import Divider from '../../components/divider'

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
          <div className="f-1 phone-mb-6">
            <ProjectSubTitle>{subTitle}</ProjectSubTitle>
          </div>
          <div className="f-1 u-flex phone-f-column phone-mb-8">
            <div className="f-1 pr-4 phone-pr-0 phone-mb-0">
              <div className="mb-4">
                <ProjectParagraph title="Project Type" desc={updatedType} />
              </div>
              {result ? (
                <div className="phone-mb-4">
                  <ProjectParagraph title="Result" desc={result} />
                </div>
              ) : null}
            </div>
            {contribution ? (
              <div className="f-1">
                <ProjectParagraph title="My Contribution" desc={contribution} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ProjectBody description={description} website={website} code={code} />
      <Divider />
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
  }).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  ).isRequired,
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
    paths: projects.map(p => {
      return {
        params: {
          slug: p.slug,
        },
      }
    }),
    fallback: false,
  }
}
