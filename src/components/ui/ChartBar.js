function ChartBar(props) {
  const fillBy = Math.round((props.value / props.max) * 100) + "%";

  return (
    <div className="flex-grow flex flex-col items-center">
      <div className="flex w-3 h-24 rounded-xl bg-purple-400">
        <div
          className={`w-full self-end bg-purple-900 transition-all ${
            fillBy === "100%" ? "rounded-xl" : "rounded-b-xl"
          }`}
          style={{ height: fillBy }}
        ></div>
      </div>

      <div className="text-gray-900 text-xs font-bold">{props.label}</div>
    </div>
  );
}

export default ChartBar;
