import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  chakra, 
  Divider
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import Image from 'next/image'  
import thumbEmotionDetection from '../public/emotion_detection.png'
import thumbSentimentAnalysis from '../public/sentiment_analysis.png' 
import thumbZombieShooter from '../public/zombie_shooter.png' 
import thumbShapes from '../public/shapes.png'
import thumbAutonomousRacing from '../public/autonomous_racing.png' 
import thumbPathfinding from '../public/pathfinding.png' 

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gemmin Sugiura
          </Heading>
          <p>ML/AI/Game</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box>
            <ProfileImage
              src="/gemmin.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me!
        </Heading>
        <Paragraph>
          I am an undergraduate student in Computer Science in Vancouver. I love
          harnessing the power of ML/AI and game development to tackle fun and
          complex issues and push the boundaries of what is possible. I hope you
          find my work and projects as cool and intriguing as I do!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
      </Section>

      <Section delay={0.3}>
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Machine Learning
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem
              id="emotionDetection"
              title="Emotion Detection"
              thumbnail={thumbEmotionDetection}
            >
              Classifying sound waves to emotions.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="sentimentAnalysis"
              title="Sentiment Analysis"
              thumbnail={thumbSentimentAnalysis}
            >
              Analysing text from food reviews.
            </GridItem>
          </Section>
        </SimpleGrid>
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          Games
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem
              id="zombieShooter"
              title="Zombie Shooter"
              thumbnail={thumbZombieShooter}
            >
              Top-down multiplayer zombie shooter browser game.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="shapes"
              title="Shapes"
              thumbnail={thumbShapes}
            >
              Minimalist rhythm-based mobile game.
            </GridItem>
          </Section>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <Divider my={6} />
        <Heading
          as="h3"
          fontSize={20}
          mb={4}
        >
          AI
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem
              id="autonomousRacing"
              title="Autonomous Racing"
              thumbnail={thumbAutonomousRacing}
            >
              Proximal policy optimization.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="pathfinding"
              title="Pathfinding"
              thumbnail={thumbPathfinding}
            >
              Weighted A* Pathfinding. 
            </GridItem>
          </Section>
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
