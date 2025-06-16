import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { promises as fs } from 'fs';
import Link from 'next/link';
import { IconBrandGithub } from "@tabler/icons-react"


type Projects = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
};



export async function Projects() {
  const file = await fs.readFile(process.cwd() + '/app/data/resume.json', 'utf8');
  const resume = JSON.parse(file);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resume.projects.map((project: Projects, index: number) => (
          <div key={index} className="space-y-2 ">
            <h3 className="font-semibold">{project.name}</h3>
            <div className="flex justify-between gap-10 text-sm text-muted-foreground">
              <div>{project.description}</div>
              <div>
                <Button variant={"outline"}>
                  <IconBrandGithub />
                  <Link href={project.url}>More Info</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>




  )
}

