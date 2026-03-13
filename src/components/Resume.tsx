import { useEffect } from "react";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { resumeUrl } from "../data/portfolio";

interface Props {
  onClose: () => void;
}

export default function Resume({ onClose }: Props) {
  useEffect(() => {
    // Set professional tab title
    const originalTitle = document.title;
    document.title = "Sai Prathyusha | Resume";
    
    // Prevent scrolling behind the resume view
    document.body.style.overflow = "hidden";
    
    return () => {
      document.title = originalTitle;
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
      {/* Top bar */}
      <div className="flex h-16 items-center justify-between border-b border-surface-lighter bg-surface px-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white"
        >
          <FiArrowLeft className="text-lg" /> Back to Portfolio
        </button>

        <h1 className="hidden text-sm font-bold tracking-widest text-gray-400 sm:block uppercase">
          Resume Viewer
        </h1>

        <a
          href={resumeUrl}
          download
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-light"
        >
          <FiDownload /> Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow overflow-hidden bg-gray-900">
        <iframe
          src={`${resumeUrl}#toolbar=1`}
          title="Sai Prathyusha Resume"
          className="h-full w-full border-none"
        />
      </div>
    </div>
  );
}
