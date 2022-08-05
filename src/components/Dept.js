import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import { makeStyles } from '@mui/styles';

import './App.css';
import { selectDept } from '../action/deptAction';
import AddNewDeptForm from './AddNewDeptForm';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, orange 30%, green 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '30px',
});

const useStyle = makeStyles({
  root: {
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "20px",
    fontFamily: "monospace"
  },
  buttonSpace: {
    marginTop: "10px", marginBottom: "10px", width: "150px", fontFamily: "cursive", color: "blue"
  }
});

function Dept() {
  const deptDetailsData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <h5>
        <b>
          Deptartment List:
        </b>
      </h5>
      {deptDetailsData.map((deptDetail, key) =>
        <div key={key}>
          <MyButton style={{ marginTop: "10px", marginBottom: "10px", width: "150px", fontFamily: "cursive", color: "blue" }}
            onClick={() => dispatch(selectDept(deptDetail.deptId))}>
            {deptDetail.deptName}
          </MyButton>
        </div>
      )}
      <AddNewDeptForm/>
    </div>
  )
}
export default Dept;