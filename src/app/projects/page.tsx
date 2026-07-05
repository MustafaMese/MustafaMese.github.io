import Link from "next/link";

export default function Projects() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <section className="space-y-2 animate-fade-in">
        <h1 className="text-3xl font-serif font-medium tracking-tight text-foreground">
          Projects
        </h1>
        <p className="text-sm font-mono text-muted-foreground">
          open source game development & commercial projects
        </p>
      </section>

      {/* Projects List */}
      <section className="space-y-8 font-sans">
        
        {/* Project 1: Universim */}
        <div className="space-y-2 group animate-fade-in delay-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-serif font-medium text-foreground">
              <a
                href="https://github.com/Solideizer/Universim"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] group-hover:decoration-foreground transition-colors duration-150"
              >
                Universim
              </a>
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent text-accent-foreground w-fit">
              Unity / C# / AI Simulation
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A procedural simulation of ecosystem interactions where agents survive, consume resources, 
            and reproduce based on complex parameters.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Designed and implemented steering behaviors and hierarchical state machines for Carnivore and Herbivore agents.</li>
            <li>Created a custom procedural grid system for food generation, terrain height, and visual biome layouts.</li>
            <li>Optimized dynamic search pathways and health-to-energy conversion calculations to prevent runtime lag.</li>
          </ul>
        </div>

        {/* Project 2: Overrun Survivors */}
        <div className="space-y-2 group animate-fade-in delay-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-serif font-medium text-foreground">
              <a
                href="https://store.steampowered.com/app/2230770/Overrun_Survivors/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] group-hover:decoration-foreground transition-colors duration-150"
              >
                Overrun Survivors
              </a>
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent text-accent-foreground w-fit">
              PC Game / C# / Architecture
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A commercial PC game developed during my role at Midquest Games. Involved setting up 
            core architectures and heavy gameplay systems:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Created the overall modular codebase structure, ensuring clean separation between input handling, model states, and view updates.</li>
            <li>Built a dynamic element and mob spawn manager capable of populating levels smoothly based on player progression and difficulty.</li>
            <li>Engineered a modular skill-upgrade system, allowing players to purchase and combine various active/passive upgrades.</li>
            <li>Programmed advanced pathfinding and aggro behaviors for bosses and mobs to ensure challenging gameplay loops.</li>
          </ul>
        </div>
      </section>

      {/* Return Home */}
      <section className="pt-6 border-t border-border text-sm font-mono animate-fade-in delay-2">
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
