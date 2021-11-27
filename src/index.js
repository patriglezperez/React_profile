import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


// import img from '../assets/icons.svg';
let basicInfo = { fullname: 'Cathy Chu', user: 'cchu01', source: 'https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg', email: 'cchu@myschool.edu', id: 'Add Student ID', password: 'Change password', background: 'https://static.vecteezy.com/system/resources/previews/001/888/309/non_2x/light-green-yellow-modern-blurred-backdrop-vector.jpg' }

let systemSetting = { language: 'English (United States)', privacy: 'Only adminitrators and other instructors can view my profile information', notifications: ['Stream notifications', 'Email notifications', 'Push notifications'] }

let additionalInfo = { gender: 'Add gender' }

let information1 = {
  title: "Basic Information",
  elements: [
    { id: 1, textname: "Full Name", value: basicInfo.fullname, isEditable: true },
    { id: 2, textname: "Email Adress", value: basicInfo.email },
    { id: 3, textname: "Student ID", value: basicInfo.id },
    { id: 4, textname: "Password", value: basicInfo.password },
  ]
}

let information2 = {
  title: "System Settings",
  elements: [
    { id: 1, textname: "Language", value: systemSetting.language },
    { id: 2, textname: "Privacy Settings", value: systemSetting.privacy },
    { id: 3, textname: "Global Notifications Settings", value: systemSetting.notifications },
  ]
}

let information3 = {
  title: "Aditional information",
  elements: [{ id: 1, textname: "Gender", value: additionalInfo.gender }]
}


class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.basicInfo }

  }
  render() {
    return <div>
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

class Item extends React.Component {
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
    if (Array.isArray(this.props.value)) {
      return <>
        <div className='item_array'>
          <p className="text" >{this.props.textname}</p>
          <div className='div_array'>
            {this.props.value.map(element => { return <p key={element.id} className="array">{element}</p> })}

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
              <input type='text' onChange={this.handleChange} />
            }
            {this.state.isEditable ? <img src='./assets/icons.svg' alt="edit" className='edit' onClick={this.handleClick} /> : null}
          </div>

        </div>
      </>
      // }
    }
  }
}
class Info extends React.Component {
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

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: this.props.basicInfo, information1: this.props.information1, information2: this.props.information2, information3: this.props.information3 }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value) {
    this.setState(() => { this.state.information1.elements[0].value = value })
  }
  render() {

    return <div className="container-profile">

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

function Html() {
  return (
    <div className='background'>
      <div>
        <Profile user={basicInfo} information1={information1} information2={information2} information3={information3} />
      </div>
    </div>
  )
}

ReactDOM.render(<Html />, document.getElementById('root'))