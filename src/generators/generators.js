import {pythonGenerator} from 'blockly/python';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const generator = Object.create(null);

generator['train'] = function(block) {
  var value_model = pythonGenerator.valueToCode(block, 'model', pythonGenerator.ORDER_ATOMIC);
  var value_data = pythonGenerator.valueToCode(block, 'data', pythonGenerator.ORDER_ATOMIC);
  var value_explainers = pythonGenerator.valueToCode(block, 'explainers', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'train_and_explainModel(' + value_model + ', ' + value_data + ', ' + value_explainers + ')';
  return code;
};

generator['load_data'] = function(block) {
  var value_data = pythonGenerator.valueToCode(block, 'data', pythonGenerator.ORDER_ATOMIC);
  var value_target = pythonGenerator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC);
  var value_cut = pythonGenerator.valueToCode(block, 'cut', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'load_data_CSV(' + value_data + ', ' + value_target + ', ' + value_cut + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_NONE];
};

generator['compare_explanations'] = function(block) {
  var value_filenames = pythonGenerator.valueToCode(block, 'filenames', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'compare_explanations(' + value_filenames + ')';
  return code;
};

generator['model'] = function(block) {
  var value_model = pythonGenerator.valueToCode(block, 'model', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return ' + value_model ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_NONE];
};

generator['explainers'] = function(block) {
  var value_explainers = pythonGenerator.valueToCode(block, 'explainers', pythonGenerator.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return ' + value_explainers;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, pythonGenerator.ORDER_NONE];
};
