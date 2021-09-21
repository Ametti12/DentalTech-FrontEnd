import { useState } from "react";

function Dentist() {
  const [dentist, setDentist] = useState([]);

  return (
    <>
      <hr/>
      <h4 className="text-center">Dentist</h4>
      <div className="row">
        <table className="table text-center table-bordered">
          <thead className="table-light">
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Register Number</th>
            </tr>
          </thead>

          <tbody>
            {dentist.map((d) => {
              <tr key={d.id}>
                <td>p.lastName</td>
                <td>p.firstName</td>
                <td>p.registerNumber</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dentist;
