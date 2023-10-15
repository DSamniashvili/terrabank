import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from './PasswordLogin.types';

const defaultValues: DefaultValues<FormValues> = {
  username: '',
  password: '',
  save: false,
};

export const usePasswordLogin = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = () => {};

  const handleSignIn = handleSubmit(onSubmit);

  const handleSignUp = () => {};

  return {
    control,
    handleSignIn,
    handleSignUp,
  };
};
