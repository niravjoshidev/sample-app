import React, { Component } from 'react'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {

    const rows = props.characterData.map((row, index) =>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className='btn btn-primary' onClick={() => props.removeCharacterFunc(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )    
}

export default class Table extends Component {
  render() {
      const { characterData,removeCharacterFunc } = this.props;
    return (
        <>
        <table className='table'>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacterFunc={removeCharacterFunc} />
        </table>
        </>
    )
  }
}
