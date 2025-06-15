import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { promises as fs } from 'fs';


type Skill = {
  name: string;
  level: string;
  keywords: string[];
};
      
export async function Skills()  {
    const  file = await fs.readFile(process.cwd() + '/app/data/resume.json', 'utf8');
    const resume = JSON.parse(file);
  return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
         
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill: Skill, index: number) => (
            <Badge className="dark:bg-green-300" key={index}>{skill.name}</Badge>
             ))}
          </div>
        </CardContent>
      </Card>
    )
}

