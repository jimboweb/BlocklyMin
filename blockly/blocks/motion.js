goog.require('Blockly.Blocks');
goog.require('Blockly');
Blockly.defineBlocksWithJsonArray([
  {
    "type": "forward",
    "message0": "forward",
    "colour":160,
    "output": null,
    "style": "text_blocks",
    "helpUrl": "",
    "tooltip": "move forward by 1",
  },
  {
    "type": "string_length",
    "message0": 'length of %1',
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      }
    ],
    "output": "Number",
    "colour": 160,
    "tooltip": "Returns number of letters in the provided text.",
    "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
  },
])
