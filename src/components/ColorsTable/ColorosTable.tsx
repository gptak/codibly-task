import useColorTable from "./useColorstable";

export default function ColorsTable() {
  const { table } = useColorTable();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {table.map((color, key) => (
            <tr style={{ background: `${color.color}` }} key={key}>
              <td>{color.id}</td>
              <td>{color.name}</td>
              <td>{color.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
