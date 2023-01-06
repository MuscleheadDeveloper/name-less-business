/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const datas = [
  {
    id: 1,
    title: "Problem Identification",
    text: "While some needs can be met with off-the-shelf products, others require a custom software solution built from the ground up. Regardless of which method works for your business, it needs to not only fit your needs but adapt to them as you grow.",
  },
  {
    id: 2,
    title: "Profer Solution",
    text: "We build applications that work for your business and your users. Whether it’s a complex enterprise platform, a responsive web app, or a marketing site, our web solutions function smoothly and deliver a consistent experience to users across all platforms.",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    text: "Distributing content is only half the battle. The other half is ensuring people can find it. Optimizing it for search engines does exactly that.  Sites must be crawled and indexed efficiently, which requires a balance of search engine knowledge, technical expertise, and a human-centered approach to content strategy.",
  },
  {
    id: 4,
    title: "Customer Satisfaction and Support",
    text: "Software is never truly finished. No matter how solid your released product is, changes are inevitable. So are patch releases, language and platform updates, and new enhancements. Our software support team keeps your product secure, maintained, and enhanced well after it launches.",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          title="Meet the feature of product"
          slogan="WHAT'S THE FUNCTION"
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {datas.map((data, index) => (
            <Box 
              sx={styles.card}
              key={data.id}
            >
              <Box sx={styles.iconBox}>{`0 ${data.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{data.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{data.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
