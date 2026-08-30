---
title: FSM Editor
outline: deep
---

# FSM Editor

The FSM Editor is the visual canvas for drawing the state machine. States are drawn as circles, transitions as directed arrows, and a toolbar at the bottom provides the tools.

![FSM Editor canvas with states and transitions](/screenshots/state-machine/fsm-engine.png)

## Tools

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

## Creating a Transition

Select the **Connect** tool, drag from the source state to the target state, and fill in the requested bits - the input bits and, in Mealy mode, the output bits - using only `0`, `1`, or `-`. The new transition is drawn as an arrow labeled with `input / output` in Mealy mode, or only the input bits in Moore mode.

![Connecting two states with the Connect tool](/screenshots/state-machine/connect.png)

## State Labels

Each circle shows the **state name**; in Moore mode it additionally shows the state's output bits (`name / output`). The initial state is marked with an incoming arrow, and you can drag the arrow's tail handle onto another state to make that state the initial one.

Click a state in **Move** or **Add** mode to open its options: you can edit the state's name and color and mark it as the initial state. In Moore mode you can also edit the state's output bits.

![State options popup for editing a state](/screenshots/state-machine/state-options.png)

## Hidden don't-care transitions

A transition whose input, next state, and (in Mealy mode) output are **all** don't-cares is not drawn in the editor, because it carries no information. While at least one such transition exists, an amber **"Hidden don't-care transitions"** warning badge appears next to the legend. These transitions are not lost - they still appear in the State Table and are drawn again as soon as they receive a concrete value.

![Warning that indicates which transitions are currently hidden](/screenshots/state-machine/hidden-transitions.png)

## Validation

The automaton is validated continuously while you work. As soon as it becomes invalid, the FSM Editor is **locked**: a full-screen **"Automaton Invalid"** overlay covers the canvas, all editor tools and shortcuts are disabled, and states can no longer be dragged or edited. The overlay shows the precise reason for the invalidity; fix the reported issue in the [State Table](./state-table.md) to unlock the editor.

The following rules make an automaton invalid:

1. **The next state must exist.** Every transition must reference an existing state as its next state. A transition whose next-state pattern matches no existing state, or which points to a state that has been removed, is invalid.
2. **In Moore mode, a transition's target states must agree on the output.** A transition that resolves to several target states is only valid if those states carry the same output bits. Conflicting outputs make the automaton invalid.

::: tip
Because a single transition row can use don't-cares to cover multiple input combinations or target multiple states, it is easy to accidentally create a row that resolves to no state or to states with conflicting outputs. The lock prevents you from working with a machine that cannot be rendered meaningfully.
:::

---
