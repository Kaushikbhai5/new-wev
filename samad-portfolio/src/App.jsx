import React, { useEffect, useState, useMemo, useRef } from "react";
import {
motion as m,
AnimatePresence,
useScroll,
useSpring,
useMotionTemplate,
useMotionValue,
useInView
} from "framer-motion";
import {
Twitter,
Linkedin,
Mail,
FileText,
Users,
Shield,
TrendingUp,
Award,
MessageSquare,
Target,
Zap,
Globe,
ExternalLink,
ChevronDown,
ArrowRight,
Menu,
X,
Youtube,
Send,
CheckCircle,
Layout,
BarChart,
PenTool,
Wrench,
Play,
ImageIcon,
Eye,
Download,
ArrowUp
} from "lucide-react";
/**
✅ Samad Portfolio - "Midnight Aurora" Edition (Intro Removed)




Update: Removed IntroScreen component and related logic.


The site now loads directly to the Hero section.


*/
// -----------------------------
// Data & Content
// -----------------------------
const content = {
hero: {
name: "Samad",

title: "Web3 Community Manager",

headline: "I help Web3 projects turn quiet servers into active communities.",

subtext: "Community manager with 4 years of experience growing crypto communities through real engagement, clear communication and consistent execution I’ve worked with projects like Galxe, Web3Go (DIN), Nolus Protocol Mantis Tyche and many others across the Web3 ecosystem.",

},
about: {
text1: "I’m a Web3 community manager with over 4 years of experience building and growing crypto communities.",

text2: "I started my journey in crypto back in 2021 and have since worked with multiple Web3 projects helping them improve engagement onboard users and create welcoming spaces for their communities.",

text3: "I’ve managed communities with over 700k plus members led ambassador programs organized AMAs and campaigns, and created content that makes complex DeFi concepts easy to understand.",

text4: "What I care about most is building real communities not just growing numbers My focus is always on activity retention and making users feel heard."

},
skills: [
{

  category: "Community Management",

  icon: Users,

  items: [

    "Discord & Telegram moderation",

    "Daily engagement strategies",

    "AMAs, contests, and events",

    "Ambassador programs",

    "Ticket support and user onboarding"

  ]

},

{

  category: "Growth & Engagement",

  icon: TrendingUp,

  items: [

    "Zealy and Galxe campaigns",

    "Community activation plans",

    "Regional growth (India)",

    "Retention strategies",

    "Feedback collection"

  ]

},

{

  category: "Content",

  icon: PenTool,

  items: [

    "Medium articles",

    "Twitter content",

    "Community announcements",

    "Guides and FAQs"

  ]

},

{

  category: "Tools",

  icon: Wrench,

  items: [

    "Discord bots",

    "Zealy",

    "Galxe",

    "Notion",

    "Google Sheets",

    "Basic automation"

  ]

}

],
experience: [
{

  company: "Galxe",

  role: "Community Moderator",

  desc: "Handled large-scale community moderation and user support, improved onboarding with structured FAQs, and maintained safety through rule enforcement and anti-scam workflows.",

  points: [

    "Moderated and supported a large-scale Web3 community, ensuring fast onboarding help and user support.",

    "Handled community queries professionally and reduced repeated issues using structured answers/FAQs.",

    "Maintained safety and trust through rule enforcement, spam control, and scam prevention workflows."

  ]

},

{

  company: "Web3Go (DIN)",

  role: "Community Manager",

  desc: "Managed Discord operations, engagement routines, and campaigns while simplifying complex DeFi topics into beginner-friendly guides.",

  points: [

    "Managed Discord operations: moderation coverage, support flow, and engagement routines.",

    "Executed campaigns/events and helped improve retention through consistent community activity.",

    "Simplified complex product/DeFi topics into beginner-friendly explanations and guides."

  ]

},

{

  company: "Nolus Protocol",

  role: "Community Manager",

  desc: "Created educational content, ran engagement campaigns, collected feedback, and shared insights with the team to improve community operations.",

  points: [

    "Created educational content and community updates to improve product understanding.",

    "Ran engagement activities and community campaigns to increase participation.",

    "Collected feedback, tracked sentiment, and reported insights to improve community operations."

  ]

},

{

  company: "Mantis",

  role: "Regional Community Manager (India)",

  desc: "Led the Indian community, hosted AMAs and contests, supported localized growth, and acted as a bridge between users and the core team.",

  points: [

    "Led localized growth strategy for India and kept community activity consistent.",

    "Hosted AMAs, contests, and community events to drive participation and retention.",

    "Acted as bridge between users and team, sharing feedback and market/community insights."

  ]

},

{

  company: "Tyche Protocol",

  role: "Community Manager",

  desc: "Managed daily community operations and supported the ambassador program to expand reach and participation.",

  points: [

    "Managed day-to-day community ops, moderation, engagement prompts, and user support.",

    "Supported an Ambassador Program to expand reach and increase community participation."

  ]

},

{

  company: "MEXC",

  role: "India KOL / BD Support",

  desc: "Supported India-focused KOL outreach, helped execute campaigns, tracked performance, and monitored regional Web3 trends.",

  points: [

    "Leading KOL and influencer outreach efforts to boost MEXC's presence and user growth in the Indian crypto market.",

    "Building and nurturing long-term relationships with local KOLs, partners, and marketing channels.",

    "Supporting the execution and performance tracking of KOL marketing campaigns.",

    "Monitoring local market trends and competitor strategies to optimize campaign impact.",

    "Staying engaged with the Indian Web3 community to keep MEXC relevant and competitive."

  ]

},

{

  company: "ZKDX",

  role: "Community Manager",

  desc: "Handled Discord and Telegram operations, guided onboarding, explained tasks and updates, and kept conversations active during campaigns.",

  points: [

    "Took care of day-to-day community operations across Discord and Telegram.",

    "Guided users through onboarding and explained tasks, updates, and platform basics.",

    "Kept conversations active while maintaining order during high-traffic and campaign phases."

  ]

},

{

  company: "Astra Nova",

  role: "Moderator",

  desc: "Maintained discipline in Discord, enforced rules, managed high-traffic channels during announcements, and removed spam/scam attempts.",

  points: [

    "Maintained discipline in Discord by enforcing rules and handling community issues calmly.",

    "Supported major announcements and campaign pushes by keeping channels clean and well-managed.",

    "Protected users by quickly spotting spam/scam attempts and removing them early."

  ]

},

{

  company: "Laika AI",

  role: "Community Manager",

  desc: "Kept discussions active, onboarded new users with simple explanations, and shared community feedback with the team.",

  points: [

    "Kept community discussions active and encouraged members to participate.",

    "Helped onboard new users with simple explanations and quick replies.",

    "Shared community feedback with the team to improve communication and updates."

  ]

},

{

  company: "Pi Squared",

  role: "Moderator",

  desc: "Focused on keeping communities safe and organized while helping users during daily discussions and key updates.",

  points: [

    "Focused on keeping the community safe, clean, and well-organized during daily discussions.",

    "Helped users with questions and repeated issues so the chat stayed clear and structured.",

    "Stayed active during key updates to maintain smooth conversation flow."

  ]

},

{

  company: "Liquid",

  role: "Moderator",

  desc: "Monitored chats, removed spam, assisted users during campaigns and updates, and kept announcements clear.",

  points: [

    "Monitored chats and removed spam to maintain a professional community environment.",

    "Assisted users during updates, events, and campaign phases with fast guidance.",

    "Ensured announcements and discussions remained easy to follow."

  ]

},

{

  company: "HyperGPT",

  role: "Community Helper",

  desc: "Helped users with tasks and troubleshooting, explained confusing topics in simple terms, and stayed active as reliable support.",

  points: [

    "Helped users with tasks, troubleshooting, and general platform questions in a friendly way.",

    "Broke down confusing topics into simple explanations for beginners.",

    "Stayed active as a reliable point of help for recurring community issues."

  ]

},

{

  company: "Zora",

  role: "Community Contributor",

  desc: "Supported community members, stayed active during ecosystem updates, and helped build a positive community culture.",

  points: [

    "Stayed active in discussions and supported other community members when needed.",

    "Helped increase engagement through consistent interaction during ecosystem updates.",

    "Contributed to a positive and welcoming community culture."

  ]

}

],
achievements: [
"Grew one project’s community by over 60% using daily engagement, AMAs, contests, and weekly activities",

"Managed communities with over 1M members",

"Successfully supported ambassador programs",

"Improved user participation and retention across multiple projects",

"Created educational content that helped onboard non-technical users"

],
featuredWork: [
{ 

  title: "Arbitrum Arc – CoW AMM Guide", 

  icon: FileText, 

  url: "https://medium.com/@samadsaifi403/the-arbitrum-arc-move-into-cow-amm-and-earn-big-with-50k-in-arb-rewards-87cf93a2c569",

  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*ne1B5LRlmhzcgMpx.png",

  label: "Article",

  action: "Read on Medium"

},

{ 

  title: "Get to Know Gems Launchpad", 

  icon: Youtube, 

  url: "https://youtube.com/@cryptolooters3287?si=c0bYuu_7tNuYaMm4",

  type: "video",

  videoId: "t0U0L2bb8zQ"

},

{ 

  title: "CodeAssist - Ai that's learn from you", 

  icon: Twitter, 

  url: "https://x.com/samadsaifi56/status/1988790827670544563?s=20",

  image: "https://pbs.twimg.com/card_img/2014325493206790145/M_ILMOiV?format=png&name=small",

  label: "Post",

  action: "View on X"

},

{ 

  title: "Swan Chain Mission: Mainnet Week 5", 

  icon: FileText, 

  url: "https://medium.com/@samadsaifi403/introducing-swan-chain-mission-mainnet-week-5-on-chain-dbbdaacc871d",

  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*w4WXV2tbXu_RjuG0",

  label: "Article",

  action: "Read on Medium"

},

],
proofOfWork: [
{ 

  title: "Discord Activity", 

  desc: "Examples of engagement & support", 

  icon: MessageSquare,

  images: [

    "https://pbs.twimg.com/media/G_pJPNobAAIvxLF?format=png&name=small",

    "https://pbs.twimg.com/media/G_pMSaaX0AArBB8?format=png&name=small"

  ],

  isGallery: true

},

{ title: "Medium Articles", desc: "Technical writing & guides", icon: FileText, url: "https://medium.com/@samadsaifi403" },

{ title: "Twitter Posts", desc: "Announcements & threads", icon: Twitter, url: "https://x.com/samadsaifi56" },

{ 

  title: "Events Screenshots", 

  desc: "Live event hosting proof", 

  icon: Users,

  images: [

    "https://pbs.twimg.com/media/G_pQE0RXoAAkZBC?format=jpg&name=large",

    "https://pbs.twimg.com/media/G_pQHgVbsAA7or-?format=jpg&name=large",

    "https://pbs.twimg.com/media/G_pQMhmbcAAXVNA?format=jpg&name=large",

    "https://pbs.twimg.com/media/G_p9RsasAA_MtV?format=jpg&name=small",

    "https://pbs.twimg.com/media/G_pQ_ylbAAIAxzc?format=jpg&name=small"

  ],

  isGallery: true

},

],
contact: {
text: "Looking for a community manager who focuses on real engagement and long-term growth? Let’s connect.",

links: [

  { label: "Twitter", icon: Twitter, url: "https://x.com/samadsaifi56", color: "text-sky-400" },

  { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/samad-saifi-343529283", color: "text-blue-500" },

  { label: "Medium", icon: FileText, url: "https://medium.com/@samadsaifi403", color: "text-white" },

  { label: "YouTube", icon: Youtube, url: "https://youtube.com/@cryptolooters3287?si=c0bYuu_7tNuYaMm4", color: "text-red-500" },

  { label: "Telegram", icon: Send, url: "https://t.me/samadsaifi55", color: "text-sky-300" },

  { label: "Email", icon: Mail, url: "mailto:samadsaifi304@gmail.com", color: "text-indigo-400" },

]

}
};
// -----------------------------
// Helper Components
// -----------------------------
const Typewriter = ({ text, startDelay, shouldStart, className, speed = 10, onComplete }) => {
const [displayText, setDisplayText] = useState("");
useEffect(() => {
if (!shouldStart) return;



const timeout = setTimeout(() => {

  let currentIndex = 0;

  const interval = setInterval(() => {

    if (currentIndex <= text.length) {

      setDisplayText(text.slice(0, currentIndex));

      currentIndex++;

      if(currentIndex > text.length && onComplete) onComplete();

    } else {

      clearInterval(interval);

    }

  }, speed);



  return () => clearInterval(interval);

}, startDelay);



return () => clearTimeout(timeout);

}, [text, startDelay, shouldStart, speed, onComplete]);

return <span className={className}>{displayText}</span>;
};

// -----------------------------
// UI Components
// -----------------------------

const Background = () => (
  <>
    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[150px] animate-pulse" />

    <div
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] animate-pulse"
      style={{ animationDelay: "4s" }}
    />

    <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[150px]" />

    {/* Subtle Noise Texture */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
      }}
    />
  </>
);



