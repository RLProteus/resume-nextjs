import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { convertToMMMYY } from "@/components/utils";


type Education = {
  institution: string;
  area: string;
  url: string;
  studyType: string;
  startDate: string;
  endDate: string;
};



export function Education(props: any) {
  let resume = props.resume;

  return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resume.education.map((edu: Education, index: number) => (
          <div key={index} className="flex justify-between">
            <div>
              <h3 className="font-semibold">{edu.studyType}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
            <p className="text-sm text-muted-foreground">{convertToMMMYY(edu.startDate)} - {convertToMMMYY(edu.endDate)}</p>
          </div>
          ))}
        </CardContent>
      </Card>



     
  )
}

