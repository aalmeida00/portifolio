import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Blog from '../components/Blog/Blog';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';


const Home = ({posts}) => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Blog posts={posts} />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/posts'))

  const posts = files.map(file => {
    const slug = file.replace('.md', '')   
    const markdownWithMeta = fs.readFileSync(path.join('src/posts', file), 'utf8')

     const {data} = matter(markdownWithMeta)

    return {
      slug,
      data
     }
 
  })


  return {
    props: {
      posts: posts,
    },
  };
}
