function SelectRegion({ uniqeuRegion, handleClick }) {
  return (
    <select>
      {[...uniqeuRegion].map((region, index) => {
        return (
          <option key={index} onClick={handleClick}>
            {region}
          </option>
        );
      })}
    </select>
  );
}
export default SelectRegion;
