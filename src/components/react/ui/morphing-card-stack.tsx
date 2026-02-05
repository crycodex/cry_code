"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "../../../lib/utils"
import { Grid3X3, Layers, LayoutList, Github, ExternalLink } from "lucide-react"
import TechnologyBadge from "../TechnologyBadge"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: ReactNode
  color?: string
  image?: string
  technologies?: string[]
  github?: string
  demo?: string
}

export interface MorphingCardStackProps {
  cards?: CardData[]
  className?: string
  defaultLayout?: LayoutMode
  onCardClick?: (card: CardData) => void
}

const layoutIcons = {
  stack: Layers,
  grid: Grid3X3,
  list: LayoutList,
}

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({
  cards = [],
  className,
  defaultLayout = "stack",
  onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) {
    return null
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x

    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      // Swiped left - go to next card
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      // Swiped right - go to previous card
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse() // Reverse so top card renders last (on top)
  }

  const getLayoutStyles = (stackPosition: number) => {
    switch (layout) {
      case "stack":
        return {
          top: stackPosition * 12,
          left: stackPosition * 12,
          zIndex: cards.length - stackPosition,
          rotate: (stackPosition - 1) * 1.5,
        }
      case "grid":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
      case "list":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
    }
  }

  const containerStyles = {
    stack: "relative h-[600px] w-full max-w-md mx-auto",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    list: "flex flex-col gap-3",
  }

  const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

  return (
    <div className={cn("space-y-4", className)}>
      {/* Layout Toggle */}
      <div className="flex items-center justify-center gap-1 rounded-lg bg-blue-500/50 p-1 w-fit mx-auto">
        {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-md p-2 transition-all",
                layout === mode
                  ? "bg-blue-500 text-white"
                  : "text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-blue-500",
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
      </div>

      {/* Cards Container */}
      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], "mx-auto")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isExpanded ? 1.05 : 1,
                    x: 0,
                    ...styles,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -200 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    "cursor-pointer rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 overflow-hidden",
                    "hover:border-blue-600 dark:hover:border-blue-400 transition-colors",
                    layout === "stack" && "absolute w-full max-w-sm",
                    layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full",
                    layout === "list" && "w-full",
                    isExpanded && "ring-2 ring-blue-500",
                  )}
                  style={{
                    backgroundColor: card.color || undefined,
                  }}
                >
                  {card.image && (
                    <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {card.icon && !card.image && (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white">
                          {card.icon}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-xl text-black dark:text-white mb-2">{card.title}</h3>
                        <p
                          className={cn(
                            "text-sm text-black/70 dark:text-white/70",
                            layout === "stack" && "line-clamp-3",
                            layout === "grid" && "line-clamp-2",
                            layout === "list" && "line-clamp-1",
                          )}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {card.technologies && card.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 mb-3">
                        {card.technologies.slice(0, 3).map((tech, index) => (
                          <TechnologyBadge key={`${tech}-${index}`} name={tech} />
                        ))}
                        {card.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-full">
                            +{card.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {(card.github || card.demo) && (
                      <div className="flex gap-4 mt-4 pt-4 border-t border-black/10 dark:border-white/10">
                        {card.github && (
                          <a
                            href={card.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">GitHub</span>
                          </a>
                        )}
                        {card.demo && (
                          <a
                            href={card.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">Demo</span>
                          </a>
                        )}
                      </div>
                    )}

                    {isTopCard && layout === "stack" && (
                      <div className="absolute bottom-2 left-50 right-0 text-center">
                        <span className="text-xs text-black/50 dark:text-white/50">Swipe to navigate</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  )
}

// Export alias for compatibility with demo code
export const Component = MorphingCardStack
