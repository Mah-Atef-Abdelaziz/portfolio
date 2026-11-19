import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Pause, Volume2, VolumeX, Maximize2, Presentation } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const PortfolioVideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="portfolio-video" className="py-16 md:py-20 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="Portfolio Showcase"
          title="Watch My Portfolio in Action"
          subtitle="A cinematic walkthrough of my projects, skills, and engineering journey — crafted to tell my story at a glance."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/40 dark:border-amber-800/30 bg-black group"
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            poster=""
            preload="metadata"
          >
            <source src={`${import.meta.env.BASE_URL}assets/portfolio_video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay at bottom for controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none" />

          {/* Center Play Button (shown when paused) */}
          {!isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-amber-500/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-amber-500/50 hover:scale-110 transition-transform duration-200">
                <Play className="w-9 h-9 text-white fill-white ml-1" />
              </div>
            </motion.button>
          )}

          {/* Bottom Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3">
              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-amber-500 transition-colors text-white"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                )}
              </button>

              {/* Mute / Unmute */}
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-amber-500 transition-colors text-white"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-amber-500 transition-colors text-white"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Download Presentation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Download PPTX */}
          <a
            href={`${import.meta.env.BASE_URL}assets/portfolio_presentation.pptx`}
            download="Mahmoud_Atef_Portfolio_Presentation.pptx"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 group"
          >
            <Presentation className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Presentation (PPTX)
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Hint text */}
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            ✦ Full portfolio slides — perfect for a quick overview
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioVideoSection;
