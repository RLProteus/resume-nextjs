import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { promises as fs } from 'fs';
import { IconInfoCircle } from '@tabler/icons-react';

type Work = {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights: string[];
};



export async function Experience() {
  const file = await fs.readFile(process.cwd() + '/app/data/resume.json', 'utf8');
  const resume = JSON.parse(file);
  const icon = <IconInfoCircle />;
  return (

    <Card>


      <CardHeader className="pb-2">
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {resume.work.map((job: Work, index: number) => (

          <div key={index} className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{job.position}</h3>
                <p className="text-sm text-muted-foreground">{job.name}</p>
              </div>

              <div className="text-sm text-right text-muted-foreground">
                <p>Jan 2020 - Present</p>
              </div>
            </div>

            {job.summary &&

              <Card className="bg-gray-100 dark:bg-gray-800">
                <CardContent>
                  {job.summary}
                </CardContent>
              </Card>

            }
            <p />
            {job.highlights.length > 0 &&
              <div>
                <p><u>Highlights:</u></p>
                <ul className="list-disc pl-5 space-y-1">
                  {job.highlights.map((highlight: string, index: number) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

