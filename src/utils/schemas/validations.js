import * as yup from 'yup'

export const LoginFormSchema = yup.object({
  email: yup.string().min(4, 'Не менее 4-х символов').required('Email обязателен'),
  password: yup.string().min(4, 'Не менее 4-х символов').required('Пароль обязателен'),
}).required()
