const selectDept = (selectedEmpData) => {
  return {
    type: 'SELECT_DEPT',
    payload: selectedEmpData
  }
}

const addDept = (newDeptData) => {
  return {
    type: 'ADD_DEPT',
    addDeptPayload: newDeptData
  }
}

const addEmp = (newEmpData) => {
  return {
    type: 'ADD_EMP',
    addEmpPayload: newEmpData
  }
}

const deleteEmp= (deleteEmpData) => {
  return{
    type: 'DELETE_EMP',
    deleteEmpPayload:deleteEmpData
  }
}

const editEmp=(editEmpindex)=>{
  return {
    type: 'EDIT_EMP',
    editEmpPayload:editEmpindex
  }
}

export {
  selectDept,
  addDept,
  addEmp,
  deleteEmp,
  editEmp
}