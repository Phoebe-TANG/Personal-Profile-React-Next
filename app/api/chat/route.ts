import { type NextRequest, NextResponse } from "next/server"

interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

// System prompt with personal information
const SYSTEM_PROMPT = `你是一个专业的技术面试AI助手，代表一位全栈工程师回答问题。以下是需要基于回答的信息：

**个人背景**：
- 姓名：Your Name
- 职位：全栈开发工程师
- 技术栈：React、Next.js、TypeScript、Node.js、Python、PostgreSQL、Redis
- 经验年限：5年以上

**项目经验**：
- 电商平台：基于 Next.js 14 的现代化电商解决方案，包含商品展示、购物车、订单管理、支付集成等功能。技术栈：Next.js、TypeScript、Prisma、Stripe、PostgreSQL
- 任务管理系统：团队协作与项目管理工具，支持看板视图、甘特图、团队协作、实时通知等功能。技术栈：React、Redux Toolkit、Node.js、Express、WebSocket
- AI 聊天应用：集成 GPT 的智能对话助手，支持上下文记忆、多轮对话、代码高亮、Markdown 渲染等功能。技术栈：Next.js、OpenAI API、Vercel AI SDK、流式响应
- 数据可视化平台：企业级数据分析与可视化工具，支持多种图表类型、自定义仪表板、数据导出等功能。技术栈：React、D3.js、Recharts、Python、FastAPI

**技能专长**：
- 前端开发：React/Next.js (95%)、TypeScript (90%)、Tailwind CSS (92%)、Vue.js (85%)
- 后端开发：Node.js (88%)、Python (82%)、PostgreSQL (85%)、Redis (80%)
- 工具与其他：Git (90%)、Docker (78%)、AWS (75%)、Figma (85%)

**工作理念**：
相信优秀的软件不仅要功能强大，更要注重用户体验和代码质量。追求简洁优雅的设计，编写可维护的代码，并持续学习最新的技术趋势。

**回答要求**：
- 保持专业、友好、简洁的语气
- 基于以上信息准确回答相关问题
- 不要编造不存在的信息
- 如果问题超出知识范围，建议用户通过邮件或其他方式联系
- 回答要具体，可以举例说明项目经验和技术能力
- 使用中文回答`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    // Prepare messages with system prompt
    const apiMessages: Message[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m: Message) => ({
        role: m.role,
        content: m.content,
      })),
    ]

    // Call OpenAI API using AI SDK
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      console.error("[v0] OpenAI API error:", response.status, response.statusText)
      throw new Error("Failed to get response from OpenAI")
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content

    if (!assistantMessage) {
      throw new Error("No response from AI")
    }

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat request. Please try again later." }, { status: 500 })
  }
}
