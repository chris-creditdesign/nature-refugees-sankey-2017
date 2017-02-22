import nodeResolve from "rollup-plugin-node-resolve";

export default {
  entry: "d3.js",
  plugins: [nodeResolve({jsnext: true})],
  moduleId: "d3",
  moduleName: "d3",
  format: "umd"
};
