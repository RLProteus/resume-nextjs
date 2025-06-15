import { Separator } from "@/components/ui/separator"
import {Basics, Summary, Skills, Experience, Education, Projects} from "@/components/resume-parts"


export function Resume() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 print:space-y-6">
      {/* Header */}
      <Basics />

      <Separator />

      {/* Summary */}
      <Summary />
      {/* Skills */}
      <Skills />
      {/* Experience */}
      <Experience />
      
      {/* Education */}
      <Education />

      {/* Projects */}
      <Projects />
    </div>
  )
}
