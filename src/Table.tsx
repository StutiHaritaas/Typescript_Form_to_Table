
import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

type Form= {
    ename: string;
    gender: string;
    department: string;
    doj: string;
    email: string;
}
type Props={
  forms:Form[];
  updateFormList:(updatedForms:Form[])=>void;
  setFormDataToUpdate:(form:Form,index:number)=>void
}
function Table({
     forms,
     updateFormList,
     setFormDataToUpdate}
    :Props ) {
    const [sortEname, setSortEname] = useState(true);
    const [sortGender, setSortGender] = useState(true);

    const ButtonToggle = (key:keyof Form) => {
        const sortedForms = [...forms];
        if ((key === "ename" && sortEname) || (key === "gender" && sortGender)) {
            sortedForms.sort((a, b) => (a[key] || "").localeCompare(b[key] || ""));
        } else {
            sortedForms.sort((a, b) => (b[key] || "").localeCompare(a[key] || ""));
        }

        if (key === "ename") {
            setSortEname(!sortEname);
        }

        if (key === "gender") {
            setSortGender(!sortGender);
        }

        updateFormList(sortedForms);
    };

    const updateData = (form:Form, index:number) => {
        setFormDataToUpdate(form, index);
        setSortEname(true);
        setSortGender(true);
    };

    const deleteData = (index:number) => {
        updateFormList(forms.filter((_, i) => index !== i));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>
                            Employee Name &nbsp;{" "}
                            <button onClick={() => ButtonToggle("ename")}>{sortEname ? "Asc" : "Desc"}</button>
                        </th>
                        <th>
                            Gender &nbsp;{" "}
                            <button onClick={() => ButtonToggle("gender")}>{sortGender ? "Asc" : "Desc"}</button>
                        </th>
                        <th>Department</th>
                        <th>Date of Joining</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {forms.map((form, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{form.ename}</td>
                            <td>{form.gender}</td>
                            <td>{form.department}</td>
                            <td>{form.doj}</td>
                            <td>{form.email}</td>
                            <td>
                                <button onClick={() => updateData(form, index)} style={{ color: 'green' }}><FaEdit /></button>
                                <button onClick={() => deleteData(index)} style={{ color: 'red' }}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;