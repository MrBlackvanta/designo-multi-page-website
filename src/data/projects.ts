import airfilter from "@/assets/projects/airfilter.webp";
import blogr from "@/assets/projects/blogr.webp";
import boxedWater from "@/assets/projects/boxed-water.webp";
import builder from "@/assets/projects/builder.webp";
import camp from "@/assets/projects/camp.webp";
import change from "@/assets/projects/change.webp";
import express from "@/assets/projects/express.webp";
import eyecam from "@/assets/projects/eyecam.webp";
import faceit from "@/assets/projects/faceit.webp";
import loopstudios from "@/assets/projects/loopstudios.webp";
import photon from "@/assets/projects/photon.webp";
import science from "@/assets/projects/science.webp";
import todo from "@/assets/projects/todo.webp";
import transfer from "@/assets/projects/transfer.webp";
import type { Project, ServiceSlug } from "./types";

export const projects: Record<ServiceSlug, Project[]> = {
  "web-design": [
    {
      name: "Express",
      description: "A multi-carrier shipping website for ecommerce businesses",
      image: express,
    },
    {
      name: "Transfer",
      description:
        "Site for low-cost money transfers and sending money within seconds",
      image: transfer,
    },
    {
      name: "Photon",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
      image: photon,
    },
    {
      name: "Builder",
      description:
        "Connects users with local contractors based on their location",
      image: builder,
    },
    {
      name: "Blogr",
      description:
        "Blogr is a platform for creating an online blog or publication",
      image: blogr,
    },
    {
      name: "Camp",
      description:
        "Get expert training in coding, data, design, and digital marketing",
      image: camp,
    },
  ],
  "app-design": [
    {
      name: "Airfilter",
      description:
        "Solving the problem of poor indoor air quality by filtering the air",
      image: airfilter,
    },
    {
      name: "Eyecam",
      description:
        "Product that lets you edit your favorite photos and videos at any time",
      image: eyecam,
    },
    {
      name: "Faceit",
      description:
        "Get to meet your favorite internet superstar with the faceit app",
      image: faceit,
    },
    {
      name: "Todo",
      description:
        "A todo app that features cloud sync with light and dark mode",
      image: todo,
    },
    {
      name: "Loopstudios",
      description: "A VR experience app made for Loopstudios",
      image: loopstudios,
    },
  ],
  "graphic-design": [
    {
      name: "Tim Brown",
      description:
        "A book cover designed for Tim Brown’s new release, ‘Change’",
      image: change,
    },
    {
      name: "Boxed Water",
      description: "A simple packaging concept made for Boxed Water",
      image: boxedWater,
    },
    {
      name: "Science!",
      description:
        "A poster made in collaboration with the Federal Art Project",
      image: science,
    },
  ],
};
