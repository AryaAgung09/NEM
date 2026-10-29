"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import styles from "./home.module.css";

type VideoModalProps = {
  onClose: () => void;
  poster: string;
  src: string;
  title: string;
  closeLabel: string;
};

export function VideoModal({
  onClose,
  poster,
  src,
  title,
  closeLabel,
}: VideoModalProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div
      className={styles.videoModal}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        aria-label={title}
        aria-modal="true"
        className={styles.videoModalDialog}
        role="dialog"
      >
        <button
          aria-label={closeLabel}
          className={styles.videoModalClose}
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" size={22} />
        </button>
        <video
          autoPlay
          controls
          playsInline
          poster={poster}
          className={styles.modalVideo}
        >
          <source src={src} type="video/mp4" />
          {title}
        </video>
      </div>
    </div>
  );
}
