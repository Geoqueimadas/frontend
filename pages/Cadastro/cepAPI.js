import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'

const URL_API = 'https://jsonplaceholder.typicode.com/todos'

export default function Home() {

  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(null)

  const fetchAllData = async () => {

    try {
      setLoading(true)

      const response = await fetch(URL_API, {
        
        method: 'GET'

      })

      const data = await response.json()

      if (!data) 
        throw 'Problema na requisição'

      setData(data)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {

    fetchAllData()

  }, [])

  return (
    <div className={styles.container}>
      {loading && !data &&

        <>

        <p>Carregando Informações...</p>

        </>

      }

      {data && data.map((item, index) => (

        <p key={index}> {item.title} </p>

      ))

      }
    </div>
  )
}
