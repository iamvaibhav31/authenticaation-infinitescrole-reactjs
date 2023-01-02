const Validate = (values) => {
     const error = {}
     const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")


     if (!values.email) {
          error.email = "Email address is required"
     }

     if (!values.password) {
          error.password = "Pleace the Enter the password"
     }
     // else if (!passwordRegex.test(values.password)) {
     //      error.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
     // }


     return error
}

export default Validate
