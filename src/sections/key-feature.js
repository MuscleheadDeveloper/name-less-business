/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const datas = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Web Development",
    title: "Web Development",
    text: "Own a space on the internet and Transform Your Business Through Technology.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Web Design",
    title: "Web Design",
    text: "Elevate Your User Experience. We design custom solutions with your end user in mind.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "SEO & Digital Marketing",
    title: "SEO & Digital Marketing",
    text: "Harness the power of the Internet to Boost Product and Sales.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "We are attentive to your needs, providing solutions to your business probelms.",
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader
        slogan="Web Development Services"
        title="We Are Your Trusted Guide"
       />
       <Grid sx={styles.grid}>
         {datas.map((data, index) => (
           <FeatureCardColumn 
            key={data.id}
            src={data.imgSrc}
            alt={data.text}
            title={data.title}
            text={data.text}
          />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
