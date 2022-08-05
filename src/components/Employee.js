import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';


import AddEmpForm from './AddEmpForm';
import './App.css';
import { deleteEmp } from '../action/deptAction';
import EditEmpDetails from './EditEmpDetails';

const useStyle = makeStyles({
  root: {
    textAlign: "left",
    marginLeft: "20px",
    fontFamily: "cursive"
  },
});


function Employee() {

  const data = useSelector((state) => state.data);
  const selectedDeptId = useSelector((state) => state.deptId);
  const selectDeptData = data.find((value) => value.deptId === selectedDeptId);
  const classes = useStyle();

const dispatch= useDispatch();


//   const handleEmpDelete=(event)=>{
// dispatch(deleteEmp(index))
//   }

  return (
    <div>
      <div className={classes.root}>
        <h5 >
          <b>Dept. Details:
          </b>
        </h5>
        <div>Dept. Name:
          <b style={{ marginLeft: "10px" }}>{selectDeptData.deptName}
          </b>
        </div>
        <div>Dept. Manager:
          <b style={{ marginLeft: "10px" }}>{selectDeptData.deptDetails.deptManager}
          </b>
        </div>
        <div > No of Employee:
          <b style={{ marginLeft: "10px" }}>{selectDeptData.deptDetails.noOfEmp}
          </b>
        </div>
        <b>Employee List:
        </b>
        <AddEmpForm />
      </div>
      <table style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px", marginBottom: "20px" }}>

        <td><b>Employee ID</b>
        </td>
        <td><b>Employee Name</b>
        </td>
        <td><b>Employee DOJ</b>
        </td>
        <td><b>Remark</b></td>

        {selectDeptData.deptDetails.empDetails.map((selectedEmpData, index) =>
          <tr key={index}>
            <td style={{ fontStyle: "italic" }} >{selectedEmpData.empID}
            </td>
            <td style={{ fontStyle: "italic" }}>{selectedEmpData.name}
            </td>
            <td style={{ fontStyle: "italic" }}>{selectedEmpData.doj}
            </td>
            <td>
             <EditEmpDetails index={index}/>
              <Button size="small" variant='contained' style={{marginLeft:"20px", backgroundColor:"red", fontFamily: "cursive", color: "white"}} 
              onClick={()=>dispatch(deleteEmp(index))}>Delete</Button>
            </td>
          </tr>
        )}
      </table>
    </div>
  )
}



export default Employee;