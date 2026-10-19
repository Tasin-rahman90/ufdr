import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  GraduationCap,
  Heart,
  Layers3,
  Menu,
  MonitorPlay,
  Play,
  Sparkles,
  X,
} from 'lucide-react';

const image = (path) => `/images/${path}`;

const navItems = [
  ['Journey', '#journey'],
  ['The batch', '#people'],
  ['Classroom', '#classroom'],
  ['Projects', '#projects'],
  ['Farewell', '#farewell'],
];

const classroomMoments = [
  { src: image('classroom/class-candid-selfie.webp'), title: 'Good food, great company, and memories to keep', label: 'BBQ PARTY', shape: 'wide' },
  { src: image('classroom/lab-code-screen.webp'), title: 'A screen full of possibilities', label: 'CODE IN PROGRESS', shape: 'portrait' },
  { src: image('classroom/html-code-closeup.webp'), title: 'The first tags of a new idea', label: 'HTML · CSS', shape: 'square' },
  { src: image('classroom/javascript-code-closeup.webp'), title: 'Learning by doing, line by line', label: 'JAVASCRIPT', shape: 'square' },
  { src: image('classroom/classroom-talk.webp'), title: 'A question, a quick explanation, one more thing learned', label: 'A CLASS MOMENT', shape: 'portrait' },
  { src: image('classroom/teacher-candid.webp'), title: 'Little moments that made the room ours', label: 'CANDID', shape: 'portrait' },
];

const farewellMoments = [
  { src: image('farewell/selfie.webp'), title: 'One last selfie as a batch', label: 'FAREWELL CANDID' },
  { src: image('farewell/banner-trio.webp'), title: 'U FDR 2505, in front of our farewell banner', label: 'THE BATCH' },
  { src: image('farewell/speaker-candid.webp'), title: 'Words we wanted to remember', label: 'A FAREWELL MOMENT' },
  { src: image('farewell/sitting-speaker.webp'), title: 'A room full of stories', label: 'A FAREWELL MOMENT' },
  { src: image('farewell/friends-candid.webp'), title: 'A little more time together', label: 'CANDID' },
  { src: image('farewell/farewell-friends.webp'), title: 'The people who made the journey special', label: 'FRIENDS' },
];

const studentNames = [
  'Kamran', 'Tasin Rahman', 'Sabbir Dewan', 'Hriday', 'Anwar', 'Labib', 'Zisan', 'Irin',
  'Liton', 'Gd', 'Miraz', 'Shifat', 'Sifat', 'Jiaul', null, 'Qayes',
];

const students = Array.from({ length: 16 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return { name: studentNames[index] ?? `Student ${number}`, number, src: image(`students/student-${number}.webp`) };
});

const projects = [
  { name: 'Exclusive', type: 'E-commerce experience', src: image('projects/exclusive.webp'), tone: 'coral', description: 'A clean shopping experience with a product-led homepage.' },
  { name: 'Evenza', type: 'Conference website', src: image('projects/evenza.webp'), tone: 'violet', description: 'An event landing page designed to bring a community together.' },
  { name: 'Cheffest', type: 'Restaurant website', src: image('projects/cheffest.webp'), tone: 'amber', description: 'A warm, appetite-first restaurant homepage concept.' },
];

const milestones = [
  {
    date: 'THE FIRST SESSION',
    title: 'Our frontend journey began.',
    text: 'The first class was taken on 2 January 2026. The course record lists the class date as 3 January 2026.',
    icon: CalendarDays,
    image: image('classroom/class-candid-selfie.webp'),
    imageAlt: 'A candid selfie with classmates in the classroom',
    number: '01',
  },
  {
    date: 'ALONG THE WAY',
    title: 'From curious clicks to building with React.',
    text: 'We learned, tried, got stuck, asked questions, and kept building—together.',
    icon: Code2,
    image: image('classroom/lab-code-screen.webp'),
    imageAlt: 'Classmates working at computers in the lab',
    number: '02',
  },
  {
    date: '12 SEPTEMBER 2026',
    title: 'One last class, one full room of memories.',
    text: 'Our final class: 6:00 PM – 8:00 PM. We left with more than notes and code.',
    icon: GraduationCap,
    image: image('course/last-class-selfie.webp'),
    imageAlt: 'A group selfie on the final class day',
    number: '03',
  },
];

