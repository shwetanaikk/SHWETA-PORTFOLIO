function Certificates() {
  const certificates = [
    {
      name: "AEC Certificate",
      organization: "AEC",
      file: "/certificates/aec.pdf",
    },
    {
      name: "Microsoft Learn",
      organization: "Microsoft",
      file: "/certificates/microsoft.pdf",
    },
    {
      name: "Professional Networking",
      organization: "Networking",
      file: "/certificates/networking.pdf",
    },
    {
      name: "Operating Systems - 1",
      organization: "Academic Certificate",
      file: "/certificates/os1.pdf",
    },
    {
      name: "Operating Systems - 2",
      organization: "Academic Certificate",
      file: "/certificates/os2.pdf",
    },
    {
      name: "Techfest Certificate",
      organization: "IIT Bombay Techfest",
      file: "/certificates/techfest.pdf",
    },
  ];

  return (
    <section id="certificates" className="certificates-page">
      <div className="page-heading">
        <h1>My Certificates</h1>
        <div className="heading-line"></div>
        <p>Certifications and achievements I have earned</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>

            {/* Certificate preview */}
            <div className="certificate-preview">
              {certificate.file.endsWith(".jpeg") ? (
                <img
                  src={certificate.file}
                  alt={certificate.name}
                />
              ) : (
                <div className="pdf-preview">
                  📄
                  <span>PDF Certificate</span>
                </div>
              )}
            </div>

            {/* Certificate information */}
            <div className="certificate-info">
              <span className="certificate-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{certificate.name}</h2>

              <p>{certificate.organization}</p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="certificate-button"
              >
                View Certificate ↗
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;