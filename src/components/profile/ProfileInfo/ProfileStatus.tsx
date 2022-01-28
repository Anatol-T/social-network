import React, {PureComponent} from 'react';

export class ProfileStatus extends PureComponent {
  state = {
    editMode: false,
  }
  setEditMode = () => {
    this.setState({editMode: true})
  }
  setRunMode () {
    this.setState({editMode: false})
  }
  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div><span onDoubleClick={this.setEditMode}>Hi</span></div>
        }
        {this.state.editMode &&
          <div>
            <input type="text" onBlur={this.setRunMode.bind(this)} autoFocus={true}/>
          </div>
        }
      </div>
    );
  }
}
