import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
  state={
    value:'',
    tocon:[],
  }
handlechange=(e)=>{
  this.setState({ value: e.target.value })
  console.log(e.target.value)
}
submitButton=()=>{
let tocons=[]  
let {value}=this.state;
let tocons1 = value.split('\n').join('');
console.log(value.split('\n'))
let t1= tocons1.split(' ').join('')
// this.setState({tocons})

console.log(t1.match(/function/g))
if(t1.match(/function/g)){
  console.log('function')
  let obj = {
    key:t1.match(/function/g)[0],
    value:'function'
  }
  tocons.push(obj)
}if(t1.match(/int/g)){
  let obj = {
    key:t1.match(/int/g)[0],
    value:'data type'
  }
  tocons.push(obj)
}
 if(t1.match(/float/g)){
  let obj = {
    key:t1.match(/float/g)[0],
    value:'data type'
  }
  tocons.push(obj)
}
 if(t1.match(/,/g)){
  let obj = {
    key:t1.match(/,/g)[0],
    value:'seperator'
  }
  tocons.push(obj)
}
if(t1.match(/;/g)){
  let obj = {
    key:t1.match(/;/g)[0],
    value:'seperator'
  }
  tocons.push(obj)
}
if(t1.match(/[a-zA-z]/g )){
  console.log(t1.match(/[a-zA-z]/g ))
  let obj = {
    key:t1.match(/[a-zA-z]/g )[0],
    value:'identifier'
  }
  tocons.push(obj)
}
if(t1.match(/[0-9]/g)){
  let obj = {
    key:t1.match(/[0-9]/g )[0],
    value:'number'
  } 
  tocons.push(obj)
}
if(t1.match(/=/g)){
  let obj = {
    key:t1.match(/[=]/g )[0],
    value:'comparator'
  } 
  tocons.push(obj) 
}
if(t1.match(/{/g)){
  let obj = {
    key:t1.match(/{/g )[0],
    value:'body start'
  } 
  tocons.push(obj)
}
if(t1.match(/}/g)){
  let obj = {
    key:t1.match(/}/g )[0],
    value:'body end'
  } 
  tocons.push(obj) 
}
if(t1.match(/[!$%^&()_|~`\[\]:"'<>?.\/]/g)){
  let obj = {
    key:t1.match(/[!$%^&()_|~`\[\]:"'<>?.\/]/g)[0],
    value:'symbols'
  } 
  tocons.push(obj) 
}
if(t1.match(/for/g)){
  let obj = {
    key:t1.match(/for/g)[0],
    value:'loop'
  } 
  tocons.push(obj) 
}
if(t1.match(/[+]/g)){
  let obj = {
    key:t1.match(/[+]/g)[0],
    value:'operator'
  } 
  tocons.push(obj) 
}
if(t1.match(/[-]/g)){
  let obj = {
    key:t1.match(/[-]/g)[0],
    value:'operator'
  } 
  tocons.push(obj) 
}
if(t1.match(/[*]/g)){
  let obj = {
    key:t1.match(/[*]/g)[0],
    value:'operator'
  } 
  tocons.push(obj) 
}
console.log(tocons)
this.setState({tocon:tocons})

}
render(){
  console.log(this.state.tocon)
  return (
  <div style={{margin:'0px',padding:'0px',backgroundColor:'#f2e6ff',minHeight:'100vh',maxHeight:'100vh'}}>
      <h1 style={{textAlign:'center',color:'white',backgroundColor:'#8e3deb',padding:'10px',marginTop:'0px'}}>lexical analyzer</h1>
      <div  style={{display:'flex'}}>
        <div style={{margin:'50px'}} >
          <h3>Write your code</h3>
        <Button onClick={this.submitButton} style={{color:'red'}} >compile</Button>
          <TextField
            style={{display:'block',minHeight:'50vh', maxHeight:'50vh',width:'50vh' , overflow:'scroll' }}
            id="standard"
            multiline
            value={this.state.value}
            onChange={this.handlechange}
            
          />

      </div>
      <div style={{margin:'50px', maxHeight:'80vh', overflow:'scroll'}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Charactor</TableCell>
            <TableCell align="right">Tocons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.tocon.map((row,id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>
  </div>
  );
}
}

export default App;
