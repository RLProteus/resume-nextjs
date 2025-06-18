
import { IconMail, IconMapPin, IconWorld, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

export function Basics(props: any) {
      let resume = props.resume;
  return (
    <div className="space-y-2">
        <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
        <p className="text-xl text-muted-foreground">{resume.basics.label}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center text-sm text-muted-foreground hover:text-blue-500">
            <IconMail className="mr-1 h-4 w-4 " />
            <a href={`mailto:${resume.basics.email}`}> {resume.basics.email} </a>
          </div>
    
          <div className="flex items-center text-sm text-muted-foreground">
            <IconMapPin className="mr-1 h-4 w-4 " />
            {resume.basics.location.city}, {resume.basics.location.region} {resume.basics.location.countryCode}
          </div>
          <div className="flex items-center text-sm text-muted-foreground hover:text-blue-500">
            <IconWorld className="mr-1 h-4 w-4 " />
            <a className="" href={resume.basics.website}>Website</a>
          </div>
                    <div className="flex items-center text-sm text-muted-foreground hover:text-blue-500">
            <IconBrandGithub className="mr-1 h-4 w-4" />
            <a href={resume.basics.profiles[1].url}>Github</a>
          </div>
                    <div className="flex items-center text-sm text-muted-foreground hover:text-blue-500">
            <IconBrandLinkedin className="mr-1 h-4 w-4" />
            <a href={resume.basics.profiles[0].url}>LinkedIn</a>
          </div>
        </div>
      </div>
    )
}
