import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Feed } from './feed'

function News({data}) {
  return (
  
    <SimpleGrid Center mt={5} minChildWidth={{base: '152px',md: '315px', lg: '405px'}} spacing={7}>
  {
          data.articles.map(((article) => {
            return (

        <Box key={article.uuid} p={5}>
            <Feed article={article} />
        </Box>
            )
          }))
        }
        </SimpleGrid>
  
  )
}

export default News;