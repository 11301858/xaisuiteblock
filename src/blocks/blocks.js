import * as Blockly from 'blockly/core';

const train = {
  "type": "train",
  "message0": "train model %1 with data %2 and explain it with %3",
  "args0": [
    {
      "type": "input_value",
      "name": "model",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "data",
      "check": "Tabular"
    },
    {
      "type": "input_value",
      "name": "explainers",
      "check": "Array"
    }
  ],
  "inputsInline": false,
  "colour": 230,
  "tooltip": "Trains a machine learning model",
  "helpUrl": "GitHub.com/11301858/XAISuite",
  };

const load_data = {
  "type": "load_data",
  "message0": "filename: %1 target: %2 cut: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "target",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "cut",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Tabular",
  "colour": 0,
  "tooltip": "Loads data from a path",
  "helpUrl": "GitHub.com/11301858/XAISuite"
};

const compare_explanations = {
  "type": "compare_explanations",
  "message0": "compare explanations with filenames %1",
  "args0": [
    {
      "type": "input_value",
      "name": "filenames",
      "check": "Array"
    }
  ],
  "colour": 120,
  "tooltip": "Compare explanations",
  "helpUrl": "github.com/11301858/XAISuite"
};

const model = {
  "type": "model",
  "message0": "model %1",
  "args0": [
    {
      "type": "input_value",
      "name": "model",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 65,
  "tooltip": "Instantiates a model",
  "helpUrl": "GitHub.com/11301858/XAISuite"
};

const explainers = {
  "type": "explainers",
  "message0": "explainers %1",
  "args0": [
    {
      "type": "input_value",
      "name": "explainers",
      "check": "Array"
    }
  ],
  "output": "Array",
  "colour": 160,
  "tooltip": "Instantiates explainers",
  "helpUrl": "GitHub.com/11301858/XAISuite"
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [train, load_data, compare_explanations, model, explainers]);
