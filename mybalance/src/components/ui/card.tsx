import { cn } from "../../lib/utils/tailwind"
import { TailwindComponent } from "../../types"

export const Card = (props: TailwindComponent) => {
    return (
        <div className={cn('border rounded-lg', props.className)}>
            {props.children}
        </div>
    )
}

export const CardHeader = (props: TailwindComponent) => {
    return (
        <div className={cn('p-4', props.className)}>
            {props.children}
        </div>
    )
}

export const CardTitle = (props: TailwindComponent) => {
    return (
        <h2 className={cn('text-subhead', props.className)}>
            {props.children}
        </h2>
    )
}

export const CardDescription = (props: TailwindComponent) => {
    return (
        <p className={cn('text-muted-foreground', props.className)}>
            {props.children}
        </p>
    )
}

export const CardContent = (props: TailwindComponent) => {
    return (
        <div className={cn('p-4', props.className)}>
            {props.children}
        </div>
    )
}

export const CardFooter = (props: TailwindComponent) => {
    return (
        <div className={cn('p-4', props.className)}>
            {props.children}
        </div>
    )
}
