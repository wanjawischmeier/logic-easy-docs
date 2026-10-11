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

- A cell with only `0` and `1` points to the state with that binary index, and that state has to exist.
- A `-` stands for both `0` and `1`. A next state with don't-cares therefore covers several states at once, and a pattern with $k$ don't-care bits covers $2^k$ states. Since that is no unique target, such a row is hidden, see below.

Click a cell to cycle its value through `0 → 1 → - → 0`. Since a state can have only one next state per input, a row with don't-cares leaves that input undecided between the covered states; the minimization can use this freedom.

The [Editor](./editor.md#hidden-transitions) only draws transitions with a concrete next state, so such a row is not shown there as an arrow. The whole row is dimmed in the table, so every hidden edge is recognizable at a glance. When you draw a transition for the same state and input, it replaces the row with the concrete next state you draw (see [Overlapping Transitions](./editor.md#overlapping-transitions)).

Hidden rows are ignored everywhere: they never make the machine invalid, and the [Karnaugh-Veitch](../karnaugh-veitch.md) view and the [LogicCircuits](../logic-circuits.md) view take each of them as a don't care in all next-state and output bits. While a hidden row still shows concrete bits, both views explain that those rows have to be set completely to `-` in the next state and output columns, and offer **Continue anyway** to do it for you, so every view describes the same machine. The Editor shows how many such rows exist in its legend area.

## Output

The output column depends on the model:

- In **Mealy** mode the cell edits the output of the transition itself.
- In **Moore** mode the output belongs to a state. A row shows the output of every next state it resolves to, and a bit is shown as a don't-care as soon as those states disagree about it. Toggling the cell writes the next value of the cycle `0 → 1 → - → 0` to **all** of them, so a group stays in agreement. The output never makes the machine invalid: a next state without a unique target is simply not drawn by the [Editor](./editor.md#hidden-transitions).

## Validation

The state table is the source of truth for the machine and is checked after every change. While the machine is invalid, the [Editor](./editor.md), the [Karnaugh-Veitch](../karnaugh-veitch.md) view and the [LogicCircuits](../logic-circuits.md) view are replaced by a notification that states the reason, and they cannot be used again until the machine is corrected.

A machine is invalid in the following cases:

1. **A next state does not exist.** A drawn transition names exactly one state, and every drawn transition has to point at a state that exists. This includes a next state whose bits are all concrete while the index they encode has no state.

Rows the [Editor](./editor.md#hidden-transitions) does not draw are ignored: a next state with a don't-care (including all of them) and a next state that was removed in the State Table never make the machine invalid and never lock the views. The views report such rows instead, see above.

::: tip
Every editable cell can always be toggled freely in the order `0 → 1 → - → 0`. The machine is re-validated after each change, and the Editor and the other views lock only while one of the rules above is actually violated. Correcting the table data unlocks them again.
:::

![Transitions table with editable next state and output cells](/screenshots/state-machine/transitions-table.png)

## Legend

The legend inside the panel summarizes the table controls:

- **Navigate**: move between editable transition cells with the arrow keys.
- **Toggle bit value**: toggle the focused editable cell with `Space`.

---
