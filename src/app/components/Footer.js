import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1f1c2c] text-gray-300 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

        <div className="text-center md:text-left">
          <p className="font-semibold text-white">© {new Date().getFullYear()} Ammara Hoosen</p>
          <p className="text-gray-400">Web Developer · Web Designer · UI/UX Designer · Cape Town, ZA</p>
        </div>

        <div className="flex gap-6">
          <Link href="#case-studies" className="hover:text-pink-400 transition-colors">My Work</Link>
          <Link href="#about" className="hover:text-pink-400 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-pink-400 transition-colors">Skills</Link>
          <Link href="#tools" className="hover:text-pink-400 transition-colors">Tools</Link>
          <Link href="#contact" className="hover:text-pink-400 transition-colors">Contact</Link>
        </div>

        <div className="flex gap-4">
          {/* <a href="mailto:hoosenammara@gmail.com" aria-label="Email" className="hover:text-pink-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M4 4l8 8 8-8" />
            </svg>
          </a> */}
       <a
        href="/Ammara Hoosen_Resume.pdf"
        download
        className="text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all whitespace-nowrap"
      >
        Download CV
      </a>
  
          {/* <a href="www.linkedin.com/in/ammara-hoosen" target="_blank" className="hover:text-pink-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a> */}
        </div>

      </div>
    </footer>
  );
}
