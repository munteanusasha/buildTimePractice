import {useState} from "react";
import {jsPDF} from "jspdf";

function Form() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: 0,
        msg: "",
        isStudent: null,
    });

    // const year = new Date().getFullYear();
    // console.log(year)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        window.location.reload();
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit")

        const pdf = new jsPDF();

        pdf.setFontSize(20);
        pdf.text("Form Submission", 20, 20);

        pdf.setFontSize(12);
        pdf.text(`Name: ${form.name}`, 20, 40);
        pdf.text(`Email: ${form.email}`, 20, 50);

        pdf.text(`Message: ${form.msg}`, 20, 70);

        // Split long text  into multiple lines

        const lines = pdf.splitTextToSize(form.msg, 170);
        pdf.text(lines, 20, 80);

        pdf.text(`Student: ${form.isStudent ? "yes" : "no"}`);

        pdf.save(`${form.name + "submission"}.pdf`);
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
                        // (e) => setName(e.target.value)
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
                    name="date"
                    value={form.date}
                    onChange={
                        // (e) => {setAge(year - Number(e.target.value.substring(0,4)));}
                        handleChange
                    } required/>
                <p>Age: {form.age}</p>
                <br/>


                <p>Student: </p>
                <input
                    // value={true}
                    name="isStudent"
                    type="radio"
                onChange={
                        // e.target.isStudent = true // Modifying a variable defined outside a component or hook is not allowed. Consider using an effect.
                    // handleChange.setForm(isStudent = true)
                    // (e) => {console.log(e.target.value = true)}
                            // console.log(e.target.value ? true : false);
                            // !!e.target.value;
                            // e.target.value ? true : false;;
                    handleChange
                       }
                />
                <span>Yes</span>
                <input 
                    // value={false}
                    name="isStudent" 
                    type="radio" 
                    onChange={
                        // handleChange.setForm(isStudent = false)
                        // (e) => {console.log(e.target.value = false)}
                        handleChange
                        }/>
                <span>No</span>
                <p>Student : {
                    form.isStudent ? <b>"Yes"</b> : <b>"No"</b>
                }</p>
                <br/>
                <textarea
                    // form="form"
                    name="msg"
                    placeholder="Your comments"
                    onChange={
                        // (e) => setMsg(e.target.value)
                        handleChange
                    }>
                </textarea>
                <p>Comment: {form.msg}</p>
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