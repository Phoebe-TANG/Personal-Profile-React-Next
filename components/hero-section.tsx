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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar className="h-40 w-40 md:h-48 md:w-48 ring-4 ring-border shadow-xl">
              <AvatarImage src="/professional-portrait.png" alt="Profile" />
              <AvatarFallback className="text-4xl">YN</AvatarFallback>
            </Avatar>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                你好，我是 <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-muted-foreground">全栈开发工程师</p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
                专注于打造优雅、高性能的 Web 应用，追求极致的用户体验与代码质量
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("projects")}
              >
                查看项目
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                联系我
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
