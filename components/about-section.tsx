import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-4">关于我</h2>
        <p className="text-center text-muted-foreground mb-20 text-lg">技术与热情的结合</p>

        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              我是一名充满热情的全栈开发工程师，拥有 5 年以上的开发经验。专注于使用现代技术栈构建高质量的 Web 应用，包括 React、Next.js、TypeScript 和 Node.js。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">技术栈</h3>
              <p className="text-muted-foreground leading-relaxed">
                精通现代前后端技术，构建高性能应用
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">设计理念</h3>
              <p className="text-muted-foreground leading-relaxed">
                追求简洁优雅，注重用户体验与细节
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">持续学习</h3>
              <p className="text-muted-foreground leading-relaxed">
                紧跟技术趋势，不断提升专业能力
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
