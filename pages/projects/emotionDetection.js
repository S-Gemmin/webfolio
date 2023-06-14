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
    <Layout title="Emotion Detection">
      <Container>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Emotion Detection
        </Heading>
        <Divider my={6} />
        <P>
          Using a LSTM, I have trained a system on a dataset from Crema-D, 
          Ravdees, Savee, and Tess. Using advanced feature extraction techniques, 
          I made a model that classified audio waves to six emotions - happy, 
          sad, neutral, fear, angry, and disgust - with a 80%+ accuracy rate. 
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
              <Link href="https://www.kaggle.com/code/gemmin/speech-emotion-recognition" color="gray">
              https://www.kaggle.com/code/gemmin/speech-emotion-recognition <ExternalLinkIcon mx="2px"/>
              </Link>
          </ListItem>
        </List>

        <ProjectImage src="/emotion_detection.png" alt="Emotion Detection" />
        
      </Container>
    </Layout>
    )
}

export default Project
export { getServerSideProps } from '../../components/chakra'