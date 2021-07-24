function ExpensesFilter(props) {
  function handleChange(e) {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className={props.className}>
      <label>Filter by year</label>
      <select
        className="px-2 py-1 text-gray-900"
        value={props.selected}
        onChange={handleChange}
      >
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="All">All</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;
