import './App.css';
import Customer from './components/Customer';

const customer = {
  'id': 1,
  'image': 'https://placeimg.com//64/64/any',
  'name': '김영빈',
  'birthday': '961212',
  'gender': '남자',
  'job': '학생'
}


function App() {
  return (
    <Customer 
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
