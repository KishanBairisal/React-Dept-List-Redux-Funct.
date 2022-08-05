import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import TextField from "@mui/material/TextField";


import { addDept } from '../action/deptAction';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, red 30%, green 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const MyButtonForm = styled(Button)({
  background: 'linear-gradient(45deg, blue 30%, green 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '30px',
});


function AddNewDeptForm() {

  const [formShow, setFormShow] = useState(false);
  const [formDeptId, setFormDeptId] = useState("");
  const [formDeptName, setFormDeptName] = useState("");
  const [formDeptManager, setFormDeptManager] = useState("");

  const dispatch = useDispatch();

  const handleFormOpen = () => {
    setFormShow(true);
  };

  const onChangeDeptId = (event) => {
    setFormDeptId(event.target.value.replace(/[^0-9]/, ''))
  };

  const onChangeDeptName = (event) => {
    setFormDeptName(event.target.value.replace(/[^A-Z a-z]/, ''));
  };

  const onChangeDeptManager = (event) => {
    setFormDeptManager(event.target.value.replace(/[^A-Z a-z]/, ''));
  };


  const onAddEmp = (event) => {
    setFormShow(false);
    setFormDeptId("");
    setFormDeptName("");
    setFormDeptManager("");
  };


  const handleEmpAddDetail = () => {
    if (formDeptId !== "" && formDeptName !== "" && setFormDeptManager!=="") {
      dispatch(addDept({ deptId: formDeptId, deptName: formDeptName, deptManager: formDeptManager }))
    }
    else
      alert("Please Fill Dept Details ...");
    onAddEmp();
  };

  return (
    <>
      <MyButton style={{ marginLeft: "50px", fontFamily: "cursive", color: "white", marginTop:"50px", marginBottom:"30px" }} size='small' variant='contained'
        onClick={handleFormOpen}>Add New Employee
      </MyButton>
      {formShow === true ? (
        <Modal show={formShow} >
          <Modal.Header style={{ backgroundColor: "pink" }}>
            <Modal.Body>
              <form >
                <TextField autoComplete="off" style={{
                  marginBottom: "20px",
                  backgroundColor: "white", border: formDeptId === "" ? '2px solid red' : '2px solid green'
                }} size="small" label={"Dept. Id:"} type="text" value={formDeptId} onChange={onChangeDeptId} />

                <TextField autoComplete="off" style={{
                  backgroundColor: "white", border: formDeptName === "" ? '2px solid red' : '2px solid green'
                }} size="small" label={"Dept. Name:"} type="text" value={formDeptName} onChange={onChangeDeptName} />

                <TextField autoComplete="off" style={{
                  backgroundColor: "white", marginTop: "20px", marginBottom: "10px", border: formDeptManager === "" ?
                    '2px solid red' : '2px solid green'
                }} size="small" label={"Dept. Manager: "}
                  type="text" value={(formDeptManager)} onChange={onChangeDeptManager} />

              </form>
            </Modal.Body>
            <Modal.Footer>
              <MyButtonForm variant='contained' size='small' style={{ marginRight: "10px", fontFamily: "cursive" }}
                onClick={handleEmpAddDetail}>Save Dept
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
export default AddNewDeptForm;
