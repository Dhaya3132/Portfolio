import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMusic, FiX } from "react-icons/fi";

const SpotifyNowPlaying = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-xs sm:bottom-6 sm:right-6 sm:max-w-sm"
        >
          <div className="rounded-2xl border border-white/10 bg-black/25 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150">
            <div className="mb-2 flex items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-2">
                <FiMusic className="text-white/70" size={13} />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                  Now Playing
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close now playing widget"
                className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FiX size={14} />
              </button>
            </div>
            <iframe
              title="Spotify: currently listening"
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/track/2p8IUWQDrpjuFltbdgLOag?utm_source=generator&si=488ccd54a25d4abb"
              width="30%"
              height="100"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              className="w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpotifyNowPlaying;
