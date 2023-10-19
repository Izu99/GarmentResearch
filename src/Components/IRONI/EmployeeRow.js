import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('https://garmnetresearch.onrender.com/notes/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Employee Successfully Deleted....")
        window.location.replace('/traineereport');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.candidate}
               </td>
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.age}
               </td>
               <td>
                   {this.props.obj.joinDate}
               </td>
               <td>
                   {this.props.obj.rate}
               </td>
             
               <td>
                   
              
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
                   <button><Link to={"/imageupload"}>Defect</Link></button>
               </td>
           </tr>
        );
    }
}

export default TableRow;