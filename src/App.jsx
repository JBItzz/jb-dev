import {
  Github,
  DiscIcon as Discord,
  Gamepad2,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const workExperience = [
  {
    company: "jb productions",
    role: "founder",
    logo: "/logos/jbproductions.png",
    status: "present",
  },
  {
    company: "jjc gaming",
    role: "production team",
    logo: "/logos/jjcgaming.png",
    status: "present",
  },
  {
    company: "blueline productions",
    role: "marketing & visuals",
    logo: "/logos/blueline.png",
    status: "present",
  },
  {
    company: "colorado state roleplay",
    role: "developer & staff",
    logo: "/logos/colorado.png",
    status: "present",
  },
  {
    company: "cld",
    role: "management",
    logo: "/logos/cld.png",
    status: "present",
  },
  {
    company: "netsentra",
    role: "enquiry support team",
    logo: "/logos/netsentra.png",
    status: "present",
  },
];

const skills = [
  "react",
  "next.js",
  "typescript",
  "javascript",
  "node.js",
  "mongodb",
  "tailwindcss",
  "html",
  "css",
  "websockets",
  "apis",
  "figma",
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* hero */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-5">
            <h1 className="text-5xl font-semibold tracking-tight">
              Hi, I'm itzz_JB
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              I'm a 14 year old developer from the UK, just filling my time
              with learning programming and playing games. I'm currently
              learning about backend development more — specifically on APIs
              and WebSockets.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://discord.com/users/1449065587895701575"
                target="_blank"
                className="w-11 h-11 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <Discord size={20} />
              </a>

              <a
                href="https://github.com/JBlizz"
                target="_blank"
                className="w-11 h-11 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.roblox.com/users/2750965033/profile"
                target="_blank"
                className="w-11 h-11 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <Gamepad2 size={20} />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <Code2 size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full" />

            <img
              src="/profile.png"
              alt="itzz_jb"
              className="relative w-36 h-36 rounded-full object-cover border-4 border-zinc-800 shadow-2xl"
            />
          </div>
        </section>

        {/* about */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-5">about</h2>

          <p className="text-zinc-400 leading-relaxed text-[15px]">
            I enjoy building modern projects, experimenting with interfaces and
            backend systems, and improving my development skills daily. Most of
            my work currently revolves around community projects, management,
            design, and development.
          </p>
        </section>

        {/* work */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-8">
            work experience
          </h2>

          <div className="space-y-5">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-zinc-800 bg-zinc-900/60 rounded-2xl p-5 hover:bg-zinc-900 transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                  />

                  <div>
                    <h3 className="font-medium capitalize">
                      {job.company}
                    </h3>

                    <p className="text-sm text-zinc-400 capitalize">
                      {job.role}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-zinc-500 capitalize">
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* skills */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-8">skills</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 capitalize"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer className="mt-28 border-t border-zinc-900 pt-8 text-sm text-zinc-500 flex items-center justify-between">
          <span>© 2026 itzz_jb</span>

          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={15} />
            <span>portfolio</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
