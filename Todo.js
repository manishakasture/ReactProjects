import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
export default function Todo ( props) {
    
    return(
        <div>
            <div className="alert alert-info " >

                {props.data}
            </div>
        </div>
    )
} 