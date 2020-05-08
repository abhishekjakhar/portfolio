import { getAllProjects } from '../lib/api'
import Layout from '../components/Layout'
import Project from '../components/Project'

export default function Home({ projects }) {
  return (
    <Layout>
      <div className="project-grid">
        {projects.length > 0 &&
          projects.map(p => (
            <Project
              key={p.slug}
              title={p.title}
              type={p.type}
              image={p.coverImage}
              pathname={p.slug}
            />
          ))}
        <style jsx>{`
          .project-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-gap: 6rem;
          }

          @media only screen and (max-width: 37.5em) {
            .project-grid {
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 2.4rem 0;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects(['title', 'type', 'coverImage', 'slug'])

  return {
    props: { projects },
  }
}