const Section = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);


const Heading = ({ children, className = "", align = "text-center" }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${align} ${className}`}
  >
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent inline-block">
      {children}
    </h2>

    <div
      className={`h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4 ${
        align === "text-center" ? "mx-auto" : ""
      }`}
    />
  </m.div>
);

function Card({ children, className = "", delay = 0, onClick, hoverEffect = true }) {
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
function handleMouseMove({ currentTarget, clientX, clientY }) {
const { left, top } = currentTarget.getBoundingClientRect();

mouseX.set(clientX - left);

mouseY.set(clientY - top);

}
return (
<m.div

  initial={{ opacity: 0, y: 20 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  transition={{ delay, duration: 0.5 }}

  onMouseMove={handleMouseMove}

  onClick={onClick}

  className={`group relative border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md overflow-hidden ${hoverEffect ? 'hover:border-white/20 hover:bg-white/10' : ''} ${onClick ? 'cursor-pointer transition-transform hover:-translate-y-1' : ''} ${className}`}

>

  <m.div

    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"

    style={{

      background: useMotionTemplate`

        radial-gradient(

          600px circle at ${mouseX}px ${mouseY}px,

          rgba(129, 140, 248, 0.15),

          transparent 80%

        )

      `,

    }}

  />

  <div className="relative h-full p-8">{children}</div>

</m.div>

);
}
// -----------------------------
// App Component
// -----------------------------
export default function App() {
const [isNavOpen, setIsNavOpen] = useState(false);
const [playingVideos, setPlayingVideos] = useState({});
const [activeProof, setActiveProof] = useState(null);
const [isContactOpen, setIsContactOpen] = useState(false);
const [isResumeOpen, setIsResumeOpen] = useState(false);
// State for Typewriter trigger
const [startTypewriter, setStartTypewriter] = useState(false);
const [startHeroTypewriter, setStartHeroTypewriter] = useState(false);
const aboutRef = useRef(null);
const isAboutInView = useInView(aboutRef, { once: true, amount: 0.4 });
useEffect(() => {
setStartHeroTypewriter(true);

}, []);
useEffect(() => {
if (isAboutInView) {

    setStartTypewriter(true);

 }

}, [isAboutInView]);
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
stiffness: 100,

damping: 30,

restDelta: 0.001

});
const toggleVideo = (index) => {
setPlayingVideos(prev => ({ ...prev, [index]: true }));

};
const scrollToTop = () => {
window.scrollTo({

  top: 0,

  behavior: "smooth"

});

};
return (
<div className="min-h-screen bg-[#0F1115] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-white">

  <Background />



  <style>{`

    /* --- Neon Buttons for Let's Connect Section (Rounded-2xl) --- */

    #contact a {

      position: relative;

      background: transparent !important;

      border: none !important;

      overflow: hidden;

      z-index: 1;

      isolation: isolate;

      border-radius: 1rem; 

      box-shadow: 0 0 10px rgba(0,0,0,0.5); 

    }



    #contact a::before {

      content: '';

      position: absolute;

      left: -50%;

      top: -50%;

      width: 200%;

      height: 200%;

      background: conic-gradient(from 0deg, transparent 70%, #ff0033);

      animation: rotate-border 2s linear infinite, color-cycle 16s step-end infinite;

      z-index: -2;

    }



    #contact a::after {

      content: '';

      position: absolute;

      inset: 2px;

      background: #0F1115; 

      border-radius: calc(1rem - 2px);

      z-index: -1;

    }



    #contact a:hover::before {

         filter: brightness(1.3);

    }



    /* --- Neon Buttons for Proof of Work (Rounded-Full) --- */

    .neon-pill {

        position: relative;

        background: transparent !important;

        border: none !important;

        overflow: hidden;

        z-index: 1;

        isolation: isolate;

        border-radius: 9999px;

        box-shadow: 0 0 10px rgba(0,0,0,0.5);

    }



    .neon-pill::before {

        content: '';

        position: absolute;

        left: -50%;

        top: -50%;

        width: 200%;

        height: 200%;

        background: conic-gradient(from 0deg, transparent 70%, #ff0033);

        animation: rotate-border 2s linear infinite, color-cycle 16s step-end infinite;

        z-index: -2;

    }



    .neon-pill::after {

        content: '';

        position: absolute;

        inset: 2px;

        background: #0F1115;

        border-radius: 9999px;

        z-index: -1;

    }

    

    .neon-pill:hover::before {

         filter: brightness(1.3);

    }





    @keyframes rotate-border {

      0% { transform: rotate(0deg); }

      100% { transform: rotate(360deg); }

    }



    @keyframes color-cycle {

      0% { background: conic-gradient(from 0deg, transparent 70%, #ff0033); }      /* Red */

      12.5% { background: conic-gradient(from 0deg, transparent 70%, #2979ff); }   /* Electric Blue */

      25% { background: conic-gradient(from 0deg, transparent 70%, #00e5ff); }     /* Cyan */

      37.5% { background: conic-gradient(from 0deg, transparent 70%, #76ff03); }   /* Lime Green */

      50% { background: conic-gradient(from 0deg, transparent 70%, #d500f9); }     /* Purple */

      62.5% { background: conic-gradient(from 0deg, transparent 70%, #f50057); }   /* Pink */

      75% { background: conic-gradient(from 0deg, transparent 70%, #ff9100); }     /* Orange */

      87.5% { background: conic-gradient(from 0deg, transparent 70%, #1de9b6); }   /* Teal */

    }

  `}</style>

  

  {/* Scroll Progress Bar */}

  <m.div

    className="fixed top-0 left-0 right-0 h-1.5 z-50 origin-left bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"

    style={{ scaleX }}

  />



  {/* Navbar */}

  <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0F1115]/80 backdrop-blur-xl border-b border-white/5">

    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

      <a href="#" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">

        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">S</span>

        Samad.

      </a>

      

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">

        {["About", "Skills", "Experience", "Work", "Contact"].map((item) => (

          <a 

            key={item} 

            href={`#${item.toLowerCase()}`} 

            className="text-slate-400 hover:text-white transition-colors hover:scale-105 transform duration-200"

          >

            {item}

          </a>

        ))}

        <button 

          onClick={() => setIsContactOpen(true)}

          className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full transition-all text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-purple-500/50 hover:scale-105"

        >

          Hire Me

        </button>

      </div>



      <button 

        className="md:hidden text-slate-400 hover:text-white p-2"

        onClick={() => setIsNavOpen(!isNavOpen)}

      >

        {isNavOpen ? <X /> : <Menu />}

      </button>

    </div>



    {/* Mobile Nav */}

    <AnimatePresence>

      {isNavOpen && (

        <m.div 

          initial={{ height: 0, opacity: 0 }}

          animate={{ height: "auto", opacity: 1 }}

          exit={{ height: 0, opacity: 0 }}

          className="md:hidden overflow-hidden bg-[#0F1115] border-b border-white/10"

        >

          <div className="flex flex-col p-6 gap-6">

            {["About", "Skills", "Experience", "Work", "Contact"].map((item) => (

              <a 

                key={item} 

                href={`#${item.toLowerCase()}`}

                onClick={() => setIsNavOpen(false)}

                className="text-xl font-medium text-slate-300 hover:text-white"

              >

                {item}

              </a>

            ))}

          </div>

        </m.div>

      )}

    </AnimatePresence>

  </nav>



  {/* Hero Section */}

  <section id="hero" className="relative z-10 pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center">

    <m.div

      initial={{ opacity: 0, y: 30 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8 }}

      className="max-w-4xl"

    >

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-wider mb-8 uppercase shadow-[0_0_30px_rgba(99,102,241,0.2)]">

        <span className="relative flex h-2.5 w-2.5">

          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>

          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>

        </span>

        {content.hero.title}

      </div>

      

      <div className="mb-8 min-h-[160px] md:min-h-[220px]">

        {/* "Building Active" Text with White Pulse Glow */}

        <m.div

            animate={{ textShadow: ["0 0 5px rgba(255,255,255,0.1)", "0 0 20px rgba(255,255,255,0.4)", "0 0 5px rgba(255,255,255,0.1)"] }}

            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}

        >

            <Typewriter 

                text="Building Active"

                startDelay={200}

                shouldStart={startHeroTypewriter}

                speed={70} 

                className="text-5xl md:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl"

            />

        </m.div>



        {/* "Web3 Communities" Text with Moving Gradient & Hue Rotation */}

        <m.div

            initial={{ filter: "drop-shadow(0 0 0px transparent)" }}

            animate={{ 

                filter: ["hue-rotate(0deg) drop-shadow(0 0 10px rgba(168,85,247,0.3))", "hue-rotate(360deg) drop-shadow(0 0 30px rgba(34,211,238,0.5))"]

            }}

            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}

        >

            <div className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-[length:200%_auto] pb-2">

                <Typewriter 

                    text="Web3 Communities."

                    startDelay={1500} 

                    shouldStart={startHeroTypewriter}

                    speed={70}

                    className="inline"

                />

            </div>

        </m.div>

      </div>



      <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">

        {content.hero.subtext}

      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">

        <button 

          onClick={() => setIsResumeOpen(true)}

          className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/10 backdrop-blur-sm hover:border-white/30"

        >

          View Resume

        </button>

        <button 

          onClick={() => setIsContactOpen(true)}

          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] hover:-translate-y-1"

        >

          Let's Connect

        </button>

      </div>

    </m.div>

  </section>



  {/* About Me Section */}

  <section id="about" className="py-24 px-6 relative z-10" ref={aboutRef}>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

      <div>

        <Heading align="text-left">About Me</Heading>

        <div className="space-y-6 text-lg leading-relaxed text-slate-400 font-light min-h-[300px]">

          {/* Typewriter Paragraphs */}

          <Typewriter 

            text={content.about.text1} 

            startDelay={0} 

            shouldStart={startTypewriter} 

            className="mb-4"

          />

          <Typewriter 

            text={content.about.text2} 

            startDelay={content.about.text1.length * 10 + 500} 

            shouldStart={startTypewriter} 

            className="mb-4"

          />

          <Typewriter 

            text={content.about.text3} 

            startDelay={(content.about.text1.length + content.about.text2.length) * 10 + 1000} 

            shouldStart={startTypewriter} 

            className="text-slate-200 font-normal border-l-4 border-indigo-500 pl-4 mb-4"

          />

          <Typewriter 

            text={content.about.text4} 

            startDelay={(content.about.text1.length + content.about.text2.length + content.about.text3.length) * 10 + 1500} 

            shouldStart={startTypewriter} 

          />

        </div>

      </div>

      <Card className="!p-0 border-0 bg-transparent" hoverEffect={false}>

         <div className="grid grid-cols-2 gap-4">

            {[

               { label: "Experience", value: "4+ Years", icon: Award },

               { label: "Communities", value: "700k+", icon: Users },

               { label: "Projects", value: "13+", icon: Target },

               { label: "Focus", value: "Retention", icon: Shield },

            ].map((stat, i) => (

               <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center text-center justify-center aspect-square hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-2xl">

                  <stat.icon className="w-10 h-10 text-indigo-400 mb-4" />

                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>

                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>

               </div>

            ))}

         </div>

      </Card>

    </div>

  </section>



  {/* Skills Section */}

  <Section id="skills">

    <Heading>My Expertise</Heading>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {content.skills.map((skill, i) => (

        <Card key={i} delay={i * 0.1}>

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-white/5">

            <skill.icon className="text-indigo-400" size={28} />

          </div>

          <h3 className="text-xl font-bold text-white mb-6">{skill.category}</h3>

          <ul className="space-y-4">

            {skill.items.map((item, j) => (

              <li key={j} className="flex items-start gap-3 text-sm text-slate-400 font-medium">

                <CheckCircle size={18} className="text-indigo-500 mt-0.5 shrink-0" />

                {item}

              </li>

            ))}

          </ul>

        </Card>

      ))}

    </div>

  </Section>



  {/* Experience Section */}

  <Section id="experience">

    <Heading>Experience</Heading>

    <div className="space-y-6 max-w-4xl mx-auto">

      {content.experience.map((job, i) => (

        <m.div

          key={i}

          initial={{ opacity: 0, x: -20 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          transition={{ delay: i * 0.05 }}

          className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all hover:shadow-2xl hover:shadow-black/50 group"

        >

          <div className="md:w-1/3">

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{job.company}</h3>

            <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wide border border-indigo-500/20">{job.role}</div>

          </div>

          <div className="md:w-2/3 border-l border-white/5 pl-8 md:border-l-white/10">

            <ul className="list-disc pl-4 space-y-2 text-slate-400 font-light leading-relaxed">

              {job.points.map((point, j) => (

                <li key={j}>{point}</li>

              ))}

            </ul>

          </div>

        </m.div>

      ))}

    </div>

  </Section>



  {/* Featured Work Section */}

  <Section id="work">

    <Heading>Featured Work</Heading>

    <div className="grid md:grid-cols-2 gap-8 mb-24">

      {content.featuredWork.map((work, i) => (

        <m.div key={i} whileHover={{ y: -8 }} className="h-full">

          {work.type === 'video' ? (

            <div className="h-full rounded-3xl border border-white/10 bg-[#16181D] overflow-hidden flex flex-col shadow-2xl">

              <div className="relative aspect-video bg-black">

                {playingVideos[i] ? (

                  <iframe 

                    width="100%" 

                    height="100%" 

                    src={`https://www.youtube.com/embed/${work.videoId}?autoplay=1`} 

                    title={work.title}

                    frameBorder="0" 

                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 

                    allowFullScreen

                    className="absolute inset-0"

                  ></iframe>

                ) : (

                  <button 

                    onClick={() => toggleVideo(i)}

                    className="absolute inset-0 w-full h-full bg-cover bg-center group cursor-pointer"

                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${work.videoId}/hqdefault.jpg)` }}

                    aria-label="Play Video"

                  >

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform group-hover:bg-white/20">

                      <Play className="fill-white text-white ml-2" size={36} />

                    </div>

                  </button>

                )}

              </div>

              <div className="p-10 flex-1 flex flex-col">

                <div className="flex items-center gap-2 mb-4 text-red-400 text-xs font-bold uppercase tracking-wider">

                  <Youtube size={16} /> Video Guide

                </div>

                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{work.title}</h3>

                <div className="mt-auto pt-6 border-t border-white/5">

                  <a 

                    href={work.url} 

                    target="_blank" 

                    rel="noreferrer" 

                    className="text-sm font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"

                  >

                    Watch on YouTube <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />

                  </a>

                </div>

              </div>

            </div>

          ) : (

            <a href={work.url} target="_blank" rel="noreferrer" className="group block h-full">

              <div className="h-full rounded-3xl border border-white/10 bg-[#16181D] overflow-hidden flex flex-col hover:border-indigo-500/30 transition-all shadow-2xl hover:shadow-indigo-900/20">

                <div className="relative h-72 overflow-hidden">

                    <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] via-transparent to-transparent opacity-90" />

                </div>

                <div className="p-10 flex-1 flex flex-col relative -mt-20">

                  <div className="flex items-center gap-2 mb-4 text-indigo-400 text-xs font-bold uppercase tracking-wider bg-[#16181D]/80 backdrop-blur w-fit px-3 py-1 rounded-lg border border-white/5">

                    <work.icon size={14} /> {work.label || 'Work'}

                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors leading-tight">{work.title}</h3>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">

                    {work.action || 'View Details'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />

                  </div>

                </div>

              </div>

            </a>

          )}

        </m.div>

      ))}

    </div>



    <Heading>Proof of Work</Heading>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

      {content.proofOfWork.map((proof, i) => {

        const isGallery = proof.isGallery;

        const hasUrl = proof.url;

        

        const InnerContent = (

          <div className="flex flex-col h-full items-center text-center p-8">

            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">

              <proof.icon className="text-indigo-400" size={32} />

            </div>

            <div className="font-bold text-white text-lg mb-2">{proof.title}</div>

            <div className="text-sm text-slate-400 leading-relaxed">{proof.desc}</div>

            

            {isGallery ? (

               <div className="mt-8 flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wider neon-pill px-4 py-2 hover:scale-105 transition-all duration-300 cursor-pointer">

                  <ImageIcon size={14} /> View Gallery

               </div>

            ) : hasUrl ? (

               <div className="mt-8 flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wider neon-pill px-4 py-2 hover:scale-105 transition-all duration-300 cursor-pointer">

                  View Link <ExternalLink size={14} />

               </div>

            ) : null}

          </div>

        );



        return (

          <Card 

            key={i} 

            delay={i * 0.05} 

            className="h-full !p-0 bg-gradient-to-br from-white/[0.03] to-transparent border-white/5"

            onClick={isGallery ? () => setActiveProof(proof) : undefined}

          >

            {isGallery ? (

              <div className="h-full block">{InnerContent}</div>

            ) : hasUrl ? (

              <a href={proof.url} target="_blank" rel="noreferrer" className="block h-full">{InnerContent}</a>

            ) : (

              <div className="h-full block">{InnerContent}</div>

            )}

          </Card>

        );

      })}

    </div>

  </Section>



  {/* Contact */}

  <Section id="contact" className="py-32">

    <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-indigo-900/10 to-transparent p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      

      <div className="relative z-10">

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's Connect</h2>

        <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">

          {content.contact.text}

        </p>

        

        <div className="flex flex-wrap justify-center gap-4">

          {content.contact.links.map((link, i) => {

            const Icon = link.icon;

            return (

              <a

                key={i}

                href={link.url}

                target="_blank"

                rel="noreferrer"

                className={`flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0F1115] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:-translate-y-1 hover:shadow-xl transition-all group`}

              >

                <Icon size={24} className={`transition-colors ${link.color}`} />

                <span className="font-bold text-sm uppercase tracking-wide">{link.label}</span>

              </a>

            );

          })}

        </div>

      </div>

    </div>

  </Section>



  {/* Footer */}

  <footer className="relative z-10 py-12 text-center text-slate-500 text-sm border-t border-white/5 bg-[#0F1115]">

    <div className="flex flex-col items-center gap-4">

        <p>© {new Date().getFullYear()} Samad — Web3 Community Manager</p>

        <button 

            onClick={scrollToTop}

            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-xs font-bold uppercase tracking-wider"

        >

            Back to Top <ArrowUp size={14} />

        </button>

    </div>

  </footer>



  {/* Gallery Modal */}

  <AnimatePresence>

    {activeProof && (

      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">

        <m.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          onClick={() => setActiveProof(null)}

          className="absolute inset-0 bg-black/95 backdrop-blur-xl"

        />

        <m.div

          initial={{ opacity: 0, scale: 0.9, y: 20 }}

          animate={{ opacity: 1, scale: 1, y: 0 }}

          exit={{ opacity: 0, scale: 0.9, y: 20 }}

          className="relative w-full max-w-6xl max-h-[90vh] bg-[#0F1115] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto"

        >

          <div className="flex justify-between items-start mb-12">

            <div>

              <h3 className="text-4xl font-bold text-white mb-2">{activeProof.title}</h3>

              <p className="text-slate-400 text-xl">{activeProof.desc}</p>

            </div>

            <button

              onClick={() => setActiveProof(null)}

              className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 hover:border-white/20"

            >

              <X size={28} />

            </button>

          </div>



          <div className="grid md:grid-cols-2 gap-10">

             {activeProof.images && activeProof.images.map((img, idx) => (

                <div key={idx} className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">

                   <img src={img} alt={`${activeProof.title} Screenshot ${idx + 1}`} className="w-full h-auto" />

                </div>

             ))}

          </div>

        </m.div>

      </div>

    )}

  </AnimatePresence>



  {/* Contact Modal */}

  <AnimatePresence>

    {isContactOpen && (

      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">

        <m.div 

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          onClick={() => setIsContactOpen(false)}

          className="absolute inset-0 bg-black/90 backdrop-blur-md"

        />

        <m.div

          initial={{ opacity: 0, scale: 0.95, y: 20 }}

          animate={{ opacity: 1, scale: 1, y: 0 }}

          exit={{ opacity: 0, scale: 0.95, y: 20 }}

          className="relative w-full max-w-md bg-[#0F1115] border border-white/10 rounded-3xl p-8 shadow-2xl"

        >

          <button

            onClick={() => setIsContactOpen(false)}

            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"

          >

            <X size={20} />

          </button>

          

          <h3 className="text-3xl font-bold text-white mb-2 text-center">Let's Work Together</h3>

          <p className="text-slate-400 text-center mb-8">Choose your preferred way to connect.</p>



          <div className="grid gap-4">

            <a 

              href="mailto:samadsaifi304@gmail.com"

              className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"

            >

              <div className="flex items-center gap-4">

                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:text-white transition-colors">

                  <Mail size={24} />

                </div>

                <div className="text-left">

                  <div className="font-bold text-white">Email</div>

                  <div className="text-xs text-slate-400">samadsaifi304@gmail.com</div>

                </div>

              </div>

              <ArrowRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />

            </a>



            <a 

              href="https://t.me/samadsaifi55"

              target="_blank"

              rel="noreferrer"

              className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all group"

            >

              <div className="flex items-center gap-4">

                <div className="p-3 bg-sky-500/20 rounded-xl text-sky-400 group-hover:text-white transition-colors">

                  <Send size={24} />

                </div>

                <div className="text-left">

                  <div className="font-bold text-white">Telegram</div>

                  <div className="text-xs text-slate-400">@samadsaifi55</div>

                </div>

              </div>

              <ArrowRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />

            </a>

          </div>

        </m.div>

      </div>

    )}

  </AnimatePresence>



  {/* Resume Modal */}

  <AnimatePresence>

    {isResumeOpen && (

      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">

        <m.div 

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          onClick={() => setIsResumeOpen(false)}

          className="absolute inset-0 bg-black/90 backdrop-blur-md"

        />

        <m.div

          initial={{ opacity: 0, scale: 0.95, y: 20 }}

          animate={{ opacity: 1, scale: 1, y: 0 }}

          exit={{ opacity: 0, scale: 0.95, y: 20 }}

          className="relative w-full max-w-md bg-[#0F1115] border border-white/10 rounded-3xl p-8 shadow-2xl"

        >

          <button

            onClick={() => setIsResumeOpen(false)}

            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"

          >

            <X size={20} />

          </button>

          

          <h3 className="text-3xl font-bold text-white mb-2 text-center">Resume Options</h3>

          <p className="text-slate-400 text-center mb-8">How would you like to view my resume?</p>



          <div className="grid gap-4">

            <a 

              href="https://drive.google.com/file/d/1g408i-u_TbrbbXw18iyiwIh9EjtxFNrl/view?usp=drive_link" 

              target="_blank" 

              rel="noreferrer"

              className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group"

            >

              <div className="flex items-center gap-4">

                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:text-white transition-colors">

                  <Eye size={24} />

                </div>

                <div className="text-left">

                  <div className="font-bold text-white">View Online</div>

                  <div className="text-xs text-slate-400">Open in Google Drive</div>

                </div>

              </div>

              <ArrowRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />

            </a>



            <a 

              href="https://drive.google.com/uc?export=download&id=1g408i-u_TbrbbXw18iyiwIh9EjtxFNrl" 

              target="_blank" 

              rel="noreferrer"

              className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group"

            >

              <div className="flex items-center gap-4">

                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 group-hover:text-white transition-colors">

                  <Download size={24} />

                </div>

                <div className="text-left">

                  <div className="font-bold text-white">Download PDF</div>

                  <div className="text-xs text-slate-400">Save to your device</div>

                </div>

              </div>

              <ArrowRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />

            </a>

          </div>

        </m.div>

      </div>

    )}

  </AnimatePresence>



</div>

);
}

