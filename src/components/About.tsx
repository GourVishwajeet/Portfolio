/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/im.jpg";

const imageAltText = "White background with plant leaves";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "A dedicated Full Stack Developer with hands-on experience in building dynamic and responsive web applications using JavaScript, React.js, React Native, Node.js, MongoDB, and MySQL. I have worked on commercial projects including an online ecommerce platform, a real-money gaming site (like Stake), and parts of a social media app. I have integrated REST APIs, WebSockets (for live games), Redis (for caching), and authentication systems. I’ve also managed payments, implemented cheat detection, used logging tools, and deployed backends on Render and VPS using PuTTY. In my team role, I have led junior developers, reviewed code, fixed bugs, and guided them through project tasks.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "React.js",
  "React Native",
  "Web Development",
  "Full Stack",
  "Mern Stack",
  "Node.js",
  "Fullstack Development",
  "Backend Development",
  "Front End Design",
  "Mobile Development",
  "Frontend Development",
  "DSA",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my FullStack experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
