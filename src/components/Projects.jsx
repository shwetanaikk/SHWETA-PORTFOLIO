import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      id: "ticket-booking",
      icon: "🎫",
      title: "Secure Ticket Booking System",
      shortDescription:
        "A secure ticket booking application designed to manage seat selection and booking.",
      description:
        "A secure ticket booking system that allows users to select available seats and book tickets. The system prevents duplicate seat bookings and provides booking information through a simple web interface.",
      technologies: ["HTML", "CSS", "JavaScript", "C++ CGI"],
      github: "https://github.com/shwetanaikk/secure-ticket-booking.git",
    },

    {
      id: "blood-donation",
      icon: "🩸",
      title: "Blood Donation Management System",
      shortDescription:
        "A web platform connecting blood donors with people who need blood.",
      description:
        "A blood donation management platform that allows donors to register, users to search for donors based on blood group and location, and users to submit blood requests.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/",
    },

    {
      id: "pharmacy-management",
      icon: "💊",
      title: "Pharmacy Management System",
      shortDescription:
        "A complete backend-driven system for managing medicines, inventory and customer orders.",
      description:
        "A full-stack pharmacy management system with a complete backend. It provides APIs for medicine management, stock updates, inventory operations and customer orders. MongoDB is used for data storage and Redis is used for caching.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
      ],
      github:
        "https://github.com/shwetanaikk/pharmacy-management",
    },
  ];

  return (
    <section className="projects-page">

      {/* PAGE HEADER */}

      <motion.div
        className="page-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="small-heading">MY WORK</p>

        <h1>Featured Projects</h1>

        <div className="heading-line"></div>

        <p className="heading-description">
          A collection of projects where I turn ideas into practical
          applications using modern technologies.
        </p>
      </motion.div>


      {/* PROJECT CARDS */}

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            className="project-card-new"
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{ y: -8 }}
          >

            {/* Project Icon */}

            <div className="project-icon">
              {project.icon}
            </div>


            {/* Number */}

            <span className="project-number">
              0{index + 1}
            </span>


            {/* Title */}

            <h2>{project.title}</h2>


            {/* Description */}

            <p>{project.shortDescription}</p>


            {/* Technologies */}

            <div className="project-tech">

              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

              {project.technologies.length > 4 && (
                <span>
                  +{project.technologies.length - 4}
                </span>
              )}

            </div>


            {/* Buttons */}

            <div className="project-actions">

              <Link
                to={`/projects/${project.id}`}
                className="project-details-button"
                state={{ project }}
              >
                View Details
                <FaArrowRight />
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github-button"
              >
                <FaGithub />
              </a>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;