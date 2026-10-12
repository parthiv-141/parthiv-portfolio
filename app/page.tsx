'use client';

import { useEffect, useState } from 'react';

const projects = [
  { title: 'E-Commerce Website', type: 'Full-stack web development', stack: ['PHP','HTML','CSS','JavaScript'], description: 'A user-friendly e-commerce platform focused on product browsing, cart management, checkout flow, and responsive experiences across mobile, tablet, and desktop.', details: ['Server-side application logic with PHP','Responsive front-end with HTML and CSS','Interactive navigation and real-time cart updates with JavaScript'] },
  { title: 'Fake News Detection System', type: 'Machine learning / NLP', stack: ['Python','scikit-learn','NLP','TF-IDF'], description: 'A text-classification system designed to identify fake news using natural language processing and supervised machine learning.', details: ['Text preprocessing and tokenization','TF-IDF vectorization','Model training and evaluation using accuracy, precision, and recall'] },
  { title: 'Predictive Modeling of Crop Output', type: 'Machine learning / data', stack: ['Python','Machine Learning','MATLAB','Data Visualization'], description: 'A predictive model using climatic trends and pesticide usage to forecast crop yield and support smart-agriculture decision-making.', details: ['Historical agricultural and climate data analysis','Supervised machine learning approach','Results contributed to a peer-reviewed research paper'] },
  { title: 'Project Inventory Manager', type: 'Full-stack web application', stack: ['Next.js','TypeScript','Tailwind CSS'], description: 'A web app for tracking project items and stock, with add, edit, and delete controls and a clear view of what is available.', details: ['Add, update, and remove inventory records','Searchable, organized list view','Responsive layout for desktop and mobile'] },
];

const skills = {
  'Programming & Web': ['Python','Java','PHP','HTML','CSS','JavaScript','SQL'],
  'Data & Analytics': ['Machine Learning','Data Visualization','Power BI','Microsoft Excel'],
  'Databases & Tools': ['MySQL','Database Management','Database Design','Git','MATLAB'],
  'Strengths': ['Problem Solving','Analytical Thinking','Team Collaboration']
};

