---
title: Getting Started
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Getting Started with State Machines

This guide explains how to create a State Machine (FSM) project in LogicEasy. The two FSM-specific panels - the [State Table](../views/state-machine/tables.md) and the [FSM Editor](../views/state-machine/editor.md) - are described in their own articles, and the general panels are covered under [The Panels](#the-panels).

## The State Machine Model

A finite state machine (FSM) is a model for systems that switch between a finite number of states. It is used whenever a behavior depends on previous inputs, for example to describe control units, traffic lights, or any circuit that moves through defined steps.

A state machine consists of a finite number of **states** and the **transitions** between them.

### States

- Each state has a **name** and a **binary index**.
- New states are named `q0`, `q1`, ... by default. Names can be changed, but they must be unique and are limited to 12 characters.
- The **binary index** encodes the position of a state. It is assigned automatically in the order in which the states are created and cannot be changed.
- A single state can be marked as the **initial state**, which is the state the machine starts in. The initial state is optional; in the editor it is marked with an incoming arrow.

### Transitions

- A transition connects a **source state** to a **next state**.
- Every state defines exactly one next state for each input combination.
- In Mealy mode a transition also provides an output; in Moore mode the output belongs to the state, see [Mealy and Moore](#mealy-and-moore).

### Inputs, Outputs and Don't-Cares

- Input and output values are bit patterns. Each bit is `0`, `1`, or a don't-care value, which is displayed as `-`.
- A don't-care matches both `0` and `1`. For an input it therefore covers several input combinations at once, and as a next state it points to several states at once.
- A don't-care can also be used for an output bit whose value does not matter. The minimization is then free to choose the value that leads to the simplest circuit, so the machine can be reduced without losing any behavior that is actually needed.

### Mealy and Moore

The model determines where the output is produced and where it is displayed:

- In **Mealy** mode the output belongs to the transition. It is emitted when the machine takes that transition, and it is displayed on the arrow behind the `/` symbol.
- In **Moore** mode the output belongs to the state. It is emitted when the machine reaches that state, and it is displayed on the state behind the `/` symbol. A transition therefore has no output of its own; the output shown for a transition is the output of the next state.

## Project Creation

When creating a new State Machine project, the project initialization dialog is shown.

![Project creation popup window](/screenshots/state-machine/project-init.png)

After creation, the project opens with the [State Table](../views/state-machine/tables.md) and the [FSM Editor](../views/state-machine/editor.md) side by side. Both show the same machine and stay synchronized: a change in one panel is applied to the other.

### 1. Project Name

Specify a custom identifier for your project at the top of the dialog. The name may contain letters, digits, spaces, `_`, `-`, `(` and `)`, is limited to 40 characters, and must not be empty.

::: info
Project names do not need to be unique. If multiple projects share the same name, an incremental index is appended (e.g. `Project (1)`, `Project (2)`).
:::

### 2. Machine Type

Choose one of the two models described under [Mealy and Moore](#mealy-and-moore):

- **Mealy**: The output is displayed on the transitions.
- **Moore**: The output is displayed on the states.

### 3. Input and Output Bits

Set the number of input bits and output bits, each between 1 and 5. These values define the width of the bit patterns that are used for inputs and outputs in the state table and the editor.

::: warning
The number of input and output bits cannot be changed after the project has been created.
:::

---

## The Panels

### FSM specific panels

The [State Table](../views/state-machine/tables.md) shows the machine as a table of states and bit patterns. It lists every state with its name and binary index, and every transition with its input, next state, and output. It can be convenient to define a machine primarily here, since the values can be entered quickly and directly.

![State Table panel with states and transitions](/screenshots/state-machine/tables.png)

The [FSM Editor](../views/state-machine/editor.md) is the visual canvas for drawing the machine.

![FSM Editor canvas with states and transitions](/screenshots/state-machine/editor.png)

### General panels

Besides the FSM-specific panels, the following general panels can be used with a State Machine project:

- The [LogicCircuits](../views/logic-circuits.md) view is read-only and draws the machine as a circuit.
- The [Karnaugh-Veitch](../views/karnaugh-veitch.md) view minimizes the machine's next-state functions and output functions over the current-state bits $Z^n$ and the input bits $X^n$. It is available from **View ▸ Minimization** once at least two minimization variables exist.

## Validity

A state machine has to follow a few rules to be unambiguous. The machine is validated continuously while you work, and the rules are listed in the [State Table article](../views/state-machine/tables.md#validation).

While the machine is invalid, the [FSM Editor](../views/state-machine/editor.md) panel is replaced by a message that states the reason, and the Editor cannot be used until the problem is fixed. The [State Table](../views/state-machine/tables.md) stays editable, so corrections can be made there.
