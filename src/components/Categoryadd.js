import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getHotelCategoryList, SavehotelCategory, deleteCategory} from '../actions/hotelactions';
class Categoryadd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      HCode: "",
      CCode: "",
      hotelMasterId: 0
    };
  }
  
  componentWillMount() {
    this.props.getHotelCategoryList(this.props.hotelid);
  }
  
  updateCategory(e){
    this.setState({CCode:e.target.value});
  }
  addtoCategory(){
    this.setState({HCode:this.props.hotelid,hotelMasterId:this.props.hotelid},()=>{
      if (this.state.CCode!="") {
        this.props.SavehotelCategory(this.state,this.props.hotelid);
      }
      else{
        alert('Select Category First!');
      }
    });
  } 
  
  render() {
    let self = this;
    return (
        <div>
          <div className="input-group">
      <select className="form-control" onChange={this.updateCategory.bind(this)}>
              <option>Select Category</option>
              {this.props.categories.map((item)=>{
              return <option key={item.id} value={item.CName} >{item.CName}</option>
            })}
            </select>  
      <span className="input-group-btn">
         <button className="btn btn-default" onClick={this.addtoCategory.bind(this)}>Save</button>
      </span>
    </div>
       <hr/>
            <table className="table table-stripped" style={{'width':'50%'}}>
            <thead>              
              <th>Category</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {this.props.hotelbycategory.map((item,i)=>{
                  return <tr key={i}><td>{item.CCode}</td>
                  <td><a href="" onClick={(e)=>{
                    e.preventDefault();
                    self.props.deleteCategory(self.props.hotelid,item.id);
                  }}><span className="glyphicon glyphicon-trash"></span></a></td></tr>
              })}              
            </tbody>
            </table>
        </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
hotelbycategory : state.hotelsall.hotelbycategory
})

function  mapDispatchToProps(dispatch){
  return {
getHotelCategoryList(id){
  dispatch(getHotelCategoryList(id));
},
SavehotelCategory(send_data,id){
dispatch(SavehotelCategory(send_data, id));
},
deleteCategory(HCode,fk){
  dispatch(deleteCategory(HCode,fk));
}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categoryadd)

