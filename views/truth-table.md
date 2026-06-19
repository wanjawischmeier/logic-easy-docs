---
title: Truth Table
outline: deep
---

# Truth Table

A truth table shows all possible combinations of input variables and their corresponding output results for boolean functions.

![Truth table overview showing input and output variables](/screenshots/truth-table/table.png)

The truth table displays:

| Column | Description |
|--------|-------------|
| <span style="color: #81e6a7;">**#**</span> | Sequential row index identifying each combination |
| <span style="color: #81e6a7;">**Input variables**</span> | Independent boolean values that define each row of the truth table |
| <span style="color: #3d85f2;">**Output variables**</span> | Dependent boolean results produced by the respective function for each combination of input variables |

## Editing Output Values

You can click into cells of the output variable rows to toggle their values:

- **0** → **1** → **"-"** (don't care)

Click repeatedly to cycle through these three states.

![Clicking output cell to toggle value from 0 to 1 to don't care](/screenshots/truth-table/edit-cell.png)

## Search Function

![Search dialog for finding a specific row by binary input values](/screenshots/truth-table/search.png)

The **Search** button allows you to quickly search and/or edit values for a specific row:

1. Enter the row's input variable values in **binary representation**
2. Hit **ENTER** to apply the search
3. Hit **TAB** to apply and move to the next row

## Legend

![Search dialog for finding a specific row by binary input values](/screenshots/truth-table/legend.png)

Shows you a summarized version of this page inside the program, in case you need a reminder.

## Settings

### Showing All Output Variables

![Settings toggle](/screenshots/truth-table/settings.png)

Toggle the **"Showing all output variables"** setting:

- **Enabled** (default): All output variables are displayed in the table
- **Disabled**: Only the selected variable is shown; an output variable selection switch appears

## Download Options

![Download menu with screenshot and LaTeX options](/screenshots/truth-table/download.png)

Export your truth table in multiple formats:

| Format | Description |
|--------|-------------|
| **Screenshot** | Download a PNG image of the current table view |
| **LaTeX (.tex)** | Download a `.tex` file for use in LaTeX documents |

---
