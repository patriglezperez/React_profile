import React from 'react';
import { Item } from "../item/item";


export class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: props.data }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(value) {
        this.setState(() => { this.state.data[0].value = value })
        this.props.onChange(value)
    }

    render() {

        return <div className='section'>
            <p className='title-section'>{this.props.title}</p>
            {this.state.data.map(element => {

                return <Item key={element.id} id={element.id} textname={element.textname} value={element.value} isEditable={element.isEditable} onChange={this.handleChange} />

            })}
        </div>
    }
}