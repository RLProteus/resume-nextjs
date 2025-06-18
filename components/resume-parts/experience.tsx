"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { convertToMMMYY } from "@/components/utils";
import { ReadMore } from "@/components/expand-card";

type Work = {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights: string[];
};

export function Experience(props: any) {
  let resume = props.resume;
  return (

    <Card>


      <CardHeader className="pb-2">
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {resume.work.map((job: Work, index: number) => (

          <div key={index} className="space-y-2 ">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{job.position}</h3>
                <p className="text-sm text-muted-foreground">{job.name}</p>
              </div>

              <div className="text-sm text-right text-muted-foreground">
                <p>{convertToMMMYY(job.startDate)} - {convertToMMMYY(job.endDate)}</p>
              </div>
            </div>
            {job.summary &&
              <Card className="bg-gray-100 dark:bg-gray-800">
                <CardContent>
                  <ReadMore index={index} text={job.summary}/>
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

