import React from 'react';
import '../App.css';
import logo from '../logo.svg';
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";

import { Button } from 'react-bootstrap';


const MainPage = ({ history }) => {
  return (

    <div className="App">
      <header className="App-header">
        <h1>
        스스로 문진하는 형식의 의료 스몰 데이터 수집 사이트입니다
        </h1>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>

        <Button variant="info" size="lg" onClick={() => {
          history.push('/PatientLogin')
        }}>
          로그인
        </Button>

      </header>
    </div>

  );
}

export default MainPage;
