import React from "react";

const utils = (second) => {
  return new Date(1000 * second).toISOString().substring(14, 19);
};

export default utils;
