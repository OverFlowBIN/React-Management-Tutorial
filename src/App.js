import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles} from '@material-ui/core/styles';


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


function App(props) {
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
        { customers.map(el => { return <Customer key={el.id} id={el.id} image={el.image} name={el.name} birthday={el.birthday} gender={el.gender} job={el.job} /> }) }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
