## Convert Unicode to Chinese
This extension is to convert Unicode to Chinese in some specific files.

Currently Unicode characters with the following formats can be converted:
- \\X2\\[0-9a-zA-Z]*\\X0\\  e.g. \X2\8BF757286B6459048F93516557305740\X0\ convert to 请在此处输入地址
- \\\\X2\\\\[0-9a-zA-Z]*\\\\X0\\\\  e.g. \\X2\\8BF757286B6459048F93516557305740\\X0\\ convert to 请在此处输入地址
- \\U\+[0-9a-zA-Z]{4}   e.g. \U+6BD4\U+4F8B convert to 比例

# How to UseC

Run the _Convert Unicode to Chinese_ command from the Command Palette(Ctrl+Shift+P)

**Enjoy!**
