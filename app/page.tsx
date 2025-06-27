"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import { NetworkBackground } from "@/components/network-background"
import { HeroSection } from "@/components/hero-section"
import { MetricsCards } from "@/components/metrics-cards"
import { FrameworkGrid } from "@/components/framework-grid"
import { ConfigurationPanel } from "@/components/configuration-panel"
import { DashboardOverlay } from "@/components/dashboard-overlay"
import { Navigation } from "@/components/navigation"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <NetworkBackground />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 w-full h-full">
        <Navigation />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col h-full"
        >
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center px-4">
            <HeroSection />
          </div>

          {/* Metrics Cards */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
            <MetricsCards />
          </div>
        </motion.div>

        {/* Framework Selection Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <FrameworkGrid />
        </div>

        {/* Configuration Panel */}
        <ConfigurationPanel />

        {/* Dashboard Overlay */}
        <DashboardOverlay />
      </div>

      {/* Loading Spinner */}
      <Suspense fallback={<LoadingSpinner />}>
        <div />
      </Suspense>
    </div>
  )
}
