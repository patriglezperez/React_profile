import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from './component/profile/profile';
import { User } from './component/user/user';
import './assets/css/style.css';


// import img from '../assets/icons.svg';
let basicInfo = { fullname: 'Cathy Chu', user: 'cchu01', source: 'https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg', email: 'cchu@myschool.edu', id: 'Add Student ID', password: 'Change password', background: 'https://static.vecteezy.com/system/resources/previews/001/888/309/non_2x/light-green-yellow-modern-blurred-backdrop-vector.jpg', telephone: '665487159', devicesUsed: 'Devices User - Mobile', location: 'Location - San Francisco, USA', facebook: 'Facebook Profile', totalAmount: 'Total Amount Spent $ 2,314' }

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



class Html extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: props.visible }
    this.display = this.display.bind(this)
  }

  display() {
    this.setState(() => ({ visible: false }))
  }
  render() {

    return <div className='background'>
      <div >
        {this.state.visible ?
          <div onClick={this.display}> < User user={basicInfo} /></div> : <Profile user={basicInfo} information1={information1} information2={information2} information3={information3} />
        }






      </div>
    </div >
  }


}

ReactDOM.render(<Html visible={true} />, document.getElementById('root'))