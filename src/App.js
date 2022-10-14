import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('names');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [names, setnames]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [phone, setNumber]=useState('');
  

  // form submit event
  const handlePerson=(e)=>{
    e.preventDefault();
    // creating an object
    let person={
      name,
      phone
      
    }
    setnames([...names,person]);
    setNumber('');
    
  }

  // delete book from LS
  const deleteName=(name)=>{
    const filteredNames=names.filter((element,index)=>{
      return element.name !== name
    })
    setnames(filteredNames);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('names',JSON.stringify(names));
  },[names])

  return (
    <div className='wrapper'>
      <h1>Phone Book</h1>
      <hr></hr>
      
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handlePerson}>
            <label >Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Phone Number</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setNumber(e.target.value)} value={phone}></input>
            <br></br>
            
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {names.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <View names={names} deleteName={deleteName}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setnames([])}>Remove All</button>
          </>}
          {names.length < 1 && <div>No contact added</div>}
        </div>

      </div>
    </div>
  )
}

export default App