const certifications = [
  ['Machine Learning — 45-hour Professional Training','Cognibot','Feb–Apr 2025'],
  ['Full Stack Web Development','ExcelR × Sathyabama Institute of Science and Technology','Jul–Oct 2024'],
  ['Software Engineering Job Simulation','JPMorgan Chase & Co. via Forage','Apr 2024'],
  ['Introduction to Artificial Intelligence','Infosys Springboard','Apr 2024'],
  ['Introduction to Cyber Security','Infosys Springboard','Apr 2024'],
  ['Programming using Java','Infosys Springboard','Apr 2024'],
  ['MATLAB Fundamentals','MathWorks Training Services','Feb 2024'],
  ['MATLAB Programming Techniques','MathWorks Training Services','Jan 2024'],
  ['MATLAB Onramp','MathWorks Training Services','Jan 2024'],
  ['Object-Oriented Programming Onramp','MathWorks Training Services','Jan 2024']
];

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight">P<span className="text-blue-600">.</span></a>
          <div className="hidden gap-7 text-sm font-medium md:flex">
            {['About','Projects','Experience','Skills','Education','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">{x}</a>)}
          </div>
          <button aria-label="Toggle dark mode" onClick={() => setDark(!dark)} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold dark:border-slate-700 dark:bg-slate-900">{dark ? '☀ Light' : '☾ Dark'}</button>
        </div>
      </nav>

      <section id="top" className="grid-bg overflow-hidden border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-8 lg:py-32">
          <div>
            <p className="mb-5 font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">COMPUTER SCIENCE • 2026 GRADUATE</p>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-.045em] sm:text-6xl lg:text-7xl">Parthiv<span className="text-blue-600">.</span></h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-slate-700 dark:text-slate-300">Building practical software, data-driven solutions, and dependable IT experiences.</p>
            <p className="muted mt-5 max-w-2xl text-base leading-7">Computer Science and Engineering graduate with hands-on exposure to software development, machine learning, data analysis, and enterprise IT support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">View projects →</a>
              <a href="mailto:parthivadikarath141@gmail.com" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900">Contact me</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm muted"><span>Malappuram, Kerala, India</span><span>+91 9037475458</span><span>Open to technical opportunities</span></div>
          </div>
          <div className="card relative overflow-hidden p-7 lg:self-end">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-100 blur-3xl dark:bg-blue-950" />
            <p className="section-label">Profile snapshot</p>
            <div className="space-y-6">
              <div><p className="text-3xl font-black">CSE</p><p className="muted text-sm">Bachelor of Engineering</p></div>
              <div className="h-px bg-slate-200 dark:bg-slate-800" />
              <div><p className="text-3xl font-black">IT + ML + Web</p><p className="muted text-sm">Cross-functional technical foundation</p></div>
              <div className="h-px bg-slate-200 dark:bg-slate-800" />
              <div><p className="text-3xl font-black">10</p><p className="muted text-sm">Certifications / training credentials listed in the resume</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <p className="section-label">01 / About</p><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><h2 className="text-3xl font-black tracking-tight sm:text-4xl">A broad technical base, grounded in real projects.</h2><div className="space-y-5 text-base leading-8 muted"><p>Parthiv is a 2026 Computer Science and Engineering graduate from Sathyabama Institute of Science and Technology, with practical experience spanning web development, machine learning, data work, and IT operations.</p><p>His internship at Symega Food Ingredients Ltd. provided exposure to enterprise IT workflows and real-world technical tasks. Academic and independent projects demonstrate the ability to move from a problem to a working web or data-driven solution.</p><p>The portfolio emphasizes software engineering and technical support readiness while keeping machine learning and data projects visible as complementary strengths.</p></div></div>
      </section>

      <section id="projects" className="border-y border-slate-200/70 bg-white dark:border-slate-800/70 dark:bg-slate-900/30"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><p className="section-label">02 / Featured work</p><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="text-3xl font-black tracking-tight sm:text-4xl">Projects that show range.</h2><p className="max-w-md text-sm leading-6 muted">Selected directly from the candidate’s documented project work.</p></div><div className="grid gap-6 lg:grid-cols-2">{projects.map((p,i)=><article key={p.title} className="card group flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-900"><div className="mb-7 flex items-center justify-between"><span className="font-mono text-xs text-blue-600 dark:text-blue-400">0{i+1}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-slate-800">{p.type}</span></div><h3 className="text-xl font-extrabold">{p.title}</h3><p className="mt-3 text-sm leading-6 muted">{p.description}</p><ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">{p.details.map(d=><li key={d} className="flex gap-2"><span className="text-blue-600">+</span>{d}</li>)}</ul><div className="mt-auto flex flex-wrap gap-2 pt-7">{p.stack.map(s=><span key={s} className="rounded-md border border-slate-200 px-2 py-1 font-mono text-[11px] dark:border-slate-700">{s}</span>)}</div></article>)}</div></div></section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><p className="section-label">03 / Experience</p><div className="card p-7 sm:p-9"><div className="flex flex-col justify-between gap-3 md:flex-row"><div><h2 className="text-2xl font-black">IT Department Intern</h2><p className="mt-1 font-semibold text-blue-600 dark:text-blue-400">Symega Food Ingredients Ltd.</p></div><span className="font-mono text-sm muted">Dec 2024</span></div><div className="mt-7 grid gap-8 md:grid-cols-2"><div><p className="muted leading-7">Hands-on exposure to enterprise systems and workflows in a manufacturing environment, with practical involvement in internal IT operations and technical tasks.</p></div><ul className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300"><li>• Supported internal IT operations.</li><li>• Applied programming and systems knowledge to real-world organizational tasks.</li><li>• Internship experience is complemented by documented exposure to support, troubleshooting, network management, backup/recovery, and SAP-related workflows in application materials.</li></ul></div></div></section>

      <section id="skills" className="border-y border-slate-200/70 bg-white dark:border-slate-800/70 dark:bg-slate-900/30"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><p className="section-label">04 / Skills</p><h2 className="mb-10 text-3xl font-black tracking-tight sm:text-4xl">Technical toolkit.</h2><div className="grid gap-5 sm:grid-cols-2">{Object.entries(skills).map(([group,items])=><div key={group} className="card p-6"><h3 className="font-bold">{group}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map(x=><span key={x} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium dark:bg-slate-800">{x}</span>)}</div></div>)}</div></div></section>

      <section id="education" className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="section-label">05 / Education</p><h2 className="text-3xl font-black">Education & credentials.</h2><div className="mt-8 space-y-6"><div><h3 className="font-bold">Bachelor of Engineering (B.E.), Computer Science and Engineering</h3><p className="muted">Sathyabama Institute of Science and Technology · Chennai, India</p><p className="mt-1 font-mono text-xs text-blue-600">Graduated 2026</p></div><div><h3 className="font-bold">Higher Secondary Education (HSC)</h3><p className="muted">Alps International Science Academy · 84.8%</p></div><div><h3 className="font-bold">Secondary School Leaving Certificate (SSLC)</h3><p className="muted">Kendriya Vidyalaya Malappuram · 53.2% · 2020</p></div></div></div><div><p className="section-label">Certifications</p><div className="grid gap-3 sm:grid-cols-2">{certifications.map(([name,org,date])=><div key={name} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p className="text-sm font-bold leading-5">{name}</p><p className="mt-1 text-xs muted">{org}</p><p className="mt-2 font-mono text-[10px] uppercase text-blue-600 dark:text-blue-400">{date}</p></div>)}</div></div></div></section>

      <section id="contact" className="bg-slate-900 text-white dark:bg-black"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[.22em] text-blue-400">06 / Contact</p><div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Let’s build something useful.</h2><p className="mt-5 max-w-xl leading-7 text-slate-300">For recruiters and hiring teams, the fastest way to reach Parthiv is by email or phone.</p></div><div className="space-y-4 text-sm"><a className="block border-b border-slate-700 pb-3 transition hover:text-blue-400" href="mailto:parthivadikarath141@gmail.com">parthivadikarath141@gmail.com</a><a className="block border-b border-slate-700 pb-3 transition hover:text-blue-400" href="tel:+919037475458">+91 9037475458</a><a className="block border-b border-slate-700 pb-3 transition hover:text-blue-400" href="https://www.linkedin.com/in/parthiv-2104732a6" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><footer className="mt-16 flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row"><span>© {new Date().getFullYear()} Parthiv</span><span>Built with Next.js + Tailwind CSS</span></footer></div></section>
    </main>
  );
}