function Reveal({ children, className = '', delay = 0, once = true }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Intro({ onEnter }) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.22, 1, 0.36, 1] };
  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.025, filter: 'blur(8px)' }}
      transition={transition}
      aria-label="Welcome to the U FDR 2505 memory journey"
    >
      <div className="intro-backdrop" />
      <div className="intro-grain" />
      <div className="intro-grid" />
      <div className="intro-topline">
        <div className="intro-brand">
          <span className="intro-logo-wrap"><img src={image('brand/creative-it-logo.png')} alt="Creative IT Institute logo" /></span>
          <span>CREATIVE IT INSTITUTE <i>×</i> U FDR 2505</span>
        </div>
        <span className="intro-chapter"><span className="live-dot" /> MEMORY ARCHIVE · 2026</span>
      </div>

      <div className="intro-layout">
        <motion.div
          className="intro-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
        >
          <div className="intro-eyebrow"><span className="eyebrow-line" /> A LITTLE TIME CAPSULE</div>
          <h1>Every ending<br /><span>holds a beginning.</span></h1>
          <div className="presented-line">
            <span className="presented-label">PRESENTED BY</span>
            <span className="presented-name">Tasin Rahman<span className="typing-cursor">_</span></span>
          </div>
          <p className="intro-description">A small home for all the code, courage, friendships, and moments we found in one course.</p>
          <button className="intro-enter" onClick={onEnter}>
            <span>Enter our journey</span><ArrowRight size={17} strokeWidth={1.8} />
          </button>
          <button className="intro-skip" onClick={onEnter}>Skip intro <ArrowDown size={13} /></button>
        </motion.div>

        <motion.div
          className="intro-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.32 }}
        >
          <div className="intro-photo-frame">
            <img src={image('hero/batch-hero-trophy.webp')} alt="U FDR 2505 celebrating together" />
            <div className="intro-photo-gradient" />
            <span className="photo-index">FRAME 01 <i>/</i> OUR BATCH</span>
          </div>
          <div className="intro-code-chip chip-html"><span className="chip-dot red" /> &lt;hello batch /&gt;</div>
          <div className="intro-code-chip chip-react"><span className="react-orbit">⚛</span> Made with React</div>
          <div className="intro-orbit orbit-one" />
          <div className="intro-orbit orbit-two" />
          <div className="intro-sparkle sparkle-a">✦</div>
          <div className="intro-sparkle sparkle-b">✳</div>
        </motion.div>
      </div>
      <div className="intro-bottomline">
        <span>HTML <b>·</b> CSS <b>·</b> JAVASCRIPT <b>·</b> REACT</span>
        <span>64 CLASSES. A THOUSAND LITTLE STORIES.</span>
      </div>
    </motion.div>
  );
}

function Navbar({ onReplay }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} onKeyDown={(event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    }}>
      <a className="nav-brand" href="#home" aria-label="U FDR 2505 home">
        <span className="nav-logo"><img src={image('brand/creative-it-logo.png')} alt="" /></span>
        <span className="nav-brand-copy"><strong>U FDR <em>2505</em></strong><small>OUR FRONTEND JOURNEY</small></span>
      </a>
      <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <button className="nav-replay" onClick={onReplay}><Play size={13} fill="currentColor" /> <span>Replay intro</span></button>
      <button className="nav-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, number }) {
  return (
    <Reveal className="section-heading">
      <div className="section-heading-main">
        <span className="section-eyebrow"><i>{number}</i>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p className="section-heading-text">{text}</p>}
    </Reveal>
  );
}

