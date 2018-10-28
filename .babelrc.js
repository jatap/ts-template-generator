export const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: "current"
      }
    }
  ]
];
export const ignore = ["node_modules", "lib"];
