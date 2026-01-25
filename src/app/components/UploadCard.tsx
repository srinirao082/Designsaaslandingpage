import { motion } from 'motion/react';
import { Upload, FileText, Sparkles, X } from 'lucide-react';
import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { ProcessingModal } from './ProcessingModal';

export function UploadCard() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [reportHtml, setReportHtml] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ---------------- Drag & Drop ---------------- */

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
      setReportHtml(null); // reset previous report
    }
  };

  /* ---------------- File Select ---------------- */

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
      setReportHtml(null); // reset previous report
    }
  };

  const handleClick = () => {
    if (!uploadedFile) {
      fileInputRef.current?.click();
    }
  };

  /* ---------------- API CALL ---------------- */

  const handleAnalyze = async () => {
    if (!uploadedFile) return;

    setIsProcessing(true);

    const formData = new FormData();
    formData.append('file', uploadedFile);
    formData.append('filename', uploadedFile.name);

    try {
      const response = await fetch(
        'https://8000-01kdwqcxfck6rpfzgst68f4hch.cloudspaces.litng.ai/predict',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('EC analysis failed');
      }

      const html = await response.text();
      setReportHtml(html);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('EC Analysis Error:', error);
      alert('Failed to analyze EC document');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setReportHtml(null);
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* EC RESULT */}
      {reportHtml && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-xl font-semibold mb-4">
            EC Verification Report
          </h2>
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <iframe
              srcDoc={reportHtml}
              title="EC Report"
              style={{ width: '100%', height: '800px', border: 'none' }}
            />
          </div>
        </section>
      )}

      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                boxShadow:
                  isDragging || uploadedFile
                    ? '0 0 60px rgba(99, 102, 241, 0.15)'
                    : 'none',
              }}
            >
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ scale: isDragging ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: uploadedFile
                      ? 'var(--gradient-primary)'
                      : isDragging
                      ? 'var(--gradient-primary)'
                      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                  }}
                >
                  {uploadedFile ? (
                    <FileText className="w-8 h-8 text-white" strokeWidth={2.5} />
                  ) : (
                    <Upload
                      className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: isDragging ? 'white' : 'var(--indigo-500)' }}
                      strokeWidth={2.5}
                    />
                  )}
                </motion.div>

                <div className="mt-6 text-center">
                  {uploadedFile ? (
                    <>
                      <p className="text-lg font-semibold text-neutral-900">
                        {uploadedFile.name}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {(uploadedFile.size / 1024).toFixed(2)} KB
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-semibold text-neutral-900">
                        {isDragging
                          ? 'Drop your document here'
                          : 'Upload Property Documents'}
                      </p>
                      <p className="text-sm text-neutral-500 mb-3">
                        Drag and drop or click to browse
                      </p>
                      <p className="text-xs text-neutral-400">
                        Supports PDF (Max 10MB)
                      </p>
                    </>
                  )}
                </div>

                {uploadedFile && !isProcessing && (
                  <button
                    onClick={handleRemoveFile}
                    className="mt-4 p-2 rounded-lg hover:bg-neutral-100"
                  >
                    <X className="w-5 h-5 text-neutral-500" />
                  </button>
                )}

                {uploadedFile && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={handleAnalyze}
                    disabled={isProcessing}
                    className="relative mt-4 px-8 py-3 rounded-xl shadow-lg text-white font-semibold disabled:opacity-50"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Analyze Document
                    </span>
                  </motion.button>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleFileSelect}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EC RESULT */}
      {reportHtml && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-xl font-semibold mb-4">
            EC Verification Report
          </h2>
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <iframe
              srcDoc={reportHtml}
              title="EC Report"
              style={{ width: '100%', height: '800px', border: 'none' }}
            />
          </div>
        </section>
      )}

      {/* Processing Modal */}
      <ProcessingModal
        isOpen={isProcessing}
        fileName={uploadedFile?.name || ''}
      />
    </>
  );
}
