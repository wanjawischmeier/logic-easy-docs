---
title: Getting Started
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Getting Started with State Machines

This guide introduces the core steps for creating and working with State Machine (FSM) projects in LogicEasy. It covers the [project creation](#project-creation) and the underlying [state machine model](#the-state-machine-model). The two panels of a State Machine project - the [State Table](../views/state-table.md) and the [FSM Editor](../views/fsm-editor.md) - are documented in their own view articles.

## Project Creation

When creating a new State Machine project, you are prompted with the project initialization dialog.

![Project creation popup window](/screenshots/state-machine/project-init.png)

### 1. Project Name

Specify a custom identifier for your project at the top of the dialog.

::: info
Project names do not need to be unique. If you create multiple projects with the identical name, the application automatically handles duplicates by appending an incremental index (e.g., `Project (1)`, `Project (2)`).
:::

### 2. Machine Type

Choose between the two common FSM models:

* **Mealy**: The output depends on the current state and the input. Output bits are stored on each individual transition.
* **Moore**: The output depends only on the current state (the 'next' state of a transition). Output bits are stored on the states themselves, and transitions only describe the input and the next state.

### 3. Input and Output Bits

You must set the number of input bits and output bits, each between 1 and 5. These values define the width of the bit patterns used for inputs and outputs in the state table and the editor.

::: warning
The number of input and output bits cannot be changed after the project has been created.
:::

---

## The State Machine Model

A finite state machine consists of **states** and the **transitions** between them.

* Each state has a **name** (new states are named `q0`, `q1`, ... as default) and a **binary index** that encodes its position (for example `0`, `1`, ...).
* The **initial state** is the state the machine starts in. The first state added becomes the initial state, and it is marked with an incoming arrow in the editor.
* A **transition** describes what happens for a given input combination: it connects a source state to a next state and optionally carries an output.
* **Input** and **output** values are bit patterns. Every bit is either `0`, `1`, or a don't-care value `x` (displayed as `-`). A don't-care matches both `0` and `1`, so a single transition row can cover several input combinations or target several states.

### Mealy vs Moore in practice

The chosen model determines where the output lives: in **Mealy** mode the output belongs to the transition, while in **Moore** mode it belongs to the state itself.

---

## The Panels

After creation, a State Machine project opens with two panels side by side: the [State Table](../views/state-table.md) and the [FSM Editor](../views/fsm-editor.md).

![State Table panel with states and transitions](/screenshots/state-machine/tables.png)

The [State Table](../views/state-table.md) is the textual representation of the machine. It lists every state with its name and binary index, and every transition with its input, next state, and output. It is the primary place to correct invalid data.

![FSM Editor canvas with states and transitions](/screenshots/state-machine/editor.png)

The [FSM Editor](../views/fsm-editor.md) is the visual canvas for drawing the machine. States are drawn as circles, transitions as directed arrows, and a toolbar at the bottom provides the tools.

::: tip
The automaton is validated continuously while you work. As soon as it becomes invalid, the FSM Editor locks and shows an "Automaton Invalid" overlay. See the [FSM Editor view](../views/fsm-editor.md#validation) for the validation rules.
:::
