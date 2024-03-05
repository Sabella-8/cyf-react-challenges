function BodyTable({ n, s }) {
  return (
    <tr className="tr">
      <td key={n}>{n}</td>
      <td key={s}>{s}</td>
    </tr>
  );
}
export default BodyTable;
