import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { IoLogoGithub } from "react-icons/io5";
import todolist from "../images/todolist.png";
import nonograms from "../images/nonograms.png";

export default function Projects() {
  return (
    <div id="projects">
      <ImageList sx={{ width: "70%", height: "80vh" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader
            component="div"
            sx={{ fontSize: "24px", color: "#000000DE", fontWeight: "700" }}
          >
            Some projects I've worked on
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem className="project-img" key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              className="project-img-text"
              title={item.title}
              subtitle={item.description}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`more about ${item.title} in GitHub`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: todolist,
    title: "To Do List",
    description: "With the basic functions.",
    url: "https://github.com/LittlePuggers/ToDoList",
  },
  {
    img: nonograms,
    title: "Nonograms",
    description: "A game made in collaboration.",
    url: "https://github.com/LittlePuggers/nonograms",
  },
  {
    img: todolist,
    title: "To Do List",
    description: "With the basic functions.",
    url: "https://github.com/LittlePuggers/ToDoList",
  },
  {
    img: nonograms,
    title: "Nonograms",
    description: "A game made in collaboration.",
    url: "https://github.com/LittlePuggers/nonograms",
  },
];
