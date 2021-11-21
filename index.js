import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let basicInfo = { fullname: 'Cathy Chu', user: 'cchu01', source: 'https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg', email: 'cchu@myschool.edu', id: 'Add Student ID', password: 'Change password', background: 'https://static.vecteezy.com/system/resources/previews/001/888/309/non_2x/light-green-yellow-modern-blurred-backdrop-vector.jpg' }

let systemSetting = { language: 'English (United States)', privacy: 'Only adminitrators and other instructors can view my profile information', notifications: 'Stream notifications' }

let information1 = {
  title: "Basic Information",
  elements: [
    { textname: "Full Name", value: basicInfo.fullname, isEditable: true },
    { textname: "Email Adress", value: basicInfo.email },
    { textname: "Student ID", value: basicInfo.id },
    { textname: "Password", value: basicInfo.password },
  ]
}

let information2 = {
  title: "System Settings",
  elements: [
    { textname: "Language", value: systemSetting.language },
    { textname: "Privacy Settings", value: systemSetting.privacy },
    { textname: "Global Notifications Settings", value: systemSetting.notifications },
  ]
}

class Item extends React.Component {
  render (){
    return <>
    <div className='item'>
        <p  className="text" >{this.props.textname}</p>
        <p className="value">{this.props.value}</p>
    </div>
    </>
  }
}

class Info extends React.Component {
  render(){
    let newData = this.props.data.map(element => {
    return <Item textname={element.textname} value={element.value}/>
    })

    return <div className='section'>
      <p className='title-section'>{this.props.title}</p>
      {newData}
    </div>
  }
}

class Profile extends React.Component {
    constructor(props){
      super(props)
      this.state= { user:this.props.basicInfo, information1: this.props.information1, information2: this.props.information2 }
    }
    render() {
      
    return <div className="container-profile">

      <img className="background-top" src={this.props.user.background} alt='background image'/>
      
      <div className="container-my-info">
      <a href="/"></a>
      <img className="pic-profile" src={this.props.user.source} alt="picture" />
      <p class='fullname'>{this.props.user.fullname}</p>
      <p class='username'>{this.props.user.user}</p>
      </div> 
      <div className='page-distribution' >
      <Info title={this.state.information1.title} data={this.state.information1.elements} />
      <Info title={this.state.information2.title} data={this.state.information2.elements} />
      </div>
    </div>
    }
  } 

function Html(){
  return (
  <div className='background'>
    <div>
      <Profile user={basicInfo} information1={information1} information2={information2} />
    </div>
  </div>
  )
}

ReactDOM.render(<Html />, document.getElementById('root'))