import React from 'react';
import img from '../../assets/img/icons.svg'


export class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id: props.id, textname: props.textname, value: props.value, noIsEditable: true, isEditable: props.isEditable }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.setState(state => ({ noIsEditable: !state.noIsEditable }))

    }
    handleChange(event) {
        this.setState(() => ({ value: event.target.value }));
        this.props.onChange(event.target.value);

    }
    render() {
        let i = 0
        if (Array.isArray(this.props.value)) {
            return <>
                <div className='item_array'>
                    <p className="text" >{this.props.textname}</p>
                    <div className='div_array'>
                        {this.props.value.map(element => { return <p key={i++} className="array">{element}</p> })}

                    </div>
                </div>
            </>
        } else {
            return <>
                <div className='item'>
                    <p className="text" >{this.state.textname}</p>
                    <div>
                        {this.state.noIsEditable ?
                            <p className="value">{this.state.value}</p>
                            :
                            <input className="value" type='text' onChange={this.handleChange} />
                        }
                        {this.state.isEditable ? <img src={img} alt="edit" className='edit' onClick={this.handleClick} /> : null}
                    </div>

                </div>
            </>
            // }
        }
    }
}