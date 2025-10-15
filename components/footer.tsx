import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
