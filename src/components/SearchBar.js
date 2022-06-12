import React, { useState} from "react";

const SearchBar =({onTermFetch})=>{
  const [term, setTerm] = useState("");


  const onInputSubmit =(e) =>{
    e.preventDefault();
     onTermFetch(term);
  }

  return ( 
  <div className="container"> 
  
  <div className="card m-5">
    <div className="card-body">
    <label class="card-title">Search Video</label>
      <div className="input-group">
      <input value={term} type="search" className="form-control"  onChange={(e)=> setTerm(e.target.value)}/>
      <input onClick={onInputSubmit} className="btn btn-success" type="submit" value="Search"/>
      </div>
    </div>
  </div> 
</div>
  )
}

// class SearchBar extends React.Component{

  // state = {term: ""};

  // inputHandler = (e) => {
  //   // e.preventDefault();
  //   this.setState({term: e.target.value});
  // }

  // onInputSubmit =() =>{
  //    this.props.onTermFetch(this.state.term);
  // }

//    render(){
//        return <div className="container"> 
//                 <div className="card m-5">
//                   <div className="card-body">
//                     <div className="input-group">
//                     <input value={this.state.term} type="search" className="form-control"  onChange={inputHandler}/>
//                     <input onClick={this.onInputSubmit} className="btn btn-success" type="submit" value="Search"/>
//                     </div>
//                   </div>
//                 </div> 
//               </div>
//    }
// }

export default SearchBar