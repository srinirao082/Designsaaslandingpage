import { motion } from 'motion/react';

export function IsometricGrid() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* 3D Grid Container */}
        <div
          className="relative mx-auto rounded-3xl overflow-hidden border"
          style={{
            background: 'white',
            borderColor: 'var(--neutral-200)',
            transform: 'perspective(1200px) rotateX(8deg)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Grid pattern */}
          <div className="p-12">
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 - Document Upload */}
              <motion.div
                className="p-6 rounded-2xl border relative overflow-hidden group"
                style={{
                  borderColor: 'var(--neutral-200)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03), white)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    background: 'var(--gradient-primary)',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--neutral-900)' }}>
                  Upload
                </div>
                <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  Drop documents
                </div>
              </motion.div>

              {/* Card 2 - AI Analysis */}
              <motion.div
                className="p-6 rounded-2xl border relative overflow-hidden group"
                style={{
                  borderColor: 'var(--neutral-200)',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03), white)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    background: 'var(--gradient-accent)',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--neutral-900)' }}>
                  Analyze
                </div>
                <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  AI processing
                </div>
              </motion.div>

              {/* Card 3 - Report */}
              <motion.div
                className="p-6 rounded-2xl border relative overflow-hidden group"
                style={{
                  borderColor: 'var(--neutral-200)',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.03), white)',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{
                    background: 'var(--gradient-secondary)',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--neutral-900)' }}>
                  Report
                </div>
                <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  Download PDF
                </div>
              </motion.div>
            </div>

            {/* Animated connecting lines */}
            <div className="relative mt-8 h-1">
              <motion.div
                className="absolute top-0 left-0 h-0.5 rounded-full"
                style={{
                  background: 'var(--gradient-primary)',
                  width: '0%',
                }}
                animate={{
                  width: ['0%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Step 1
                </div>
                <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  Upload docs
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    background: 'var(--gradient-accent)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Step 2
                </div>
                <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  AI analyzes
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    background: 'var(--gradient-secondary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Step 3
                </div>
                <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                  Get report
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
