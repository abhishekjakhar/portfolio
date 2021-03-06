import Head from 'next/head'
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import blogs from '../data/blogs'
import { author, blogPage } from '../config/website'

export default function Blogs() {
  return (
    <Layout>
      <Head>
        <title>
          {blogPage} | {author}
        </title>
      </Head>
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
