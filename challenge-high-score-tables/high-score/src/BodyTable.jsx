function BodyTable({ n, s }) {
  return (
    <tr className="trs">
      <td key={n}>{n}</td>
      <td key={s}>{s}</td>
    </tr>
  );
}
export default BodyTable;
