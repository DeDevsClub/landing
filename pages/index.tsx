import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Box} from '../components/styles/box';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
// import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
// import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Features3 />
            <Testimonials />
            {/* <Statistics /> */}
            <Plans />
            <Faq />
            <Trial />
            {/* <Footer /> */}
         </Box>
      </Layout>
   );
};

export default Home;
