import React from 'react';
// 1. Import your local photo from the assets folder
import myProfilePic from './assets/profile.jpg';

export default function PortfolioLandingPage() {
  const projects = [
    {
      title: "AI Video Generator",
      description: "Create cinematic AI videos with advanced prompts and editing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Creative Design Studio",
      description: "Modern branding and graphic design portfolio showcase.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Hidden Bunkhouse Reels",
      description: "Viral cinematic survival reels and storytelling content.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937,transparent_40%)]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-2xl font-black tracking-widest uppercase">Reymart.</h1>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-white/70">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Creative Developer & Designer
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}Modern Digital Experiences
            </span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
            A sleek portfolio website where you can showcase projects, upload
            content, share your creative work, and grow your online presence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Hire Me
            </a>
          </div>
        </div>

        {/* --- Locked Profile Card --- */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>
          
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-6 shadow-2xl w-full max-w-md group">
            {/* 2. Removed the file input and labels to lock the photo */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={myProfilePic} // 3. Uses the stable imported asset
                alt="Profile"
                className="h-[450px] w-full object-cover"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Reymart Tibe</h3>
                <p className="text-white/60">Web Developer • Designer</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-black font-black text-xl">
                ✦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="relative z-10 px-8 py-16 max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm mb-2">Upload Projects</p>
              <h3 className="text-3xl font-bold mb-2">Add Your Latest Work</h3>
              <p className="text-white/60 max-w-2xl">
                Easily upload images, videos, or project previews to update your
                portfolio anytime.
              </p>
            </div>
            <label className="cursor-pointer px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition">
              Upload Files
              <input type="file" multiple className="hidden" />
            </label>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm mb-2">Featured Projects</p>
          <h3 className="text-4xl font-black">My Creative Work</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition duration-300">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-white/60 mb-6">{project.description}</p>
                <a href={project.link} className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm mb-2">About Me</p>
            <h3 className="text-4xl font-black mb-6">I Create Trendy Digital Experiences</h3>
            <p className="text-white/70 leading-relaxed text-lg">
              I specialize in modern websites, creative branding, AI-powered
              content, and cinematic social media visuals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h4 className="text-5xl font-black mb-2">10+</h4>
              <p className="text-white/60">Projects Completed</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <h4 className="text-5xl font-black mb-2">30K+</h4>
              <p className="text-white/60">Views Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="relative z-10 px-8 pb-24 max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[2rem] p-10 text-center">
          <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm mb-2">Contact</p>
          <h3 className="text-5xl font-black mb-6">Let’s Build Something Amazing</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:reymarttibe@gmail.com" className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">Email Me</a>
            <a href="https://www.linkedin.com/in/reymart-tibe-624b952b8/" target="_blank" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
