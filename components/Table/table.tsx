import React from "react";

interface TableProps {
  data: TableRow[];
}

interface TableRow {
  stars: string | null | undefined;
  matic: string;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>STARS</th>
          <th>MATIC</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.stars}>
            <td>{row.stars}</td>
            <td>{row.matic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
