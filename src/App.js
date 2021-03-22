import React, { Component } from 'react';
import './App.css';
import Customer from './component/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '961111',
    gender: '남자',
    job: '기획자',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이순신',
    birthday: '960315',
    gender: '남자',
    job: '프로그래머',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '고길동',
    birthday: '960806',
    gender: '남자',
    job: '디자이너',
  },
];

class App extends Component {
  render() {
    return (
      <>
        {customers.map((customer) => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          );
        })}
      </>
    );
  }
}

export default App;
