import { motion } from 'motion/react';
import { Network, ShieldCheck, FileBarChart, Zap } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Title Flow Analysis',
    description: 'Trace complete ownership lineage across decades. Our AI maps every transaction, validates authenticity, and flags discrepancies instantly.',
    gradient: 'var(--gradient-primary)',
    color: 'var(--indigo-500)',
    colorLight: 'rgba(99, 102, 241, 0.1)',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Detection',
    description: 'Detect legal encumbrances, pending litigations, and ownership disputes before they become problems. Get peace of mind.',
    gradient: 'var(--gradient-accent)',
    color: 'var(--cyan-500)',
    colorLight: 'rgba(6, 182, 212, 0.1)',
  },
  {
    icon: FileBarChart,
    title: 'Instant Reports',
    description: 'Comprehensive, shareable reports in plain language. Export to PDF, share with stakeholders, and make confident decisions.',
    gradient: 'var(--gradient-secondary)',
    color: 'var(--pink-500)',
    colorLight: 'rgba(236, 72, 153, 0.1)',
  },
];

export function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))',
              borderColor: 'rgba(99, 102, 241, 0.2)',
            }}
          >
            <Zap className="w-4 h-4" style={{ color: 'var(--indigo-500)' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: 'var(--indigo-600)' }}>
              Features
            </span>
          </div>
          <h2
            className="text-4xl tracking-tight mb-3"
            style={{
              fontWeight: 700,
              color: 'var(--neutral-900)',
            }}
          >
            Everything you need for due diligence
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            Powered by advanced AI models trained on millions of legal documents
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className="relative p-8 rounded-2xl border transition-all duration-300 h-full"
                  style={{
                    borderColor: 'var(--neutral-200)',
                    background: 'white',
                  }}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl"
                    style={{
                      background: feature.gradient,
                    }}
                  />

                  {/* Icon container with gradient */}
                  <div className="mb-5">
                    <div
                      className="relative w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: feature.gradient,
                      }}
                    >
                      <Icon
                        className="w-7 h-7 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="mb-3 text-xl"
                    style={{
                      fontWeight: 600,
                      color: 'var(--neutral-900)',
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="leading-relaxed"
                    style={{
                      color: 'var(--neutral-600)',
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Decorative gradient line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                    style={{
                      background: feature.gradient,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border relative overflow-hidden"
          style={{
            borderColor: 'var(--neutral-200)',
            background: 'white',
          }}
        >
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl mb-3" style={{ fontWeight: 600, color: 'var(--neutral-900)' }}>
              For Everyone Buying or Selling Property
            </h3>
            <p className="text-lg mb-6" style={{ color: 'var(--neutral-600)' }}>
              Whether you're a first-time homebuyer, real estate investor, or property owner, get instant clarity on property documents with AI-powered analysis.
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ fontWeight: 700, color: 'var(--neutral-900)' }}>
                  50K+
                </div>
                <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                  Documents Analyzed
                </div>
              </div>
              <div className="w-px h-12" style={{ background: 'var(--neutral-300)' }} />
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ fontWeight: 700, color: 'var(--neutral-900)' }}>
                  95%
                </div>
                <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                  Accuracy Rate
                </div>
              </div>
              <div className="w-px h-12" style={{ background: 'var(--neutral-300)' }} />
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ fontWeight: 700, color: 'var(--neutral-900)' }}>
                  30s
                </div>
                <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                  Average Analysis
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}