import { motion } from 'motion/react';
import { CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export function FloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating document card - top right */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-64 rounded-2xl shadow-2xl border"
        style={{
          background: 'white',
          borderColor: 'var(--neutral-200)',
          transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
        }}
        animate={{
          y: [0, -20, 0],
          rotateY: [-15, -12, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))',
              }}
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--neutral-900)' }}>
                Verified
              </div>
              <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                Clear Title
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded-full" style={{ background: 'var(--neutral-100)', width: '100%' }} />
            <div className="h-2 rounded-full" style={{ background: 'var(--neutral-100)', width: '75%' }} />
            <div className="h-2 rounded-full" style={{ background: 'var(--neutral-100)', width: '90%' }} />
          </div>
        </div>
      </motion.div>

      {/* Floating alert card - left side */}
      <motion.div
        className="absolute top-[45%] left-[5%] w-56 rounded-2xl shadow-2xl border"
        style={{
          background: 'white',
          borderColor: 'var(--neutral-200)',
          transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)',
        }}
        animate={{
          y: [0, 15, 0],
          rotateY: [15, 18, 15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.05))',
              }}
            >
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-xs font-semibold" style={{ color: 'var(--neutral-900)' }}>
              Risk Detected
            </div>
          </div>
          <div className="text-xs leading-relaxed" style={{ color: 'var(--neutral-600)' }}>
            Minor encumbrance found
          </div>
        </div>
      </motion.div>

      {/* Floating document icon - bottom right */}
      <motion.div
        className="absolute bottom-[25%] right-[12%] w-20 h-20 rounded-2xl shadow-xl border flex items-center justify-center"
        style={{
          background: 'white',
          borderColor: 'var(--neutral-200)',
          transform: 'perspective(1000px) rotateY(-10deg) rotateX(10deg)',
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FileText className="w-8 h-8" style={{ color: 'var(--purple-500)' }} />
      </motion.div>
    </div>
  );
}
