import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Terminal, Layout, Database, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const tabs = [
  { id: 'server', label: 'server.ts', icon: Terminal },
  { id: 'database', label: 'db_arch.sql', icon: Database },
  { id: 'status', label: 'system.log', icon: Zap }
];

export default function OriginChapter() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('server');
  const [logIndex, setLogIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const logs = [
    "[INFO] Initializing PostgreSQL pool... Connected (12ms)",
    "[INFO] Connecting Redis Cache Server... OK",
    "[INFO] Loading GraphQL schema & resolvers...",
    "[SUCCESS] Backend Services online. Listening on port 8080."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center relative"
    >
      <div className="mb-12 sm:mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3300]">01 // The Origin</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Text */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Bridging the gap between <span className="font-serif italic font-normal text-[#FF3300]">design & engineering.</span>
            </h2>
            <motion.div 
              className="space-y-5 text-[#CCCCCC] font-sans text-base sm:text-lg leading-relaxed text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                Hello, I'm Thomas. For over three years, I've engineered digital experiences at the intersection of performant code and immersive design. 
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                I specialize in architecting scalable systems, shaping user interfaces, and turning complex logic into elegant, accessible solutions. Whether it's a high-traffic fintech dashboard or a cinematic e-commerce platform, I ensure the underlying architecture is as flawless as the front-end aesthetics.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                Beyond the terminal, I'm passionate about mentoring upcoming developers and exploring the boundaries of generative AI in UX design.
              </motion.p>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {[
                { label: "Experience", value: "3+ Yrs" },
                { label: "Projects", value: "5+" },
                { label: "Clients", value: "Local" },
                { label: "Focus", value: "DB & Software" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-mono text-[10px] text-[#888888] uppercase mb-1">{stat.label}</div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Live Terminal Sandbox */}
        <motion.div style={{ y: y1 }} className="w-full">
          <div className="w-full max-w-xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Header / Tabs */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-[10px] transition-all ${
                        isActive
                          ? 'bg-[#FF3300] text-white font-semibold shadow-md'
                          : 'text-[#888888] hover:text-white'
                      }`}
                    >
                      <Icon size={12} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sandbox Content Container */}
            <div className="h-64 sm:h-72 overflow-hidden flex flex-col justify-between font-mono text-xs text-[#CCCCCC]">
              <AnimatePresence mode="wait">
                {activeTab === 'server' && (
                  <motion.div
                    key="server"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#888888] pb-2 border-b border-white/5">
                      <span>STATUS: ONLINE</span>
                      <span className="flex items-center gap-1.5 text-green-400">
                        <CheckCircle2 size={12} /> 60 FPS / 99.9% Uptime
                      </span>
                    </div>

                    <p className="text-purple-400"><span className="text-[#FF3300]">$</span> node server.ts --env=production</p>
                    <p className="text-[#888888]">// Core Backend System Engine</p>
                    <p><span className="text-blue-400">const</span> stack = ['MySQL', 'PostgreSQL', 'Node.js', 'Cassandra'];</p>
                    <p><span className="text-blue-400">async function</span> initEngine() {'{'}</p>
                    <p className="pl-4 text-green-400">await connectDatabase('PostgreSQL');</p>
                    <p className="pl-4 text-green-400">await bootstrapMicroservices();</p>
                    <p className="pl-4 text-[#888888]">return 'System Ready';</p>
                    <p>{'}'}</p>
                  </motion.div>
                )}

                {activeTab === 'database' && (
                  <motion.div
                    key="database"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#888888] pb-2 border-b border-white/5">
                      <span>DB SCHEMAS: ACTIVE</span>
                      <span className="flex items-center gap-1.5 text-[#FF3300]">
                        <ShieldCheck size={12} /> Encrypted SQL Pool
                      </span>
                    </div>

                    <p className="text-yellow-400">SELECT * FROM developer_stack WHERE dev = 'Thomas';</p>
                    <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5 space-y-1 text-[11px]">
                      <p><span className="text-[#888888]">Primary DB:</span> PostgreSQL / MySQL</p>
                      <p><span className="text-[#888888]">NoSQL Store:</span> MongoDB / Cassandra</p>
                      <p><span className="text-[#888888]">ORM & Query:</span> Prisma / Native SQL</p>
                      <p><span className="text-[#888888]">Performance:</span> Index Optimized (&lt;15ms)</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'status' && (
                  <motion.div
                    key="status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#888888] pb-2 border-b border-white/5">
                      <span>REAL-TIME SYSTEM MONITOR</span>
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    </div>

                    <div className="space-y-2 font-mono text-[11px]">
                      {logs.map((log, i) => (
                        <p key={i} className={i === logIndex ? 'text-[#FF3300] font-bold' : 'text-[#888888]'}>
                          {log}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Interactive Command Bar */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#666666]">
                <span>Tap tabs to test system</span>
                <span className="font-mono text-[#FF3300]">Yogyakarta, ID</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
