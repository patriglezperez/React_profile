import React from 'react';
import { Info } from '../info/info';


export class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { user: this.props.basicInfo, information1: this.props.information1, information2: this.props.information2, information3: this.props.information3 }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        this.setState(() => { this.state.information1.elements[0].value = value })
    }
    render() {

        return <div className="container-profile " >

            <img className="background-top" src={this.props.user.background} alt='background image' />

            <div className="container-my-info">
                <a href="/"></a>
                <img className="pic-profile" src={this.props.user.source} alt="picture" />
                <p className='fullname'>{this.props.user.fullname}</p>
                <p className='username'>{this.props.user.user}</p>
            </div>
            <div className='page-distribution'>
                <div className='distribution-left' >
                    <Info title={this.state.information1.title} data={this.state.information1.elements} onChange={this.handleChange} />
                    <Info title={this.state.information3.title} data={this.state.information3.elements} />
                </div>
                <div className='distribution-right'>
                    <Info title={this.state.information2.title} data={this.state.information2.elements} />
                </div>
            </div>
        </div>
    }
}
