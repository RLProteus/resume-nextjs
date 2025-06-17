import { Separator } from "@/components/ui/separator"
import {Basics, Summary, Skills, Experience, Education, Projects} from "@/components/resume-parts"
import { promises as fs } from 'fs';

async function ResumeData(){

    const file = await fs.readFile(process.cwd() + '/app/data/resume.json', 'utf8');
    const resume = JSON.parse(file);
    return await resume;
}

export async function Resume() {
  const resume = await ResumeData() 
  return (
    <div className="max-w-5xl mx-auto space-y-8 print:space-y-6">
      {/* Header */}
      <Basics resume={resume}/>

      <Separator />

      {/* Summary */}
      <Summary resume={resume}/>
      {/* Skills */}
      <Skills resume={resume}/>
      {/* Experience */}
      <Experience resume={resume}/>
      
      {/* Education */}
      <Education resume={resume}/>

      {/* Projects */}
      <Projects resume={resume}/>
    </div>
  )
}
