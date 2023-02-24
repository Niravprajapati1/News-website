import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Center, Container, Divider, Link } from '@chakra-ui/react'
import News from '../components/news'
const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API}`);
  const data = await res.json();
  const url = await fetch(`${process.env.IMG}`)
  const bgimg = await url.json();
  return {
    props: {
      data,
      bgimg,
    },
  }
}

export default function Home({ data, bgimg }) {
  return (
    <>
      <Head>
        <title>English News</title>
        <meta name="description" content="This is a website where you can read news in english" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="news app where you can read teach news." />
        <link rel="icon" href="/assets/fav.ico" />
      </Head>
      <Container bgImage={bgimg.hdurl} maxW={'cover'} >
        <div className={styles.thirteen}>
          <Image
            src="/assets/brand.png"
            alt="13"
            layout='fill'
          />
        </div>
        <News data={data} />
        <Divider pt={6} color={'white'} />
        <Center className={inter.className} pt={2} pb={4} fontSize={{ base: '10.5px', md: '14px', lg: '18px' }}>
          <Link color='white' href="https://linkfree.eddiehub.io/Niravprajapati1"> Nirav Prajapati </Link></Center>
      </Container>
    </>
  )
}
