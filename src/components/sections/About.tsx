import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const skills = [
  "HTML5 / CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Responsive Web Design",
  "PHP",
  "MySQL",
  "Figma",
  "Git / GitHub",
  "REST API Integration",
  "Object-Oriented Programming",
];

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="w-full max-w-[250px] xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-5 w-full text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 w-full"
      >
        <h3 className="text-[24px] font-bold text-white">Skills</h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-tertiary rounded-lg px-4 py-2 text-sm text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="bg-tertiary rounded-2xl p-6"
        >
          <h3 className="text-[24px] font-bold text-white">
            Education
          </h3>

          <div className="mt-5 border-l-2 border-[#915eff] pl-4">
            <h4 className="text-lg font-semibold text-white">
              University of Finance - Marketing
            </h4>

            <p className="mt-2 text-[15px] text-white">
              Information Systems Management
            </p>

            <p className="text-secondary mt-1 text-sm">
              2020 – 2024
            </p>

            <p className="text-secondary mt-3 text-sm leading-7">
              Focused on database management, business process analysis,
              system development, and data analysis.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="bg-tertiary rounded-2xl p-6"
        >
          <h3 className="text-[24px] font-bold text-white">
            Certifications
          </h3>

          <div className="mt-5 border-l-2 border-[#915eff] pl-4">
            <h4 className="text-lg font-semibold text-white">
              University of Science – VNU-HCM
            </h4>

            <p className="text-secondary mt-3 text-sm leading-7">
              Network Administration & Cybersecurity Fundamentals
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");