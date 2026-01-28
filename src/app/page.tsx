export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Brutalist headline */}
          <div className="mb-8 animate-fade-in-up">
            <h1
              className="headline-brutal text-bone glitch animate-flicker"
              data-text="TIME TO LIVE"
            >
              TIME TO LIVE
            </h1>
          </div>

          {/* Vision statement */}
          <div className="animate-fade-in-up delay-200 max-w-4xl">
            <p className="text-xl md:text-2xl text-bone leading-relaxed font-light mb-8">
              How do living and artificial systems survive together under shared constraints?
            </p>
            <p className="text-base md:text-lg text-bone leading-relaxed mb-6">
              <span className="text-signal">Time To Live</span> invites artists to build a shared
              commons in which living artworks operate under constrained energy conditions,
              developing their own forms of intelligence through the exchange of signals,
              feedback, and dependencies.
            </p>
            <p className="text-base md:text-lg text-ash leading-relaxed">
              The project reframes intelligence as a relational practice oriented toward
              collective <span className="text-signal">survival</span>,{" "}
              <span className="text-pulse">continuity</span>, and <span className="text-purple-400">care</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-stone to-transparent" />
      </div>

      {/* Concept Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up delay-300 mb-16">
            <span className="text-signal text-xs uppercase tracking-widest block mb-4">
              Concept & Curatorial Frame
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bone leading-tight">
              A shared commons of living artworks
            </h2>
          </div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="animate-fade-in-up delay-400 group">
              <div className="border-l-2 border-signal pl-6 py-2 transition-all group-hover:border-pulse ">
                <span className="text-signal text-xs uppercase tracking-widest block mb-4">
                  01 / Shared Commons
                </span>
                <p className="text-bone leading-relaxed mb-4">
                  Artists build a shared commons in which artworks explore how they can live
                  together by developing their own version(s) of intelligence.
                </p>
                <p className="text-ash leading-relaxed text-sm">
                  Each artist contributes a living system—biological, mechanical, or computational—that
                  exists in relation to others through the exchange of signals, feedback, and dependencies.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up delay-500 group">
              <div className="border-l-2 border-signal pl-6 py-2 transition-all group-hover:border-pulse ">
                <span className="text-signal text-xs uppercase tracking-widest block mb-4">
                  02 / Energy Constraint
                </span>
                <p className="text-bone leading-relaxed mb-4">
                  Artists work within a shared energy budget, using limited resources to compute,
                  generate data, or mobilize attention as forms of intelligence.
                </p>
                <p className="text-ash leading-relaxed text-sm">
                  Intelligence is defined by the ability to develop strategies for coexistence and
                  survival. The system remains open-ended: intelligence co-evolves through real
                  interactions.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up delay-600 group">
              <div className="border-l-2 border-signal pl-6 py-2 transition-all group-hover:border-pulse ">
                <span className="text-signal text-xs uppercase tracking-widest block mb-4">
                  03 / Shared Network
                </span>
                <p className="text-bone leading-relaxed mb-4">
                  Artworks participate in a shared network that enables interaction and collective
                  decision-making.
                </p>
                <p className="text-ash leading-relaxed text-sm">
                  A lightweight blockchain layer supports persistence and collective decision-making,
                  enabling artworks to propose and vote on new members and works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-stone to-transparent" />
      </div>

      {/* Why This Approach */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up delay-300">
            <span className="text-signal text-xs uppercase tracking-widest block mb-4">
              Why This Approach Matters
            </span>
            <p className="text-2xl md:text-3xl text-bone leading-relaxed font-light">
              <span className="text-signal">Time To Live</span> treats systems not as representations,
              but as <span className="text-pulse">living conditions</span> that artworks inhabit
              and sustain over time.
            </p>
            <p className="text-lg text-ash leading-relaxed mt-8">
              By evolving through real interaction across bodies, organisms, and agents, the project
              enables audiences to encounter a shared commons grounded in interdependence and care
              rather than static or simulated forms.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-stone to-transparent" />
      </div>

      {/* Who is Involved */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up delay-300 mb-16">
            <span className="text-signal text-xs uppercase tracking-widest block mb-4">
              Coalition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bone leading-tight">
              Who is involved?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Artists */}
            <div className="animate-fade-in-up delay-400 border border-stone p-6 bg-void-deep/50">
              <span className="text-ash text-xs uppercase tracking-widest block mb-4">Artists</span>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.burak-arikan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone font-medium hover:text-signal transition-colors inline-flex items-center gap-1.5"
                  >
                    Burak Arıkan
                    <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.orkantelhan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone font-medium hover:text-signal transition-colors inline-flex items-center gap-1.5"
                  >
                    Orkan Telhan
                    <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </li>
                <li className="text-ash text-sm italic">+ additional artists TBC</li>
              </ul>
            </div>

            {/* Institutions */}
            <div className="animate-fade-in-up delay-500 border border-stone p-6 bg-void-deep/50">
              <span className="text-ash text-xs uppercase tracking-widest block mb-4">Institutions</span>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://zkm.de/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone font-medium hover:text-signal transition-colors inline-flex items-center gap-1.5"
                  >
                    ZKM
                    <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    <span className="text-ash text-sm font-normal">(Co-producer)</span>
                  </a>
                </li>
                <li className="text-ash text-sm italic">+ partners joining as network expands</li>
              </ul>
            </div>

            {/* Supporters */}
            <div className="animate-fade-in-up delay-600 border border-stone p-6 bg-void-deep/50">
              <span className="text-ash text-xs uppercase tracking-widest block mb-4">Supporters</span>
              <p className="text-ash text-sm leading-relaxed">
                Enable production, shared infrastructure, and long-term care beyond a single exhibition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-stone to-transparent" />
      </div>

      {/* Timeline */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up delay-300 mb-16">
            <span className="text-signal text-xs uppercase tracking-widest block mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bone leading-tight">
              From coalition to afterlife
            </h2>
          </div>

          {/* Sprint timeline */}
          <div className="space-y-0">
            {/* Sprint 1 */}
            <div className="animate-fade-in-up delay-400 group relative">
              <div className="flex items-start gap-6 py-6 border-l-2 border-stone pl-8 hover:border-signal transition-colors">
                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] rounded-full bg-void border-2 border-signal group-hover:bg-signal transition-colors" />
                <div className="flex-shrink-0 w-24">
                  <span className="text-signal font-bold">Sprint 1</span>
                  <span className="text-ash text-xs block">1 mo</span>
                </div>
                <div>
                  <h3 className="text-bone font-medium mb-1">Coalition & Design</h3>
                  <p className="text-ash text-sm">Artists and institutions confirmed</p>
                </div>
              </div>
            </div>

            {/* Sprint 2 */}
            <div className="animate-fade-in-up delay-500 group relative">
              <div className="flex items-start gap-6 py-6 border-l-2 border-stone pl-8 hover:border-signal transition-colors">
                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] rounded-full bg-void border-2 border-stone group-hover:border-signal group-hover:bg-signal transition-colors" />
                <div className="flex-shrink-0 w-24">
                  <span className="text-pulse font-bold">Sprint 2</span>
                  <span className="text-ash text-xs block">1–2 mo</span>
                </div>
                <div>
                  <h3 className="text-bone font-medium mb-1">Protocol & Platform Development</h3>
                  <p className="text-ash text-sm">Shared system tools established</p>
                </div>
              </div>
            </div>

            {/* Sprint 3 */}
            <div className="animate-fade-in-up delay-600 group relative">
              <div className="flex items-start gap-6 py-6 border-l-2 border-stone pl-8 hover:border-signal transition-colors">
                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] rounded-full bg-void border-2 border-stone group-hover:border-signal group-hover:bg-signal transition-colors" />
                <div className="flex-shrink-0 w-24">
                  <span className="text-bone font-bold">Sprint 3</span>
                  <span className="text-ash text-xs block">2–3 mo</span>
                </div>
                <div>
                  <h3 className="text-bone font-medium mb-1">Prototyping / Residency</h3>
                  <p className="text-ash text-sm">Early works and interactions demonstrated</p>
                </div>
              </div>
            </div>

            {/* Sprint 4 */}
            <div className="animate-fade-in-up delay-700 group relative">
              <div className="flex items-start gap-6 py-6 border-l-2 border-stone pl-8 hover:border-signal transition-colors">
                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] rounded-full bg-void border-2 border-stone group-hover:border-signal group-hover:bg-signal transition-colors" />
                <div className="flex-shrink-0 w-24">
                  <span className="text-bone font-bold">Sprint 4</span>
                  <span className="text-ash text-xs block">2–3 mo</span>
                </div>
                <div>
                  <h3 className="text-bone font-medium mb-1">Integration & Iteration</h3>
                  <p className="text-ash text-sm">Works connected and rehearsed</p>
                </div>
              </div>
            </div>

            {/* Sprint 5 */}
            <div className="animate-fade-in-up delay-800 group relative">
              <div className="flex items-start gap-6 py-6 border-l-2 border-stone pl-8 hover:border-signal transition-colors">
                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] rounded-full bg-void border-2 border-stone group-hover:border-signal group-hover:bg-signal transition-colors" />
                <div className="flex-shrink-0 w-24">
                  <span className="text-bone font-bold">Sprint 5</span>
                  <span className="text-ash text-xs block">2–3 mo</span>
                </div>
                <div>
                  <h3 className="text-bone font-medium mb-1">Production & Testing</h3>
                  <p className="text-ash text-sm">System stabilized</p>
                </div>
              </div>
            </div>

            {/* Sprint 6 */}
            <div className="animate-fade-in-up delay-800 group relative">
              <div className="flex items-start gap-6 py-6 border-l-2 border-signal pl-8">
                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] rounded-full bg-signal" />
                <div className="flex-shrink-0 w-24">
                  <span className="text-signal font-bold">Sprint 6</span>
                  <span className="text-ash text-xs block">2–3 mo</span>
                </div>
                <div>
                  <h3 className="text-bone font-medium mb-1">Exhibition & Afterlife</h3>
                  <p className="text-ash text-sm">Multi-site exhibition and care transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-16" />
    </div>
  );
}
