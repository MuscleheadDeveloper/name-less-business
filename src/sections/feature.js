/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

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

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}} id='features'>
     <Container>
       <SectionHeader 
        slogan="Our Services"
        title="We're the Whole Package"
      />
      <Grid sx={styles.grid}>
        {datas.map((data, index) => (
          <FeatureCard
            key={index}
            src={data.imgSrc}
            altText={data.altText}
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
