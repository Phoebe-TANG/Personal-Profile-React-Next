"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "电商平台",
    description: "基于 Next.js 的现代化电商解决方案",
    longDescription:
      "这是一个功能完整的电商平台，包含商品展示、购物车、订单管理、支付集成等功能。采用 Next.js 14 App Router、TypeScript、Tailwind CSS 构建，后端使用 Prisma + PostgreSQL，支付集成 Stripe。",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "/ecommerce-website-homepage.png",
  },
  {
    id: "2",
    title: "任务管理系统",
    description: "团队协作与项目管理工具",
    longDescription:
      "一个强大的任务管理系统，支持看板视图、甘特图、团队协作、实时通知等功能。使用 React、Redux Toolkit 进行状态管理，WebSocket 实现实时通信，后端采用 Node.js + Express。",
    tags: ["React", "Redux", "Node.js", "WebSocket"],
    image: "/task-management-dashboard.png",
  },
  {
    id: "3",
    title: "AI 聊天应用",
    description: "集成 GPT 的智能对话助手",
    longDescription:
      "基于 OpenAI API 的智能聊天应用，支持上下文记忆、多轮对话、代码高亮、Markdown 渲染等功能。前端使用 Next.js + Vercel AI SDK，实现流式响应和优雅的用户体验。",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "Streaming"],
    image: "/ai-chat-interface.png",
  },
  {
    id: "4",
    title: "数据可视化平台",
    description: "企业级数据分析与可视化工具",
    longDescription:
      "为企业提供强大的数据分析和可视化能力，支持多种图表类型、自定义仪表板、数据导出等功能。使用 React + D3.js + Recharts 构建，后端采用 Python + FastAPI 进行数据处理。",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    image: "/data-visualization-dashboard.png",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 section-cool">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">项目展示</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden glass-effect border-border/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="sr-only">项目详情</DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject.github && (
                  <Button variant="outline" className="rounded-full bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button className="rounded-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    在线演示
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
