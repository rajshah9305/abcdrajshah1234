"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Settings, User } from "lucide-react"

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-20 p-6"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
            <span className="text-black font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl">AgentOrchestra</h1>
            <p className="text-white/60 text-sm">AI Agent Orchestration Platform</p>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
