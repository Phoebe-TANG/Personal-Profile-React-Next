import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 section-warm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">关于我</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 glass-effect border-border/50 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-foreground mb-4">技术背景</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              我是一名充满热情的全栈开发工程师，拥有 5 年以上的开发经验。专注于使用现代技术栈构建高质量的 Web 应用，包括
              React、Next.js、TypeScript 和 Node.js。
            </p>
          </Card>

          <Card className="p-8 glass-effect border-border/50 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-foreground mb-4">工作理念</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              我相信优秀的软件不仅要功能强大，更要注重用户体验和代码质量。追求简洁优雅的设计，编写可维护的代码，并持续学习最新的技术趋势。
            </p>
          </Card>

          <Card className="p-8 glass-effect border-border/50 shadow-lg hover:shadow-xl transition-all md:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-4">专业技能</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              精通前端开发（React、Vue、Next.js），熟悉后端技术（Node.js、Python、数据库设计），具备完整的产品开发能力。擅长性能优化、响应式设计和用户体验提升。同时对
              UI/UX 设计有深入理解，能够独立完成从设计到开发的全流程。
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
