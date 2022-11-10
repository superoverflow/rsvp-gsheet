import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Rsvp from '../components/rsvp'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiffany & Cyrus | 24/01/23</title>
        <meta name="description" content="Please join us - 24 Jan 2023" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👰🏻‍♀️</text></svg>" />
      </Head>

      <Rsvp />
      
    </div>
  )
}

export default Home
