import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { translate, Trans } from "react-i18next";
import i18next from 'i18next'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>{i18next.t('Welcome to React')}</h1>
      </div>
    );
  }
}

export default (App);