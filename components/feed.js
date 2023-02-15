import { Image, Card, Heading, Text, Stack, Divider, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'
import styles from '../styles/Feed.module.css'

export function Feed({article}) {
  return (    

<Card maxW='sm' >
  <CardBody className={styles.boxbackground}>
    <Image
      src={article.image_url} alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={{ base: '12px', md: '27px', lg: '55px' }}>{article.title}</Heading>
      <Text fontSize={{ base: '11.6px', md: '25px', lg: '53px' }}>
    {article.description}
      </Text>
      <Text color={'lightblue'} fontSize={{ base: '11.2px', md: '23.5px', lg: '52.5px' }}>
      
    {article.source}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter background={'blackAlpha.800'}>
    <ButtonGroup spacing='1' >
      <Button px='5.2' py='2' variant='solid' color={'darkslateblue'} fontSize={{ base:'10.5px', md: '23px', lg: '51px'}}>
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