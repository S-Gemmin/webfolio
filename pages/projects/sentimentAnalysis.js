import {
    Container,
    Heading,
    List,
    ListItem,
    Link,
    Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Sentiment Analysis">
      <Container>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Sentiment Analysis
        </Heading>
        <Divider my={6} />
        <P>
          Sentiment Analysis (SA) is a powerful technique that helps analyze text and 
          identify subjective information, including opinions, attitudes, and emotions 
          expressed within the text. It is commonly used to understand customer feedback, 
          monitor social media sentiment, and identify trends in public opinion. In my case,
          I did a small project on analysing food reviews, well, because I love food! 
        </P>
        <List ml={2} my={2}>
          <ListItem>
            <Meta>Stack</Meta>
              <span>
                Python, Pandas, Scikit, 
                NumPy, SciPy, Matplotlib 
              </span>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
              <Link href="https://www.kaggle.com/code/gemmin/sentiment-analysis" color="gray">
              https://www.kaggle.com/code/gemmin/sentiment-analysis <ExternalLinkIcon mx="2px"/>
              </Link>
          </ListItem>
        </List>
         
        <ProjectImage src="/sentiment_analysis.png" alt="Sentiment Analysis" />
        
      </Container>
    </Layout>
    )
}

export default Project
export { getServerSideProps } from '../../components/chakra'