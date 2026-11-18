import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Base flour",
    "unit": "g",
    "initial": 300,
    "min": 1,
    "max": 5000,
    "step": 5
  },
  {
    "name": "Flour on hand",
    "unit": "g",
    "initial": 180,
    "min": 0,
    "max": 5000,
    "step": 5
  },
  {
    "name": "Base water",
    "unit": "g",
    "initial": 210,
    "min": 0,
    "max": 5000,
    "step": 5
  },
  {
    "name": "Base salt",
    "unit": "g",
    "initial": 6,
    "min": 0,
    "max": 100,
    "step": 1
  },
  {
    "name": "Base yeast",
    "unit": "g",
    "initial": 3,
    "min": 0,
    "max": 100,
    "step": 1
  }
];
worksheet({name:"Pantry Ratio",fields,calculate,accent:"#ECA64C",motion:{"motif":"pour","color":"#ECA64C","shine":"#FFF0BB"}});
