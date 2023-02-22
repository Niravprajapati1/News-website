import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Feed } from '../components/feed'
import { Box, Center, Link, SimpleGrid } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res1 = await fetch(`${process.env.API}`);
  const data1 = await res1.json();
  return {
    props: {
      data1,
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
            layout='fill'
          />
        </div>
        
        <SimpleGrid Center mt={5} minChildWidth={{base: '143px',md: '300px', lg: '405px'}} spacing={7}>
  {
          data1.articles.map(((article) => {
            return (

        <Box key={article.uuid}>
            <Feed article={article} />
        </Box>
            )
          }))
        }
        </SimpleGrid>
        <Center className={inter.className} mt={5} fontSize={{ base:'8.5px', md: '14px', lg: '18px'}}>
        <Link color='whiteAlpha.800' href="https://linkfree.eddiehub.io/Niravprajapati1"> Nirav Prajapati </Link></Center>
      </main>
    </>
  )
}
