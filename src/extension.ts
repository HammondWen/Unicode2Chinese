// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Format Chinese Words" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.unicode2chinese', () => {
		// The code you place here will be executed every time your command is executed
		const fs = require('fs');
		let currentfilename =vscode.window.activeTextEditor?.document.fileName;
		//const data=fs.readFileSync(currentfilename,'utf8');

		let text= vscode.window.activeTextEditor?.document.getText();

		let currentText=text?.replace(/\\X2\\[0-9a-zA-Z]*\\X0\\/g, function(unicodeText){
			let i =0;
			let chineseText='';
			unicodeText=unicodeText.substring(4,unicodeText.length-4);
			while(i<unicodeText.length)
			{
				let cu=unicodeText.substr(i,4);
				let ct=unescape('%u'+cu); // convert unicode to Chinese.
				chineseText+=ct;
				i+=4;
			}
			return chineseText;
			}
			);

			currentText=currentText?.replace(/\\\\X2\\\\[0-9a-zA-Z]*\\\\X0\\\\/g, function(unicodeText){
				let i =0;
				let chineseText='';
				unicodeText=unicodeText.substring(6,unicodeText.length-6);
				while(i<unicodeText.length)
				{
					let cu=unicodeText.substr(i,4);
					let ct=unescape('%u'+cu); // convert unicode to Chinese.
					chineseText+=ct;
					i+=4;
				}
				return chineseText;
				}
				);


			// \的转义符为\\ +的转义符为+\
			currentText = currentText?.replace(/\\U\+[0-9a-zA-Z]{4}/g,function(unicodeText: string){ 
				unicodeText=unicodeText.substring(3);
				return unescape('%u'+unicodeText);
			});

		

		
		fs.writeFile(currentfilename, currentText, (err: any) => {
  		if (err) {
    	console.error(err);
    	return;
		  };});

		vscode.window.showInformationMessage('Done!');

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
