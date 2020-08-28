import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './componets/Customer';
// 기동시 yarn start쓸것
const customers = [
  {
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '9612222',
  'gender' : '남자',
  'job' : '회사원'
  },
  {
    'id' : 2,
    'image' : 'http://placeimg.com/64/64/1',
    'name' : '겐지충',
    'birthday' : '8812022',
    'gender' : '여자',
    'job' : '회사원'
    },
    {
      'id' : 3,
      'image' : 'http://placeimg.com/64/64/2',
      'name' : '으음동',
      'birthday' : '9612222',
      'gender' : '남자',
      'job' : '학생'
      },
]

class App extends Component{
  render() {
    return (
      <div>
        {
          // 반드시 맵을쓸때는 key를 넣을꺼!! 안넣으면 오류 발생함. 
          customers.map( c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
