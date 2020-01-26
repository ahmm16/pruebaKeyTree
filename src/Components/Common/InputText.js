import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.props.onChange(this.props.name, e.target.value);
    }

    render() {
        const { name, label, value, disabled } = this.props;
        return (
            <React.Fragment>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id={name}
                    label={label}
                    name={name}
                    autoComplete={value}
                    autoFocus
                    value={value}
                    disabled={disabled}
                    onChange={this.onChange}
                    error={value ? false : true}
                    helperText={value ? '' : "No puede estar vacío"}
                />
                </React.Fragment>
        );
    }
}

export default InputText;