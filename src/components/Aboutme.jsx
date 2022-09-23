import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Aboutme() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "70%",
        margin: "5vw 15vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>A little bit about me</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab icon={<HouseOutlinedIcon />} {...a11yProps(0)} />
          <Tab icon={<CodeOutlinedIcon />} {...a11yProps(1)} />
          <Tab icon={<PetsOutlinedIcon />} {...a11yProps(2)} />
          <Tab icon={<CookieOutlinedIcon />} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>
          I live in one of the hottest cities of Mexico, <b>Hermosillo</b>. Even
          though I prefer the cold, I've learned to like it here. I love the
          food and the beautiful beaches nearby. Most of my <b>family</b> lives
          here and I love spending time with them, but still, I don't mind
          traveling every once in a while!
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>
          I've been learning to <b>code</b> on my own since early 2022. Well,
          not entirely on my own... My husband came up with the idea to help me
          get a <b>job</b> and he's been guiding me so I can learn and enjoy
          this craft. I've been through fCC and some courses at Udemy and
          YouTube. Mainly focusing on <b>JavaScript</b> and <b>React</b>. It's
          been hard, but I know I can do it! <b>がんばり続ける！！</b>
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>
          One thing I'm sure about myself is that I'm a <b>dog</b> person. I
          like all animals but my pugs, Coshi and Oogi, made me a dog lover.
          <b> Coshi</b> arrived at our home some years ago, and he was the
          sweetest, sassiest dog I could imagine. Sadly, he passed in 2020, but
          he left us with his grandpup <b>Oogi</b>! He's not a pup anymore but
          he sure still acts like one!
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>
          After finishing school, I got into <b>baking</b>. I enjoy exploring
          new flavors of cakes to satisfy some cravings but what I enjoy more is
          baking <b>cookies</b> and decorating with <b>royal icing</b> to create
          some fun and delicious desserts! Ok, now I'm hungry.
        </p>
      </TabPanel>
    </Box>
  );
}

//         <Tab icon={<HouseOutlinedIcon />} aria-label="family" />
//         <Tab icon={<PetsOutlinedIcon />} aria-label="pet" />
//         <Tab icon={<CodeOutlinedIcon />} aria-label="coding" />
//         <Tab icon={<CookieOutlinedIcon />} aria-label="baking" />
//       </Tabs>
//     </section>
//   );
// }
