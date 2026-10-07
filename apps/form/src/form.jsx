import {useState} from "react";
import {jsPDF} from "jspdf";

function Form() {

    const initialForm = [{
        name: "",
        email: "",
        age: 0,
        msg: "",
        isStudent: false,
    }];
    const [form, setForm] = useState(initialForm);

    // const year = new Date().getFullYear();
    // console.log(year)

    const handleChange = (e) => {
        const {name, value} = e.target; // AI

        setForm({                       // transform into a callback handler function ??
            ...form,
            [name] : name === "age" ? Number(value) : value, // AI
            // [name] : name === "isStudent" ? value === "true" ? !!value : !value : !value, // use direct handler instead "onChange={()=>setForm({...form, isStudent: false})}"
            [e.target.name]: e.target.value,
        });
    };


    const handleReset = () => {
        // window.location.reload();
        // setForm((prevState, setForm())_ => {(prev)}); // make callback function to reset form
        setForm(initialForm);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit")

        const pdf = new jsPDF();

        pdf.setFontSize(20);
        pdf.text("Form Submission", 20, 20);

        pdf.setFontSize(12);
        pdf.text(`Name: ${form.name}`, 20, 40);
        pdf.text(`Email: ${form.email}`, 20, 50);
        pdf.text(`Student: ${form.isStudent ? "yes" : "no"}`, 20, 60, );
        pdf.text(`Message: ${form.msg}`, 20, 80);

        // Split long text  into multiple lines

        const lines = pdf.splitTextToSize(form.msg, 170);
        pdf.text(lines, 20, 90);

        pdf.save(`${form.name + "-submission"}.pdf`);
    }

    return (
        <div>
            <form
                id="form"
                // action="dataForm"
                // target="_blank"
                // method="get"
                onSubmit={handleSubmit}
            >
                <label>Enter your Name: </label>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={
                        handleChange
                        // (e) => {setName(e.target.value)}
                    } required/>

                <p>Name: {form.name}</p>
                <br/>

                <label>Enter your Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange} required/>
                <p>Email: {form.email}</p>
                <br/>

                <label>Age :</label>
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={
                        // (e) => {setAge(year - Number(e.target.value.substring(0,4)));}
                        handleChange
                    } required/>
                <p>Age: {form.age}</p>
                <br/>


                <p>Student: </p>
                <input
                    value="true"
                    name="isStudent"
                    type="radio"
                onChange={
                    ()=>setForm({...form, isStudent: true})
// handleChange
                    // e.target.isStudent = true // Modifying a variable defined outside a component or hook is not allowed. Consider using an effect.
                    // handleChange.setForm(isStudent = true)
                    // (e) => {console.log(e.target.value = true)}
                            // console.log(e.target.value ? true : false);
                            // !!e.target.value;
                            // e.target.value ? true : false;;
                    // (e) => {
                    //     handleChange({
                    //         target: {
                    //             [e.target.isStudent] : !!e.target.value,
                    //         }
                    //     })}
                }
                />
                <span>Yes</span>
                <input 
                    value="false"
                    name="isStudent" 
                    type="radio"
                    onChange={
                        ()=>setForm({...form, isStudent: false})
                // handleChange
                }/>
                <span>No</span>
                <p>Student : {
                    form.isStudent ? "Yes" : "No"
                }</p>
                <br/>
                <textarea
                    // form="form"
                    name="msg"
                    placeholder="Your comments"
                    value={form.msg}
                    onChange={
                        // (e) => setMsg(e.target.value)
                        handleChange
                    }>
                </textarea>
                <p>Comment: ${form.msg}</p>
                <br/>
                <input type="submit"/>
                Submit & Generate PDF
                <br/>
                <input type="reset" onClick={handleReset}/>

            </form>
        </div>
    );
}

export default Form;