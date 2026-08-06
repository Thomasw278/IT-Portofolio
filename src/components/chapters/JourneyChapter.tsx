import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechNova Inc.",
    period: "2021 — Present",
    metrics: [
      "Architected microservices handling 2M+ daily requests.",
      "Reduced cloud infrastructure costs by 45% YoY.",
      "Led a team of 6 engineers across 3 timezones."
    ],
    tags: ["Go", "React", "AWS", "Kubernetes"]
  },
  {
    role: "Full Stack Developer",
    company: "Elevate Digital",
    period: "2018 — 2021",
    metrics: [
      "Built the core trading engine processing $10M+ monthly volume.",
      "Improved frontend performance score from 65 to 98.",
      "Implemented automated CI/CD reducing deployment time by 80%."
    ],
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker"]
  }
];

export default function JourneyChapter() {
  return (
    <section id="career" className="py-32 px-6 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">04 // The Journey</span>
        <h2 className="font-display text-4xl sm:text-6xl font-bold mt-6 tracking-tight">Career & Impact</h2>
      </div>

      <div className="space-y-24">
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
              <h3 className="text-2xl font-display font-bold mb-2">{exp.role}</h3>
              <div className="font-mono text-sm text-[#888888] mb-6">{exp.company}</div>
              <div className="inline-block px-3 py-1 border border-[#FF3300]/30 text-[#FF3300] font-mono text-xs rounded-full">
                {exp.period}
              </div>
            </div>

            {/* Right Col: Metrics */}
            <div>
              <ul className="space-y-4 mb-8">
                {exp.metrics.map((metric, i) => (
                  <li key={i} className="flex gap-4 text-[#CCCCCC] font-sans text-lg">
                    <span className="text-[#FF3300] mt-1">✦</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: metric.replace(/(\d+%?|\$\d+M\+?|2M\+?|45%|80%|65|98|6)/g, '<span class="text-white font-mono font-bold">$&</span>') 
                    }} />
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-white/60 font-mono text-xs rounded">
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
