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

Clicking an editable cell cycles its bit value in the order `0 → 1 → - → 0`. A fully concrete next-state pattern resolves to the state with that binary index. A _partial_ pattern containing don't-cares (`-`) represents a cluster of concrete target IDs: every combination produced by replacing `-` with `0` and `1` must exist as a state. For example, `1-` requires both `10` and `11`. A pattern that is **all** don't-cares allows every next state - see [Validation](#validation).

| Column                     | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **First state** $Z^n$      | The source state of the transition (read-only).                                                |
| **Input** $X^n$            | The input combination that triggers the transition (read-only).                                |
| **Next state** $Z^{(n+1)}$ | The target state pattern; editable.                                                            |
| **Output** $Y^n$           | The output produced by the transition (Mealy) or stored on the target state (Moore); editable. |

In **Mealy** mode the output column edits the output of the transition itself. In **Moore** mode it edits the output stored on the target state when the transition has exactly one resolved target. A Moore transition resolving to several states displays their common output only when their output bits are compatible; conflicting outputs make the FSM invalid. Next states that are all don't-cares are excluded here, because they do not resolve to a single target.

Because every row stands for exactly one `state + input` combination, a state can only have **one** next state per input. To make one input point at several states, use a don't-care cluster in the next-state cells - two states can only be combined when their binary indexes differ in exactly one bit (for example `01` and `11` → `-1`). If the indexes do not fit, add the states again in an order that puts the wanted targets next to each other, because the binary index is assigned by creation order. Drawing a second transition for the same input in the [Editor](./editor.md#creating-a-transition) fills in this cluster automatically when the targets fit one pattern; otherwise the editor explains which states a pattern would add on top. A row whose next state is all don't-cares is simply replaced when you draw the transition for that state and input, see [hidden don't-care transitions](./editor.md#hidden-dont-care-transitions).

## Validation

The table is the source of truth for the FSM. It is checked after every table change. If a partially concrete next-state pattern contains don't-cares, all of its concrete combinations must be present as state IDs. With `n` state bits, a pattern containing `k` don't-care bits covers $2^k$ combinations. If any combination a partial pattern covers is missing, the editor is replaced by an **"Automaton Invalid"** view with a reason that identifies the pattern. Correct the table to restore the editor.

A next state that is **all** don't-cares (`--`) allows every next state and never makes the automaton invalid, because such a row is a pure don't-care that only helps the minimization. While the number of states is not a power of two, the pattern also covers indexes that no state uses yet — the transitions table then shows an amber **"Don't-care next states also cover …"** warning instead of locking the editor. Such rows are not drawn in the editor; drawing the transition for the same state and input replaces them, see [hidden don't-care transitions](./editor.md#hidden-dont-care-transitions).

::: info
Clusters of don't-cares are useful for NFA-style behavior: a partial pattern may target several states, but it is valid only when every concrete state covered by the pattern exists. A pattern such as `0-` is therefore valid with targets `00` and `01`, but invalid if either target is missing.
:::

![Transitions table with editable next state and output cells](/screenshots/state-machine/transitions-table.png)

## Legend

The following legend entries apply to the State Table:

- **Navigate**: Move between editable transition cells with the arrow keys.
- **Toggle bit value**: Toggle the focused editable cell with `Space`.

---
