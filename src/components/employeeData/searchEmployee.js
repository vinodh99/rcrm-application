import React, { Component } from 'react';
import EmployeeData from '../../api/api';
import {searchedEmployeeAction} from '../../actions/employeeActions';
import {connect} from 'react-redux';
// import employeeSearch from '../../reducers/employeeSearch';
class SearchEmployee extends Component {

    // constructor(props){
    //     super(props);

    //     }
    
    componentDidMount(){
      this.props.dispatch(searchedEmployeeAction('df'))
      // EmployeeData().then(data =>{
      //   console.log(data);
      // })
    }




  render() {
    console.log(this.props.searchedEmployee, 'searched employee_employees')

    return (  
            <div> <h1> I still need to be edited  {this.props.searchedEmployee}</h1></div>
    );
  }
}
SearchEmployee.propTypes = {
  // Define your PropTypes here
  };
const mapStateToProps = ({ employees,searchedEmployee }) => ({
  // employees: employees[0],
  searchedEmployee: searchedEmployee,

});



export default connect(mapStateToProps)(SearchEmployee);
