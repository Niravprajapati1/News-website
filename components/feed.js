import { Image, Card, Heading, Text, Stack, Divider, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'
import styles from '../styles/Feed.module.css'

export function Feed({article}) {
  return (    

<Card maxW='sm' >
  <CardBody className={styles.boxbackground}>
    <Image
      src={article.urlToImage} alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={{ base: '12px', md: '27px', lg: '30px' }}>{article.title}</Heading>
      <Text color={'lightblue.100'} fontSize={{ base: '11.6px', md: '25px', lg: '30px' }}>
    {article.description}
      </Text>
      <Text color={'lightblue'} fontSize={{ base: '11.2px', md: '20.5px', lg: '25.5px' }}>
      
    {article.author}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter className={styles.boxbackground} >
    <ButtonGroup spacing='1' >
      <Button px='5.2' py='2' background={'gray.600'} fontSize={{ base:'10.5px', md: '23px', lg: '28px'}}>
       <a href={article.url} >
        Read more
        </a>
      </Button>
    </ButtonGroup>
 
  </CardFooter>
</Card>

)
}
export default Feed;