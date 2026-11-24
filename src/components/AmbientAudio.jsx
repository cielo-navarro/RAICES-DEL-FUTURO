import React, { useState, useRef } from 'react';

// Generates gentle synthesized Amazon river ambiance using Web Audio API
export const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Create pink noise buffer for river stream
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.04; // Gentle volume
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Low-pass filter for water sound
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(380, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
        gainNodeRef.current = gainNode;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        setIsPlaying(true);
      } catch (err) {
        console.log("Audio not supported or blocked:", err);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  return (
    <div className="ambient-sound-pill" title={isPlaying ? "Silenciar sonido ambiental del río" : "Escuchar ambiente del río y naturaleza amazónica"}>
      <button
        type="button"
        className={`ambient-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleSound}
        aria-label="Sonido ambiental del río"
      >
        <div className="sound-wave-bars">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </div>
        <span className="sound-label">
          {isPlaying ? 'Ambiente Fluvial Activo' : 'Sonido del Río'}
        </span>
      </button>

      <style>{`
        .ambient-sound-pill {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 990;
        }
        @media (max-width: 600px) {
          .ambient-sound-pill {
            bottom: 18px;
            left: 18px;
          }
        }
        .ambient-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(10, 35, 24, 0.92);
          backdrop-filter: blur(12px);
          color: #d8f3dc;
          border: 1px solid rgba(82, 183, 136, 0.4);
          padding: 0.6rem 1.15rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
        }
        .ambient-toggle-btn:hover {
          background: var(--color-primary);
          color: #ffffff;
          transform: translateY(-2px);
          border-color: var(--color-emerald);
        }
        .ambient-toggle-btn.playing {
          background: linear-gradient(135deg, #1b4d36 0%, #2a6f4e 100%);
          border-color: var(--color-sage);
          color: #ffffff;
          box-shadow: 0 0 20px rgba(82, 183, 136, 0.45);
        }
        .sound-wave-bars {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 14px;
        }
        .bar {
          width: 3px;
          background-color: var(--color-sunset-gold);
          border-radius: 3px;
          height: 6px;
        }
        .ambient-toggle-btn.playing .bar-1 {
          animation: wave 1.1s ease-in-out infinite;
        }
        .ambient-toggle-btn.playing .bar-2 {
          animation: wave 1.4s ease-in-out infinite 0.2s;
        }
        .ambient-toggle-btn.playing .bar-3 {
          animation: wave 0.9s ease-in-out infinite 0.4s;
        }
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
      `}</style>
    </div>
  );
};
