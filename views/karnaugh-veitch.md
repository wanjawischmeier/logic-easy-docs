---
title: Karnaugh-Veitch
outline: deep
---

# Karnaugh-Veitch

The Karnaugh-Veitch view shows a KV-Diagram for the selected output variable, together with its formula. It supports up to 6 input variables and 16 output variables.

![KV-Diagram with colored groups and the minimized formula below it](/screenshots/karnaugh-veitch/image.png)

The KV-Diagram view displays:

| Element | Description |
|--------|-------------|
| <img src="/screenshots/karnaugh-veitch/el-output.png" width="120"> | **Output variable**: shown in the top-left corner; identifies which output the diagram represents |
| <img src="/screenshots/karnaugh-veitch/el-inputs.png" width="200"> | **Input variables**: listed above and to the left of the diagram, with their value combinations along the top row and left column |
| <img src="/screenshots/karnaugh-veitch/el-cells.png" width="70"> | **Cells**: the output value (`0`, `1`, or `-`) for each combination of input variables |
| <img src="/screenshots/karnaugh-veitch/el-groups.png" width="200"> | **Groups**: when minimization is active, the grouped cells are highlighted in different colors |
| <img src="/screenshots/karnaugh-veitch/el-formula.png" width="200"> | **Formula**: the formula for the selected output variable, shown below the diagram |

::: tip
![Side-by-side comparison linking Prime Implicant table bounds to the KV Diagram](/screenshots/quine-mccluskey/prime-implicants/kv_comp.png)
Grouping colors match those in the [QMC Prime Implicants Table](./quine-mccluskey/prime-implicants.md). For details, see [here](./quine-mccluskey/prime-implicants.html#global-color-coding).
:::

## Editing Output Values

You can click into the cells to toggle their values:

- **0** → **1** → **"-"** (don't care)

Click repeatedly to cycle through these three states.

![Clicking output cell to toggle value from 0 to 1 to don't care](/screenshots/karnaugh-veitch/edit-cell.png)

## Copying the Formula

Click the copy icon to the right of the formula to copy it as LaTeX.

![Clicking the copy icon to copy the formula as LaTeX](/screenshots/karnaugh-veitch/copy-formula.png)

## Settings

![KV-Diagram settings menu](/screenshots/karnaugh-veitch/settings.png)

| Setting | Description |
|--------|-------------|
| **Show formula** | Toggles whether the formula for the selected output variable is shown. Enabled by default. |
| **Output Variable** | Selects which output variable's KV-Diagram and formula are shown. Only one at a time. |
| **Function Type** | Calculate a `Disjunctive` or `Conjunctive` function. Synced to all relevant panels. |
| **Representation** | `Normal` (canonical) or `Minimal`. Normal hides the groups, as no minimization takes place. Synced to all relevant panels. |


## Download Options

![Download menu with screenshot and LaTeX options](/screenshots/karnaugh-veitch/download.png)

Export your KV-Diagram in multiple formats:

| Format | Description |
|--------|-------------|
| **Screenshot** | Download a PNG image of the current KV-Diagram view |
| **LaTeX (.tex)** | Download a `.tex` file for use in LaTeX documents |

---
