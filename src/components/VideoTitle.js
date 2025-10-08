export const VideoTitle = (props) => {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        width: "300px",
        flexDirection: "column"
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
      <div className="flex">
        <button style={{marginRight:"20px"}}>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
