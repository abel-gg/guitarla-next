import Layout from '../../components/layout'
import Image from 'next/image'
import { formatearFecha } from '../../utils/helpers'
import styles from '../../styles/blog.module.css'

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  )

  const result = await response.json()
  const post = result.data

  return {
    props: {
      post,
    },
  }
}

const Post = ({ post }) => {
  const { titulo, contenido, imagen, url, publishedAt } = post[0].attributes

  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={titulo}
          width={800}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}

export default Post
