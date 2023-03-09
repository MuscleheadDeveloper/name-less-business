/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';
import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';
import Lottie from "react-lottie";
import animation from "../anim.json";

const data = {
  subTitle: "Distinctly Designed. Brilliantly Built",
  title: "Building Ideas Together",
  description:
    "Everyone working on your project is fully invested in its success. We care just as much about how your software looks and performs as we do about the problem that it’s solving. We work, learn, and celebrate together, measuring success by the duration of our long-term partnerships.",
  btnName: "Contact Us",
  btnURL: "#",
};
    const defaultOptions = {
      loop: true,
      autoPlay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Lottie options={defaultOptions} />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
