/* Editorial Utility direction — asymmetric specimen-sheet layout with ink, paper, cobalt signal, and visible system metadata. */
import { useMemo, useState } from "react";
import { ArrowUpRight, Check, ChevronRight, Copy, Moon, Play, Sun, Terminal, Zap } from "lucide-react";

const CDN_SNIPPET = '<link rel="stylesheet" href="https://cdn.lumina.css/lumina.css" />';
const SCRIPT_SNIPPET = '<script src="https://cdn.lumina.css/lumina.js"></script>';

const utilityRows = [
  { label: "Responsive grid", code: "lu-grid lu-grid-3", detail: "3 → 1 columns at 760px" },
  { label: "Flexible rhythm", code: "lu-flex lu-items-center lu-gap-4", detail: "Layout primitives with intent" },
  { label: "Action surface", code: "lu-btn lu-btn-primary", detail: "Tactile, accessible defaults" },
  { label: "Data signal", code: "lu-badge", detail: "Compact status language" },
];

function CodeButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 font-mono text-[10px] text-white/70 transition hover:border-white/40 hover:text-white"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }}
      aria-label="Copy code"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "COPIED" : "COPY"}
    </button>
  );
}

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="font-mono text-[#315CFF]">{index}</span>
      <span className="relative flex h-4 w-5 items-center"><span className="absolute h-px w-8 bg-[#315CFF]/40" /><span className="absolute left-1 h-3 w-1 rotate-[32deg] bg-[#315CFF]" /></span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState<"cdn" | "script">("cdn");
  const [playgroundClass, setPlaygroundClass] = useState("lu-card lu-shadow");
  const [playgroundResult, setPlaygroundResult] = useState("lu-card lu-shadow");
  const snippet = activeTab === "cdn" ? CDN_SNIPPET : SCRIPT_SNIPPET;
  const chipText = useMemo(() => playgroundResult.split(" ").slice(0, 3).join(" "), [playgroundResult]);

  return (
    <div className={dark ? "dark lu-shell" : "lu-shell"}>
      <div className="relative z-10 grid min-h-screen lg:grid-cols-[76px_1fr]">
        <aside className="hidden border-r border-border/70 bg-background/80 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-7">
          <div className="flex flex-col items-center gap-8">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden bg-[#315CFF] text-white shadow-[4px_4px_0_#111827]" aria-label="Lumina mark">
              <span className="absolute h-5 w-2 rotate-[32deg] bg-white" />
              <span className="absolute bottom-2 left-2 h-2 w-5 bg-white" />
            </div>
            <div className="h-16 w-px bg-border" />
            <div className="flex -rotate-90 items-center gap-3 whitespace-nowrap font-mono text-[9px] font-semibold tracking-[0.22em] text-muted-foreground">
              <span>STYLING CDN</span><span className="text-[#315CFF]">/</span><span>DOCS 0.1</span>
            </div>
          </div>
          <button className="rounded-full p-3 text-muted-foreground transition hover:bg-muted hover:text-foreground" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </aside>

        <main>
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/70 bg-background/85 px-5 py-4 backdrop-blur-xl lg:px-10">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-8 w-8 items-center justify-center bg-[#315CFF] text-white"><span className="h-4 w-1.5 rotate-[32deg] bg-white" /></div>
              <span className="font-display text-sm font-bold tracking-tight">LUMINA<span className="text-[#315CFF]">.</span>CSS</span>
            </div>
            <div className="hidden items-center gap-6 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground lg:flex">
              <a href="#foundations" className="transition hover:text-[#315CFF]">Foundations</a>
              <a href="#utilities" className="transition hover:text-[#315CFF]">Utilities</a>
              <a href="#components" className="transition hover:text-[#315CFF]">Components</a>
              <a href="#playground" className="transition hover:text-[#315CFF]">Playground</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">v0.1.0 / READY</span>
              <button className="flex items-center gap-2 rounded-full bg-[#315CFF] px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:brightness-110" onClick={() => document.getElementById("install")?.scrollIntoView({ behavior: "smooth" })}>
                Install <ArrowUpRight size={14} />
              </button>
              <button className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-[#315CFF] hover:text-[#315CFF] lg:hidden" onClick={() => setDark(!dark)} aria-label="Toggle theme">
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          </header>

          <section className="relative overflow-hidden border-b border-border/70 px-5 pb-20 pt-16 lg:px-16 lg:pb-28 lg:pt-24">
            <img src="/manus-storage/lumina-hero-texture_ee04af89.png" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply dark:opacity-20 dark:mix-blend-screen" />
            <div className="relative grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] lg:items-end">
              <div className="max-w-4xl lu-slide-in">
                <SectionLabel index="00" children="A new baseline for the web" />
                <h1 className="lu-display mt-7 max-w-4xl text-[clamp(3.6rem,9vw,8.4rem)] font-bold leading-[.88] text-foreground">Ship the shape.<br /><span className="text-[#315CFF]">Keep the signal.</span></h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground lg:text-xl">A sharper styling CDN for builders who want speed without sacrificing visual character. Utility primitives, components, icons, and motion — in one expressive layer.</p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <button className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-background transition hover:-translate-y-1" onClick={() => document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" })}>Open playground <Play size={14} fill="currentColor" /></button>
                  <a href="#install" className="flex items-center gap-2 rounded-full border border-border px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-[#315CFF] hover:text-[#315CFF]">Read the install <ChevronRight size={14} /></a>
                </div>
              </div>
              <div className="relative ml-auto w-full max-w-sm lg:mb-1">
                <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"><span>SPECIMEN / 001</span><span>CDN READY</span></div>
                <div className="lu-grid-paper lu-shadow relative overflow-hidden border border-foreground/15 p-5 dark:bg-card">
                  <div className="absolute right-5 top-5 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c8f564] ring-4 ring-[#c8f564]/20" /><span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">ready</span></div>
                  <div className="mb-12 font-mono text-[10px] text-muted-foreground">// your new default</div>
                  <div className="font-display text-4xl font-bold leading-none tracking-[-0.06em]">One import.<br /><span className="text-[#315CFF]">Whole language.</span></div>
                  <div className="mt-12 flex items-end justify-between border-t border-border pt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground"><span>GRID / FLEX / MOTION</span><span>↗ 01</span></div>
                </div>
              </div>
            </div>
          </section>

          <section id="foundations" className="border-b border-border/70 px-5 py-16 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div><SectionLabel index="01" children="The foundation" /><h2 className="lu-display mt-5 max-w-sm text-4xl font-bold leading-[.98] lg:text-5xl">Small primitives.<br /><span className="text-[#315CFF]">Large range.</span></h2></div>
              <div className="grid gap-10 sm:grid-cols-2">
                <div><div className="mb-5 flex items-center gap-2"><div className="h-3 w-3 bg-[#315CFF]" /><span className="font-mono text-xs font-semibold uppercase tracking-wider">Cobalt signal</span></div><p className="text-sm leading-7 text-muted-foreground">A single, ownable action color keeps a large system legible. Use it to mark intent, not decoration.</p></div>
                <div><div className="mb-5 flex items-center gap-2"><div className="h-3 w-3 bg-[#c8f564]" /><span className="font-mono text-xs font-semibold uppercase tracking-wider">Ready state</span></div><p className="text-sm leading-7 text-muted-foreground">A rare lime signal gives status moments a clear visual voice without competing with content.</p></div>
              </div>
            </div>
          </section>

          <section id="utilities" className="border-b border-border/70 px-5 py-16 lg:px-16 lg:py-24">
            <div className="mb-10 flex items-end justify-between gap-6"><div><SectionLabel index="02" children="Utility layer" /><h2 className="lu-display mt-5 text-4xl font-bold leading-none lg:text-6xl">The kit is the product.</h2></div><span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">01—04 / CORE UTILITIES</span></div>
            <div className="grid gap-3 lg:grid-cols-4">
              {utilityRows.map((row, index) => <div key={row.code} className="group relative border border-border border-t-2 border-t-[#315CFF]/60 bg-background p-5 transition hover:-translate-y-1 hover:border-[#315CFF] hover:shadow-[6px_6px_0_#315CFF]"><div className="mb-12 flex items-center justify-between"><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span><ArrowUpRight size={16} className="text-muted-foreground transition group-hover:text-[#315CFF]" /></div><p className="font-display text-lg font-semibold">{row.label}</p><code className="mt-4 block break-words font-mono text-[10px] text-[#315CFF]">.{row.code}</code><p className="mt-3 text-xs text-muted-foreground">{row.detail}</p></div>)}
            </div>
          </section>

          <section id="components" className="border-b border-border/70 bg-foreground px-5 py-16 text-background lg:px-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><SectionLabel index="03" children="Components / tuned" /><h2 className="lu-display mt-5 text-4xl font-bold leading-[.95] lg:text-6xl">Useful by default.<br /><span className="text-[#8fa4ff]">Expressive on demand.</span></h2><p className="mt-7 max-w-md text-base leading-7 text-background/60">No component maze. Just a small set of surfaces that share tokens, take modifiers, and stay out of your way.</p><button className="mt-8 flex items-center gap-2 rounded-full bg-[#315CFF] px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-1 hover:brightness-110">Explore the API <ArrowUpRight size={14} /></button></div>
              <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-sm border border-background/15 bg-background/5 p-5"><div className="mb-8 flex items-center justify-between"><Zap size={18} className="text-[#c8f564]" /><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-background/50"><span className="mr-1 text-[#315CFF]">/</span>lu-card</span></div><p className="font-display text-xl font-semibold">Built to compose.</p><p className="mt-2 text-sm leading-6 text-background/55">Start with a class. Finish with your own visual language.</p></div><div className="rounded-sm border border-background/15 bg-background/5 p-5"><div className="mb-8 flex items-center justify-between"><Terminal size={18} className="text-[#8fa4ff]" /><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-background/50"><span className="mr-1 text-[#315CFF]">/</span>lu-btn</span></div><p className="font-display text-xl font-semibold">No JavaScript required.</p><p className="mt-2 text-sm leading-6 text-background/55">Progressive enhancement keeps the CSS layer fast and dependable.</p></div></div>
            </div>
          </section>

          <section id="playground" className="border-b border-border/70 px-5 py-16 lg:px-16 lg:py-24"><div className="mb-10"><SectionLabel index="04" children="Live playground" /><h2 className="lu-display mt-5 text-4xl font-bold leading-none lg:text-6xl">Try the language.</h2></div><div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><div className="border border-border bg-card p-6 lu-shadow"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Class composer</span><span className="rounded-full bg-[#c8f564] px-2 py-1 font-mono text-[9px] font-semibold">LIVE</span></div><label className="mt-7 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground" htmlFor="class-input">Type a class string</label><input id="class-input" value={playgroundClass} onChange={(event) => setPlaygroundClass(event.target.value)} className="mt-3 w-full border-b border-border bg-transparent py-3 font-mono text-sm text-[#315CFF] outline-none transition focus:border-[#315CFF]" /><button className="mt-6 flex items-center gap-2 rounded-full bg-foreground px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-background transition hover:-translate-y-0.5" onClick={() => setPlaygroundResult(playgroundClass || "lu-card")}>Apply classes <ArrowUpRight size={13} /></button><div className="mt-8 border-t border-border pt-4 font-mono text-[10px] text-muted-foreground">Try: <button className="text-[#315CFF] hover:underline" onClick={() => setPlaygroundClass("lu-grid lu-grid-3 lu-gap-4")}>lu-grid lu-grid-3</button></div></div><div className="lu-grid-paper relative flex min-h-[320px] items-center justify-center overflow-hidden border border-border p-8 dark:bg-card"><div className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Rendered output / {chipText}</div><div className={`${playgroundResult} max-w-xs bg-card p-6`}><div className="flex items-center justify-between"><div className="h-9 w-9 bg-[#315CFF]" /><span className="font-mono text-[9px] text-muted-foreground">LU / 001</span></div><p className="mt-8 font-display text-2xl font-bold tracking-tight">A surface with signal.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Change the class string. Watch the system respond.</p><div className="mt-6 flex gap-2"><span className="rounded-full bg-[#e7ebff] px-2 py-1 font-mono text-[9px] text-[#2848cd]">READY</span><span className="rounded-full border border-border px-2 py-1 font-mono text-[9px] text-muted-foreground">0.1.0</span></div></div></div></div></section>

          <section id="install" className="border-b border-border/70 bg-[#315CFF] px-5 py-16 text-white lg:px-16 lg:py-20"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><SectionLabel index="05" children="Install once" /><h2 className="lu-display mt-5 text-4xl font-bold leading-none lg:text-6xl">Make room<br />for better defaults.</h2><p className="mt-6 max-w-md text-base leading-7 text-white/75">Drop in the stylesheet. Add the tiny script when you want theme switching and copy helpers. Nothing else required.</p></div><div className="border border-white/20 bg-black/15 p-5"><div className="mb-5 flex items-center justify-between"><div className="flex gap-1 rounded-full border border-white/15 p-1"><button className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest ${activeTab === "cdn" ? "bg-white text-[#315CFF]" : "text-white/60"}`} onClick={() => setActiveTab("cdn")}>CSS</button><button className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest ${activeTab === "script" ? "bg-white text-[#315CFF]" : "text-white/60"}`} onClick={() => setActiveTab("script")}>JS</button></div><CodeButton value={snippet} /></div><code className="block overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-7 text-white/90">{snippet}</code><div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/60"><Check size={14} className="text-[#c8f564]" /> No build step required</div></div></div></section>

          <footer className="flex flex-col gap-4 px-5 py-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-16"><div className="flex items-center gap-2 text-foreground"><span className="h-3 w-3 bg-[#315CFF]" /> LUMINA.CSS</div><div>OPEN SOURCE IN SPIRIT / BUILT FOR THE WEB</div><div>© 2026</div></footer>
        </main>
      </div>
    </div>
  );
}
