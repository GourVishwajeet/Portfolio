/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import projectImg from "../images/projects.png";
// import cv from "../images/VishwajeetGourResume (1).pdf"
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [

    {
    title: "Gaming Platform– Real-time Gaming & Sports Web App",
    description:
      "Developed a fully functional online gaming & sports platform. Built responsive UIs using React and Tailwind. Integrated real-time game updates with WebSockets. Designed secure REST APIs in Node.js for authentication, admin, and user data using MongoDB. Implemented JWT-based login and Redis for session management. Wrote logic for cheat detection, and real-time player handling. Built an admin panel to manage games, users, and analytics . Deployed the backend on Render and VPS using PM2 and Putty. Configured logging environment variables with .env.",
    url: "https://gamingfrontend.vercel.app/casino/home",
  },
  {
    title: "Social media App",
    description:
      "Contributed to the short video module in a social platform similar to Instagram. Integrated live video streaming using LiveKit, and implemented features like like, comment, share, and save using Redux Toolkit and custom hooks, worked on chat part also using websocket APIs . Also handled backend APIs for short video interactions and authentication using JWT.",
    url: "https://github.com/GourVishwajeet/AigetaifrontendDESKTOP/tree/master",
  },
  {
    title: "Health Project",
    description:
      "Led the development of product listing modules for a dynamic eCommerce platform focused on medicine and grocery delivery. Guided the team on task division, implementation strategy, and best practices for clean, scalable code. Personally implemented category-wise and subcategory-wise filtering, built and consumed REST APIs, and developed custom hooks using React Context and Redux for cart and global state management. Also created the Partnership section which is also have several pages with animations, SEO-friendly dynamic routes, and ensured code reusability and performance optimization.",
    url: "https://onlinemedicinefrontendmobile-one.vercel.app/",
  },
  {
    title: "E-commerce- a practice project ",
    description:
      "E-Commerce Platform (Blinkit-like Grocery & Milk Delivery Website) Developed a fully functional commercial e-commerce platform for real-time grocery and dairy product delivery, similar to Blinkit. The website included dynamic and responsive screens such as Home, Product Listing, Categories, Cart, Checkout, and Payment. Integrated secure authentication, live product updates, and smooth user navigation. Tech Stack Used: React.js (Frontend), Node.js & Express.js (Backend), MySQL (Database) Key Features: Real-time product and inventory management User registration, login, and order history Payment gateway integration for seamless transactions Dynamic category-wise filtering and product search Admin dashboard for product, user, and order control",
    url: "",
  },
  {
    title: "My Cv",
    description:
      "Click to view My Resume",
    url: '/Resume.pdf',
  },
  {
    title: "GitHub Profile",
    description:
      "My github profile.",
    url: "https://github.com/GourVishwajeet",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={projectImg}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container w-[600px]">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p style={{fontWeight:'initial', opacity:'50%'}} className="small">{project.description}</p>
              



            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
