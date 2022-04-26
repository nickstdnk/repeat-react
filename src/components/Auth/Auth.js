import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { login } from '../../redux/reducers/authReducer'
import { LoginFormSchema } from '../../utils/schemas/validations'

const AuthForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  })
  const onSubmit = (data) => {
    props.login(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder={'Email'} defaultValue={'codeblog.io@gmail.com'} {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input placeholder={'Password'} defaultValue={'qwerty227'} {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input type={'checkbox'} {...register('rememberMe')} /> remember me
      </div>
      <div>
        <button type={'submit'}>Отправить</button>
      </div>
    </form>
  )
}


const Auth = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (props.isAuth) {
      navigate('/profile')
    }
  }, [props.isAuth])
  return (
    <>
      <h1>Auth</h1>
      <AuthForm {...props}/>
    </>
  )
}

const mapStateToProps = (state, {email, password}) => ({isAuth: state.authPage.isAuth, email, password})

export default connect(mapStateToProps, {login})(Auth)


