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
    <Layout title="Autonomous Racing">
      <Container>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Autonomous Racing
        </Heading>
        <Divider my={6} />
        <P>
          I made an autonomous racing AI using reinforcement learning, specifically
          proximal policy optimization. The AI is trained to navigate through 
          race tracks quickly and safely, using sensor inputs such as raycasting 
          for vision. The result is an AI that can quickly navigate through unseen 
          tracks with precision.
        </P>
        <List ml={2} my={2}>
        <ListItem>
            <Meta>Stack</Meta>
              <span>
              Unity, ML-Agents, C#
              </span>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
              <Link href="https://github.com/S-Gemmin/autonomous-racing" color="gray">
              https://github.com/S-Gemmin/autonomous-racing <ExternalLinkIcon mx="2px"/>
              </Link>
          </ListItem>
        </List>
         
        <ProjectImage src="/autonomous_racing.png" alt="Autonomous Racing" />
        
      </Container>
    </Layout>
    )
}

export default Project
export { getServerSideProps } from '../../components/chakra'