import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Form } from "../../components/ui/form"
import { Container } from "../../layouts/container"
import { Button } from "../../components/ui/button"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
    account: z.string().email(),
    password: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

const PageLogin = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: { account: '', password: '' }
    })
    const { register, handleSubmit, formState: { errors } } = form

    const onSubmit = (data: FormSchema) => {
        console.log(data)
    }
    return (
        <Container>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="w-fit m-auto">
                        <CardHeader>
                            <CardTitle>로그인</CardTitle>
                            <CardDescription>로그인 후 서비스를 이용할 수 있습니다</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <label className="text-label">email</label>
                                <input
                                    type='text'
                                    {...register('account')}
                                    {...errors.account && <span>{errors.account.message}</span>}
                                />
                            </div>
                            <div >
                                <label className="text-label">password</label>
                                <input
                                    type='password'
                                    {...register('password')}
                                    {...errors.password && <span>{errors.password.message}</span>}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>로그인</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </Container>
    )
}

export default PageLogin