import React , {useState} from "react";



function App() {
  let [form,setForm] = useState({
    Name: '',
    Lastname: '',
    Phone: '',
    Email: '',
    Password: '12345',
    ConfirmPassword: '12345'
  })
  
  console.log(form.Password)
  
  function handleChange (e) {
    const {name} = e.target
    setForm (prev => {
      return{
        ...prev,
        [name] : e.target.value
      }
    })
  }

  function truePassword(e) {
    if(form.Password === form.ConfirmPassword) {
      alert('Confirm')
    }else {
      alert('Incorect Password')
    }
  }
  
  return (
    <div className="App">
      <form>
        <div className="block-app">
          <input className="Input1" type='text' name='Name' placeholder='Name' onChange={handleChange}/>
          <input className="Input2" type='text' name='Lastname' placeholder='Lastname' onChange={handleChange}/>
          <input className="Input2" type='text' name='Phone' placeholder='Phone' onChange={handleChange}/>
          <input className="Input2" type='text' name='Email' placeholder='Email' onChange={handleChange}/>
          <input className="Input2" type='text' name='Password' placeholder='Password' onChange={handleChange}/>
          <input className="Input2" type='text' name='ConfirmPassword' placeholder='Confirm Password' onChange={handleChange}/>
        </div>
        <div className="block-app3">
          <input className="Input4" type='checkbox'/>
          <p className="p1">Keep me signed in</p>
        </div>
        <button onClick={truePassword}>Sign Up</button>
        <p className="p2">Already have an account? Sign in</p>
      </form>
    </div>
  );
}

export default App;
