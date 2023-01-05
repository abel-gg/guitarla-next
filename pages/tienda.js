import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

// export async function getStaticProps() {
//   const response = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   )
//   const result = await response.json()
//   const guitarras = result.data

//   return {
//     props: { guitarras },
//   }
// }

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )
  const result = await response.json()
  const guitarras = result.data

  return {
    props: { guitarras },
  }
}

const Tienda = ({ guitarras }) => {
  return (
    <Layout
      title={'Tienda'}
      description={
        'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
      }>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tienda
