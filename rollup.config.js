import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
const isDev = process.env.NODE_ENV !== "production";

export default [
  {
    input: "src/main.js",
    output: {
      file: "bundle.js",
      format: "cjs",
    },
    plugins: [
      resolve(), // 这样 Rollup 能找到 `ms`
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      babel({
        exclude: "node_modules/**", // 防止打包node_modules下的文件
        runtimeHelpers: true, // 使plugin-transform-runtime生效
      }),
      !isDev && terser(),
    ],
  },
];
