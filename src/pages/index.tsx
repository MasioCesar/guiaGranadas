import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Nome de usuário é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
});

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/home');
    };

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
        >
            {({ errors, touched }) => (
                <Form className="p-6 w-full flex flex-col items-center justify-center h-[90vh]">
                    <div className='p-6 flex flex-col items-center justify-center border border-[#c4ab08]'>
                    <img src="/images/logoprataGlobal.png" alt="Logo Knife" className="mx-auto mb-4 mt-2" width="250" />
                    <Field name="username" className="border border-[#c4ab08] p-2 mb-4 w-full flex items-center justify-center text-black" />
                    {errors.username && touched.username ? (
                        <div className='text-[#c4ab08] mb-4'>{errors.username}</div>
                    ) : null}
                    <Field name="password" type="password" className="border border-[#c4ab08] p-2 mb-4 flex w-full items-center justify-center text-black" />
                    {errors.password && touched.password ? (
                        <div className='text-[#c4ab08] mb-4'>{errors.password}</div>
                    ) : null}
                    <button type="submit" className="border-[#c4ab08] border text-[#c4ab08] py-2 px-4 rounded mx-auto block hover:bg-yellow-400 hover:text-black w-1/4">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}