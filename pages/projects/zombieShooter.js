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
    <Layout title="Zombie Shooter">
      <Container>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Zombie Shooter
        </Heading>
        <Divider my={6} />
        <P>
          Survive the Zombie Apocalypse! A top-down 2D co-op zombie shooter game, 
          this thrilling experience puts your skills to the test. With a variety 
          of guns, perks, and items to help you survive, how long will you last
          against the endless hordes.  
        </P>
        <List ml={2} my={2}>
        <ListItem>
            <Meta>Stack</Meta>
              <span>
              Unity, Mirror, C#
              </span>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
              <Link href="https://gingergem.itch.io/zombie-blitz" color="gray">
              https://gingergem.itch.io/zombie-blitz <ExternalLinkIcon mx="2px"/>
              </Link>
          </ListItem>
        </List>
         
        <ProjectImage src="/zombie_shooter.png" alt="Zombie Shooter" />
        
      </Container>
    </Layout>
    )
}

export default Project
export { getServerSideProps } from '../../components/chakra'