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
    <Layout title="Pathfinding">
      <Container>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Pathfinding
        </Heading>
        <Divider my={6} />
        <P>
          I implemented weighted A* pathfinding algorithm in Unity for 2D games. 
          Unlike traditional A* algorithm, weighted A* takes into account the weights 
          of nodes and edges in a grid and assigns them a value based on their desirability.
        </P>
        <List ml={2} my={2}>
        <ListItem>
            <Meta>Stack</Meta>
              <span>
              Unity, C#
              </span>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
              <Link href="https://github.com/S-Gemmin/weighted-astar" color="gray">
              https://github.com/S-Gemmin/weighted-astar <ExternalLinkIcon mx="2px"/>
              </Link>
          </ListItem>
        </List>
         
        <ProjectImage src="/pathfinding.png" alt="Pathfinding" />
        
      </Container>
    </Layout>
    )
}

export default Project
export { getServerSideProps } from '../../components/chakra'