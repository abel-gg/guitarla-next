import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/guitarras.module.css'

// export async function getServerSideProps({ query: { url } }) {
//   const response = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   )

//   const result = await response.json()
//   const guitarra = result.data

//   return {
//     props: {
//       guitarra,
//     },
//   }
// }

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await response.json()
  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  )

  const result = await response.json()
  const guitarra = result.data

  return {
    props: {
      guitarra,
    },
  }
}

const Guitarra = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(0)

  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Cantidad no válida')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    }

    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout title={nombre} description={`Contenido de guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={nombre}
          width={600}
          height={400}></Image>
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad: </label>
            <select
              onChange={(e) => setCantidad(+e.target.value)}
              id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Guitarra
