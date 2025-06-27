"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Bot, Network, Activity, Save } from "lucide-react"

const metrics = [
  {
    icon: Bot,
    label: "Active Agents",
    value: "+23%",
    color: "text-orange-500",
  },
  {
    icon: Network,
    label: "Frameworks",
    value: "+2",
    color: "text-blue-500",
  },
  {
    icon: Activity,
    label: "Executions",
    value: "+156%",
    color: "text-green-500",
  },
  {
    icon: Save,
    label: "Saved Configs",
    value: "+0",
    color: "text-purple-500",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col items-center space-y-3">
              <div className={`p-3 rounded-xl bg-black/20 ${metric.color}`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/60 text-sm">{metric.label}</p>
                <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
