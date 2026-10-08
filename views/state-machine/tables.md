---
title: Tables
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# State Table

The State Table shows the state machine as two tables: the states and the transitions. It shows the same machine as the [Editor](./editor.md) and stays synchronized with it.

![State Table overview with states and transitions](/screenshots/state-machine/tables.png)

## States

The states table lists every state with its **name** and its **binary index**.

| Element          | Description                                                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**         | Click a state's name to rename it. Names support up to 12 characters; a default name uses the smallest unused `q<number>`, and duplicate names are rejected (case-insensitively) by keeping the previous name. |
| **Binary index** | The encoded position of the state (for example `0`, `1`, ...).                                                                                                                                                 |
| **Add / Remove** | Add a state with the `+` button (up to 16 states) and remove the highest-index state with the `−` button.                                                                                                      |

Names are limited to letters, digits, spaces, `_` and `-`; other characters are not accepted.

::: info
The transition table is only revealed once at least one state exists.
:::

![States table with name and binary index columns](/screenshots/state-machine/state-table.png)

## Transitions

The transitions table lists every transition with the columns **first state** $Z^n$, **input** $X^n$, **next state** $Z^{(n+1)}$, and **output** $Y^n$. The first-state and input columns are read-only; the next-state and output cells are editable.

Every row represents exactly one combination of a state and an input. Because the input column is always fully specified, each state has exactly one row per input combination.

| Column                     | Description                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------- |
| **First state** $Z^n$      | The source state of the transition (read-only).                                       |
| **Input** $X^n$            | The input combination that triggers the transition (read-only).                       |
| **Next state** $Z^{(n+1)}$ | The target state pattern; editable.                                                   |
| **Output** $Y^n$           | The output produced by the transition (Mealy) or by the next state (Moore); editable. |

## Next States

A next-state cell holds the bits `0`, `1` and the don't-care value `-`:

- A cell with only `0` and `1` points to the state with that binary index.
- A `-` stands for both `0` and `1`. A next state with don't-cares therefore covers several states at once, and a pattern with $k$ don't-care bits covers $2^k$ states; every state index it covers must exist.

Click a cell to cycle its value through `0 → 1 → - → 0`. Since a state can have only one next state per input, a row with don't-cares leaves that input undecided between the covered states; the minimization can use this freedom.

The [Editor](./editor.md#hidden-transitions) only draws transitions with a concrete next state, so such a row is not shown there as an arrow. When you draw a transition for the same state and input, it replaces the row with the concrete next state you draw (see [Overlapping Transitions](./editor.md#overlapping-transitions)).

## Output

The output column depends on the model:

- In **Mealy** mode the cell edits the output of the transition itself.
- In **Moore** mode the output belongs to a state. The cell edits the output of the next state as long as the row resolves to exactly one state. A row that resolves to several states shows their output only when all of them agree; otherwise the machine is invalid (see [Validation](#validation)).

## Validation

The state table is the source of truth for the machine and is checked after every change. While the machine is invalid, the [Editor](./editor.md) is replaced by a notification that states the reason, and it cannot be used again until the machine is corrected.

A machine is invalid in the following cases:

1. **A next state does not exist.** Every concrete index covered by a next-state pattern must correspond to an existing state. This also applies to partially concrete patterns when one of the state indexes they cover does not exist.
2. **In Moore mode, a group of target states has conflicting outputs.** If a next-state pattern resolves to several states, those states must all show exactly the same output bits. Bits that differ make the machine invalid, and a don't-care conflicts with a concrete bit, because a don't-care also stands for the other value.

::: info
An all-don't-care next state is an exception: it allows every next state, is never invalid, and does not lock the Editor.
:::

::: tip
Every editable cell can always be toggled freely in the order `0 → 1 → - → 0`. The machine is re-validated after each change, and the Editor locks only while one of the rules above is actually violated. Correcting the table data unlocks it again.
:::

![Transitions table with editable next state and output cells](/screenshots/state-machine/transitions-table.png)

## Legend

The legend inside the panel summarizes the table controls:

- **Navigate**: move between editable transition cells with the arrow keys.
- **Toggle bit value**: toggle the focused editable cell with `Space`.

---
