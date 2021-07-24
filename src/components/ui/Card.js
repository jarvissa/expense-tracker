function Card(props) {
  const classes = "rounded-xl shadow-2xl " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
