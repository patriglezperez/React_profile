import React from 'react';

export class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.props.user }

    }
    render() {
        // function hide() {
        //     const container = document.querySelector('.container');
        //     const profile = document.querySelector('.container-profile');

        //     container.classList.add('display');
        //     profile.classList.remove('display');
        // }
        //test
        return <div className='container' >
            <div className='top' >
                <div className='blue'>
                    <div className='margin'>
                        <img className='image' src={this.state.source} />
                    </div>
                    <div className='data'>
                        <p className='name'>{this.state.fullname}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.telephone}</p>
                    </div>
                </div>
            </div>
            <div className='white' >
                <ul className='bottom'>
                    <div className='styleLi'>
                        <li className='purple'>{this.state.devicesUsed}</li>
                    </div>
                    <div className='styleLi'>
                        <li className='red'>{this.state.location}</li>
                    </div>
                    <div className='styleLi'>
                        <li className='lightblue'>{this.state.facebook}</li>
                    </div>
                </ul>
                <div className='amount'>
                    <p>{this.state.totalAmount}</p>
                </div>
            </div>
        </div>
    }
}