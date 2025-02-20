import { Button, FormSelect } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
       placeholder="alice"
       className="mb-2"/>
       <Form.Control id="wd-password"
       placeholder="123" type="password"
       className="mb-2"/>
       <Form.Control id="wd-firstname"
       placeholder="Alice" type="textarea"
       className="mb-2"/>
       <Form.Control id="wd-lastname"
       placeholder="Wonderland" type="textarea"
       className="mb-2"/>
       <Form.Control id="wd-dob"
       placeholder="2000-01-01" type="date"
       className="mb-2"/>
       <Form.Control id="wd-email"
       placeholder="alice@wonderland" type="email"
       className="mb-2"/>
       <FormSelect>
       <option selected value="USER">User</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Admin</option>
                    <option value="STUDENT">Student</option>
      </FormSelect>
      <Link id="wd-signin-link"
            to="/Kambaz/Account/Signin"
            className="mb-2">
            <Button variant="danger" className="w-100">
            Signout
      </Button></Link>
    </div>
);}