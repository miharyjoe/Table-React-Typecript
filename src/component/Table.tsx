import React,{ FunctionComponent, useState }from 'react';
import INFO from '../models/mockInfo';
import Info from '../models/infoP';
import formatDate from '../helpers/format-date';


const Table: FunctionComponent = () => {
const [info, setInfo] = useState<Info []>(INFO)
return (
  <div>
      <table  id="datatablesSimple" className='table table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tfoot>
        <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
        <tbody>
          {info.map(({name, position, office, age, startDate, salary}) => (
            <tr>
        <th>{name}</th>
        <th>{position}</th>
        <th>{office}</th>
        <th>{age}</th>
        <th>{formatDate(startDate)}</th>
        <th>{salary}</th>
          </tr>
        ))}
        </tbody>
      </table>

  </div>
)
}

export default Table;