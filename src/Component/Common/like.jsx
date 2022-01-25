//Stateless Functional Component
//Here you have to pass props to arrow fuctions and remove this. from the event  handler.
const Like = (props) => {
  let classes = "fa fa-lg fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{cursor: "pointer"}}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
