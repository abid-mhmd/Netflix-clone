import { X } from "lucide-react";

function TrailerUnavailableModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[70] !p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#141414] rounded-xl !p-8 text-center max-w-md w-full border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-white transition !p-1 rounded-full hover:bg-zinc-800/50"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold !mb-3 text-white !pt-2">
          Trailer Not Available
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Sorry, this movie currently has no trailer available to preview.
        </p>
        <button
          onClick={onClose}
          className="!mt-6 bg-[#e50914] hover:bg-[#b81d24] text-white font-semibold !px-6 !py-2 rounded-[4px] text-sm transition duration-200 active:scale-95 shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TrailerUnavailableModal;
