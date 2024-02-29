import React, { useEffect, useState }from "react";
import './Main.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Todo from './Todo'

export default function Main() {

    const [items, setItems] = useState([])
    const [item, setItem] = useState()

    const addItem = (item1) => {
        if(item1 != null) {
            const newItems = [...items, item1]
            setItems(newItems)
            localStorage.setItem( 'todolist', JSON.stringify( newItems))
    
        }
        
    }

    useEffect(()=>{
        let savedTodo =JSON.parse( localStorage.getItem('todolist')) 
        if(savedTodo) {
            setItems(savedTodo)
        }
    }, [setItems]) 

    const deleteItem = (index) => {
        let reducedTodo = items.filter((item1, i)=>i!=index)
        
        localStorage.setItem('todolist', JSON.stringify( reducedTodo))
        setItems( reducedTodo)
        
    }
    return(

        <div>
            <h1 className="mainHeading"> What is in calender for today?</h1>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                className = 'inputMain'
            >
                <TextField fullWidth label="Add your Items" id="fullWidth" onChange={(e)=> {setItem(e.target.value)}} />
            </Box>
            <Button variant="contained" style={{'postion':'absolute', 'margin-top':'20%'}} onClick = {() =>{ addItem(item)}}>Add </Button><br></br>
            <div className="list">
                { items.map( (item, index) => {
                    return(
                        <div className="list-todo-items" key={index}>
                            <div>
                                <Todo data={item}/>
                            </div>
                            <div className="deleteBtn">
                                 <Button variant="contained"  onClick = {() =>{ deleteItem(index)}}>Delete </Button>
                            </div>
                        </div>
                    )
                    
                }
                
                )}
            </div>
    </div>
            
    )
}