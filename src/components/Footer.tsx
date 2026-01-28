export default function Footer() {
  return (
    <footer className="border-t border-stone mt-auto relative">
      <div className="absolute inset-0 bg-linear-to-t from-void-deep to-transparent opacity-90" />
      <div className="relative max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-end">
          <div className="text-right space-y-2">
            <div className="text-xs text-ash uppercase tracking-widest">Protocol</div>
            <div className="text-sm text-bone">
              Time To Live <span className="text-signal">v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
