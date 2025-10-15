import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "前端开发",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    title: "后端开发",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    title: "工具与其他",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 section-fresh">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">技能专长</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 glass-effect border-border/50 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
