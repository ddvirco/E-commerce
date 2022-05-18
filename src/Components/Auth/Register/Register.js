
function RegisterComp() {

    return (
        <div className='container my-5 py-5'>
            <form>
            <div className="mb-1">
                <h3>Register </h3>
                    <label className="form-label">First name</label>
                    <input type="text" class="form-control"/>
                </div>
                <div className="mb-1">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-1">
                    <label className="form-label">username</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-1">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="mb-1">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
};

export default RegisterComp