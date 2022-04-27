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
    setError,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })
  const onSubmit = (data) => {
    props.login(data, setError)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder={'Email'} defaultValue={'codeblog.io@gmail.com'} {...register('email')} />
        {errors.email &&
          <div style={{color: 'red', border: '2px solid red'}}>{errors.email?.message}</div>
        }
      </div>
      <div>
        <input placeholder={'Password'} defaultValue={'qwerty227'} {...register('password')} />
        {errors.password &&
          <div style={{color: 'red', border: '2px solid red'}}>{errors.password?.message}</div>
        }
      </div>
      <div>
        <input type={'checkbox'} {...register('rememberMe')} /> remember me
      </div>
      {errors.common &&
        <div style={{color: 'red', border: '2px solid red'}}>{errors.common?.message}</div>
      }
      {errors.captcha &&
        <div style={{color: 'red', border: '2px solid red'}}>{errors.captcha?.message}</div>
      }
      {props.captcha &&
        <div>
          <div>
            <img src={props.captcha.url} alt={'captcha'}/>
          </div>
          <div>
            <input placeholder={'captcha'} {...register('captcha')} />
          </div>
        </div>
      }
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

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  captcha: state.authPage.captcha,
})

export default connect(mapStateToProps, {login})(Auth)


