import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
    },

    {
      title: "Programming",
      icon: "💻",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },

    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },

    {
      title: "Tools & Version Control",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <section className="skills-page">

      <motion.div
        className="page-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="small-heading">WHAT I WORK WITH</p>

        <h1>My Skills</h1>

        <div className="heading-line"></div>

        <p className="heading-description">
          Technologies and tools I use to build projects and
          continuously improve my development skills.
        </p>
      </motion.div>


      <div className="skills-grid">

        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >

            <div className="skill-group-header">
              <span className="skill-group-icon">
                {group.icon}
              </span>

              <h2>{group.title}</h2>
            </div>


            <div className="skill-items">

              {group.skills.map((skill) => (
                <motion.div
                  className="skill-item"
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="skill-icon">
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>
                </motion.div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;