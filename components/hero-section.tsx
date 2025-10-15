"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-5xl w-full text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
              Your Name
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              全栈开发工程师
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            专注于打造优雅、高性能的 Web 应用
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-12"
              onClick={() => scrollToSection("projects")}
            >
              查看项目
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12"
              onClick={() => scrollToSection("contact")}
            >
              联系我
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
