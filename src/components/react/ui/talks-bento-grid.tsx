'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Mic } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';

interface TalkItem {
  id: string;
  title: string;
  event: string;
  date: string;
  url?: string;
  type: 'attended' | 'speaker';
  span: string;
}

interface TalksBentoGridProps {
  talks: TalkItem[];
}

export default function TalksBentoGrid({ talks }: TalksBentoGridProps) {
  const { translations } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<TalkItem | null>(null);

  const handleItemClick = (talk: TalkItem): void => {
    if (talk.url) {
      window.open(talk.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full bg-white dark:bg-black rounded-xl p-6 border border-black/10 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {selectedItem.title}
                    </h3>
                    {selectedItem.type === 'speaker' && (
                      <span className="px-3 py-1 text-xs font-medium bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center gap-1">
                        <Mic className="w-3 h-3" />
                        {translations.talks.speaker}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {selectedItem.event}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedItem.date}</span>
                  </div>
                  {selectedItem.url && (
                    <a
                      href={selectedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver más información
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[120px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {talks.map((talk, index) => (
              <motion.div
                key={talk.id}
                className={`relative overflow-hidden rounded-xl cursor-pointer bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all ${talk.span}`}
                onClick={() => handleItemClick(talk)}
                variants={{
                  hidden: { y: 20, scale: 0.9, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      delay: index * 0.05
                    }
                  }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm md:text-base font-bold text-black dark:text-white line-clamp-2 flex-1">
                        {talk.title}
                      </h3>
                      {talk.type === 'speaker' && (
                        <Mic className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium mb-2 line-clamp-1">
                      {talk.event}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-black/60 dark:text-white/60">
                      <Calendar className="w-3 h-3" />
                      <span className="line-clamp-1">{talk.date}</span>
                    </div>
                    {talk.url && (
                      <ExternalLink className="w-3 h-3 text-black/40 dark:text-white/40" />
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
