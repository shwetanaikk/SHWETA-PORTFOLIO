import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education-page">

      {/* PAGE HEADER */}

      <motion.div
        className="page-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="small-heading">MY ACADEMIC JOURNEY</p>

        <h1>Education</h1>

        <div className="heading-line"></div>

        <p className="heading-description">
          My academic journey, achievements and continuous learning.
        </p>
      </motion.div>


      {/* EDUCATION TIMELINE */}

      <div className="education-timeline">

        {/* =========================
            BE
        ========================= */}

        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot">🎓</div>

          <div className="education-card">

            <div className="education-year">
              2024 — Present
            </div>

            <h2>Bachelor of Engineering</h2>

            <h3>Computer Science Engineering</h3>

            <p className="education-institute">
              Sahyadri College of Engineering and Management
            </p>

            <p>
              Currently pursuing Computer Science Engineering with
              an interest in software development, web development,
              programming, databases and real-world problem solving.
            </p>

            <div className="education-tags">
              <span>CSE</span>
              <span>Programming</span>
              <span>Web Development</span>
            </div>

          </div>
        </motion.div>


        {/* =========================
            PREVIOUS SEMESTERS
        ========================= */}

        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15
          }}
        >
          <div className="timeline-dot">📊</div>

          <div className="education-card">

            <div className="education-year">
              Engineering
            </div>

            <h2>Previous Semesters</h2>

            <h3>Academic Progress</h3>

            <p>
              Progressing through my Computer Science Engineering
              program while developing strong foundations in
              programming, data structures, databases, operating
              systems and computer science fundamentals.
            </p>

            <div className="semester-grid">

              <div>
                <strong>Semester 1</strong>
                <span>Completed ✓</span>
              </div>

              <div>
                <strong>Semester 2</strong>
                <span>Completed ✓</span>
              </div>

              <div>
                <strong>Semester 3</strong>
                <span>Completed ✓</span>
              </div>

              <div>
                <strong>Semester 4</strong>
                <span>Completed ✓ </span>
              </div>

            </div>

          </div>
        </motion.div>


        {/* =========================
            PUC
        ========================= */}

        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
        >
          <div className="timeline-dot">📚</div>

          <div className="education-card">

            <div className="education-year">
              2022 — 2024
            </div>

            <h2>Pre-University Education</h2>

            <h3>PUC / 12th Standard</h3>

            <p className="education-institute">
              SIDDAHARTHA PRE-UNIVERSITY COLLEGE
            </p>

            <div className="education-result">

              <span>📊 Percentage</span>

              <strong>95%</strong>

            </div>

            <div className="education-tags">

              <span>PUC</span>

              <span>12th Standard</span>

              <span>95%</span>

            </div>

          </div>
        </motion.div>


        {/* =========================
            SSLC
        ========================= */}

        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.45
          }}
        >
          <div className="timeline-dot">🏫</div>

          <div className="education-card">

            <div className="education-year">
              2022
            </div>

            <h2>Secondary School Education</h2>

            <h3>SSLC / 10th Standard</h3>

            <p className="education-institute">
              S.F.S KODANI
            </p>

            <div className="education-result">

              <span>📊 Percentage</span>

              <strong>93.92%</strong>

            </div>

            <div className="education-tags">

              <span>SSLC</span>

              <span>10th Standard</span>

              <span>93.92%</span>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Education;