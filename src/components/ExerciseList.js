import React, { useState, useEffect } from "react";

export default function ExerciseList() {
    const [hasError, setErrors] = useState(true)
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const res = await fetch('http://localhost:5000/exercise');
            res
                .json()
                .then(res => {
                    console.log(res)
                    setExercise(res)
                })
                .catch(err => setErrors(err))

    }
    fetchDate();
},[])

// const exerciseList=(<div></div>);
console.log(exercise)



const exerciseList = exercise.map( el => (
    <li>{el["description"]}</li>
))


return(<div>{exerciseList}</div>)
    
}