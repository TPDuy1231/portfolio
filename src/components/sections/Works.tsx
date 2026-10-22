import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full min-w-0 w-full"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
        glarePosition="all"
        glareMaxOpacity={0.15}
        className="h-full w-full"
      >
        <div className="bg-tertiary flex h-full w-full flex-col rounded-2xl p-5">
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name}`}
            className="relative block h-[230px] w-full overflow-hidden rounded-2xl"
          >
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />

            <span
              aria-hidden="true"
              className="black-gradient absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white"
            >
              ↗
            </span>
          </a>

          <div className="mt-5 flex-1">
            <h3 className="text-[24px] font-bold text-white">
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#aaa6c3]"
              >
                {name}
              </a>
            </h3>

            <p className="text-secondary mt-2 text-[14px]">
              {description}
            </p>
          </div>

     

          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-white hover:underline"
          >
            Visit website <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid w-full grid-cols-1 items-stretch gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");