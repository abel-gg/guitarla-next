import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, GuitarLA, tienda de música'}>
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            alt="nosotros"
            src="/img/nosotros.jpg"
            width={1000}
            height={800}></Image>
          <div>
            <p>
              Nam ut elementum orci, vitae iaculis augue. Mauris sed erat
              vulputate, finibus ex sit amet, interdum erat. Aenean dictum enim
              eget erat volutpat congue. Aliquam vitae justo vel sapien eleifend
              dignissim. Maecenas auctor vehicula eros, ac feugiat turpis
              convallis a. Fusce laoreet libero lectus, ut fermentum dui
              lobortis quis. Vestibulum a pharetra enim, sed tristique dui.
              Praesent pulvinar in nulla ac ultricies.
            </p>
            <p>
              Nam eros risus, placerat vel porttitor ut, finibus ut nunc. Nullam
              vestibulum sapien vitae mauris convallis, vel rhoncus odio porta.
              Ut eget mi mauris. Aenean ut turpis ut tortor posuere placerat
              vitae eu dui. Fusce leo justo, congue scelerisque felis quis,
              luctus fringilla nibh. Nullam commodo aliquet ultricies.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
