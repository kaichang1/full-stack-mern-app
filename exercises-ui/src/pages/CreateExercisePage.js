import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully created the exercise!");
        } else {
            alert(`Failed to create exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <table id="Add exercise">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter name here"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Enter reps here"
                                value={reps}
                                onChange={e => setReps(e.target.value)} />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Enter weight here"
                                value={weight}
                                onChange={e => setWeight(e.target.value)} />
                        </td>
                        <td>
                            <label for="unit"></label>
                            <select name="unit" id="unit" onChange={e => setUnit(e.target.value)}>
                                <option value="lbs">lbs</option>
                                <option value="kgs">kgs</option>
                            </select>
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter date here"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                onClick={createExercise}
            >Add</button>
        </div>
    );
}

export default CreateExercisePage;
