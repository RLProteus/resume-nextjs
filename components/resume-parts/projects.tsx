import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { IconBrandGithub } from "@tabler/icons-react"


type Projects = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
};



export function Projects(props: any) {
  let resume = props.resume;

  return (
    <Card className="">
      <CardHeader className="pb-2 ">
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resume.projects.map((project: Projects, index: number) => (
          <div key={index} className="space-y-2 ">
            <h3 className="font-semibold">{project.name}</h3>
            <div className="flex justify-between gap-10 text-sm text-muted-foreground">
              <div>{project.description}</div>
              <div>
                <Button asChild className="dark:hover:bg-sky-900 dark:bg-sky-500 bg-slate-900 bg-slate-500" >
                  <Link href={project.url}><IconBrandGithub />More Info</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>




  )
}

