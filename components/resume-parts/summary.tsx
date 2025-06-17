import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
      
export function Summary(props: any) {
  let resume = props.resume;
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

