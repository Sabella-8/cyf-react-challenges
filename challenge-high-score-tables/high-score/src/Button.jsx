function Button(props) {
  const { currentSortOrder, sortOnClick } = props;
  return (
    <button className="button" onClick={sortOnClick}>
      Sorted {currentSortOrder}
    </button>
  );
}
export default Button;
