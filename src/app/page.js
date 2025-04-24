'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const projects = [
  {
    title: "Baked by A",
    description:
      "A sweet online home for a local baker — featuring delicious bakes, order info, and a personal touch.",
    image: "/bba.png",
    link: "https://baked-by-a.vercel.app/"
  },
  {
    title: "Retiresmart",
    description:
      "Professional website for a retirement coach. Designed to simplify finances with trust-building visuals and clean UI.",
    image: "/retire.png",
    link: "https://bakedbya.vercel.app"
  },
  {
    title: "The Olive Café",
    description:
      "Captures the charm of a local café with warm tones, a clean layout, and a smooth browsing experience across devices.",
    image: "/olivec.png",
    link: "https://the-olive-cafe.netlify.app/"
  },
];



export default function Home() {
  return (
    <>
      <Navbar />

{/* Hero Section */}
<main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0d0b1f] via-[#1f1c2c] to-[#101010] text-white px-4">
  {/* Floating magical particles */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute w-full h-full bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/10 border border-blue-400 rounded-full animate-float-slow blur-xl" />
    <div className="absolute bottom-40 right-20 w-24 h-24 bg-pink-300/10 border border-pink-400 rounded-full animate-float-fast blur-2xl" />
  </div>

  {/* Welcome Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-xl w-full text-center sm:text-left hover:scale-[1.02] transition-transform duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
  >


    {/* Right (Text Content) */}
    <div className="text-center sm:text-left">
      <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-2">
        Hello, I&apos;m Ammara.
      </p>
      <p className="text-base sm:text-lg text-gray-300 tracking-wide">
      Web Developer,
      </p>
      <p className="text-base sm:text-lg text-gray-300 tracking-wide">
       Designer &
      </p>
      <p className="text-base sm:text-lg text-gray-300 tracking-wide">
      Aspiring UI/UX Designer
      </p>
    </div>
        {/* Left (Icons) */}
        <div className="flex justify-center sm:justify-start sm:flex-col items-center sm:items-start gap-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 text-2xl">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 text-2xl">
        <FaLinkedin />
      </a>
    </div>
  </motion.div>

  {/* Scroll cue */}
  <a href="#case-studies" className="absolute bottom-10 z-10 flex flex-col items-center group">
    <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center items-start p-1 animate-bounce group-hover:border-pink-400 transition-colors">
      <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
    </div>
    <p className="text-xs mt-2 text-gray-300 group-hover:text-pink-400">Scroll</p>
  </a>
</main>


      {/* === UNIFIED BACKGROUND WRAPPER === */}
      <div className="bg-gradient-to-b from-[#101010] via-[#1f1c2c] to-[#2d2d3a]">

        {/* === CASE STUDIES === */}
        <section id="case-studies" className="pt-24 px-6 text-white min-h-screen pb-20">
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-400 text-transparent bg-clip-text mb-10"
          >
            Latest Projects✨
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto text-gray-300 text-lg mb-12"
          >
            See how I build with clean code and a focus on usability </motion.p>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:border-purple-300 transition duration-300 hover:scale-[1.02] flex flex-col items-start"
    >
      <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={160}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">
        {project.title}
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Button Container with Flexbox to Ensure Alignment */}
      <div className="flex justify-start w-full">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 text-sm font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>           
  ))}
</div>
</section>

       {/* === ABOUT === */}
<section id="about" className="pt-32 text-white min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1f1c2c] via-[#29233a] to-[#2d2d3a] ">

{/* Floating Icons */}
<div className="absolute top-10 left-5 w-20 opacity-10 animate-float-slower">
  <Image src="/sparkles (1).png" alt="Figma" width={80} height={80} />
</div>
<div className="absolute bottom-20 right-10 w-24 opacity-10 animate-float-slow">
  <Image src="/sparkles (1).png" alt="UI icon" width={96} height={96} />
</div>

{/* Section Heading */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-transparent bg-clip-text mb-8 sm:mb-10 px-4"
>
 Meet the Designer
</motion.h2>

{/* Profile Picture */}
<motion.div
  whileInView={{ opacity: 1, scale: 1 }}
  initial={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center mb-10 sm:mb-14"
>
<div className="relative w-40 h-40 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg hover:scale-105 transition-transform duration-300">
    <Image
      src="/ammarasaboutmepic.jpg"
      alt="Ammara"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 rounded-full border-4 border-white opacity-10 animate-pulse" />
  </div>
</motion.div>

{/* Introduction Paragraph */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.6 }}
  className="text-center max-w-xl mx-auto text-gray-300 text-base sm:text-lg mb-10 sm:mb-12 px-4"
>Hey there! I&apos;m Ammara, a web developer and aspiring UI/UX designer.
I&apos;m all about grabbing opportunities as they come my way. Since forever, I&apos;ve loved the blend of art and tech, where creativity meets innovation. Since childhood, I have found myself drawn to the mesmerizing worlds of art and technology, where creativity intertwines seamlessly with innovation.
It is this intersection that has guided me towards the exciting realms of Web Development and UI/UX design.
</motion.p>

{/* Personal Interests */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-transparent bg-clip-text mb-8 sm:mb-10 px-4"
>
 Skills
</motion.h2>

{/* Skills Grid */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16 px-4"
>
  {[
    'HTML/CSS',
    'Javascript',
    'Vue.js',
    'Next.js',
    'Tailwind Css',
    'WordPress',
    'Elementor',
    'Flutter',
    'Figma',
    'Node.js',
    'MySql',
    'Canva'
    
  ].map((skill, i) => (
    <div
      key={i}
      className="bg-white/10 border border-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl text-center text-sm text-white hover:scale-105 transition-transform duration-300 shadow-md"
    >
      {skill}
    </div>
  ))}
</motion.div>

{/* Bottom SVG Wave */}
<div className="w-screen overflow-hidden relative -mb-1">
  <svg
    className="w-full h-20 sm:h-28 md:h-36"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#1f1c2c"
      d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,122.7C672,85,768,75,864,106.7C960,139,1056,213,1152,224C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
</div>

</section>
</div>

      {/* CONTACT */}
      <section id="contact" className="pt-32 px-6 text-white bg-[#1f1c2c] pb-32">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl text-center font-bold mb-6"
  >
    Contact Me
  </motion.h2>
  <p className="text-center max-w-xl mx-auto text-gray-300 mb-10">
    Let’s connect! You can reach me at{' '}
    <a href="mailto:hoosenammara@gmail.com" className="text-pink-400 underline">
      hoosenammara@gmail.com
    </a>{' '}
    or use the form below.
  </p>

  <form
    action="https://formspree.io/f/mrgnynzb"
    method="POST"
    className="max-w-xl mx-auto space-y-6"
  >
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-2 bg-[#2b253b] border border-[#3a324d] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-2 bg-[#2b253b] border border-[#3a324d] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="w-full px-4 py-2 bg-[#2b253b] border border-[#3a324d] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition"
    >
      Send Message
    </button>
  </form>
</section>

    </>
  );
}
