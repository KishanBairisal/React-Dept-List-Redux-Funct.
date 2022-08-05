import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

import './App.css';

import Employee from './components/Employee.js';
import Dept from './components/Dept';

const useStyle = makeStyles({
  root: {
    marginLeft: "50px", marginRight: "50px", width: "1465px", marginTop: "50px", backgroundColor: "skyblue"
  },
  border: {
    border: "2px solid"
  },
  fontStyle: {
    fontFamily: "cursive", textAlign: "center"
  },
  emp: {
    width: "1220px", border: "2px solid"
  },
});

function App() {

  const selectedDeptId = useSelector((state) => state.deptId);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.border}>
        <h4 className={classes.fontStyle}><b>SoftSuave Technologies</b>
        </h4>
      </div>
      <td>
        <Dept />
      </td>
      <td className={classes.emp}>
        {selectedDeptId !== null ? (<Employee />) : null}
      </td>
    </div>
  )
}

export default App;

