import useColorTable from "./useColorstable";

export default function ColorsTable() {
  const { table } = useColorTable();

  return (
    <div>
      {table.map((color, key) => (
        <div style={{ background: `${color.color}` }} key={key}>
          <div>{color.id}</div>
          <div>{color.name}</div>
          <div>{color.year}</div>
        </div>
      ))}
    </div>
  );
}
