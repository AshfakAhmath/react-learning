function Button() {
  const style = {
    padding: "10px 20px",
    backgroundColor: "hsl(180, 100%, 30%)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  };

  return <button style={style}>Inline CSS</button>;
}

export default Button;
