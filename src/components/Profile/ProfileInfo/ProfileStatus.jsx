import React from 'react';
import classes from './ProfileInfo.module.css';
import preloader from '../../../assets/images/preloader.svg'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    } 

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    } 

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value

        });
    }

    componentDidUpdate(prevProps, prevState){
            if(prevProps.status !== this.props.status){
                    this.setState({
                        status: this.props.status
                    })
            }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick = { this.activateEditMode } >{this.props.status || 'No Status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea onChange = {this.onStatusChange} autoFocus = {true} onBlur = {this.deActivateEditMode.bind(this)} 
                              value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;