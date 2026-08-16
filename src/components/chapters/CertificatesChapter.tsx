import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, Cloud, Network } from 'lucide-react';

const certificates = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    issuerShort: "CISCO",
    year: "2024",
    credentialUrl: "https://www.credly.com/badges/e7bd2e07-3150-449a-a3e6-21a0f1030733/linked_in_profile",
    icon: <Network className="w-6 h-6" />,
    accent: "#1BA0D7",
    tags: ["Networking", "Routing", "Switching", "Wireless"],
    description: "Validated expertise in LAN switching technologies, IPv4 & IPv6 routing, WAN technologies, and network services."
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issuerShort: "CISCO",
    year: "2023",
    credentialUrl: "https://www.credly.com/badges/2e9db801-1426-4e76-ba33-70236419d065/public_url",
    icon: <Shield className="w-6 h-6" />,
    accent: "#1BA0D7",
    tags: ["Cybersecurity", "Threat Defense", "Network Security"],
    description: "Foundational knowledge in cybersecurity, covering threat landscape, attack types, and organizational defense strategies."
  },
  {
    title: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services",
    issuerShort: "AWS",
    year: "2024",
    credentialUrl: "https://www.credly.com/badges/5b4cc5ed-a113-461e-b533-8974ae55ff84/public_url",
    icon: <Cloud className="w-6 h-6" />,
    accent: "#FF9900",
    tags: ["Cloud Architecture", "AWS", "Infrastructure", "Scalability"],
    description: "Proficiency in designing resilient, secure, and cost-optimized architectures on Amazon Web Services."
  },
  {
    title: "AWS Academy Graduate — Cloud Web Application Builder",
    issuer: "Amazon Web Services",
    issuerShort: "AWS",
    year: "2024",
    credentialUrl: "https://www.credly.com/badges/b083ccd1-f932-4a91-9760-78e6c1668eb4/linked_in_profile",
    icon: <Cloud className="w-6 h-6" />,
    accent: "#FF9900",
    tags: ["Cloud Development", "AWS", "Web Applications", "Serverless"],
    description: "Hands-on experience building and deploying cloud-native web applications using AWS services and serverless patterns."
  },
  {
    title: "SAP01 — SAP Overview",
    issuer: "SAP",
    issuerShort: "SAP",
    year: "2024",
    credentialUrl: "http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303132363336303030313238&view=View",
    icon: <Award className="w-6 h-6" />,
    accent: "#008FD3",
    tags: ["ERP", "SAP", "Enterprise Systems", "Business Processes"],
    description: "Comprehensive overview of SAP solutions, business processes, and enterprise resource planning fundamentals."
  },
];

export default function CertificatesChapter() {
  return (
    <section id="certificates" className="py-16 sm:py-32 px-4 sm:px-6 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12 sm:mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">05 // Credentials</span>
        <h2 className="font-display text-3xl sm:text-6xl font-bold mt-4 sm:mt-6 tracking-tight">
          Certifications
        </h2>
        <p className="mt-4 text-[#888888] font-sans text-base sm:text-lg max-w-xl">
          Industry-recognized credentials validating hands-on technical expertise across cloud, networking, and enterprise systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            data-cursor-hover
          >
            {/* Accent glow top border */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
            />

            {/* Corner glow */}
            <div
              className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ background: cert.accent }}
            />

            {/* Header row */}
            <div className="flex items-start justify-between mb-4">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl border transition-colors duration-300"
                style={{
                  borderColor: `${cert.accent}30`,
                  backgroundColor: `${cert.accent}10`,
                  color: cert.accent
                }}
              >
                {cert.icon}
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                  style={{
                    color: cert.accent,
                    borderColor: `${cert.accent}30`,
                    backgroundColor: `${cert.accent}08`,
                  }}
                >
                  {cert.issuerShort}
                </span>
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-60 transition-opacity text-white/60"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug mb-2 group-hover:text-white transition-colors">
              {cert.title}
            </h3>

            {/* Description */}
            <p className="text-[#888888] font-sans text-sm leading-relaxed mb-5 flex-1">
              {cert.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-white/5 text-white/50 font-mono text-[10px] rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <span className="font-mono text-xs text-[#555555]">{cert.issuer} · {cert.year}</span>
              <span
                className="font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                style={{ color: cert.accent }}
              >
                View Credential →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
