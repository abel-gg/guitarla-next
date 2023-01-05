import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const result = await response.json()
  const posts = result.data

  return {
    props: { posts },
  }
}

const Blog = ({ posts }) => {
  return (
    <Layout
      title={'Blog'}
      description={'Blog de música, venta de guitarras, consejos, GuitarLA'}>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Blog
