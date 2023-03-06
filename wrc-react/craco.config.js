// const SingleSpaAppcracoPlugin = require('craco-plugin-single-spa-application')

// const singleSpaAppPlugin = {
//   plugin: SingleSpaAppcracoPlugin,
//   options: {
//     orgName: 'aw-vdr',
//     projectName: 'wrc',
//     entry: 'src/index.js', //defaults to src/index.js,
//     orgPackagesAsExternal: false, // defaults to false. marks packages that has @my-org prefix as external so they are not included in the bundle
//     reactPackagesAsExternal: false, // defaults to true. marks react and react-dom as external so they are not included in the bundle
//     minimize: true, // defaults to false, sets optimization.minimize value
//     outputFilename: 'app.js', // defaults to the values set for the "orgName" and "projectName" properties, in this case "my-org-my-app.js"
//   },
// }

// Keep any other configuration you are exporting from CRACO and add the plugin to the plugins array
// module.exports = {
//     plugins: [singleSpaAppPlugin]
// }

// module.exports = {
//   plugins: [
//     {
//       plugin: require('craco-plugin-scoped-css'),
//     },
//     singleSpaAppPlugin,
//   ],
// }
