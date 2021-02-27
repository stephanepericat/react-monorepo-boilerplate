module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name:"
      }
    ],
    actions: [
      data => {
        data.name = data.name.toLowerCase().replace(/\s/gi, "-");
        data.version = require("./package.json").version;
        return data;
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/package.json",
        templateFile: ".template/package.json.hbs"
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/index.js",
        templateFile: ".template/src/index.js.hbs"
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/src/{{name}}.stories.js",
        templateFile: ".template/src/index.stories.js.hbs"
      },
      {
        type: "add",
        path: "packages/{{pascalCase name}}/__tests__/{{name}}.test.js",
        templateFile: ".template/test/index.test.js.hbs"
      }
    ]
  });
}
