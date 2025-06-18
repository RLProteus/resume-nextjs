import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"



type Skill = {
  name: string;
  level: string;
  keywords: Keyword[];
};

type Keyword = {
  name: string;
  proficiency: string;
  percent: number;
  experience: number;
};

export function Skills(props: any) {
  let resume = props.resume;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      
      <CardDescription className="">
        Progress bar represents commentency
      </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {resume.skills.map((skill: Skill, index: number) => (
            
            <div key={index} className="space-y-3">
              
              <h3 className=" font-bold text-lg underline">{skill.name}</h3>
              <div className="space-y-4">
                {skill.keywords.map((keyword: Keyword, index: number) => (
                  <div key={index} className="space-y-1 ">
                    <div className="flex justify-between items-center ">
                      <span className="text-sm">{keyword.name}</span>
                      <span className="text-sm text-muted-foreground">{keyword.experience} years</span>
                    </div>
                    <Progress value={keyword.percent} className="[&>*]:bg-slate-400 dark:bg-slate-800 bg-slate-200">
                    </Progress>
                  </div>
                  
                ))}
              </div>

            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

