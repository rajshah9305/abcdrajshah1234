"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Settings, X } from "lucide-react"

export function ConfigurationPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState({
    agentCount: [3],
    temperature: [0.7],
    maxTokens: [2048],
    enableLogging: true,
    autoRetry: false,
  })

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-20 pointer-events-auto"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-black rounded-full p-4 shadow-lg"
        >
          <Settings className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Configuration Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 pointer-events-auto"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-black/90 backdrop-blur-md border-l border-white/20"
            >
              <div className="p-6 h-full overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Configuration</h2>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Configuration Options */}
                <div className="space-y-8">
                  {/* Agent Count */}
                  <Card className="bg-white/5 border-white/10 p-4">
                    <Label className="text-white mb-3 block">Agent Count</Label>
                    <Slider
                      value={config.agentCount}
                      onValueChange={(value) => setConfig((prev) => ({ ...prev, agentCount: value }))}
                      max={10}
                      min={1}
                      step={1}
                      className="mb-2"
                    />
                    <div className="text-orange-500 text-sm">{config.agentCount[0]} agents</div>
                  </Card>

                  {/* Temperature */}
                  <Card className="bg-white/5 border-white/10 p-4">
                    <Label className="text-white mb-3 block">Temperature</Label>
                    <Slider
                      value={config.temperature}
                      onValueChange={(value) => setConfig((prev) => ({ ...prev, temperature: value }))}
                      max={2}
                      min={0}
                      step={0.1}
                      className="mb-2"
                    />
                    <div className="text-orange-500 text-sm">{config.temperature[0]}</div>
                  </Card>

                  {/* Max Tokens */}
                  <Card className="bg-white/5 border-white/10 p-4">
                    <Label className="text-white mb-3 block">Max Tokens</Label>
                    <Input
                      type="number"
                      value={config.maxTokens[0]}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          maxTokens: [Number.parseInt(e.target.value) || 2048],
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </Card>

                  {/* Switches */}
                  <div className="space-y-4">
                    <Card className="bg-white/5 border-white/10 p-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-white">Enable Logging</Label>
                        <Switch
                          checked={config.enableLogging}
                          onCheckedChange={(checked) =>
                            setConfig((prev) => ({
                              ...prev,
                              enableLogging: checked,
                            }))
                          }
                        />
                      </div>
                    </Card>

                    <Card className="bg-white/5 border-white/10 p-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-white">Auto Retry</Label>
                        <Switch
                          checked={config.autoRetry}
                          onCheckedChange={(checked) =>
                            setConfig((prev) => ({
                              ...prev,
                              autoRetry: checked,
                            }))
                          }
                        />
                      </div>
                    </Card>
                  </div>

                  {/* Apply Button */}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Apply Configuration
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
