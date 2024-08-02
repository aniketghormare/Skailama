import React from 'react';
import '../style/Table.css'; // Make sure to create this file for custom styling

const Table = () => {
  const data = [
    { name: 'File1', uploadDate: '2024-08-02 10:00 AM', status: 'Uploaded', action: 'View' },
    { name: 'File2', uploadDate: '2024-08-01 09:30 AM', status: 'Failed', action: 'Retry' },
    { name: 'File3', uploadDate: '2024-07-31 04:20 PM', status: 'Uploaded', action: 'View' },
    { name: 'File4', uploadDate: '2024-08-02 10:00 AM', status: 'Uploaded', action: 'View' },
    { name: 'File5', uploadDate: '2024-08-01 09:30 AM', status: 'Failed', action: 'Retry' },
    { name: 'File6', uploadDate: '2024-07-31 04:20 PM', status: 'Uploaded', action: 'View' },
  ];

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.uploadDate}</td>
              <td>{item.status}</td>
              <td><button>Edit</button>&nbsp;<button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
