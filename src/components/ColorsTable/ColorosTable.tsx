import useColorTable from "./useColorstable";

export default function ColorsTable() {
  const { table, filter } = useColorTable();

  return (
    <div>
      {table
        .filter((color) => filter === "" || color.id === parseInt(filter))
        .map((color, key) => (
          <div style={{ background: `${color.color}` }} key={key}>
            <div>{color.id}</div>
            <div>{color.name}</div>
            <div>{color.year}</div>
          </div>
        ))}
    </div>
  );
}
