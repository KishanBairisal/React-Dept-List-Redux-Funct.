import data from '../data';

const INITIAL_STATE = {
  data,
  deptId: null,
  // selectDept: null
}

const dept = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case "SELECT_DEPT":
      return {
        ...state,
        deptId: action.payload,
        // selectDept: state.data.find((value) => value.deptId === action.payload)
      };

    case "ADD_DEPT":
      const updatedDept = {
        deptId: action.addDeptPayload.deptId,
        deptName: action.addDeptPayload.deptName,
        deptDetails: {
          deptManager: action.addDeptPayload.deptManager,
          noOfEmp: 0,
          empDetails: []
        }
      };
      return {
        ...state,
        data: [...state.data, updatedDept]
      };

    case "ADD_EMP":
      const index = state.data.findIndex((value) => value.deptId === state.deptId);
      const updatedDeptDetails = {
        deptId: state.deptId,
        deptName: state.data[index].deptName,
        deptDetails: {
          deptManager: state.data[index].deptDetails.deptManager,
          noOfEmp: state.data[index].deptDetails.noOfEmp + 1,
          empDetails: [...state.data[index].deptDetails.empDetails, action.addEmpPayload]
        }
      };
      return {
        ...state,
        data: [...state.data.fill(updatedDeptDetails, index, (index + 1))]
      };

    case "DELETE_EMP":
      const indexDelete = state.data.findIndex((value) => value.deptId === state.deptId);
      const deleteUpdatedDeptDetails = {
        deptId: state.deptId,
        deptName: state.data[indexDelete].deptName,
        deptDetails: {
          deptManager: state.data[indexDelete].deptDetails.deptManager,
          noOfEmp: state.data[indexDelete].deptDetails.noOfEmp - 1,
          empDetails: state.data[indexDelete].deptDetails.empDetails.filter((item, key) => key !== action.deleteEmpPayload)
        }
      };
      return {
        ...state,
        data: [...state.data.fill(deleteUpdatedDeptDetails, indexDelete, (indexDelete + 1))]
      };

    case "EDIT_EMP":
      const indexEdit = state.data.findIndex((value) => value.deptId === state.deptId);
      const editUpdatedDeptDetails = {
        deptId: state.deptId,
        deptName: state.data[indexEdit].deptName,
        deptDetails: {
          deptManager: state.data[indexEdit].deptDetails.deptManager,
          noOfEmp: state.data[indexEdit].deptDetails.noOfEmp,
          empDetails: state.data[indexEdit].deptDetails.empDetails.splice(action.editEmpPayload.editIndex, 1, action.editEmpPayload.empEditData)
        }
      };
      return {
        ...state,
        data: [...state.data.fill(editUpdatedDeptDetails, indexEdit, (indexEdit))]
      }

    default: return state;
  }
}

export default dept;