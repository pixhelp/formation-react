import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; 
import { registerUser } from '../../../api/auth';
import { schema } from './shema';
import { useAuthContext } from '../../../contexts/auth-context';

type Inputs = z.infer<typeof schema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
const navigate = useNavigate();
const { loginUser } = useAuthContext();

const { isPending, isSuccess, isError, error, mutateAsync } = useMutation({
  mutationFn: (params: { email: string; password: string }) =>
    registerUser(params),
  onSuccess: ({accessToken, user}) => {
    console.log('Account created !', user);
    loginUser(accessToken, user);
    navigate('/profile');
  },
  onError: () => {
    console.log('Houston, we have a problem !');
  },
});

  const onSubmitHandler: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data)
    mutateAsync({
        email: data.email,
        password: data.password
    });
    console.log('Over')
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='email'
            id='email'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            id='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            id='confirmPassword'
            placeholder='Confirm Password'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </fieldset>

        <button>Register</button>
        {isError && <p className='text-red-600'>Error: {error.message}</p>}
        {isPending && <p>Loading...</p>}
        {isSuccess && <p className='text-green-600'>User created successfully</p>}
      </form>
    </section>
  );
};

export default Register;