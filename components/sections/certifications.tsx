import { certifications } from "@/data/profile";
import { Award, ExternalLink, Calendar, Hash } from "lucide-react";

export default function CertificationsSection() {
  const getCertificationLogo = (issuer: string) => {
    switch (issuer.toLowerCase()) {
      case "amazon web services":
      case "aws":
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AWS</span>
          </div>
        );
      case "cloud native computing foundation":
      case "cncf":
        return (
          <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-base">CNCF</span>
          </div>
        );
      case "hashicorp":
        return (
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">HC</span>
          </div>
        );
      case "google cloud":
      case "google":
        return (
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">GCP</span>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
            <Award className="h-6 w-6 text-white" />
          </div>
        );
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Professional Certifications</h2>
        <p className="text-center text-muted max-w-3xl mx-auto mb-12">
          Industry-recognized certifications that validate my expertise in cloud
          platforms, container orchestration, and infrastructure automation
          technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="card p-6">
              <div className="flex items-start gap-4">
                {getCertificationLogo(cert.issuer)}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {cert.name}
                  </h3>

                  <div className="space-y-2 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4" />
                      <span className="font-medium">Issuer:</span>
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Obtained:</span>
                      <span>
                        {new Date(cert.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span className="font-medium">Credential ID:</span>
                        <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
