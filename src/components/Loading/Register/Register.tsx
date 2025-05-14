import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; 




type Inputs = z.infer<typeof schema>;

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
});

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });


    const mutation = useMutation({
        mutationFn: async (data: Inputs) => {

            console.log(data.email);
            console.log(data.password);
            console.log(data.confirmPassword);

            return Promise.resolve();
        },
        onSuccess: () => {
            navigate('/profile');
        }
    });

    const handleSubmitForm = (data: Inputs) => {
        mutation.mutate(data);
    };

    return (
        <>
            <h2 className='text-center text-2xl font-semibold mb-8'>Register</h2>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='flex flex-col'>
                    <label>Email :</label>
                    <input {...register('email')} type="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>
                <div className='flex flex-col'>
                    <label>Mot de passe :</label>
                    <input {...register('password')} type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                    {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                </div>
                <div className='flex flex-col'>
                    <label>Confirmer le mot de passe :</label>
                    <input {...register('confirmPassword')} type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                </div>
                <button type="submit" className='text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Valider
                </button>
            </form>
        </>
    );
};

export default Register;