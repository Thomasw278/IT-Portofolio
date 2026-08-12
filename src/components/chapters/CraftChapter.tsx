import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "JOS LAUNDRY",
    category: "Mobile App Design · UI/UX",
    description: "A mobile application concept designed to transform traditional laundry businesses into a modern digital platform, bridging local vendors with customers through a seamless mobile experience.",
    stats: { "Role": "UI/UX Designer", "Year": "2023", "Platform": "Figma" },
    color: "#FF3300",
    image: "",
    linkText: "View Figma Design",
    demo: "https://www.figma.com/design/olYVx0JyqXmyQhtUSnmG9C/IMK?node-id=83-129&t=dhLUMP6YCbnjSngO-1",
    github: "https://www.figma.com/design/olYVx0JyqXmyQhtUSnmG9C/IMK?node-id=83-129&t=dhLUMP6YCbnjSngO-1"
  },
  {
    title: "Smart Mini Car",
    category: "IoT · Robotics · C# & MQTT",
    description: "Prototype of an IoT smart mini car with HC-SR04 ultrasonic distance & obstacle detection, automated DC dynamo movement, and LED signaling, monitored and controlled via Node-RED with real-time MySQL logging.",
    stats: { "Role": "IoT Engineer", "Year": "2025", "Tech": "C# · MQTT" },
    color: "#2255FF",
    image: "",
    linkText: "View Google Drive Folder",
    demo: "https://drive.google.com/drive/folders/1xqHYOAapGkovWT6SVkpBpfEXy5-lf1eB?usp=sharing",
    github: "https://drive.google.com/drive/folders/1xqHYOAapGkovWT6SVkpBpfEXy5-lf1eB?usp=sharing"
  },
  {
    title: "Productivity App",
    category: "Full Stack · Node.js",
    description: "A functional To Do List application integrated into a personalized productivity dashboard featuring automated task management, an interactive Pomodoro timer, and embedded local database persistence.",
    stats: { "Role": "Full Stack Dev", "Year": "2026", "Tech": "JavaScript" },
    color: "#00FF66",
    image: "",
    linkText: "View GitHub Repository",
    demo: "https://github.com/Thomasw278/CodingCamp-9Mar26-Thomas-Wisnu",
    github: "https://github.com/Thomasw278/CodingCamp-9Mar26-Thomas-Wisnu"
  },
  {
    title: "Dapur Ibu",
    category: "Android App · Kotlin",
    description: "Android culinary management app featuring multi-role authentication (Admin & User), interactive analytics dashboard tracking recipe distributions, search catalog, and complete content creation workflow.",
    stats: { "Role": "Mobile Dev", "Year": "2026", "Tech": "Kotlin" },
    color: "#FF9900",
    image: "",
    linkText: "View GitHub Repository",
    demo: "https://github.com/Thomasw278/Kotlin-ProjectDapurIbu",
    github: "https://github.com/Thomasw278/Kotlin-ProjectDapurIbu"
  },
  {
    title: "Giricahyo Dashboard",
    category: "Backend · Forest Carbon Valuation",
    description: "Institutional R&D digital transformation project for FTI UKDW. Mitigates climate change by digitizing traditional forestry into an automated barcode tree inventory platform with carbon valuation formulas and digital certificates.",
    stats: { "Role": "Backend Dev", "Year": "2026", "Scope": "FTI UKDW" },
    color: "#00E5FF",
    image: "",
    linkText: "View GitHub Profile",
    demo: "https://github.com/Thomasw278",
    github: "https://github.com/Thomasw278"
  }
];

