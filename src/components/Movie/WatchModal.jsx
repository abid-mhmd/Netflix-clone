import { X } from "lucide-react";

function WatchModal({ trailerUrl, onClose }) {
  if (!trailerUrl) return null;

  const videoId = trailerUrl.split("v=")[1];

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center !p-4">
      <div className="relative w-[100vw] max-w-8xl h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/80 !p-2 rounded-full text-white"
        >
          <X size={24} />
        </button>

        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default WatchModal;