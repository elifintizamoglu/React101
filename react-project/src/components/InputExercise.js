import { useState } from 'react';


function InputExercise() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [form, setForm] = useState({a:"", b:""});


    const onChangeSurname = (event) => {
        setSurname(event.target.value);
    }

    const onChangeInput = (e) => {
        console.log(e.target.name);

        setForm({...form, [e.target.name]:e.target.value});
    }

    return (
        <div>
            Name: <br />
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            Surname: <br />
            <input value={surname} onChange={onChangeSurname} />
            <br />
            A:
            <input name="a" value={form.a} onChange={onChangeInput} />
            <br />
            B:
            <input name="b" value={form.b} onChange={onChangeInput} />
            <br />
            <br />
            {name} {surname}
            <br />
            {form.a} {form.b}
        </div>
    )
}

export default InputExercise;
