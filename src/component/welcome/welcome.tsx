import logo from '../../../src/logo.svg'
import './welcome.css'

function WelcomeComponent() {

    return (
      <>
        <div className="d-flex justify-content-center align-items-center mt-3">
            <h1>REACTJS PROJECT MOCK</h1>
        </div>
        <div className="d-flex justify-content-center"><img width="550px" height="500px" src={logo} alt="" /></div>
      </>
    );
  }
  
  export default WelcomeComponent;