function Hero({ onOpenPhoto }) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-content">
        <Reveal className="hero-copy">
          <div className="hero-kicker"><span className="live-dot" /> CREATIVE IT INSTITUTE <i>/</i> FRONTEND WITH REACT</div>
          <h1>We came to<br /><span>learn code.</span><br />We left with<br /><em>memories for life.</em></h1>
          <p>One batch. Sixty-four classes. A story we’ll keep telling long after the final class.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#journey">Walk through our story <ArrowDown size={16} /></a>
            <a className="button-quiet" href="#people">Meet the batch <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-small-note"><span className="note-scribble">✳</span><span>Built with curiosity.<br /><strong>Remembered together.</strong></span></div>
        </Reveal>

        <div className="hero-art">
          <motion.button
            type="button"
            className="hero-photo-card"
            onClick={() => onOpenPhoto({ src: image('hero/batch-hero-trophy.webp'), title: 'U FDR 2505 — together, at Creative Skills' })}
            whileHover={reduceMotion ? undefined : { y: -8, rotate: -0.4 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-label="View the batch group photo"
          >
            <img src={image('hero/batch-hero-trophy.webp')} alt="U FDR 2505 standing together with a trophy" />
            <span className="hero-photo-shade" />
            <span className="hero-photo-label"><span><i>CREATIVE SKILLS</i><strong>U FDR 2505</strong></span><ArrowUpRight size={18} /></span>
          </motion.button>
          <motion.div className="hero-float-code float-code-one" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <span className="mini-window"><b /><b /><b /></span><span className="code-mark">&lt;div&gt;</span><span className="code-string">our-journey</span><span className="code-mark">&lt;/div&gt;</span>
          </motion.div>
          <motion.div className="hero-float-stat" animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: .5 }}>
            <span className="stat-icon"><Check size={14} /></span><div><strong>64 / 64</strong><small>CLASSES COMPLETE</small></div>
          </motion.div>
          <div className="hero-sticker">THE<br />GOOD<br /><span>STUFF</span> <i>↘</i></div>
          <div className="hero-caption"><span>01 — THE PEOPLE</span><span>SCROLL TO REMEMBER <ChevronDown size={13} /></span></div>
        </div>
      </div>
      <div className="hero-bottom-ribbon" aria-hidden="true"><span>HTML</span><b>✳</b><span>CSS</span><b>✳</b><span>JAVASCRIPT</span><b>✳</b><span>REACT</span><b>✳</b><span>FRIENDSHIP</span><b>✳</b><span>HTML</span><b>✳</b><span>CSS</span><b>✳</b><span>JAVASCRIPT</span><b>✳</b><span>REACT</span><b>✳</b></div>
    </section>
  );
}

