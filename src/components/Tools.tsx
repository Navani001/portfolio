import jestLogo from "../assets/logos/jest.jpg";
import pythonLogo from "../assets/logos/python.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import typescriptLogo from "../assets/logos/typescript.svg";
import cLogo from "../assets/logos/c.svg";
import cypressLogo from "../assets/logos/cypress.jpg";
import reactLogo from "../assets/logos/react.svg";
import ReduxLogo from "../assets/logos/Redux.jpg";
import ZustandLogo from "../assets/logos/Zustand.jpg";
import VercelLogo from "../assets/logos/vercel.jpg";

import sqlLogo from "../assets/logos/sql.svg";
import nodeLogo from "../assets/logos/node.svg";
import expressLogo from "../assets/logos/express.svg";
import dockerLogo from "../assets/logos/Docker.jpg";
import gitLogo from "../assets/logos/git.svg";
import postgresLogo from "../assets/logos/postgres.jpg";
import sequelizeLogo from "../assets/logos/sequelizelogo.png";
import mui from "../assets/logos/mui.png";
const tools = [
  { name: "Python", logo: pythonLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "C", logo: cLogo },
  { name: "Postgres", logo: postgresLogo },
  { name: "Sequelice", logo: sequelizeLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Vercel", logo: VercelLogo },
  { name: "Jest", logo: jestLogo },
  { name: "React", logo: reactLogo },
  { name: "Docker", logo: dockerLogo },
  // { name: "MongoDB", logo: mongodbLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "Node", logo: nodeLogo },
  { name: "Express", logo: expressLogo },
  { name: "Cypress", logo: cypressLogo },
  { name: "Git", logo: gitLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "Zustand", logo: ZustandLogo },
  { name: "MUi", logo: mui },

];

function ToolSlide({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="slide">
      <div className="flex h-32 w-32 items-center justify-center p-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="mt-2 w-32 text-center">{name}</p>
    </div>
  );
}

function Tools() {
  return (
    <div className="mx-auto max-w-6xl px-3">
      <h2 className="mb-4 text-center text-5xl font-bold tracking-tight text-white">
        Tools
      </h2>
      <div className="relative overflow-hidden py-8">
        <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#0f061b] to-transparent"></div>
        <div className="slide-track">
          {tools.concat(tools).map((tool, index) => (
            <ToolSlide key={`${tool.name}-${index}`} {...tool} />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#0f061b] to-transparent"></div>
      </div>
    </div>
  );
}

export default Tools;
