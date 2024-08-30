export default function Login() {
  return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card bg-light opacity-75" style={{  width: "400px" }}>
          <div className="card-body">
            <h5 className="card-title text-center mb-4">LOGIN</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
