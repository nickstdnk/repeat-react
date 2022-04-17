import preloader from '../../../assets/img/loading-buffering.gif'

const Preloader = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <img src={preloader} alt="preloader"/>
    </div>
  )
}

export default Preloader