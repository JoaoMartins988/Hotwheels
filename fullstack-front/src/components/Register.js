import {  useState } from "react";
import axios from "axios";
function Register() {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/save", {
            username: username,
          password: password,
          });
          alert("Username Registation Successfully");
        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Username Registation</h1>
    
    <form>
        <div class="form-group">
          <label> username</label>
          <input type="text"  class="form-control" id="username" placeholder="Enter username"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}

          
          />
 
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;