function CourseSection() {
  return (
    <section id="course" className="course-section section-shell">
      <SectionHeading number="01" eyebrow="THE COURSE" title={<>A little structure.<br /><span>A lot of growth.</span></>} text="The details behind the days we spent learning, building, and showing up for each other." />
      <div className="course-layout">
        <Reveal className="course-card-wrap">
          <div className="course-card">
            <div className="course-card-top"><span className="course-symbol"><Code2 size={20} /></span><span className="course-card-label">COURSE RECORD <span className="course-live-dot" /></span></div>
            <p className="course-name">Frontend Development<br /><span>With React</span></p>
            <div className="course-batch">BATCH <strong>U FDR 2505</strong></div>
            <div className="course-progress-block">
              <div className="course-progress-copy"><span>MODULE CLASSES</span><strong>64 <i>/</i> 64</strong></div>
              <div className="progress-track"><motion.span initial={{ width: '0%' }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.4, delay: .15, ease: [0.22, 1, 0.36, 1] }} /></div>
              <div className="progress-complete"><Check size={13} /> ALL CLASSES COMPLETED</div>
            </div>
            <div className="course-card-footer"><span>CREATIVE IT INSTITUTE</span><span>U FDR / 2505</span></div>
          </div>
        </Reveal>
        <div className="course-facts">
          <Reveal className="fact-card" delay={.08}><span className="fact-icon"><CalendarDays size={17} /></span><div><small>CLASS DAYS</small><strong>Friday <i>+</i> Saturday</strong></div><span className="fact-index">A</span></Reveal>
          <Reveal className="fact-card" delay={.16}><span className="fact-icon violet-icon"><Clock3 size={17} /></span><div><small>CLASS TIME</small><strong>6:00 PM <i>—</i> 8:00 PM</strong></div><span className="fact-index">B</span></Reveal>
          <Reveal className="fact-card" delay={.24}><span className="fact-icon red-icon"><Layers3 size={17} /></span><div><small>FIRST CLASS RECORD</small><strong>2 Jan <i>/</i> 3 Jan 2026</strong><em>Class taken / class date</em></div><span className="fact-index">C</span></Reveal>
          <Reveal className="course-note" delay={.28}><Sparkles size={15} /><span>A course has a schedule.<br /><strong>A good batch makes it a story.</strong></span></Reveal>
        </div>
      </div>
    </section>
  );
}

