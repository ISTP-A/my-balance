import { cn } from "../lib/utils/tailwind"
import { TailwindComponent } from "../types"

export const Container = (props: TailwindComponent) => {
    return (
        <div className={cn('w-full min-h-screen', props.className)}>
            {props.children}
        </div>
    )
}