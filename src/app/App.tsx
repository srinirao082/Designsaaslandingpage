import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { UploadCard } from '@/app/components/UploadCard';
import { Features } from '@/app/components/Features';
import { IsometricGrid } from '@/app/components/IsometricGrid';
export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Simplified subtle background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.10) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>
      {/* Main content */}
      <div className="relative z-10">
        <main>
          <Hero />
          <UploadCard />
          <IsometricGrid />
          <Features />
        </main>
        {/* Footer */}
        <footer className="relative py-12 px-6 mt-20 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'var(--gradient-primary)',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2L4 4.5V7.5C4 10 6 12.5 8 13.5C10 12.5 12 10 7.5V4.5L8 2Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  className="text-sm"
                  style={{
                    fontWeight: 600,
                    color: 'var(--neutral-700)',
                  }}
                >
                  PropCheck AI
                </span>
              </div>
              <div className="flex items-center gap-8 text-sm" style={{ color: 'var(--neutral-500)' }}>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Contact
                </a>
              </div>
              <div className="text-sm" style={{ color: 'var(--neutral-400)' }}>
                © {new Date().getFullYear()} PropCheck AI. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
