import { certifications } from "@/data/profile";
import { Award, ExternalLink, Hash } from "lucide-react";

export default function CertificationsSection() {
  const getCertificationLogo = (issuer: string) => {
    const base =
      "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold";
    switch (issuer.toLowerCase()) {
      case "amazon web services":
      case "aws":
        return (
          <div className={`${base} bg-gradient-to-br from-orange-400 to-orange-600`}>
            <span className="text-base">AWS</span>
          </div>
        );
      case "cloud native computing foundation":
      case "cncf":
        return (
          <div className={`${base} w-14 bg-gradient-to-br from-blue-500 to-blue-700`}>
            <span className="text-sm">CNCF</span>
          </div>
        );
      case "hashicorp":
        return (
          <div className={`${base} bg-gradient-to-br from-violet-500 to-violet-700`}>
            <span className="text-base">HC</span>
          </div>
        );
      case "google cloud":
      case "google":
        return (
          <div className={`${base} bg-gradient-to-br from-blue-400 to-blue-600`}>
            <span className="text-base">GCP</span>
          </div>
        );
      default:
        return (
          <div className={`${base} bg-gradient-to-br from-gray-500 to-gray-700`}>
            <Award className="h-5 w-5" />
          </div>
        );
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Professional Certifications</h2>
        <p className="text-center text-muted max-w-2xl mx-auto mb-14">
          Industry-recognized certifications that validate my expertise in cloud
          platforms, container orchestration, and infrastructure automation.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <div key={cert.id} className="card p-6">
              <div className="flex items-start gap-4">
                {getCertificationLogo(cert.issuer)}

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
                    {cert.name}
                    {cert.link && (
                      <>
                        {" "}
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors text-sm font-normal"
                        >
                          (<ExternalLink className="h-3 w-3" />
                          Verify)
                        </a>
                      </>
                    )}
                  </h3>

                  <div className="space-y-1.5 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <Hash className="h-3.5 w-3.5" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
