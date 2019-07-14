import React from "react"
import PropTypes from "prop-types"

type HelloWorldProps = {
  greeting: string
};

const HelloWorld = (props: HelloWorldProps) => {
  return (
    <div>
      Greeting: {props.greeting}
    </div>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
