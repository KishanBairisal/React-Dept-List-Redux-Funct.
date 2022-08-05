import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import moment from "moment";

import { editEmp } from '../action/deptAction';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyButtonForm = styled(Button)({
  background: 'linear-gradient(45deg, blue 30%, green 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '30px',
});


function EditEmpDetails({ index }) {

  const [formShow, setFormShow] = useState(false);
  const [formEmpId, setFormEmpId] = useState("");
  const [formName, setFormName] = useState("");
  const [formDOJ, setFormDOJ] = useState(new Date());

  const dispatch = useDispatch();

  const handleFormOpen = () => {
    setFormShow(true);
  };

  const onChangeId = (event) => {
    setFormEmpId(event.target.value.replace(/[^0-9]/, ''))
  };

  const onChangeName = (event) => {

    setFormName(event.target.value.replace(/[^A-Z a-z]/, ''));
  };

  const onChangeDOJ = (date) => {
    setFormDOJ(date)
  };

  const onAddEmp = (event) => {
    setFormShow(false);
    setFormEmpId("");
    setFormName("");
    setFormDOJ("");
  };


  const handleEmpAddDetail = () => {
    if (formEmpId !== "" && formName !== "" && formDOJ !== "") {
      dispatch(editEmp({ empEditData: { empID: formEmpId, name: formName, doj: moment((formDOJ).toString()).format("DD/MM/YYYY") }, editIndex:index }))
    }
    else
      alert("Please Fill Employee ID & Employee Name");
    onAddEmp();
  };

  return (
    <>
      <Button style={{ marginLeft: "50px", fontFamily: "cursive", color: "white" }} size='small' variant='contained'
        onClick={handleFormOpen}>Edit
      </Button>
      {formShow === true ? (
        <Modal show={formShow} >
          <Modal.Header style={{ backgroundColor: "pink" }}>
            <Modal.Body>
              <form >
                <TextField autoComplete="off" style={{
                  backgroundColor: "white", border: formEmpId === "" ? '2px solid red' : '2px solid green'
                }} size="small" label={"Employee ID: "} type="text" value={formEmpId} onChange={onChangeId} />
                <TextField autoComplete="off" style={{
                  backgroundColor: "white", marginTop: "20px", marginBottom: "10px", border: formName === "" ?
                    '2px solid red' : '2px solid green'
                }} size="small" label={"Employee Name: "}
                  type="text" value={(formName)} onChange={onChangeName} />
                <label>
                  Employee DOJ :
                </label>
                <DatePicker selected={(formDOJ)} onChange={onChangeDOJ} dateFormat="MM/dd/yyyy" />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <MyButtonForm variant='contained' size='small' style={{ marginRight: "10px", fontFamily: "cursive" }}
                onClick={handleEmpAddDetail}>Save Employee
              </MyButtonForm>
              <MyButtonForm variant='contained' size='small' style={{ fontFamily: "cursive" }} onClick={
                onAddEmp
              }>Cancel
              </MyButtonForm>
            </Modal.Footer>
          </Modal.Header>
        </Modal>
      ) : null}
    </>
  )
}
export default EditEmpDetails;

