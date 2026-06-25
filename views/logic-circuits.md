---
title: LogicCircuits
outline: deep
---

# LogicCircuits

This view integrates a read-only view of [LogicCircuits](https://www.iti.uni-luebeck.de/fileadmin/Lehre/TGI/Tools/LogicCircuits/index.html). The purpose is solely the immediate visualization of the formulas or state machines as circuits. 

![LogicCircuits canvas showing a minimized combinatorial circuit with four input variables, and two output variables](/screenshots/logic-circuits/circuit.png)


LogicCircuits displays a combinatorial circuit for combinatorial circuit projects, and a state machine circuit for state machine projects.

## Editing 

The LogicCircuits canvas does not support editing. Any changes made on the LogicCircuits canvas will be overwritten. 
If you want to edit the circuit, export it from Logic Easy, and import it into LogicCircuits outside of Logic Easy. 

If you try to edit the circuit, there will be a warning if any significant changes are detected.

![a red warning saying "Manual edits are not synced to Logic Easy!"](/screenshots/logic-circuits/edit-warning.png)

If you then change something in Logic Easy, outside of the LogicCircuits canvas, an additional warning will be displayed, notifying you of the consequences of these changes on your edited LogicCircuits canvas. 

![a warning popup saying, that manual edits on the LogicCircuits canvas are not synced back to logic easy and may be overwritten](/screenshots/logic-circuits/resync-warning.png)

If this happens, you have two options. You can either sync the changes to LogicCircuits or export the current .lc file, and then sync. 

## Legend

![Legend explaining the editing in lc](/screenshots/logic-circuits/legend.png)

Shows a small explanation that editing is not supported.

## Settings

The settings affect the parameters used to build the circuit. 

![default settings](/screenshots/logic-circuits/default-settings.png)


<details>

<summary>Available options are explained here</summary>

### Showing All Output Variables

![output var selection & show all output var toggle](/screenshots/logic-circuits/output-var-setting.png)

Toggle the **"Build all output variables"** setting:

- **Enabled** (default): All output variables are built in the circuit
- **Disabled**: Only the selected variable is built; an output variable selection switch appears

### Select Gate Type 

![gate type selector, AND/OR, NAND, NOR](/screenshots/logic-circuits/gate-type-setting.png)

Select which gate type is used exclusively in the circuit. You can choose between: 
- AND / OR
- NAND 
- NOR

### Select Function Type

![function type selector, Disjunctive and Conjunctive](/screenshots/logic-circuits/function-type-setting.png)

Select which function type (disjunctive or conjunctive) is used to build the circuit.

This selection is synced to all other panels where this change is relevant.

### Select Representation

![representation selector, normal or minimal](/screenshots/logic-circuits/representation-setting.png)

Select if whether minimized or canonical function is used to build the circuit.

This selection is synced to all other panels where this change is relevant.

</details>

## Download Options

![Download menu with screenshot and LaTeX options](/screenshots/logic-circuits/download.png)

Export the circuit in the .lc format. You can only export the currently visible circuit.


---
