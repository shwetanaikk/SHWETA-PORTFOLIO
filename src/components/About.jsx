import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-page">

      <motion.div
        className="page-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="small-heading">GET TO KNOW ME</p>

        <h1>About Me</h1>

        <div className="heading-line"></div>

        <p className="heading-description">
          A passionate Computer Science Engineering student who enjoys
          building useful and modern applications.
        </p>
      </motion.div>


      <div className="about-container">

        {/* INTRODUCTION */}
        <motion.div
          className="about-main-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="card-number">01</span>

          <h2>Hello, I'm Shweta 👋</h2>

          <p>
            I am a Computer Science Engineering student at
            <strong> Sahyadri College of Engineering and Management.</strong>
          </p>

          <p>
            I enjoy creating modern web applications and solving
            real-world problems through technology. I am particularly
            interested in frontend development, backend development,
            and programming.
          </p>

          <p>
            Currently, I am strengthening my skills in
            <strong> Java, Python, C++, JavaScript, React, Node.js,
            Express.js and MongoDB</strong> while continuously working
            on practical projects.
          </p>
        </motion.div>


        {/* RIGHT CARDS */}
        <div className="about-side">

          <motion.div
            className="about-info-card"
            whileHover={{ y: -8 }}
          >
            <div className="about-icon">💻</div>

            <div>
              <h3>Web Development</h3>
              <p>
                Building responsive and user-friendly web applications.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="about-info-card"
            whileHover={{ y: -8 }}
          >
            <div className="about-icon">🧠</div>

            <div>
              <h3>Problem Solving</h3>
              <p>
                Interested in algorithms, programming and solving
                real-world problems.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="about-info-card"
            whileHover={{ y: -8 }}
          >
            <div className="about-icon">🚀</div>

            <div>
              <h3>Continuous Learning</h3>
              <p>
                Always learning new technologies and improving my
                development skills.
              </p>
            </div>
          </motion.div>

        </div>

      </div>


      {/* STATS */}
      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="stat-card">
          <h2>3+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <h2>∞</h2>
          <p>Learning</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Passion</p>
        </div>

      </motion.div>

    </section>
  );
}

export default About;