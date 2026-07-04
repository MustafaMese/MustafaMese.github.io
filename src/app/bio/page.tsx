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
          architecture design, and optimization within the Unity Engine. My journey began during my 
          Computer Engineering studies at **Istanbul University** (2016 - 2023), where I developed a 
          passion for building clean, performant systems and AI simulations.
        </p>
        <p>
          Throughout my career, I've had the opportunity to work across various scales of game development—from 
          hypercasual prototypes to complete PC releases and high-scale casual mobile titles. I specialize in 
          structuring decoupled codebase architectures, designing complex AI behaviors, and optimizing CPU, GPU, 
          and memory profiles.
        </p>
        <p>
          Currently, as a **Game Developer at Unico Studio**, I design and implement gameplay systems 
          and performance profiles that serve millions of active players daily.
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
                Aug 2024 — Present
              </span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Develop and maintain high-scale casual and puzzle mobile games using Unity Engine (C#).</li>
              <li>Profile and optimize memory usage, load times, and rendering performance (draw call batching, atlasing, and layout nesting reduction) for mobile devices.</li>
              <li>Build reusable gameplay subsystems and UI frameworks to accelerate feature iteration and level design workflows.</li>
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
              <li>Created a custom data event system to manage in-game events and data flow, optimizing game performance and event tracking.</li>
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
              <li>Worked on multiple hypercasual mobile game projects (November 2021 - August 2022).</li>
              <li>Developed <strong>Overrun Survivors</strong>, a PC game (August 2022 - August 2023):</li>
              <ul className="list-circle pl-5 text-xs text-muted-foreground space-y-1 mt-1">
                <li>Designed software architecture: Created the overall software architecture, ensuring modularity and scalability.</li>
                <li>Built dynamic spawn system: Developed a robust system for dynamically generating game elements, improving gameplay variety.</li>
                <li>Implemented modular skill system: Designed a comprehensive skill system, allowing players to upgrade abilities and customize gameplay.</li>
                <li>Designed boss and mob AI: Created sophisticated AI behavior for bosses and mobs, enhancing player engagement and difficulty scaling.</li>
              </ul>
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
