import { useState } from 'react'

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
            {canOverflow && <span className={`${isExpanded && 'hidden'}`}> </span>}
            <span className={`${!isExpanded && 'hidden'}`} >
                {` ${remainder}`}
            </span>
            <span className={`${isExpanded ? 'hidden' : ''} ${!canOverflow && 'hidden'} text-blue-500`} onClick={() => setIsExpanded(!isExpanded)} >
                ...see more
            </span>
        </div>
    )
}