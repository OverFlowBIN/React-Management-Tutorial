// REST API 서버와 클라이언트가 웹 프로토콜을 기반으로 효과적으로 데이터를 주고 받을 수 있게 해준다
// 기존의 서버 모듈에 전체 고객목록을 불러오는 API을 구현해보기

// React에서는 비동기 통신을 이용하여 서버에 접근하여 데이터를 갖고온다.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5555;

app.use(bodyParser.json());
// json형태로 클라이언트한테 자료를 보낸다.
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


