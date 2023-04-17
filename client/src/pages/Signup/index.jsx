import { Component } from "react";
import './style.css';
import InputField from "../../components/InputField";
class INITIAL_VALUE {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.gender = null;
        this.phone = {
            countryCode : "",
            phone : null,
        };
        this.email = "";
        this.DateOfBirth = {
            date : "",
            month : "",
            year : ""
        } ;
        this.education = {
            degree : "",
            stream : "",
            yop : ""
        };
        this.intrestedIn = "";
        this.password = "";
    }
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student : new INITIAL_VALUE()
        }
    }
    render() {
        return <div>
            <div className="signup-container">
                <h3>Sigup HERE</h3>
                <InputField 
                label="Enter First Name"
                name="firstname"
                error={"this field is required"}
                />
                <InputField label="Enter Last Name"
                name="lastname"/>

            </div>
        </div>
    }
}

export default Signup