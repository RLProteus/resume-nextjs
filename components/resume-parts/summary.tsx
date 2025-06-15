import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { promises as fs } from 'fs';
      
export async function Summary()  {
    const  file = await fs.readFile(process.cwd() + '/app/data/resume.json', 'utf8');
    const resume = JSON.parse(file);
  return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
           {resume.basics.summary}
          </p>
        </CardContent>
      </Card>
    )
}

