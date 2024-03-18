import React, { memo, useEffect } from "react";

const Text = memo((props) => {
  const { externalData } = props;

  useEffect(() => {
    console.log("External Data is changing.", externalData);
  }, [externalData]);
  console.log(externalData);
  return <p>{externalData}</p>;
});

export default Text;
