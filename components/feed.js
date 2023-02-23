import { Image, Card, Heading, Text, Stack, Divider, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'
import styles from '../styles/Feed.module.css'

export function Feed({article}) {
  return (    

<Card maxW='sm' className={styles.boxbackground} >
  <CardBody>
    <Image
      src={article.urlToImage} alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={{ base: '12px', md: '27px', lg: '30px' }}>{article.title}</Heading>
      <Text color={'lightblue.100'} fontSize={{ base: '11.6px', md: '25px', lg: '30px' }}>
    {article.description}
      </Text>
      <Text fontSize={{ base: '11.2px', md: '20.5px', lg: '25.5px' }}>
      
    {article.author}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter >
    <ButtonGroup spacing='1' >
      <Button px={{base: '5px'}} py={{ base: '2px'}} bg={'blackAlpha.800'} fontSize={{ base:'8.5px', md: '23px', lg: '28px'}}>
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