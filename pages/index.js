import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Feed } from './components/feed'
import { Center, Grid, GridItem, Link } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const url = "https://api.thenewsapi.com/v1/news/top?api_token=whIfWwb6ycjYjsEQSlCMg8iz6PwvkasigcltwF7L&locale=in&limit=5";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
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
          data.data.map(((article) => {
            return (
        <GridItem>
            <Feed article={article} />
        </GridItem>
            )
          }))
        }
        </Grid>
        <Center className={inter.className}>
        <Link center color='whiteAlpha.800' href="https://linkfree.eddiehub.io/Niravprajapati1"> Nirav Prajapati </Link></Center>
      </main>
    </>
  )
}
