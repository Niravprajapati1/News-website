import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Feed } from '../components/feed'
import { Center, Grid, GridItem, Link } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res1 = await fetch(`${process.env.URL1}`);
  const res2 = await fetch(`${process.env.URL2}`);
  const data1 = await res1.json();
  const data2 = await res2.json();
  return {
    props: {
      data1,
      data2
    },
  }
}

export default function Home({ data1, data2 }) {
  return (
    <>
      <Head>
        <title>English News</title>
        <meta name="description" content="This is a website where you can read news in english" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.thirteen}>
          <Image
            src="/assets/brand.png"
            alt="13"
            width={100}
            height={120}
            priority
          />
        </div>
        <Grid mt={10} templateColumns='repeat(2, 1fr)' gap={6}>
  {
          data1.data.map(((article) => {
            return (
        <GridItem key={article.uuid}>
            <Feed article={article} />
        </GridItem>
            )
          }))
        }
        {
          data2.data.map(((article) => {
            return (
        <GridItem key={article.uuid}>
            <Feed article={article} />
        </GridItem>
            )
          }))
        }
        </Grid>
        <Center className={inter.className}>
        <Link color='whiteAlpha.800' href="https://linkfree.eddiehub.io/Niravprajapati1"> Nirav Prajapati </Link></Center>
      </main>
    </>
  )
}
