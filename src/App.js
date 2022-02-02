import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com//64/64/1',
    'name': '김영빈',
    'birthday': '940312',
    'gender': '남자',
    'job': '초등학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com//64/64/2',
    'name': '박윤정',
    'birthday': '950502',
    'gender': '여자',
    'job': '중학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com//64/64/3',
    'name': '이현걸',
    'birthday': '970607',
    'gender': '남자',
    'job': '고등학생'
  },
  {
    'id': 4,
    'image': 'https://placeimg.com//64/64/4',
    'name': '지영서',
    'birthday': '990218',
    'gender': '여자',
    'job': '대학생'
  }
]


function App() {
  return (
    <div>
      { customers.map(el => { return <Customer key={el.id} id={el.id} image={el.image} name={el.name} birthday={el.birthday} job={el.job} /> }) }
    </div>
  );
}

export default App;
