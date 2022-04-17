import React ,{ useState } from 'react';
import './Todo.css';


export default function TodoList(){

    const [newtask , setNewTask] = useState("");
    const [store , setStore ] = useState([]);
    const [toggle ,setToggle] = useState(true);
    const [isedititem , setIsEditItem] = useState(null);
   

    function createMytoDo(){
        setToggle(true);
        if(!newtask){
            alert("please enter data");
        }else if(newtask && !toggle){
            setStore(
                store.map((newdata)=>{
                    if(newdata.id === isedititem){
                        return { ...newdata , name : newtask}
                    }
                    return newdata ;
                })
                )
                setNewTask("");

        }else{
            const allinputdata = { id: new Date().getTime().toString() , name : newtask}   //dfewe
            setStore([...store , allinputdata]);
            setNewTask("");
        }
    }
    function deleteMytoDo(ind){
       const newStoredata = store.filter((elem) =>{
           return ind !== elem.id ;
       });

       setStore(newStoredata);

    }

    function editMytoDo(dataid){
        setToggle(false)
        const findingValForEdit=()=>{ 
            store.find((newElement) =>{
                return dataid === newElement.id ;
            })
        }
        // setStore(findingValForEdit);
        setIsEditItem(dataid);  
    }

    return(
        <>
        <div className='container' 
        style={{display:"flex" , flexDirection:"column",
        width:"100vw" ,height:"40vh" , margin:"auto"}}>
        <div className="title">
        <h1>Todo List</h1>
        </div>
        
        <header 
        style={{display:"flex" , flexDirection:"column" ,
        width:"80vw" ,height:"60vh"}}>

        
        <textarea id="task"
         rows={2} cols={5} 
         onChange={(e)=>{setNewTask(e.target.value)}}
         value={newtask}>
         </textarea>
         {
             toggle ?
              <button className ="btn" id="btn" 
              onClick={createMytoDo}>
             Create Todos
            </button> :
             <button 
             onClick={createMytoDo}
             className ="btn">
                 Update Todos
             </button>
         }
        

        </header>
        <main>
            
                {
                     store.map((data) =>{
                       return(
                        <div className="list" style={{display:'flex'}} key={data.id}>
                                <h4>{data.name}</h4>   
                                <div className="btn_nav">
                               
                                <button 
                                className="mybtn"
                                style={{width:"6em",height:"2em" }}
                                onClick={()=> editMytoDo(data.id)}>
                                    Edit
                                </button>
                                <button 
                                style={{width:"6em",height:"2em" }}
                                onClick={() => deleteMytoDo(data.id)}>
                                Delete
                                </button>
                                {/* ---- */}
                                </div>        
                        </div>
                       
                       ) 
                     })
                }

        </main>
        </div>


        </>
    )
}