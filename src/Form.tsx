
import React from "react";

type FormItem={
    ename:string,
    gender:string,
    department:string,
    doj:string,
    email:string
    errors:{ [key: string]: JSX.Element | string },
    handleEnameChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleGenderChange:(e:React.ChangeEvent<HTMLSelectElement>) => void,
    handleDepartmentChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void,
    handleDojChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleEmailChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmitForm: (e:React.FormEvent<HTMLFormElement>)=>void,
    handleResetForm:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void, 
}
function Form({
    ename,
    gender,
    department,
    doj,
    email,
    errors,
    handleEnameChange,
    handleGenderChange,
    handleDepartmentChange,
    handleDojChange,
    handleEmailChange,
    handleSubmitForm,
    handleResetForm,
}:FormItem) {
    return (
        <div className="background-container">
            <div className="form-container">
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmitForm}>
                    <label>Employee Name:</label>
                    <input
                        className="form-element"
                        type="text"
                        value={ename}
                        onChange={handleEnameChange}
                        style={{ borderColor: errors.ename ? "red" : "" }}
                    />
                    {errors.ename && (
                        <div className="error-message" style={{ color: "red" }}>
                            {errors.ename}
                        </div>
                    )}
                    <br />
                    <label>Gender:</label>
                    <select className="form-element" value={gender} onChange={handleGenderChange}>
                        <option value=""> </option>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                    </select>
                    <br />
                    <label>Department:</label>
                    <select className="form-element" value={department} onChange={handleDepartmentChange}>
                        <option value=""> </option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales and Marketing">Sales and Marketing</option>
                        <option value="Research and Development">Research and Development</option>
                        <option value="Customer Service Development">Customer Service Development</option>
                    </select>
                    <br />
                    <label>Date of Joining:</label>
                    <input
                        className="form-element"
                        type="date"
                        value={doj}
                        onChange={handleDojChange}
                        style={{ borderColor: errors.doj ? "red" : "" }}
                    />
                    {errors.doj && (
                        <div className="error-message" style={{ color: "red" }}>
                            {errors.doj}
                        </div>
                    )}
                    <br />
                    <label>Email:</label>
                    <input
                        className="form-element"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@gmail.com"
                    />{" "}
                    <br />
                    <input type="submit" value="Submit" className="btn" />
                    <button className="btn" onClick={handleResetForm}>
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;
