import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Feed } from './feed'

function News({data}) {
  return (
  
    <SimpleGrid Center mt={5} minChildWidth={{base: '143px',md: '300px', lg: '405px'}} spacing={7}>
  {
          data.articles.map(((article) => {
            return (

        <Box key={article.uuid}>
            <Feed article={article} />
        </Box>
            )
          }))
        }
        </SimpleGrid>
  
  )
}

export default News;