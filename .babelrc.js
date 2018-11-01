module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ],
  retainLines: true,
  sourceMaps: "inline",
  ignore: ["node_modules", "lib"]
}
