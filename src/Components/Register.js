import React, { useContext, useState } from 'react'
import Validate from '../Validators/Registervalidator'
import { useNavigate } from "react-router-dom";
import AuthContext from '../Auth/AuthContext'

const Register = () => {
  const navigate = useNavigate();
  const { RegisterUsers, loading, error, userdata } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    Comfirm_Password: ''
  })
  const [formError, setFormError] = useState({})
  const [termandservice, setTermandservice] = useState(false)
  const [isError, setIsError] = useState(false)


  const formDataonChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  const formDataonSubmit = (e) => {
    e.preventDefault()
    setFormError(Validate(formData))
    if (Object.keys(formError).length === 0 && termandservice) {
      RegisterUsers(formData)
      if (!error) {
        navigate({
          pathname: '/login',
        });
      } else {
        setIsError(true);
      }
    }
  }


  console.log(loading, error, userdata, isError)

  return (
    <>
      <section className="vh-110" style={{ backgroundcolor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderradius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">

                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      {isError && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <span class="text-danger small fw-bold">{error}</span>
                        <button type="button" class="btn-close" onClick={(e) => setIsError(false)} ></button>
                      </div>}
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <span class="text-danger small fw-bold">{formError?.name}</span>
                            <input type="text" id="firstname" className="form-control" name='name' required onChange={formDataonChange} />
                            <label className="form-label" for="form3Example1c">Full name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <span class="text-danger small fw-bold">{formError?.email}</span>
                            <input type="email" id="form3Example3c" className="form-control" name='email' required onChange={formDataonChange} />
                            <label className="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <span class="text-danger small fw-bold">{formError?.password}</span>
                            <input type="password" id="form3Example4c" className="form-control" autoComplete="on" name='password' required onChange={formDataonChange} />
                            <label className="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <span class="text-danger small fw-bold">{formError?.Comfirm_Password}</span>
                            <input type="password" id="form3Example4cd" className="form-control" autoComplete="on" name='Comfirm_Password' required onChange={formDataonChange} />
                            <label className="form-label" for="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form2Example3c"
                            onChange={() => setTermandservice(!termandservice)}
                            required
                          />
                          <label className="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>



                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="Submit" className="btn btn-primary btn-lg" onClick={formDataonSubmit}>Register</button>
                          {loading && <div class="spinner-border m-2 " role="status">
                            <span class="sr-only">Loading...</span>
                          </div>}
                        </div>
                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register