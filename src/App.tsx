import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Project from "./components/Project";
import Contact from "./components/Contact";
import * as Types from "./types";
import summarizerExtension from "./assets/summarizerExtenstion.png";
import RecommendationImage from "./assets/Recommendation.png";
import blogIx from './assets/blogIx.png'
import Rp from './assets/Rp.png'

// import comingSoonUrl from "./assets/comingSoon.png";

// import { useRef } from "react";

const project1: Types.Project = {
  title: "BlogIx",
  techStack: [
    "Next",
    "TypeScript",
    "Tailwind",
    "Vector Db(Postgres)",
    "Hero ui",
    "Jest",
    "cypress",

  ],
  description:
    "A live blogging platform designed to enhance the experience for both users and writers. Integrated an AI-powered text editor (unique at the time of creation) to improve blog quality.Implemented personalized recommendations using PostgreSQL with vector search.",
  image: blogIx,
  github: "https://github.com/Navani001/blogger",
  demo: "https://blogix.vercel.app/",
};

const project2: Types.Project = {
  title: "Event Manger For Bit",
  techStack: ["React", "Mui","Node js","Express","Mysql","NodeMailer"],
  description:
    "Developed an event management app to simplify college event bookings and attendance.Replaces Google Forms for event registrations, ensuring higher student participation",
  image: Rp,
  froentEnd:"d",
  backEnd:"https://github.com/Navani001/rp_backend"

};

const project3: Types.Project = {
  title: "Gen AI Summarizer Extension",
  techStack: ["vite", "Gemini Api","JavaScript"],
  description:
    " Created a browser extension that summarizes webpage contentwithout leaving the page. Increased user Productivity in Reading",
  image: summarizerExtension,
  github: "https://github.com/Navani001/summarizeextension",
};
const project4: Types.Project = {
  title: "Movie Recommendation System ",
  techStack: ["vite", "Gemini Api", "JavaScript"],
  description:
    "Built a machine learning-based movie recommendation system. Suggests movies based on user search history and inputs.Learned Vectorization  ",
  image: RecommendationImage,
  froentEnd: "https://github.com/Navani001/recommendationsystem_froentend",
  backEnd: "https://github.com/Navani001/Navani001-recommendation_system_backend2"
};
const projects: Types.Project[] = [project1, project2, project3, project4];

function App() {
  // const contactRef = useRef<HTMLElement | null>(null);

  // const handleScroll = () => {
  //   contactRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="space-y-20 lg:space-y-32">
        <div className="space-y-20 lg:space-y-28">
          <Experience />
          <Tools />
        </div>
        <div id="projects" className="space-y-36 lg:space-y-44">
          {projects.map((project, index) => (
            <Project key={index} project={project} reversed={index % 2 == 1} />
          ))}
        </div>
        <Contact />
      </div>
      <div className="mx-auto flex max-w-7xl p-10 pt-24 lg:px-8">
        <a className="w-full self-center text-center">
          © 2024 Navani Dev. All rights reserved
          <br />
          Built with <span className="animate-pulse">❤️</span>  in Tamil Nadu, India
        </a>
      </div>
    </>
  );
}

export default App;
