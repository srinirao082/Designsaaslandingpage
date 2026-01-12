import { motion } from "motion/react";
import { Sparkles, Zap } from "lucide-react";
import { FloatingCards } from "@/app/components/FloatingCards";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* 3D Floating Cards */}
      <FloatingCards />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border shadow-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))",
            borderColor: "rgba(99, 102, 241, 0.2)",
          }}
        >
          <Sparkles
            className="w-4 h-4"
            style={{ color: "var(--indigo-500)" }}
          />
          <span
            className="text-sm"
            style={{
              fontWeight: 600,
              color: "var(--indigo-600)",
            }}
          >
            AI-Powered Property Intelligence
          </span>
        </motion.div>

        {/* Headline with gradient text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 tracking-tight overflow-visible"
          style={{
            fontSize: "72px",
            lineHeight: "1.2",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            paddingBottom: "16px",
          }}
        >
          <span style={{ color: "var(--neutral-900)" }}>
            Instant Property
          </span>
          <br />
          <span
            className="inline-block overflow-visible"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              paddingBottom: "8px",
            }}
          >
            Due Diligence
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
          style={{
            color: "var(--neutral-600)",
          }}
        >
          Upload property documents and get AI-verified
          ownership reports, legal risk analysis, and
          comprehensive insights in seconds. Perfect for buyers,
          sellers, and investors.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--indigo-500), var(--purple-500))",
              }}
            >
              <Zap
                className="w-4 h-4 text-white"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-sm"
              style={{ color: "var(--neutral-600)" }}
            >
              <strong
                style={{
                  color: "var(--neutral-900)",
                  fontWeight: 700,
                }}
              >
                95%
              </strong>{" "}
              Accurate
            </span>
          </div>
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--neutral-300)" }}
          />
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--cyan-500), var(--blue-500))",
              }}
            >
              <Sparkles
                className="w-4 h-4 text-white"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-sm"
              style={{ color: "var(--neutral-600)" }}
            >
              <strong
                style={{
                  color: "var(--neutral-900)",
                  fontWeight: 700,
                }}
              >
                30s
              </strong>{" "}
              Analysis
            </span>
          </div>
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--neutral-300)" }}
          />
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--pink-500), var(--rose-500))",
              }}
            >
              <span className="text-xs font-bold text-white">
                50K
              </span>
            </div>
            <span
              className="text-sm"
              style={{ color: "var(--neutral-600)" }}
            >
              Documents Verified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}