export default function CraftChapter() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" ref={targetRef}>
      {/* Mobile Layout: Clean vertical stack with interactive cards */}
      <div className="md:hidden py-16 px-5 max-w-xl mx-auto space-y-12">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">02 // Featured Projects</span>
          <h2 className="font-display text-3xl font-bold mt-2">Selected Work</h2>
        </div>

        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            whileTap={{ scale: 0.98 }}
            className="space-y-5 border border-white/10 bg-white/[0.02] p-5 rounded-2xl shadow-2xl"
          >
            <div className="aspect-[16/10] w-full bg-[#111111] border border-white/10 rounded-xl flex flex-col justify-between p-4 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF3300]/20 via-transparent to-transparent mix-blend-screen" />
              
              {/* Image with Glassmorphic Fallback */}
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 z-10"
              />

              <div className="flex justify-between items-start z-0">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-white/5 text-[#FF3300] border border-[#FF3300]/30 backdrop-blur-md">
                  PROJECT 0{index + 1}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#FF3300] animate-ping" />
              </div>

              <div className="z-0 space-y-1 my-auto">
                <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">{project.category}</div>
                <h4 className="font-display font-bold text-xl text-white">{project.title}</h4>
              </div>

              <div className="flex justify-between items-center z-0 pt-2 border-t border-white/10">
                <span className="font-mono text-[9px] text-[#666666] uppercase tracking-widest">Selected Work</span>
                <span className="font-mono text-xs text-white font-bold">{project.stats.Year}</span>
              </div>
            </div>

            <p className="text-[#888888] text-sm leading-relaxed text-justify">
              {project.description}
            </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 mb-5">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="font-mono text-[9px] uppercase text-[#888888] mb-0.5">{key}</div>
                    <div className="font-mono text-xs text-white font-medium">{value}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FF3300] text-white py-2.5 rounded-xl font-mono text-xs font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  <ExternalLink size={14} /> {project.linkText}
                </a>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Desktop Layout: Cinematic Sticky Horizontal Scroll */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-black">
          {/* Section Header */}
          <div className="absolute top-10 left-6 z-10 flex w-full justify-between pr-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">02 // Featured Projects</span>
            <span className="font-mono text-xs text-white/50">Scroll to explore</span>
          </div>

          <motion.div style={{ x }} className="flex w-[500vw]">
            {projects.map((project, index) => (
              <div key={index} className="w-[100vw] h-screen flex items-center justify-center p-6 sm:p-20">
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                  
                  {/* Visual placeholder / Image */}
                  <div 
                    className="aspect-square md:aspect-[4/3] w-full bg-[#111111] border border-white/10 rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden group shadow-2xl"
                    data-cursor-hover
                  >
                    {/* Background Radial Glow */}
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF3300]/20 via-transparent to-transparent mix-blend-screen transition-opacity duration-500 group-hover:opacity-60" />

                    {/* Image (if uploaded) */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 z-10"
                    />

                    {/* Fallback Glassmorphic UI Card (shown when no image is loaded) */}
                    <div className="flex justify-between items-start z-0">
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-[#FF3300] uppercase tracking-widest backdrop-blur-md">
                        Project 0{index + 1}
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF3300] animate-ping" />
                    </div>

                    <div className="z-0 space-y-2 my-auto">
                      <div className="font-mono text-xs text-[#888888] uppercase tracking-widest">{project.category}</div>
                      <h4 className="font-display font-bold text-3xl text-white tracking-tight">{project.title}</h4>
                      <div className="w-12 h-0.5 bg-[#FF3300]" />
                    </div>

                    <div className="flex justify-between items-center z-0 pt-4 border-t border-white/10">
                      <span className="font-mono text-[10px] text-[#666666] uppercase tracking-widest">Apple Dev Academy Submission</span>
                      <span className="font-mono text-xs text-white font-bold">{project.stats.Year}</span>
                    </div>

                    {/* View Button Overlay */}
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-4 font-mono text-[10px] text-white/90 bg-black/80 border border-white/20 px-3.5 py-2 rounded-full backdrop-blur-md flex items-center gap-2 hover:bg-[#FF3300] hover:border-[#FF3300] hover:text-white transition-all z-20 shadow-xl"
                    >
                      <ExternalLink size={12} /> {project.linkText.toUpperCase()}
                    </a>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-white/70 mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6">{project.title}</h3>
                      <p className="text-[#888888] text-lg mb-8 max-w-md leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mb-8">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="font-mono text-[10px] uppercase text-[#888888] mb-1">{key}</div>
                          <div className="font-mono text-base text-white font-medium">{value}</div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF3300] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors shadow-lg"
                    >
                      <ExternalLink size={14} /> {project.linkText}
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

          {/* Progress Indicator */}
          <div className="absolute bottom-10 right-10 font-mono text-sm text-white flex items-center gap-4">
            <span>01</span>
            <div className="w-24 h-px bg-white/20 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#FF3300]" 
                style={{ width: progressBarWidth }}
              />
            </div>
            <span>05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
