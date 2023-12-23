export default function Login(){

    return(
        <div className="container my-4">
        <div className="mx-auto rounded border p-4" style={{ width: "400px" }}>
            <h2 className="text-center mb-5">Welcome, please login</h2>

            <form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" name="email" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" name="password" />
                </div>

                <div className="row mb-3">
                    <div className="col d-grid">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="col d-grid">
                        <a className="btn btn-outline-primary" href="/" role="button">Cancel</a>
                    </div>
                </div>

            </form>
        </div>
    </div>
    )
}