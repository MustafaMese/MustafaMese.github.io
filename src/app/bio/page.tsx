import Link from "next/link";

export default function Bio() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="space-y-2 animate-fade-in">
        <h1 className="text-3xl font-serif font-medium tracking-tight text-foreground">
          My life in five minutes
        </h1>
        <p className="text-sm font-mono text-muted-foreground">
          biography, career experience, and education
        </p>
      </section>

      {/* Main Biography Story */}
      <section className="space-y-6 text-base leading-relaxed text-foreground/90 font-sans animate-fade-in delay-1">
        <p>
          I am a Software Engineer based in Beykoz, İstanbul, with a strong focus on game development, 
          architecture design, and system engineering within the Unity Engine. My journey began during my 
          Computer Engineering studies at **Istanbul University** (2016 - 2023), where I developed a 
          passion for building clean, modular systems and interactive gameplay loops.
        </p>
        <p>
          Throughout my career, I've had the opportunity to work across various scales of game development—from 
          creative mobile puzzle games to commercial PC releases. I specialize in structuring decoupled 
          codebase architectures, designing complex AI behaviors, and implementing fluid player mechanics.
        </p>
        <p>
          Currently, as a **Game Developer at Unico Studio**, I design and implement gameplay systems 
          and features that serve millions of active players daily.
        </p>
        <p>
          Outside of my professional work, my current areas of interest include researching <strong>AI agents</strong>, 
          autonomous simulation environments, and <strong>computer graphics</strong>.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8 pt-6 border-t border-border animate-fade-in delay-2">
        <h2 className="text-lg font-serif font-medium text-foreground">
          Professional Experience
        </h2>
        
        <div className="space-y-8 font-sans">
          {/* Unico Studio */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Game Developer
                </h3>
                <p className="text-sm text-muted-foreground">Unico Studio</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground pt-1">
                Jul 2025 — Present
              </span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Develop and maintain high-scale casual and puzzle mobile games using Unity Engine (C#).</li>
              <li>Build reusable gameplay subsystems, modular UI frameworks, and custom tools to support content designers.</li>
              <li>Collaborate closely with product managers and artists to iterate rapidly on new features and mechanics.</li>
            </ul>
          </div>

          {/* SuperGears Games */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Game Programmer
                </h3>
                <p className="text-sm text-muted-foreground">SuperGears Games</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground pt-1">
                Feb 2024 — Jul 2024
              </span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Implemented an interactive tutorial system, enhancing user onboarding and improving game accessibility for new players.</li>
              <li>Created a custom data event system to manage in-game events and data flow, improving final gameplay loops.</li>
              <li>Identified and resolved various runtime bugs, enhancing game stability and final user experience.</li>
            </ul>
          </div>

          {/* Midquest Games */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Game Developer
                </h3>
                <p className="text-sm text-muted-foreground">Midquest Games</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground pt-1">
                Nov 2021 — Aug 2023
              </span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Engineered gameplay loops, prototypes, and core mechanics for multiple mobile titles.</li>
              <li>Led the software architecture design and gameplay engineering for <a href="https://store.steampowered.com/app/2230770/Overrun_Survivors/" target="_blank" rel="noopener noreferrer" className="underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] hover:decoration-foreground transition-colors duration-150"><strong>Overrun Survivors</strong></a>, a commercial PC title, creating modular skill systems, custom spawn mechanisms, and boss AI.</li>
            </ul>
          </div>

          {/* Gamelab */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Game Developer Intern
                </h3>
                <p className="text-sm text-muted-foreground">Gamelab</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground pt-1">
                Jun 2019 — Sep 2019
              </span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Contributed to the development of a football game utilizing C++.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4 pt-6 border-t border-border animate-fade-in delay-3">
        <h2 className="text-lg font-serif font-medium text-foreground">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 font-sans">
          <div>
            <h3 className="text-base font-medium text-foreground">
              Bachelor of Science in Computer Engineering
            </h3>
            <p className="text-sm text-muted-foreground">Istanbul University</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground pt-1">
            2016 — 2023
          </span>
        </div>
      </section>

      {/* Info & Contact Matrix */}
      <section className="space-y-4 pt-6 border-t border-border animate-fade-in delay-4">
        <h2 className="text-lg font-serif font-medium text-foreground">
          Contact Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans pt-2">
          <div className="space-y-1">
            <span className="font-medium text-foreground">Email</span>
            <p className="text-xs text-muted-foreground">
              <a href="mailto:mustafamese099@gmail.com" className="underline hover:text-foreground">
                mustafamese099@gmail.com
              </a>
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-medium text-foreground">Location</span>
            <p className="text-xs text-muted-foreground">Beykoz, İstanbul, Turkey</p>
          </div>
          <div className="space-y-1">
            <span className="font-medium text-foreground">GitHub</span>
            <p className="text-xs text-muted-foreground">
              <a href="https://github.com/MustafaMese" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                github.com/MustafaMese
              </a>
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-medium text-foreground">LinkedIn</span>
            <p className="text-xs text-muted-foreground">
              <a href="https://www.linkedin.com/in/mustafamese/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                linkedin.com/in/mustafamese
              </a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Return Home */}
      <section className="pt-6 border-t border-border text-sm font-mono animate-fade-in delay-4">
        <Link
          href="/"
          className="text-foreground hover:text-muted-foreground transition-colors duration-150 flex items-center space-x-1"
        >
          <span>← Back to home</span>
        </Link>
      </section>
    </div>
  );
}
