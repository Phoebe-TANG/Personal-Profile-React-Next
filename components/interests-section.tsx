import { Heart, Camera, Book, Music, Plane, Coffee } from "lucide-react"

const interests = [
  {
    icon: Camera,
    title: "摄影",
    description: "捕捉生活中的美好瞬间",
  },
  {
    icon: Book,
    title: "阅读",
    description: "探索知识的海洋",
  },
  {
    icon: Music,
    title: "音乐",
    description: "享受旋律的力量",
  },
  {
    icon: Plane,
    title: "旅行",
    description: "发现世界的精彩",
  },
  {
    icon: Coffee,
    title: "咖啡",
    description: "品味生活的醇香",
  },
  {
    icon: Heart,
    title: "运动",
    description: "保持健康与活力",
  },
]

export function InterestsSection() {
  return (
    <section id="interests" className="py-32 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-4">兴趣爱好</h2>
        <p className="text-center text-muted-foreground mb-20 text-lg">工作之外的热爱</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {interests.map((interest) => (
            <div key={interest.title} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5">
                <interest.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">关于我的性格</h3>
          <p className="text-muted-foreground leading-relaxed">
            我是一个充满好奇心和创造力的人，喜欢探索新事物，享受将想法变为现实的过程。工作中追求卓越，生活中保持热情。相信技术能够改变世界，也相信生活需要平衡。喜欢与志同道合的人交流，分享经验，共同成长。
          </p>
        </div>
      </div>
    </section>
  )
}
