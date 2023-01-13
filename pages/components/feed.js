import { Image, Card, Heading, Text, Stack, Divider, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'

export function Feed({article}) {
  return (    

<Card maxW='sm'>
  <CardBody>
    <Image
      src={article.image_url} alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{article.title}</Heading>
      <Text>
    {article.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      
    {article.source}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
       <a href={article.url}>
        Read more
        </a>
      </Button>
      <Button variant='ghost' colorScheme='blue'>
    
      </Button>
    </ButtonGroup>
 
  </CardFooter>
</Card>

)
}
export default Feed;