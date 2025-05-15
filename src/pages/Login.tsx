import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { logUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useAuthContext } from "../contexts/auth-context";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const location= useLocation();
  const from = location.state?.from;
  const navigate = useNavigate();
  const { loginUser } = useAuthContext();

 const { mutateAsync, isError, isPending , error} = useMutation({
    mutationFn:logUser,
    onSuccess: (data) => {
      loginUser(data.accessToken, data.user);
      navigate(from || '/profile', {replace: true});
    },
    onError: () => {
      console.log('Houston, we have a problem !');
    },
  });

  const onSubmitHandler = (data: Inputs) => {
    mutateAsync(data);
  }

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

        <button>Login</button>
        {isError && <p className='text-red-600'>Error: {error.message}</p>}
        {isPending && <p>Loading...</p>}

      </form>
    </section>
  );
};

export default Login;