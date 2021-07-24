import ChartBar from "./ChartBar";

function Chart(props) {
  const classes = "flex flex-wrap gap-2 p-2 bg-red-300 " + props.className;

  const values = props.data.map((datum) => datum.value);
  const max = Math.max(...values);

  return (
    <div className={classes}>
      {props.data.map((datum) => (
        <ChartBar
          label={datum.label}
          value={datum.value}
          max={max}
          key={datum.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
