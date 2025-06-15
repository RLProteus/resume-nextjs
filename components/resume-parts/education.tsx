import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { promises as fs } from 'fs';


type Education = {
  institution: string;
  area: string;
  url: string;
  studyType: string;
  startDate: string;
  endDate: string;
};



export async function Education() {
  const file = await fs.readFile(process.cwd() + '/app/data/resume.json', 'utf8');
  const resume = JSON.parse(file);

  return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resume.education.map((edu: Education, index: number) => (
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{edu.studyType}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
            <p className="text-sm text-muted-foreground">{edu.startDate} - {edu.endDate}</p>
          </div>
          ))}
        </CardContent>
      </Card>



     
  )
}

