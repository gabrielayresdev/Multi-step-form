export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator("component", {
    description: "this is a skeleton for components",
    prompts: [{ type: "input", name: "name", message: "Name your component" }], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{titleCase name}}/{{titleCase name}}.tsx",
        templateFile: "plop/templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{titleCase name}}/{{titleCase name}}.module.sass",
        templateFile: "plop/templates/styles.module.sass.hbs",
      },
    ],
  });

  plop.setHelper("titleCase", (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  });
}
