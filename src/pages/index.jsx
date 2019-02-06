import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import Experience from '../views/Experience';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={6}>
      <Hero>
        <BigTitle>
          Hello <strong>👋</strong> <br /> I'm Alexi Taylor.
        </BigTitle>
        <Subtitle>I live and work in San Francisco, building useful and beautiful things</Subtitle>
      </Hero>
      <Experience>
        <Title>Experience</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Phreesia"
            position="Software Engineer"
            date="December 2018 - Present"
            link="https://www.linkedin.com/in/alexitaylor/"
            bg="linear-gradient(to right, #F37335, #FDC830)"
          >
            Phreesia’s automated intake platform provides an individualized experience designed to engage patients
            in their care and give you the capacity to do more of what matters in your organization.
          </ProjectCard>
          <ProjectCard
            title="Vital Score"
            position="Software Engineer"
            date="July 2017 - December 2018"
            link="https://www.linkedin.com/in/alexitaylor/"
            bg="linear-gradient(to right, #0083B0, #00B4DB)"
          >
            Vital Score is a patient-intake platform, helping patients identify health goals and issues through surveys which
            enables for patient-provider conversations and increase referrals to health services.
          </ProjectCard>
          <ProjectCard
            title="Doctor Dollars"
            position="Front End Engineer"
            date="2017"
            link="https://www.linkedin.com/in/alexitaylor/"
            bg="linear-gradient(to right, #38ef7d, #11998e)"
          >
            A Dapp to help patients and doctors manage payments through a decentralized system.
          </ProjectCard>
        </ProjectsWrapper>
      </Experience>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="NGX Lazy Loading Images"
            position="Software Engineer"
            date="February 2018 - Present"
            link="https://github.com/alexitaylor/ngx-lazy-loading-images"
            bg="linear-gradient(to right, #4A00E0, #8E2DE2)"
          >
            NGX Lazy Loading Images is an Angular open source library that implements smart lazy loading logic with IntersectionObserver API.
            It helps by speeding up initial page loads by loading only images above the fold. It decreases load time, speed index and above the fold time.
          </ProjectCard>
          <ProjectCard
            title="NG-Surveys"
            position="Software Engineer"
            date="December 2018 - Present"
            link="https://github.com/alexitaylor/ng-surveys"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            NG-Surveys is an Angular open source library that helps developers build and serve custom surveys in their Angular 7 App.
            I Created an open source library to improve Vital Score’s patient-intake survey generator allowing non-technical users to create and serve surveys to patients
          </ProjectCard>
          <ProjectCard
            title="Angular 7 GraphQL Express Postgres Starter Kit"
            position="Software Engineer"
            date="December 2018 - Present"
            link="https://github.com/alexitaylor/angular-graphql-express-postgres-starter-kit"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >

            A full-stack starter kit with Angular 7, GraphQL, Apollo, Express and Postgres
          </ProjectCard>
          <ProjectCard
            title="Material Studios"
            position="Software Engineer"
            date="December 2018 - Present"
            link="https://github.com/alexitaylor/hr-raptors"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Material Studio allows users to build a website with drag and drop materialized components.
          </ProjectCard>
          <ProjectCard
            title="Fridgr"
            position="Software Engineer"
            date="December 2018 - Present"
            link="https://github.com/alexitaylor/Fridgr"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A collaborative pantry/fridge inventory application with individualized shopping lists.
          </ProjectCard>
          <ProjectCard
            title="Photo Hungry"
            position="Software Engineer"
            date="December 2018 - Present"
            link="https://github.com/alexitaylor/Photo-Hungry"
            bg="linear-gradient(to right, #f4791f, #659999)"
          >
            Delicious food photos analyzed and turned into restaurant and recipe recommendations.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alexi Taylor" />
          <AboutSub>
            As a self-driven engineer with exposure to working in a collaborative environment,
            I have experience in exchanging software layers across the stack while producing maintainable, well-designed applications.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          <strong>Front End:</strong> Angular, AngularJS, React, Vue, JavaScript ES5 & ES6, HTML5, CSS3, Flux, Redux, Material Design, and Bootstrap <br/>
          <strong>Back End:</strong> Node, Express, Java, and GraphQL <br/>
          <strong>Databases:</strong> MongoDB, Mongoose, PostgreSQL, and mySQL <br/>
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:alexi@bluesunrise.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/alexitaylor" target="_blank" rel="noopener noreferrer">Github</a> &{' '}
            <a href="https://www.linkedin.com/in/alexitaylor/" target="_blank" rel="noopener noreferrer">Linkdin</a> &{' '}
            <a href="https://twitter.com/alexi_be3" target="_blank" rel="noopener noreferrer">Twitter</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
)

export default Index
