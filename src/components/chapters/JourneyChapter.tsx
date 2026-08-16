import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Vice Chairman — Student Relations & Organization Affairs",
    company: "HMTI (Informatics Student Association) — Universitas Kristen Duta Wacana",
    period: "2024 — 2025",
    metrics: [
      "Built and maintained collaborative relationships between students and relevant internal/external organizations.",
      "Coordinated student activity programs within the Informatics Student Association (HMTI) ecosystem.",
      "Designed and organized the Informatics Anniversary Awards (IAA), an annual recognition event celebrating outstanding achievements in the Informatics department."
    ],
    tags: ["Student Relations", "Event Planning", "Coordination", "Leadership"]
  },
  {
    role: "President of Student Council (OSIS)",
    company: "SMA Tarakanita Magelang",
    period: "2021 — 2022",
    metrics: [
      "Led and coordinated all student council activities, ensuring alignment with both student interests and school regulations.",
      "Designed and executed annual and monthly events, managing cross-division collaboration and logistics from planning to delivery.",
      "Served as the primary liaison between the student body and faculty, effectively channeling student aspirations to school leadership."
    ],
    tags: ["Leadership", "Event Management", "Public Speaking", "Organizational Development"]
  },
  {
    role: "Logistics Coordinator — SIXTI 2025",
    company: "Universitas Kristen Duta Wacana",
    period: "2025",
    metrics: [
      "Coordinated catering and meal preparation logistics for all committee members and event participants throughout the competition.",
      "Managed venue borrowing and approval processes in collaboration with university administrative departments.",
      "Ensured smooth event execution by overseeing competition venue layout and space arrangement prior to event day."
    ],
    tags: ["Logistics", "Event Coordination", "Venue Management", "Team Collaboration"]
  },
  {
    role: "Member — Publication & Documentation Division (FTICAMP 2024)",
    company: "Universitas Kristen Duta Wacana",
    period: "2024",
    metrics: [
      "Captured and managed event documentation throughout all activity sessions, ensuring complete visual coverage.",
      "Handled official social media content design and publication for the FTICAMP 2024 event.",
      "Coordinated inter-session documentation handoffs to maintain continuity and quality of recorded content."
    ],
    tags: ["Photography", "Social Media", "Graphic Design", "Documentation"]
  },
  {
    role: "Assistant Lecturer (Part Time)",
    company: "Universitas Kristen Duta Wacana",
    period: "Feb 2025 — Present",
    metrics: [
      "Mentored 30+ undergraduate students in practical laboratory courses focusing on Algorithms & Programming, Computer Networks (Routing & Configuration), and Database Systems.",
      "Designed weekly technical coursework and problem-solving assignments to strengthen students' practical engineering capabilities."
    ],
    tags: ["Algorithms & Programming", "Computer Networks", "Database Systems", "Mentoring"]
  },
  {
    role: "Student Staff IT Center (Part Time)",
    company: "Universitas Kristen Duta Wacana",
    period: "Feb 2025 — Present",
    metrics: [
      "Assisted students and campus staff with software installation, system setup, and initial device configuration.",
      "Performed routine hardware and software maintenance across all university IT laboratories.",
      "Monitored and maintained network routing stability and internet connectivity across computer labs."
    ],
    tags: ["IT Support", "Hardware & Software", "Network Configuration", "Troubleshooting"]
  },
  {
    role: "Vice Chairman (Co-Lead)",
    company: "Informatic Anniversary Awards (IAA)",
    period: "2024 — 2025",
    metrics: [
      "Spearheaded and coordinated the executive organizing committee for the Informatic Anniversary Awards (IAA).",
      "Oversaw event operations, division workflows, budget management, media publication, and logistics execution."
    ],
    tags: ["Leadership", "Event Management", "Team Coordination", "Public Relations"]
  }
];

export default function JourneyChapter() {
  return (
    <section id="career" className="py-16 sm:py-32 px-4 sm:px-6 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12 sm:mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">04 // The Journey</span>
        <h2 className="font-display text-3xl sm:text-6xl font-bold mt-4 sm:mt-6 tracking-tight">Career & Experience</h2>
      </div>

      <div className="space-y-12 sm:space-y-24">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/10 pt-10 relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Number indicator */}
            <div className="absolute top-0 right-0 -translate-y-1/2 bg-black px-4 font-mono text-xs text-[#333333] group-hover:text-[#FF3300] transition-colors">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Left Col: Meta */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-white">{exp.role}</h3>
              <div className="font-mono text-sm text-[#888888] mb-4">{exp.company}</div>
              <div className="inline-block px-3 py-1 border border-[#FF3300]/30 text-[#FF3300] font-mono text-xs rounded-full">
                {exp.period}
              </div>
            </div>

            {/* Right Col: Metrics */}
            <div>
              <ul className="space-y-4 mb-8">
                {exp.metrics.map((metric, i) => (
                  <li key={i} className="flex gap-3 text-[#CCCCCC] font-sans text-base sm:text-lg leading-relaxed text-justify">
                    <span className="text-[#FF3300] mt-1 shrink-0">✦</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-white/70 font-mono text-xs rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
