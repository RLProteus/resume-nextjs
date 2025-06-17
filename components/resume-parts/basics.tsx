
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"

export function Basics(props: any) {
      let resume = props.resume;
  return (
    <div className="space-y-2">
        <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
        <p className="text-xl text-muted-foreground">{resume.basics.label}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="mr-1 h-4 w-4" />
            {resume.basics.email}
          </div>
    
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {resume.basics.location.city}, {resume.basics.location.region} {resume.basics.location.countryCode}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Globe className="mr-1 h-4 w-4" />
            <a href={resume.basics.website}> Website</a>
          </div>
        </div>
      </div>
    )
}
