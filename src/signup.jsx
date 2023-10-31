import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Signup() {

    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then( result=> console.log(result))
        .catch(err=> console.log(err))
    }

return(
    <div>
        <div class="container mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h2>User Registration</h2>

            <form onSubmit={handleSubmit}>

                <div class="form-group">
                    <label for="regUsername">Username</label>
                    <input type="text" class="form-control" id="regUsername" placeholder="Enter your username"
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>


                <div class="form-group">
                    <label for="regEmail">Email</label>
                    <input type="email" class="form-control" id="regEmail" placeholder="Enter your Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>


                <div class="form-group">
                    <label for="regPassword">Password</label>
                    <input type="password" class="form-control" id="regPassword" placeholder="Enter your password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>


                <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <p class="mt-3">Already have an account?</p> 
            
            <Link to="/login">
            <button>Login here</button>
            </Link>

        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    </div>

);

}

export default Signup;