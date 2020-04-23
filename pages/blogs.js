import Layout from '../components/Layout'
import Blog from '../components/Blog'
import Container from '../components/Container'
import blogs from '../data/blogs'

const Blogs = () => {
  return (
    <Layout>
      {blogs.map(b => (
        <section
          className={b.id === b.length ? null : 'mb-8 phone-mb-6'}
          key={b.id.toString()}>
          <Blog
            link={b.link}
            title={b.title}
            date={b.date}
            readTime={b.readTime}
            publication={b.publication}
          />
        </section>
      ))}
    </Layout>
  )
}

export default Blogs