function InstituteSection() {
  return (
    <section className="institute-section section-shell">
      <Reveal className="institute-image-wrap">
        <img src={image('brand/institute-interior.webp')} alt="Creative IT Institute interior" />
        <div className="institute-image-label"><span className="image-label-dot" /> A PLACE TO BEGIN</div>
        <div className="institute-image-stamp">CREATIVE<br /><span>IT</span></div>
      </Reveal>
      <Reveal className="institute-copy" delay={.12}>
        <span className="section-eyebrow"><i>02</i> OUR STARTING POINT</span>
        <h2>One place.<br /><span>So many firsts.</span></h2>
        <p>New faces, new ideas, and the first glimpse of what we could make. Creative IT became the setting for a journey none of us will forget.</p>
        <div className="institute-brand-lockup"><span className="institute-logo"><img src={image('brand/creative-it-logo.png')} alt="Creative IT Institute" /></span><span>CREATIVE IT INSTITUTE<small>THE PLACE WHERE OUR BATCH BEGAN</small></span></div>
      </Reveal>
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="journey" className="timeline-section section-shell">
      <SectionHeading number="03" eyebrow="OUR JOURNEY" title={<>Every class left<br /><span>something with us.</span></>} text="From the first session to that last look around the classroom, here are a few moments along the way." />
      <div className="timeline-list">
        {milestones.map((moment, index) => {
          const Icon = moment.icon;
          return (
            <Reveal className={`timeline-row ${index % 2 ? 'reverse' : ''}`} key={moment.number} delay={index * .08}>
              <div className="timeline-marker"><span>{moment.number}</span><i><Icon size={17} /></i></div>
              <div className="timeline-copy"><span className="timeline-date">{moment.date}</span><h3>{moment.title}</h3><p>{moment.text}</p>{index === 0 && <div className="timeline-date-note">CLASS DATE <b>03 JAN 2026</b><span /> CLASS TAKEN <b>02 JAN 2026</b></div>}</div>
              <div className="timeline-image"><img src={moment.image} alt={moment.imageAlt} /><span className="timeline-image-corner">U FDR / {moment.number}</span></div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="timeline-endnote"><span className="endnote-star">✳</span><p>And somewhere between the first and final class,<br /><strong>this batch became our people.</strong></p><span className="endnote-line" /></Reveal>
    </section>
  );
}

function TeacherSection() {
  return (
    <section id="teacher" className="teacher-section section-shell">
      <div className="teacher-card">
        <Reveal className="teacher-photo-wrap">
          <img src={image('teacher/mohiuddin-sir.webp')} alt="Md Mohiuddin Sir" />
          <div className="teacher-photo-tag"><span className="live-dot" /> OUR MENTOR</div>
          <div className="teacher-photo-index">U FDR 2505 <i>·</i> WITH GRATITUDE</div>
        </Reveal>
        <Reveal className="teacher-copy" delay={.12}>
          <span className="section-eyebrow"><i>04</i> THE PERSON WHO GUIDED US</span>
          <div className="teacher-quote-mark">“</div>
          <h2>Thank you for<br />every <span>next step.</span></h2>
          <p>To Md Mohiuddin Sir—for the lessons, the patience, and the encouragement to keep going when our code did not.</p>
          <div className="teacher-signature"><span className="signature-line" /><span><strong>Md Mohiuddin Sir</strong><small>OUR FRONTEND MENTOR</small></span></div>
          <div className="teacher-secondary"><img src={image('teacher/with-students.webp')} alt="Md Mohiuddin Sir teaching a group of students" /><span>A lesson, shared<br /><strong>with the whole room.</strong></span><ArrowUpRight size={18} /></div>
        </Reveal>
      </div>
    </section>
  );
}

function PeopleSection({ onOpenPhoto }) {
  const [showAll, setShowAll] = useState(false);
  const visibleStudents = showAll ? students : students.slice(0, 8);
  return (
    <section id="people" className="people-section section-shell">
      <SectionHeading number="05" eyebrow="THE PEOPLE OF U FDR 2505" title={<>A batch is made<br /><span>of its people.</span></>} text="Different stories, one classroom. Here are the faces that made every Friday and Saturday feel a little more familiar." />
      <div className="student-grid">
        {visibleStudents.map((student, index) => (
          <Reveal className="student-card-wrap" key={student.number} delay={(index % 4) * .045}>
            <button className="student-card" onClick={() => onOpenPhoto({ src: student.src, title: student.name })} aria-label={`Open ${student.name} portrait`}>
              <div className="student-photo"><img src={student.src} alt={student.name} loading="lazy" /><span className="student-photo-glow" /></div>
              <div className="student-card-meta"><span>U FDR <b>2505</b></span><span>#{student.number}</span></div>
              <strong>{student.name}</strong>
              <span className="student-card-foot">FRONTEND JOURNEY <ArrowUpRight size={12} /></span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reveal className="student-grid-footer">
        <span><span className="live-dot" /> {showAll ? 'ALL 16 PORTRAITS' : 'A FEW FACES FROM THE BATCH'}</span>
        <button onClick={() => setShowAll((current) => !current)}>{showAll ? 'Show fewer' : 'See all classmates'} <ArrowDown size={14} className={showAll ? 'rotate-up' : ''} /></button>
      </Reveal>
      <Reveal className="people-polaroid" delay={.08}>
        <img src={image('farewell/farewell-friends.webp')} alt="Classmates together during the farewell" loading="lazy" />
        <span className="polaroid-caption">same room, same people, one more story <i>✳</i></span>
      </Reveal>
    </section>
  );
}

function ClassroomSection({ onOpenPhoto }) {
  return (
    <section id="classroom" className="classroom-section section-shell">
      <SectionHeading number="06" eyebrow="INSIDE THE CLASSROOM" title={<>The little moments<br /><span>between the lessons.</span></>} text="The screens, the questions, the laughter, the ‘wait, let me try that again’ moments." />
      <div className="classroom-grid">
        {classroomMoments.map((moment, index) => (
          <Reveal className={`memory-tile tile-${moment.shape}`} delay={(index % 3) * .07} key={moment.src}>
            <button className="memory-tile-button" onClick={() => onOpenPhoto(moment)} aria-label={`View photo: ${moment.title}`}>
              <img src={moment.src} alt={moment.title} loading="lazy" />
              <span className="memory-tile-shade" />
              <span className="memory-tile-label">{moment.label}<ArrowUpRight size={14} /></span>
              <span className="memory-tile-caption">{moment.title}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reveal className="code-note"><Code2 size={18} /><span><b>const memory =</b> “we built more than websites”; <span className="code-true">// true</span></span></Reveal>
    </section>
  );
}

function ProjectsSection({ onOpenPhoto }) {
  return (
    <section id="projects" className="projects-section section-shell">
      <SectionHeading number="07" eyebrow="THINGS WE BUILT" title={<>Our first ideas<br /><span>out in the world.</span></>} text="Three different briefs, three different directions, one shared foundation: learning by making." />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal className={`project-card project-${project.tone}`} key={project.name} delay={index * .1}>
            <button className="project-image-button" onClick={() => onOpenPhoto({ src: project.src, title: `${project.name} — ${project.type}` })} aria-label={`View ${project.name} project screenshot`}>
              <img src={project.src} alt={`${project.name} website project screenshot`} loading="lazy" />
              <span className="project-image-overlay"><span>OPEN PROJECT PREVIEW</span><ArrowUpRight size={17} /></span>
            </button>
            <div className="project-card-copy"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div><ArrowUpRight size={20} className="project-arrow" /></div>
            <p>{project.description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="projects-footnote"><span className="project-foot-icon"><MonitorPlay size={17} /></span><span>Small projects. Big “I made this” energy.</span><span className="project-foot-line" /></Reveal>
    </section>
  );
}

function FarewellSection({ onOpenPhoto }) {
  return (
    <section id="farewell" className="farewell-section section-shell">
      <SectionHeading number="08" eyebrow="FAREWELL, U FDR 2505" title={<>A final gathering.<br /><span>A forever kind of memory.</span></>} text="The balloons, the photos, the speeches, the last time we were all in the same room as a class." />
      <Reveal className="farewell-feature">
        <button className="farewell-main-photo" onClick={() => onOpenPhoto({ src: image('farewell/group-cake.webp'), title: 'Farewell, U FDR 2505 — one last gathering together' })} aria-label="View the farewell group photo">
          <img src={image('farewell/group-cake.webp')} alt="U FDR 2505 together at the farewell with a cake and gift" loading="lazy" />
          <span className="farewell-photo-shade" />
          <span className="farewell-photo-caption"><small>THE LAST GROUP PHOTO</small><strong>Farewell,<br />U FDR 2505.</strong></span>
          <span className="farewell-photo-open"><ArrowUpRight size={20} /></span>
        </button>
        <div className="farewell-side-stack">
          <button className="farewell-side-photo" onClick={() => onOpenPhoto({ src: image('farewell/banner-trio.webp'), title: 'Farewell banner, familiar faces' })} aria-label="View farewell banner photo"><img src={image('farewell/banner-trio.webp')} alt="Three classmates at the farewell banner" loading="lazy" /><span>FAMILIAR FACES <ArrowUpRight size={13} /></span></button>
          <button className="farewell-side-photo selfie" onClick={() => onOpenPhoto({ src: image('farewell/selfie.webp'), title: 'One last selfie as a batch' })} aria-label="View farewell selfie"><img src={image('farewell/selfie.webp')} alt="Classmates taking a farewell selfie" loading="lazy" /><span>ONE MORE SELFIE <ArrowUpRight size={13} /></span></button>
          <div className="farewell-note"><Heart size={17} /><span>We didn’t know the last photo would feel this special.<br /><strong>We’re glad we took it.</strong></span></div>
        </div>
      </Reveal>
      <div className="farewell-strip">
        {farewellMoments.slice(2).map((moment, index) => (
          <Reveal className="farewell-strip-item" key={moment.src} delay={index * .05}>
            <button onClick={() => onOpenPhoto(moment)} aria-label={`View photo: ${moment.title}`}><img src={moment.src} alt={moment.title} loading="lazy" /><span>{moment.label}</span></button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalSection({ onReplay }) {
  return (
    <section className="final-section">
      <div className="final-orb orb-left" /><div className="final-orb orb-right" />
      <Reveal className="final-content">
        <span className="final-eyebrow"><span className="live-dot" /> U FDR 2505 · ALWAYS A PART OF THE STORY</span>
        <div className="final-star">✳</div>
        <h2>The classes ended.<br /><span>The memories stay.</span></h2>
        <p>Here’s to every idea we shared, every page we built,<br className="desktop-only" /> and every person who made this journey ours.</p>
        <button className="final-replay" onClick={onReplay}><Play size={14} fill="currentColor" /> Replay our journey</button>
        <div className="final-presented">A MEMORY BOOK BY <strong>TASIN RAHMAN</strong></div>
      </Reveal>
    </section>
  );
}

function Lightbox({ photo, onClose, onPrevious, onNext }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrevious, onNext]);

  return (
    <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} role="dialog" aria-modal="true" aria-label="Photo viewer">
      <button className="lightbox-close" onClick={onClose} aria-label="Close photo viewer"><X size={20} /></button>
      <button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); onPrevious(); }} aria-label="Previous photo"><ArrowLeft size={19} /></button>
      <motion.div className="lightbox-content" key={photo.src} initial={{ opacity: 0, y: 10, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} onClick={(event) => event.stopPropagation()}>
        <img src={photo.src} alt={photo.title} />
        <div className="lightbox-caption"><span>U FDR 2505 <i>·</i> MEMORY ARCHIVE</span><strong>{photo.title}</strong></div>
      </motion.div>
      <button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); onNext(); }} aria-label="Next photo"><ArrowRight size={19} /></button>
    </motion.div>
  );
}

export default function App() {
  const [introOpen, setIntroOpen] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });

  const allPhotos = useMemo(() => [
    { src: image('hero/batch-hero-trophy.webp'), title: 'U FDR 2505 — together, at Creative Skills' },
    ...classroomMoments,
    ...farewellMoments,
    { src: image('farewell/group-cake.webp'), title: 'Farewell, U FDR 2505 — one last gathering together' },
    ...projects.map((project) => ({ src: project.src, title: `${project.name} — ${project.type}` })),
    ...students.map((student) => ({ src: student.src, title: student.name })),
  ], []);

  const moveLightbox = (direction) => {
    setLightbox((current) => {
      if (!current) return current;
      const currentIndex = allPhotos.findIndex((photo) => photo.src === current.src);
      const nextIndex = (currentIndex + direction + allPhotos.length) % allPhotos.length;
      return allPhotos[nextIndex];
    });
  };

  const replayIntro = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    setIntroOpen(true);
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', introOpen || Boolean(lightbox));
    return () => document.body.classList.remove('no-scroll');
  }, [introOpen, lightbox]);

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <AnimatePresence>{introOpen && <Intro onEnter={() => setIntroOpen(false)} />}</AnimatePresence>
      <Navbar onReplay={replayIntro} />
      <main>
        <Hero onOpenPhoto={setLightbox} />
        <CourseSection />
        <InstituteSection />
        <TimelineSection />
        <TeacherSection />
        <PeopleSection onOpenPhoto={setLightbox} />
        <ClassroomSection onOpenPhoto={setLightbox} />
        <ProjectsSection onOpenPhoto={setLightbox} />
        <FarewellSection onOpenPhoto={setLightbox} />
        <FinalSection onReplay={replayIntro} />
      </main>
      <footer className="site-footer"><span>CREATED WITH <Heart size={12} fill="currentColor" /> FOR U FDR 2505</span><span>Presented by <strong>Tasin Rahman</strong> <i>·</i> 2026</span><a href="#home">BACK TO TOP <ArrowUpRight size={12} /></a></footer>
      <AnimatePresence>
        {lightbox && <Lightbox photo={lightbox} onClose={() => setLightbox(null)} onPrevious={() => moveLightbox(-1)} onNext={() => moveLightbox(1)} />}
      </AnimatePresence>
    </div>
  );
}
