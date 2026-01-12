import { Sparkles } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-2xl z-50 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with gradient */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background: 'var(--gradient-primary)',
              }}
            />
            {/* Icon */}
            <Sparkles className="relative z-10 w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <span
              className="text-[19px] tracking-tight"
              style={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--indigo-600), var(--purple-600))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              PropCheck AI
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 text-[15px] rounded-lg transition-all duration-200"
            style={{
              color: 'var(--neutral-700)',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--indigo-600)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--neutral-700)';
            }}
          >
            Sign In
          </button>
          <button
            className="relative px-6 py-2.5 text-[15px] rounded-xl transition-all duration-300 overflow-hidden group shadow-lg"
            style={{
              fontWeight: 600,
              color: 'white',
            }}
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: 'var(--gradient-primary)',
              }}
            />
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: 'var(--glow-indigo)',
              }}
            />
            <span className="relative z-10">Start Free Trial</span>
          </button>
        </div>
      </div>
    </nav>
  );
}