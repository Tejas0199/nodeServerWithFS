import { Component } from "react";

class InputField extends Component {
    render() {
        const { label,name,type = "text",error } = this.props;
        return <div className="input-container">
            { label && <label>{label}</label>}
            <input type={type} name={name} />
            {error && <p className="error-tag">{error}</p>}
        </div>
    }
}

export default InputField;