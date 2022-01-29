import React, {ChangeEvent, PureComponent} from 'react';

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends PureComponent<PropsType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  setEditMode = () => {
    this.setState({editMode: true})
  }
  setRunMode () {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  }
  onStatusChange=(e:ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div><span onDoubleClick={this.setEditMode}>status:{this.props.status}</span></div>
        }
        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              type="text"
              onBlur={this.setRunMode.bind(this)}
              autoFocus={true}
            value={this.state.status}/>
          </div>
        }
      </div>
    );
  }
}
