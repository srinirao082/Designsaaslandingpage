import { motion } from 'motion/react';
import { Upload, FileText, CheckCircle2, Sparkles, X } from 'lucide-react';
import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { ProcessingModal } from './ProcessingModal';

export function UploadCard() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleClick = () => {
    if (!uploadedFile) {
      fileInputRef.current?.click();
    }
  };

  const handleAnalyze = () => {
    if (!uploadedFile) return;
    setIsProcessing(true);

    // Simulate API call - in real app, this would connect to your backend
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would navigate to results or show results
      alert(`Analysis complete for: ${uploadedFile.name}`);
    }, 8000); // 8 seconds to match the processing animation
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Upload area */}
          <div
            onClick={handleClick}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="relative rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden group"
            style={{
              border: isDragging
                ? '2px solid var(--indigo-500)'
                : uploadedFile
                ? '2px solid var(--indigo-500)'
                : '2px dashed var(--neutral-300)',
              background: uploadedFile
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(168, 85, 247, 0.04))'
                : 'white',
              padding: '56px 48px',
              boxShadow: isDragging || uploadedFile ? '0 0 60px rgba(99, 102, 241, 0.15)' : 'none',
            }}
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Icon with gradient background */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  scale: isDragging ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  background: uploadedFile
                    ? 'var(--gradient-primary)'
                    : isDragging
                    ? 'var(--gradient-primary)'
                    : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                }}
              >
                {/* Icon */}
                {uploadedFile ? (
                  <FileText
                    className="w-8 h-8 text-white"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Upload
                    className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: isDragging ? 'white' : 'var(--indigo-500)' }}
                    strokeWidth={2.5}
                  />
                )}
              </motion.div>

              {/* Text */}
              <div className="mt-6 text-center">
                {uploadedFile ? (
                  <div>
                    <p
                      className="text-lg mb-2"
                      style={{
                        fontWeight: 600,
                        color: 'var(--neutral-900)',
                      }}
                    >
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                      {(uploadedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                ) : (
                  <>
                    <p
                      className="text-lg mb-2"
                      style={{
                        fontWeight: 600,
                        color: 'var(--neutral-900)',
                      }}
                    >
                      {isDragging ? 'Drop your document here' : 'Upload Property Documents'}
                    </p>
                    <p className="text-sm mb-4" style={{ color: 'var(--neutral-500)' }}>
                      Drag and drop or click to browse
                    </p>
                    <p className="text-xs" style={{ color: 'var(--neutral-400)' }}>
                      Supports PDF, JPG, PNG (Max 10MB)
                    </p>
                  </>
                )}
              </div>

              {/* Remove file button */}
              {uploadedFile && !isProcessing && (
                <button
                  onClick={handleRemoveFile}
                  className="mt-4 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                  style={{ color: 'var(--neutral-500)' }}
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Analyze Button */}
              {uploadedFile && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleAnalyze}
                  disabled={isProcessing}
                  className="relative mt-2 px-8 py-3 rounded-xl transition-all duration-300 overflow-hidden group/btn shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontWeight: 600,
                    color: 'white',
                  }}
                >
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0 transition-transform duration-300 group-hover/btn:scale-105"
                    style={{
                      background: 'var(--gradient-primary)',
                    }}
                  />
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: 'var(--glow-indigo)',
                    }}
                  />
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Analyze Document
                  </span>
                </motion.button>
              )}
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
            />
          </div>
        </motion.div>
      </div>

      {/* Processing Modal */}
      <ProcessingModal
        isOpen={isProcessing}
        fileName={uploadedFile?.name || ''}
      />
    </section>
  );
}