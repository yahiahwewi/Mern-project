import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
	const[todos,setTodos]=useState([]);
	const [popupActive, setPopupActive]=useState(false);
	const[newTodo,setNewTodo]=useState("");


	return (
<div className="App">
<h1>Welcome , Yahya</h1>
<h4>Your tasks :</h4>
<div className='todos'> 
	<div className='todo'> 
		<div className='checkbox'>  </div>
		<div className='text'>Get the bread</div>
		<div className="delete-todo"></div>

</div>
		
	<div className='todo'> 
		<div className='checkbox'>  </div>
		<div className='text'>Get the Milk</div>
		<div className="delete-todo"></div>


</div>
</div>
</div>


	);
}

export default App;
