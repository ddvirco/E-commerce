import { NavLink } from 'react-router-dom';
import './Login.css';

function LoginComp() {

    return (
        <div className='container my-5 py-5'>
            <form> 
                <h3>Login form</h3>
                <div className="mb-3 ">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className='mt-3'>Not member? <NavLink to="/register"> Signup now</NavLink> </div>
            </form>
        </div>
    )
}

export default LoginComp