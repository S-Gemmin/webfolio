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
    <Layout title="Shapes">
      <Container>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Shapes
        </Heading>
        <Divider my={6} />
        <P>
          Introducing Shapes! This rhythm-based mobile game is sure to test your focus, dexterity, and durability! 
          From controls that are intuitive to the simple yet vibrant visuals, get ready to challenge your reflexes, 
          and experience the fun of Shapes! 
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
              <Link href="https://github.com/S-Gemmin/shapes" color="gray">
              https://github.com/S-Gemmin/shapes <ExternalLinkIcon mx="2px"/>
              </Link>
          </ListItem>
        </List>
         
        <ProjectImage src="/shapes.png" alt="Shapes" />
        
      </Container>
    </Layout>
    )
}

export default Project
export { getServerSideProps } from '../../components/chakra'