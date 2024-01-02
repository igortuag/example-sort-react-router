import React from 'react'

function Tabela({pessoas}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {pessoas.map((pessoa, index) => (
          <tr key={index}>
            <td>{pessoa.name}</td>
            <td>{pessoa.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tabela