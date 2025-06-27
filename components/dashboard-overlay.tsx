"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Activity, Terminal, X } from "lucide-react"

const logs = [
  { id: 1, timestamp: "14:32:15", level: "INFO", message: "Agent initialized successfully" },
  { id: 2, timestamp: "14:32:18", level: "SUCCESS", message: "Task completed: Data analysis" },
  { id: 3, timestamp: "14:32:22", level: "WARNING", message: "Rate limit approaching" },
  { id: 4, timestamp: "14:32:25", level: "INFO", message: "New task queued" },
]

export function DashboardOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-20 pointer-events-auto"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-black rounded-full p-4 shadow-lg"
        >
          <BarChart3 className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Dashboard Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 pointer-events-auto"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 h-2/3 bg-black/90 backdrop-blur-md border-t border-white/20 rounded-t-2xl"
            >
              <div className="p-6 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-orange-500" />
                    <h2 className="text-2xl font-bold text-white">Mission Control</h2>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                  {/* Performance Metrics */}
                  <Card className="bg-white/5 border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Performance</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">CPU Usage</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-orange-500 rounded-full"></div>
                          </div>
                          <span className="text-orange-500 text-sm">75%</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Memory</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-green-500 text-sm">50%</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Network</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-1/4 h-full bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-blue-500 text-sm">25%</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Real-time Logs */}
                  <Card className="bg-white/5 border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Terminal className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-white">Real-time Logs</h3>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {logs.map((log) => (
                        <div key={log.id} className="flex items-start gap-3 text-sm">
                          <span className="text-white/40 font-mono">{log.timestamp}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              log.level === "SUCCESS"
                                ? "border-green-500 text-green-500"
                                : log.level === "WARNING"
                                  ? "border-yellow-500 text-yellow-500"
                                  : log.level === "ERROR"
                                    ? "border-red-500 text-red-500"
                                    : "border-blue-500 text-blue-500"
                            }`}
                          >
                            {log.level}
                          </Badge>
                          <span className="text-white/80 flex-1">{log.message}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
