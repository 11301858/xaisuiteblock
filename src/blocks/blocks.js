import * as Blockly from 'blockly/core';

const blocksjson = [{
  "type": "dataloader",
  "message0": "Load data %1 Source:  %2 %3 Type: %4 %5 Variable Names: %6 Target Names %7 Cut %8 Categorical %9",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": [
        "String",
        "pd.DataFrame",
        "Callable",
        "numpy.ndarray"
      ]
    },
    {
      "type": "field_dropdown",
      "name": "SourceDropdown",
      "options": [
        [
          "auto",
          "auto"
        ],
        [
          "system",
          "system"
        ],
        [
          "generated",
          "generated"
        ],
        [
          "url",
          "URL"
        ],
        [
          "preloaded",
          "preloaded"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "TypeDropdown",
      "options": [
        [
          "Tabular",
          "Tabular"
        ],
        [
          "Image",
          "Image"
        ],
        [
          "Text",
          "Text"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "VariableNames",
      "check": [
        "String",
        "Array",
        "auto"
      ]
    },
    {
      "type": "input_value",
      "name": "Target",
      "check": [
        "String",
        "Number",
        "auto"
      ]
    },
    {
      "type": "input_value",
      "name": "Cut",
      "check": [
        "String",
        "Array",
        "None"
      ]
    },
    {
      "type": "input_value",
      "name": "Categorical",
      "check": [
        "String",
        "None",
        "Array"
      ]
    }
  ],
  "inputsInline": false,
  "output": "DataLoader",
  "colour": 180,
  "tooltip": "Loads data",
  "helpUrl": "11301858.github.io/XAISuite"
},
{
  "type": "data_loader_simple",
  "message0": "load data %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": [
        "String",
        "numpy.ndarray",
        "pd.DataFrame",
        "Callable"
      ]
    }
  ],
  "inputsInline": false,
  "output": "DataLoader",
  "colour": 180,
  "tooltip": "Simple data loader. ",
  "helpUrl": "11301858.github.io/XAISuite"
},
{
  "type": "dataprocessor",
  "message0": "DataLoader %1 Testing dataset size:  %2 %3 Processor %4",
  "args0": [
    {
      "type": "input_value",
      "name": "dataLoader",
      "check": "DataLoader"
    },
    {
      "type": "field_number",
      "name": "test_size",
      "value": 0.2
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "transform",
      "text": "TabularTransform"
    }
  ],
  "inputsInline": false,
  "output": "DataProcessor",
  "colour": 30,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "auto",
  "message0": "auto",
  "output": "auto",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "none",
  "message0": "None",
  "output": "None",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "modeltrainer",
  "message0": "Model: %1 With Data: %2 Task Type: %3 %4 Task %5 %6 Explainers:  %7",
  "args0": [
    {
      "type": "input_value",
      "name": "model",
      "check": [
        "String",
        "Callable"
      ]
    },
    {
      "type": "input_value",
      "name": "withData",
      "check": "DataProcessor"
    },
    {
      "type": "field_dropdown",
      "name": "taskType",
      "options": [
        [
          "Tabular",
          "Tabular"
        ],
        [
          "Vision",
          "Vision"
        ],
        [
          "NLP",
          "NLP"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "task",
      "options": [
        [
          "regression",
          "regression"
        ],
        [
          "classification ",
          "classification"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "explainers",
      "check": [
        "String",
        "Array"
      ]
    }
  ],
  "inputsInline": false,
  "output": "Explanations",
  "colour": 105,
  "tooltip": "Trains and explains a machine learning model.",
  "helpUrl": "11301858.github.io/XAISuite"
},
{
  "type": "getlocalexplanations",
  "message0": "%1 .getLocalExplanations",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Explanations"
    }
  ],
  "inputsInline": true,
  "output": "LocalExplanations",
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "getsummaryexplanations",
  "message0": "%1 .getSummaryExplanations",
  "args0": [
    {
      "type": "input_value",
      "name": "explanations",
      "check": "Explanations"
    }
  ],
  "inputsInline": true,
  "output": "SummaryExplanations",
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "insight_generator",
  "message0": "Give me insights about %1",
  "args0": [
    {
      "type": "input_value",
      "name": "explanations",
      "check": "LocalExplanations"
    }
  ],
  "inputsInline": false,
  "output": "Insights",
  "colour": 150,
  "tooltip": "Generates insights for an explainable machine learning model.",
  "helpUrl": "11301858.github.io/XAISuite"
},
{
  "type": "calculateexplainersimilarity",
  "message0": "For  %1 compare explainers %2 %3 and  %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "insights",
      "check": "Insights"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "explainer1",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "explainer2",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]


// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    blocksjson);
