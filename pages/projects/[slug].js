import { useRouter } from 'next/router'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import ProjectTitle from '../../components/ProjectTitle'
import ProjectSubTitle from '../../components/ProjectSubTitle'
import ProjectParagraph from '../../components/ProjectParagraph'
import ProjectBody from '../../components/ProjectBody'
import ProjectNav from '../../components/ProjectNav'
import Divider from '../../components/Divider'

export default function Post({ project, projects }) {
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

  const updatedType = type.map((type, i) => {
    if (type.length === i + 1) return type
    return type + ', '
  })

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
