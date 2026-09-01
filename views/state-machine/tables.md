---
title: Tables
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# State Table

The State Table is the textual representation of the state machine and the primary place to correct invalid data. It lists every state with its **name** and **binary index**, and every transition with its input, next state, and output.

![State Table overview with states and transitions](/screenshots/state-machine/tables.png)

## States

The states table lists every state with its **name** and its **binary index**.

| Element | Description |
|--------|-------------|
| **Name** | Click a state's name to rename it. Names support up to 12 characters; an empty name falls back to `q<index>`, and duplicate names are rejected (case-insensitively) by keeping the previous name. |
| **Binary index** | The encoded position of the state (for example `0`, `1`, ...). |
| **Add / Remove** | Add a state with the `+` button (up to 16 states) and remove the highest-index state with the `−` button. |

::: info
The transition table is only revealed once at least one state exists.
:::

![States table with name and binary index columns](/screenshots/state-machine/state-table.png)

## Transitions

The transitions table lists every transition with the columns **first state** $Z^n$, **input** $X^n$, **next state** $Z^{(n+1)}$, and **output** $Y^n$. The first-state and input columns are read-only; the next-state and output cells are editable.

Clicking an editable cell cycles its bit value in the order `0 → 1 → - → 0`. A fully concrete next-state pattern resolves to the state with that binary index, while a pattern containing don't-cares (`-`) matches every compatible state.

| Column | Description |
|--------|-------------|
| **First state** $Z^n$ | The source state of the transition (read-only). |
| **Input** $X^n$ | The input combination that triggers the transition (read-only). |
| **Next state** $Z^{(n+1)}$ | The target state pattern; editable. |
| **Output** $Y^n$ | The output produced by the transition (Mealy) or stored on the target state (Moore); editable. |

In **Mealy** mode the output column edits the output of the transition itself. In **Moore** mode it edits the output stored on the target state; when a transition resolves to several target states at once, the edited value is applied to all of them.

![Transitions table with editable next state and output cells](/screenshots/state-machine/transitions-table.png)

## Legend

The following legend entries apply to the State Table:

* **Navigate**: Move between editable transition cells with the arrow keys.
* **Toggle bit value**: Toggle the focused editable cell with `Space`.

---
