import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles} from '@material-ui/core/styles';
import { useEffect, useState } from "react";


// 실제로 api서버에 데이터(고객정보) 접근하기
// react클라이언트 프로그램에서 웹서비스가 동작하고 나서 서버에 접근해서 데이터 불러오기
// -> 고객정보는 처음에 비어있다가 나중에 재구성된다.



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table :{
    minWidth: 1000
  }
})



function App(props) {

  const [customers, setCustomers] = useState('');


  // 에러핸들링 추가해줘야한다!!!! -> 아직 안함..
  useEffect(() => {
    async function fetchAndUser() {
      const response = await fetch('/api/customers');
      const body = await response.json();
      setCustomers(body);
    }
    fetchAndUser();    
  })

  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { customers ? 
        customers.map(el => { return <Customer key={el.id} id={el.id} image={el.image} name={el.name} birthday={el.birthday} gender={el.gender} job={el.job} /> }) 
        : null }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
