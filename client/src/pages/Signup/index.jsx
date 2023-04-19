import { Component } from "react";
import './style.css';
import InputField from "../../components/InputField";
import ButtonSelect from "../../components/BuutonSelect";
class INITIAL_VALUE {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.middlename = "";
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
                <input value={this.state.student.middlename} onChange={(event) => {
                    this.setState({
                        student : {...this.state.student,middlename : event.target.value}
                    })
                    console.log(this.state.student.middlename)
                }}/>
                <InputField 
                label="Enter First Name"
                name="firstname"
                error={""}
                />
                {console.log(this.state)}
                <InputField
                value={this.state.student.lastname}
                onChange={({target : {value,name}}) => this.setState({
                    student : {...this.state.student,[name] : value}
                })}
                 varitent="shink" label="Enter Last Name"
                name="lastname"/>
                <InputField
                value={this.state.student.email}
                onChange={({target : {value,name}}) => this.setState({
                    student : {...this.state.student,[name] : value}
                })}
                 varitent="shink" label="Enter your email"
                name="email"/>
                <ButtonSelect
                selectedValue={this.state.student.gender}
                 options={["Male","Female","Transgender"]} onSelectOption={(value) => this.setState({ student : {...this.state.student,gender : value }})}/>
                 <ButtonSelect
                selectedValue={this.state.student.gender}
                 options={[1,2,3,4,5,7,8,9,0,2,3,5,5,7]} onSelectOption={(value) => this.setState({ student : {...this.state.student,gender : value }})}/>
            </div>
        </div>
    }
}

export default Signup