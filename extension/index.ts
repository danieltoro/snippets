// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

const basicsEs7 = require('../snippets/js-ts/basics-es7.json')
const basicsTs = require('../snippets/js-ts/basics-ts.json')
const consoles = require('../snippets/js-ts/console.json')
const basicsReact = require('../snippets/react/basics.json')
const lifecycleMethods = require('../snippets/react/lifecycle-methods.json')
const reactHooks = require('../snippets/react/react-hooks.json')
const reactComponents = require('../snippets/react/react-components.json')
const reactComponentsTs = require('../snippets/react/react-components-ts.json')
const hoc = require('../snippets/react/hoc.json')
const reactNative = require('../snippets/react-native/react-native.json')
const reactNativeTs = require('../snippets/react-native/react-native-ts.json')
const redux = require('../snippets/redux/redux-snippets.json')
const graph = require('../snippets/graphql/graphql-snippets.json')
const test = require('../snippets/test/test-snippets.json')

type Snippet = {
  body: Array<string> | string
  description: string
  prefix: Array<string> | string
}

const convertSnippetArrayToString = (snippetArray: Array<string>): string =>
  snippetArray.join('\n')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "Snippet Search" is now active!')
  vscode.window.showInformationMessage('Congratulations, your extension "Snippet Search" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    'extension.snippetSearch',
    async () => {
      const basicsEs7Snippets = Object.entries(basicsEs7 as Array<Snippet>)
      const basicsTsSnippets = Object.entries(basicsTs as Array<Snippet>)
      const consoleSnippets = Object.entries(consoles as Array<Snippet>)
      const basicsReactSnippets = Object.entries(basicsReact as Array<Snippet>)
      const lifecycleMethodsSnippets = Object.entries(lifecycleMethods as Array<Snippet>)
      const reactHooksSnippets = Object.entries(reactHooks as Array<Snippet>)
      const reactComponentsSnippets = Object.entries(reactComponents as Array<Snippet>)
      const reactComponentsTsSnippets = Object.entries(reactComponentsTs as Array<Snippet>)
      const hocSnippets = Object.entries(hoc as Array<Snippet>)
      const reactNativeSnippets = Object.entries(reactNative as Array<Snippet>)
      const reactNativeTsSnippets = Object.entries(reactNativeTs as Array<Snippet>)
      const reduxSnippets = Object.entries(redux as Array<Snippet>)
      const graphSnippets = Object.entries(graph as Array<Snippet>)
      const testSnippets = Object.entries(test as Array<Snippet>)

      const snippetsArray: Array<[string, Snippet]> = basicsEs7Snippets.concat(
        basicsTsSnippets,
        consoleSnippets,
        basicsReactSnippets,
        lifecycleMethodsSnippets,
        reactHooksSnippets,
        reactComponentsSnippets,
        reactComponentsTsSnippets,
        hocSnippets,
        reactNativeSnippets,
        reactNativeTsSnippets,
        reduxSnippets,
        graphSnippets,
        testSnippets
      )

      const items = snippetsArray.map(
        ([shortDescription, { prefix, body, description }], index) => {
          const value = typeof prefix === 'string' ? prefix : prefix[0]


          return {
            id: index,
            description: description || shortDescription,
            label: value,
            value,
            body,
          }
        }
      )

      const options = {
        matchOnDescription: true,
        matchOnDetail: true,
        placeHolder: 'Search Snippet <3',
      }

      const snippet = (await vscode.window.showQuickPick(items, options)) || {
        body: '',
      }
      const activeTextEditor = vscode.window.activeTextEditor
      const body =
        typeof snippet.body === 'string'
          ? snippet.body
          : convertSnippetArrayToString(snippet.body)
      activeTextEditor &&
        activeTextEditor.insertSnippet(new vscode.SnippetString(body))
    }
  )

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
