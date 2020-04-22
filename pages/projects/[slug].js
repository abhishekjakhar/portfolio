import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Layout from '../../components/layout'
import Button from '../../components/Button'
import { getProjectBySlug, getAllProjects } from '../../lib/api'

export default function Post({ project }) {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <div className="mb-10 phone-mb-0">
          <div className="mb-2">
            <h1 className="u-fontSize32 u-fontWeightRegular u-textColorDarkest u-lineHeight1x u-letterSpacingHalf">
              {project.title}
            </h1>
          </div>
          <div className="u-flex phone-f-column">
            <div className="f-1 phone-mb-4">
              <div className="u-width80Percent u-phone-width100Percent">
                <h2 className="u-fontSize18 u-fontWeightRegular u-textColorDarker">
                  {project.subTitle}
                </h2>
              </div>
            </div>
            <div className="f-1 u-flex phone-f-column">
              <div className="f-1 pr-4 phone-pr-0 phone-mb-2">
                <div className="mb-4 phone-mb-2">
                  <div className="mb-1">
                    <h3 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x">
                      Project Type
                    </h3>
                  </div>
                  <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                    {project.type.map((type, i) => {
                      if (project.type.length === i + 1) return type
                      return type + ', '
                    })}
                  </p>
                </div>
                {project.result ? (
                  <div>
                    <div className="mb-1">
                      <h3 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x">
                        Result
                      </h3>
                    </div>
                    <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                      {project.result}
                    </p>
                  </div>
                ) : null}
              </div>
              {project.contribution ? (
                <div className="f-1 phone-mb-2">
                  <div className="mb-1">
                    <h3 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x">
                      My Contribution
                    </h3>
                  </div>
                  <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                    {project.contribution}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <article className="mb-10">
          {project.description.map((element, index) => {
            let innerContent = null
            if (element.type === 'image') {
              innerContent = (
                <img
                  src={element.value}
                  alt="Project"
                  className={`u-width100Percent u-height100Percent u-block mx-auto`}
                  key={index.toString()}
                />
              )
            } else if (element.type === 'message') {
              innerContent = (
                <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                  {element.value}
                </p>
              )
            } else if (element.type === 'personas') {
              innerContent = element.value.map((personas, index) => {
                return (
                  <div className="mb-8 phone-mb-4" key={index.toString()}>
                    <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                      {personas.user}
                    </h4>
                    <img
                      src={personas.image}
                      alt="Project"
                      className={`u-width100Percent u-height100Percent u-block mx-auto`}
                      key={index.toString()}
                    />
                  </div>
                )
              })
            } else if (element.type === 'empathy-maps') {
              innerContent = (
                <div className="u-flex f-row justify-content-between phone-f-column">
                  {element.value.map((empathyMap, index) => {
                    return (
                      <div
                        style={{ flex: '0 0 49%' }}
                        className="phone-mb-4"
                        key={index.toString()}>
                        <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                          {empathyMap.user}
                        </h4>
                        <img
                          src={empathyMap.image}
                          alt="Project"
                          className={`u-width100Percent u-block mx-auto`}
                          key={index.toString()}
                        />
                      </div>
                    )
                  })}
                </div>
              )
            } else if (element.type === 'card-sorting') {
              innerContent = (
                <div className="u-flex f-row justify-content-between phone-f-column">
                  {element.value.map((cardSorting, index) => {
                    return (
                      <div
                        style={{ flex: '0 0 49%' }}
                        className="phone-mb-4"
                        key={index.toString()}>
                        <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                          {cardSorting.user}
                        </h4>
                        <img
                          src={cardSorting.image}
                          alt="Project"
                          className={`u-width100Percent u-block mx-auto`}
                          key={index.toString()}
                        />
                      </div>
                    )
                  })}
                </div>
              )
            } else if (element.type === 'user-flows') {
              innerContent = element.value.map((userFlow, index) => {
                return (
                  <div className="mb-8 phone-mb-4" key={index.toString()}>
                    <h4 className="u-fontSize16 u-fontWeightBold u-textColorDarkest u-lineHeight1x mb-4">
                      {userFlow.user}
                    </h4>
                    <img
                      src={userFlow.image}
                      alt="Project"
                      className={`u-block u-width100Percent mx-auto`}
                      key={index.toString()}
                    />
                  </div>
                )
              })
            }
            return (
              <div className="mb-10 phone-mb-4" key={index.toString()}>
                <div className="mb-2">
                  <h3 className="u-fontSize24 u-fontWeightRegular u-textColorDarker">
                    {element.name}
                  </h3>
                </div>
                {element.message && (
                  <div className="mb-4">
                    <p className="u-fontSize16 u-fontWeightRegular u-textColorDarker">
                      {element.message}
                    </p>
                  </div>
                )}
                {innerContent}
              </div>
            )
          })}
          <div className="u-flex">
            {project.website && (
              <Button website={project.website}>Project</Button>
            )}
            {project.code && (
              <div className="ml-4">
                <Button website={project.code}>Code</Button>
              </div>
            )}
          </div>
        </article>
      </Container>
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
