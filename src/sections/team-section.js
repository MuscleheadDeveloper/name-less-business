/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/team2.jpg';
import Member2 from 'assets/team/team1.jpg';
import Member3 from "assets/team/team1.jpg";
import Member4 from "assets/team/team1.jpg";

const datas = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Agubata Sylvester",
    title: "Agubata Sylvester",
    designation: "Founder",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "#",
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Njoku Obinna",
    title: "Njoku Obinna",
    designation: "Founder",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "#",
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Web Designer",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "#",
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: "Lina Jutila",
    title: "Lina Jutila",
    designation: "Web Developer",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "#",
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="qualified and talented individuals here to serve you"
        />
        <Grid sx={styles.grid}>
          {datas.map((data, index) => (
            <TeamCard
            key={index}
              src={data.imgSrc}
              altText={data.altText}
              title={data.title}
              designation={data.designation}
              socials={data.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
