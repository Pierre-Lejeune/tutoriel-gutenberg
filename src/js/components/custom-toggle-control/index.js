import { Component } from "@wordpress/element";

class CustomToggleControl extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked || false
        }
    }

    handleChange = () => {
        this.setState({checked: !this.state.checked});
        this.props.onChange(this.state.checked);
    }

    render(){
        const { label } = this.props;
        const { checked } = this.state;

        return (
            <div className="component-tutoriel-gutenberg-custom-toggle-control">
                {label && 
                    <label className="component-tutoriel-gutenberg-custom-toggle-control__label">{label}</label>
                }
                <span onClick={this.handleChange} className={`component-tutoriel-gutenberg-custom-toggle-control__toggle${checked ? " active" : ""}`}/>
                {checked && 
                    <span>Yes</span>
                }
                {!checked && 
                    <span>No</span>
                }
            </div>
        )
    }
}

export default CustomToggleControl;