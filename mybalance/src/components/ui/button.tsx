import { ComponentProps } from "react"
import { cn } from "../../lib/utils/tailwind"

export const Button = (props: ComponentProps<'button'>) => {
    const { className, ...other } = props
    return (
        <button
            className={
                cn(
                    'h-10 py-2 px-4 text-center rounded-md bg-primary text-primary-foreground',
                    'hover:bg-primary/90 duration-75',
                    className
                )
            }
            {...other}
        />
    )
}