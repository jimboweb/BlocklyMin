Blockly.JavaScript['forward'] = function(block) {
    return `moveForward(ship);\n`;
};
Blockly.JavaScript['backward'] = function(block) {

    return `moveBackward(ship);\n`;
};
Blockly.JavaScript['left'] = function(block) {
    return  'turnLeft(ship);\n'
};
Blockly.JavaScript['right'] = function(block) {
    return 'turnRight(ship);\n'
};
