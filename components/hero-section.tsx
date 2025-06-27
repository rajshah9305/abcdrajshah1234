"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-orange-500/20 mb-8"
      >
        <Zap className="w-4 h-4 text-orange-500" />
        <span className="text-orange-500 text-sm font-medium">Next-Generation AI Orchestration</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
      >
        <span className="text-orange-500">Orchestrate</span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          AI Agents
        </span>
      </motion.h1>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-4 mb-12"
      >
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Deploy, configure, and monitor AI agents across multiple frameworks.
        </p>
        <p className="text-lg text-orange-500 font-medium">
          Build intelligent systems that work together seamlessly with enterprise-grade reliability.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Zap className="w-5 h-5 mr-2" />
          Start Building
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
        >
          <Play className="w-5 h-5 mr-2" />
          View Demo
        </Button>
      </motion.div>
    </div>
  )
}
