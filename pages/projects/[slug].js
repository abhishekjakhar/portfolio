import { useRouter } from 'next/router'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import ProjectTitle from '../../components/ProjectTitle'
import ProjectSubTitle from '../../components/ProjectSubTitle'
import ProjectParagraph from '../../components/ProjectParagraph'
import ProjectBody from '../../components/ProjectBody'

export default function Post({ project }) {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const type = project.type.map((type, i) => {
    if (project.type.length === i + 1) return type
    return type + ', '
  })
  return (
    <Layout>
      <div className="mb-10 phone-mb-0">
        <div className="mb-2">
          <ProjectTitle>{project.title}</ProjectTitle>
        </div>
        <div className="u-flex phone-f-column">
          <div className="f-1 phone-mb-4">
            <ProjectSubTitle>{project.subTitle}</ProjectSubTitle>
          </div>
          <div className="f-1 u-flex phone-f-column">
            <div className="f-1 pr-4 phone-pr-0 phone-mb-2">
              <div className="mb-4 phone-mb-2">
                <ProjectParagraph title="Project Type" desc={type} />
              </div>
              {project.result ? (
                <div>
                  <ProjectParagraph title="Result" desc={project.result} />
                </div>
              ) : null}
            </div>
            {project.contribution ? (
              <div className="f-1 phone-mb-2">
                <ProjectParagraph
                  title="My Contribution"
                  desc={project.contribution}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ProjectBody
        description={project.description}
        website={project.website}
        code={project.code}
      />
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

  return {
    props: {
      project: {
        ...project,
      },
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
