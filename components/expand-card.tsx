import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface ReadMoreProps {
    index: number
    text: string
    maxWords?: number
}

export const ReadMore = ({ index, text, maxWords = 36 }: ReadMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const canOverflow = text.split(' ').length > maxWords
    const beginText = canOverflow
        ? text.split(' ').slice(0, maxWords - 1).join(' ')
        : text
    const remainder = text.split(' ').slice(maxWords - 1).join(' ')
    return (
        <div>
            {beginText}
            {canOverflow && <span className={`${isExpanded && 'hidden'}`}>... </span>}
            <span className={`${!isExpanded && 'hidden'}`} >
                {` ${remainder}`}
            </span>
            <p className='mt-2'>
                <Button className={`${!canOverflow && 'hidden'} dark:hover:bg-sky-900 dark:bg-sky-500 bg-slate-900 bg-slate-500 justify-between`} onClick={() => setIsExpanded(!isExpanded)} >
                    {isExpanded ? 'Collapse' : 'Expand'}
                </Button>
            </p>
        </div>
    )
}