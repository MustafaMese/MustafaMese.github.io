import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="space-y-4 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-3xl font-serif font-medium tracking-tight text-foreground">
            Mustafa Meşe
          </h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent text-accent-foreground w-fit">
            building games @ unico studio
          </span>
        </div>
        <p className="text-sm font-mono text-muted-foreground">
          game developer / architect / optimizer
        </p>
      </section>

      {/* Bio Section */}
      <section className="prose prose-neutral dark:prose-invert animate-fade-in delay-1">
        <p className="text-base leading-relaxed text-foreground/90">
          I am a software engineer specializing in game architecture, performance optimization, 
          and system design within the Unity Engine (C#). My work focuses on crafting modular, 
          scalable game systems, creating sophisticated AI simulation behaviors, and writing 
          efficient ShaderLab effects.
        </p>
        <p className="text-base leading-relaxed text-foreground/90 mt-4">
          Currently, I develop and optimize mobile games reaching millions of players at **Unico Studio**. 
          Previously, I engineered tutorials and data systems at **SuperGears Games**, and designed 
          the overall gameplay architecture for PC titles at **Midquest Games**.
        </p>
      </section>

      {/* Selected Projects */}
      <section className="space-y-4 pt-6 border-t border-border animate-fade-in delay-2">
        <h2 className="text-lg font-serif font-medium text-foreground">
          Selected Projects & Code
        </h2>
        <div className="grid gap-6 mt-4">
          <div className="group block space-y-1">
            <a
              href="https://github.com/Solideizer/Universim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-foreground underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] group-hover:decoration-foreground transition-colors duration-150"
            >
              Universim
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A complex procedural simulation of Carnivore–Herbivore AI agents in Unity. Implements 
              state machines, steering behaviors, dynamic pathfinding, and resource generation rules.
            </p>
          </div>

          <div className="group block space-y-1">
            <h3 className="text-base font-medium text-foreground">
              Overrun Survivors
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A PC game developed during my tenure at Midquest Games. Designed the core game architecture, 
              built a robust dynamic spawn system, and engineered modular skill/ability trees.
            </p>
          </div>

          <div className="group block space-y-1">
            <a
              href="https://github.com/MustafaMese/TetrisMatch3Game"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-foreground underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] group-hover:decoration-foreground transition-colors duration-150"
            >
              Tetris Match-3 Game
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A hybrid puzzle game blending Tetris block-dropping with Match-3 alignments. 
              Features grid search algorithms and custom ShaderLab dissolving and highlight shaders.
            </p>
          </div>

          <div className="group block space-y-1">
            <a
              href="https://github.com/MustafaMese/TowerDefenceGame"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-foreground underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] group-hover:decoration-foreground transition-colors duration-150"
            >
              Tower Defence Game
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An architectural sandbox showcasing clean design patterns in Unity (Object Pooling, 
              Factory pattern, and Observer pattern for game state decoupling).
            </p>
          </div>
        </div>
      </section>

      {/* Writing & Musings Link */}
      <section className="space-y-4 pt-6 border-t border-border animate-fade-in delay-3">
        <h2 className="text-lg font-serif font-medium text-foreground">
          Career Timeline
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          For a full breakdown of my professional experience, education history, and complete technical skill 
          matrix, visit my{" "}
          <Link
            href="/bio"
            className="text-foreground underline decoration-muted-foreground/35 decoration-1 underline-offset-[3px] hover:decoration-foreground transition-colors duration-150"
          >
            biography page
          </Link>
          .
        </p>
      </section>

      {/* Ambient Music Widget */}
      <section className="pt-4 flex items-center space-x-3 text-xs font-mono text-muted-foreground bg-muted/30 p-4 rounded border border-border/40 animate-fade-in delay-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-foreground"></span>
        </span>
        <span>
          Listening to <span className="text-foreground font-medium">Synthwave Chill Radio</span> on Spotify
        </span>
      </section>
    </div>
  );
}

