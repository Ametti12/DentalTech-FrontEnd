import { useState } from "react";

function Patient() {
  const [patient, setPatient] = useState([]);

  return (
    <>
     <hr/>
    <h4 className="text-center"> Patient </h4>
      <div className="row">
        <table className="text-center table table-bordered">
          <thead className="table-light">
            

            <tr>
              <th rowsPan="2"> Last Name </th>
              <th rowsPan="2"> First Name </th>
              <th rowsPan="2"> DNI </th>
              <th rowsPan="2"> Activation Date </th>
              <th colSpan="4"> Address </th>
            </tr>
            <tr>
              <th>Street</th>
              <th>Number</th>
              <th>Province</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {patient.map((p) => {
              <tr key={p.id}>
                <td>p.lastName</td>
                <td>p.firstName</td>
                <td>p.dni</td>
                <td>p.activationDate</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Patient;
