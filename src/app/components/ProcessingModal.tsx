import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FileText, Shield, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProcessingModalProps {
  isOpen: boolean;
  fileName: string;
}

const processingSteps = [
  { id: 1, label: 'Reading Document', icon: FileText, duration: 15000 },
  { id: 2, label: 'Extracting Data', icon: Sparkles, duration: 15000 },
  { id: 3, label: 'Analyzing Risks', icon: Shield, duration: 15000 },
  { id: 4, label: 'Generating Report', icon: CheckCircle, duration: 15000 },
];

export function ProcessingModal({ isOpen, fileName }: ProcessingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setProgress(0);
      return;
    }

    // Simulate progress through steps
    const totalDuration = processingSteps.reduce((acc, step) => acc + step.duration, 0);
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += 50;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      // Update current step based on elapsed time
      let cumulativeDuration = 0;
      for (let i = 0; i < processingSteps.length; i++) {
        cumulativeDuration += processingSteps[i].duration;
        if (elapsed < cumulativeDuration) {
          setCurrentStep(i);
          break;
        }
      }

      if (elapsed >= totalDuration) {
        clearInterval(progressInterval);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden"
              style={{
                background: 'white',
                borderColor: 'var(--neutral-200)',
              }}
            >
              {/* Gradient decoration at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'var(--gradient-primary)',
                }}
              />

              {/* Content */}
              <div className="p-10">
                {/* Animated Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      background: 'var(--gradient-primary)',
                    }}
                  >
                    <Sparkles className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </motion.div>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl text-center mb-2"
                  style={{
                    fontWeight: 700,
                    color: 'var(--neutral-900)',
                  }}
                >
                  Analyzing Your Document
                </h3>

                {/* File name */}
                <p
                  className="text-center mb-8 text-sm"
                  style={{
                    color: 'var(--neutral-500)',
                  }}
                >
                  {fileName}
                </p>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{
                      background: 'var(--neutral-100)',
                    }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'var(--gradient-primary)',
                      }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span
                      className="text-xs"
                      style={{
                        color: 'var(--neutral-500)',
                      }}
                    >
                      Processing...
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{
                        color: 'var(--indigo-600)',
                      }}
                    >
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>

                {/* Processing Steps */}
                <div className="space-y-4">
                  {processingSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;

                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        {/* Icon */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{
                            background: isActive
                              ? 'var(--gradient-primary)'
                              : isCompleted
                              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))'
                              : 'var(--neutral-100)',
                          }}
                        >
                          {isCompleted ? (
                            <CheckCircle
                              className="w-5 h-5"
                              style={{ color: 'var(--emerald-500)' }}
                              strokeWidth={2.5}
                            />
                          ) : (
                            <Icon
                              className="w-5 h-5"
                              style={{
                                color: isActive ? 'white' : 'var(--neutral-400)',
                              }}
                              strokeWidth={2.5}
                            />
                          )}
                        </div>

                        {/* Label */}
                        <div className="flex-1">
                          <p
                            className="text-sm transition-all duration-300"
                            style={{
                              fontWeight: isActive ? 600 : 500,
                              color: isActive
                                ? 'var(--neutral-900)'
                                : isCompleted
                                ? 'var(--emerald-600)'
                                : 'var(--neutral-500)',
                            }}
                          >
                            {step.label}
                          </p>
                        </div>

                        {/* Loading spinner for active step */}
                        {isActive && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="w-4 h-4 border-2 border-transparent rounded-full flex-shrink-0"
                            style={{
                              borderTopColor: 'var(--indigo-500)',
                              borderRightColor: 'var(--indigo-500)',
                            }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom info */}
                <div
                  className="mt-8 p-4 rounded-xl text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))',
                  }}
                >
                  <p
                    className="text-xs"
                    style={{
                      color: 'var(--neutral-600)',
                    }}
                  >
                    This usually takes 30-60 seconds
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
