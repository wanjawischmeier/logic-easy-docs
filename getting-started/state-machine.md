---
title: Getting Started
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Getting Started with State Machines

This guide introduces the core steps for creating and working with State Machine (FSM) projects in LogicEasy. It covers the [project creation](#project-creation), the underlying [state machine model](#the-state-machine-model), the two default panels - the [State Table](#the-state-table-panel) and the [FSM Editor](#the-fsm-editor-panel) along with the [validation rules](#validation-and-the-locked-editor) that lock the editor while the automaton is invalid.

## Project Creation

When creating a new State Machine project, you are prompted with the project initialization dialog.

### 1. Project Name

Specify a custom identifier for your project at the top of the dialog.

::: info
Project names do not need to be unique. If you create multiple projects with the identical name, the application automatically handles duplicates by appending an incremental index (e.g., `Project (1)`, `Project (2)`).
:::

### 2. Machine Type

Choose between the two common FSM models:

- **Mealy**: The output depends on the current state and the input. Output bits are stored on each individual transition.
- **Moore**: The output depends only on the current state (the 'next' state of a transition). Output bits are stored on the states themselves, and transitions only describe the input and the next state.

### 3. Input and Output Bits

You must set the number of input bits and output bits, each between 1 and 5. These values define the width of the bit patterns used for inputs and outputs in the state table and the editor.

::: warning
The number of input and output bits cannot be changed after the project has been created.
:::

After creation, a State Machine project opens with two panels side by side: the [State Table](#the-state-table-panel) and the [FSM Editor](#the-fsm-editor-panel).

## The State Machine Model

A finite state machine consists of **states** and the **transitions** between them.

- Each state has a **name** (new states are named `q0`, `q1`, ... as default) and a **binary index** that encodes its position (for example `0`, `1`, ...).
- The **initial state** is the state the machine starts in. The first state added becomes the initial state, and it is marked with an incoming arrow in the editor.
- A **transition** describes what happens for a given input combination: it connects a source state to a next state and optionally carries an output.
- **Input** and **output** values are bit patterns. Every bit is either `0`, `1`, or a don't-care value `x` (displayed as `-`). A don't-care matches both `0` and `1`, so a single transition row can cover several input combinations or target several states.

### Mealy vs Moore in practice

The chosen model determines where the output lives:

- In **Mealy** mode the output belongs to the transition. Transition labels show `input / output`, and the output column of the transition table edits the transition row.
- In **Moore** mode the output belongs to the state. The state circle shows `name / output`, the transition label shows only the input bits, and the output column of the transition table edits the output stored on the target state. The cell is editable only when the transition resolves to exactly one target state; a value is never applied to several states automatically.

## The State Table Panel

The State Table is the textual representation of the machine and the primary place to correct invalid data.

### States Table

The states table lists every state with its **name** and its **binary index**.

- **Rename** a state by clicking its name. Names support up to 12 characters; an empty name falls back to `q<index>`, and duplicate names are rejected (case-insensitively) by keeping the previous name.
- **Add** a state with the `+` button (up to 16 states) and **remove** the highest-index state with the `−` button.

::: info
The transition table is only revealed once at least one state exists.
:::

### Transitions

The transitions table lists every transition with the columns **first state** $Z^n$, **input** $X^n$, **next state** $Z^{(n+1)}$, and **output** $Y^n$. The first-state and input columns are read-only; the next-state and output cells are editable.

Clicking an editable cell cycles its bit value in the order `0 → 1 → - → 0`. A fully concrete next-state pattern resolves to the state with that binary index, while a pattern containing don't-cares (`-`) matches every compatible state.

The following legend entries apply to the State Table:

- **Navigate**: Move between editable transition cells with the arrow keys.
- **Toggle bit value**: Toggle the focused editable cell with `Space`.

## The FSM Editor Panel

The FSM Editor is the visual canvas for drawing the state machine. States are drawn as circles, transitions as directed arrows, and a toolbar at the bottom provides the tools.

### Tools and shortcuts

The FSM Editor legend summarizes the visual elements and the tools.

| Tool        | Purpose                                       | Shortcut |
| ----------- | --------------------------------------------- | -------- |
| Move        | Select and drag states to reposition them     | —        |
| Add         | Click empty space to create a state (max. 16) | `Alt+S`  |
| Remove      | Click a state or transition to delete it      | `Alt+R`  |
| Connect     | Drag between states to create a transition    | —        |
| Auto Layout | Automatically rearrange the graph             | `Alt+A`  |
| Undo        | Revert the most recent change                 | `Alt+Z`  |
| Redo        | Restore the most recently undone change       | `Alt+Y`  |

### Creating a transition

Select the **Connect** tool, drag from the source state to the target state, and fill in the requested bits - the input bits and, in Mealy mode, the output bits - using only `0`, `1`, or `-`. The new transition is drawn as an arrow labeled with `input / output` in Mealy mode, or only the input bits in Moore mode.

### State labels

Each circle shows the **state name**; in Moore mode it additionally shows the state's output bits (`name / output`). The initial state is marked with an incoming arrow, and you can drag the arrow's tail handle onto another state to make that state the initial one.

### Hidden don't-care transitions

A transition whose input, next state, and (in Mealy mode) output are **all** don't-cares is not drawn in the editor, because it carries no information. While at least one such transition exists, an amber **"Hidden don't-care transitions"** warning badge appears next to the legend. These transitions are not lost - they still appear in the State Table and are drawn again as soon as they receive a concrete value.

## Validation and the locked editor

It is easy to accidentally create a row that resolves to no state or to states with conflicting outputs. The lock prevents you from working with a machine that cannot be rendered meaningfully.

The automaton is validated continuously while you work. As soon as it becomes invalid, the FSM Editor is **locked**: a full-screen **"Automaton Invalid"** overlay covers the canvas, all editor tools and shortcuts are disabled, and states can no longer be dragged or edited.

The overlay shows the precise reason for the invalidity. The editor legend and the hidden-transition warning badge are hidden while the editor is locked. Fix the reported issue in the State Table - the editor unlocks automatically as soon as the automaton is valid again.

The following rules make an automaton invalid:

1. The next state must exist.
2. In Moore mode, a transition's target states must agree on the output.
