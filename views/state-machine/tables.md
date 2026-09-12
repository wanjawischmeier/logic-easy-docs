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

| Element          | Description                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**         | Click a state's name to rename it. Names support up to 12 characters; an empty name falls back to `q<index>`, and duplicate names are rejected (case-insensitively) by keeping the previous name. |
| **Binary index** | The encoded position of the state (for example `0`, `1`, ...).                                                                                                                                    |
| **Add / Remove** | Add a state with the `+` button (up to 16 states) and remove the highest-index state with the `−` button.                                                                                         |

::: info
The transition table is only revealed once at least one state exists.
:::

![States table with name and binary index columns](/screenshots/state-machine/state-table.png)

## Transitions

The transitions table lists every transition with the columns **first state** $Z^n$, **input** $X^n$, **next state** $Z^{(n+1)}$, and **output** $Y^n$. The first-state and input columns are read-only; the next-state and output cells are editable.

Clicking an editable cell cycles its bit value in the order `0 → 1 → - → 0`. A fully concrete next-state pattern resolves to the state with that binary index. A pattern containing don't-cares (`-`) represents a cluster of concrete target IDs: every combination produced by replacing `-` with `0` and `1` must exist as a state. For example, `1-` requires both `10` and `11`.

| Column                     | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **First state** $Z^n$      | The source state of the transition (read-only).                                                |
| **Input** $X^n$            | The input combination that triggers the transition (read-only).                                |
| **Next state** $Z^{(n+1)}$ | The target state pattern; editable.                                                            |
| **Output** $Y^n$           | The output produced by the transition (Mealy) or stored on the target state (Moore); editable. |

In **Mealy** mode the output column edits the output of the transition itself. In **Moore** mode it edits the output stored on the target state when the transition has exactly one resolved target. A Moore transition resolving to several states displays their common output only when their output bits are compatible; conflicting outputs make the FSM invalid.

## Validation

The table is the source of truth for the FSM. It is checked after every table change. If a next-state pattern contains don't-cares, all of its concrete combinations must be present as state IDs. With `n` state bits, a pattern containing `k` don't-care bits covers $2^k$ combinations. Therefore, an all-don't-care pattern such as `--` covers all $2^n$ possible IDs and is valid only when the FSM contains all corresponding states. If any required combination is missing, the editor is replaced by an **"Automaton Invalid"** view with a reason that identifies the pattern. Correct the table to restore the editor.

::: info
Wildcard clusters are useful for NFA-style behavior: a pattern may target several states, but it is valid only when every concrete state covered by the pattern exists. A pattern such as `0-` is therefore valid with targets `00` and `01`, but invalid if either target is missing.
:::

![Transitions table with editable next state and output cells](/screenshots/state-machine/transitions-table.png)

## Legend

The following legend entries apply to the State Table:

- **Navigate**: Move between editable transition cells with the arrow keys.
- **Toggle bit value**: Toggle the focused editable cell with `Space`.

---
