import React from "react";

function Button({children, style}, ...props) {
  return (
    <button style={style} {...props}>
      {children}
    </button>
  )
}

export default Button;

const styleButton = style => props => (
  <Button style={style}{...props}>
    {props.children}
  </Button>
)

export const LaunchButton = styleButton({
  backgroundColor: "rgba(0,140,205,1)",
  color: "white",
  width: "200px",
  height: "50px",
  fontSize: "20px"
})
