import * as Types from "../types";
function Project({
  project,
  reversed,
}: {
  project: Types.Project;
  reversed: boolean;
}) {
  const content = (
    <div key={project.title} className="max-w-[36rem]">
      <div className={`${reversed && "text-right"}`}>
        <h2 className={`text-4xl font-bold tracking-tight font-white`}>
          {project.title}
        </h2>
        <div>
          {project.techStack.map((item, index) => (
            <span key={index} className={`text-sm font-medium text-purple-400`}>
              {item}
              {index !== project.techStack.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${reversed && "lg:-translate-x-[7.5%]"} relative z-20 mt-5 items-center rounded-lg bg-gradient-to-br from-[#763CAC50] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter lg:w-[107.5%]`}
      >
        <p className="text-sm text-blue-100">{project.description}</p>
      </div>
      <div className={`${reversed && "justify-end"} my-5 flex space-x-2`}>
        {project.github && (
          <button
            className="z-20 flex items-center rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.github, "_blank")}
          >
            Github
            <svg
              className="ml-2 size-4 fill-accent"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"
              
            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </button>
        )}
        {project.froentEnd && (
          <button
            className="z-20 flex items-center rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.froentEnd, "_blank")}
          >
           Frontend
            <svg
              className="ml-2 size-4 fill-accent"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"

            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </button>
        )}
        {project.backEnd && (
          <button
            className="z-20 flex items-center rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.backEnd, "_blank")}
          >
            Backend
            <svg
              className="ml-2 size-4 fill-accent"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"

            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </button>
        )}
        {project.demo && (
          <button
            className="z-20 flex items-center rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.demo, "_blank")}
          >
            Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 size-4"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  const image = (
    <div
      key={project.title + "2"}
      className="relative aspect-video w-full max-w-[36rem] lg:h-72"
    >
      <div
        className={`absolute -inset-1/2 -translate-x-24`}
        style={{
          backgroundImage:
            "radial-gradient(circle, #763CAC 0%, #8225d980 25%, rgba(118, 60, 172, 0) 42.5%)",
        }}
      />
      <div className="bg-navbar relative h-full w-full overflow-hidden rounded-lg">
        <div
          className={`absolute bottom-0 ${reversed ? "left-0 rounded-tr-xl" : "right-0 rounded-tl-xl"} h-[93.5%] w-[97%] overflow-hidden`}
        >
          <img src={project.image} alt={project.title} className="h-full w-full bg-slate-100 object-fill transition-all duration-1000 ease-in-out hover:opacity-50 hover:scale-110 transform" />
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={`mx-auto flex flex-col items-center px-3 lg:flex lg:max-w-6xl ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:justify-between`}
    >
      {[content, image]}
    </div>
  );
}

export default Project;
