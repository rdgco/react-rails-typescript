import React from "react"
import PropTypes from "prop-types"

import Button from 'react-bootstrap/Button';

type HelloWorldProps = {
  greeting: string
};

const HelloWorld = (props: HelloWorldProps) => {
  return (
    <div>
      Greeting: {props.greeting}
      <Button>Push Me</Button>
    </div>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
