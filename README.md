# React TDD with Jest & Enzyme
___

It's not recommended using `id` or `class` to get the component DOM information, so instead to use that,
let's use a test attribute. We're going to use `data-test` as our test attribute.

## Removing test attributes from Production
___

> To remote test attributes we need to use [`babel-plugin-react-remove-properties`](https://www.npmjs.com/package/babel-plugin-react-remove-properties)
> </br>
</br>

### [Create-React-App](https://create-react-app.dev/docs/getting-started/)
___
You need to eject the project to customize the `.babelrc` and add some extra configurations and to do that,
you can follow the step by step [here](https://www.npmjs.com/package/babel-plugin-react-remove-properties).
</br>
</br>

### [Webpack](https://webpack.js.org/)
___
You can follow the steps found in [plugin](https://www.npmjs.com/package/babel-plugin-react-remove-properties)
page to remove the test attributes.
</br>
</br>

### [ShallowWrapperAPI](https://github.com/enzymejs/enzyme/blob/master/docs/api/shallow.md#shallowwrapper-api)
___
The most used are:

`.find()` to get a tag element.

`.text()` to extract the text of an element.

`.simulate()` to simulate a click on button.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

