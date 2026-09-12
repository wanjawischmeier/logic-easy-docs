---
title: Editor
outline: deep
---

# Editor

The State Machine Editor is the visual canvas for drawing the state machine. States are drawn as circles, transitions as directed arrows, and a toolbar at the bottom provides the tools.

![Editor canvas with states and transitions](/screenshots/state-machine/editor.png)

## Tools

The Editor legend summarizes the visual elements and the tools.

| Tool        | Purpose                                       | Shortcut |
| ----------- | --------------------------------------------- | -------- |
| Move        | Select and drag states to reposition them     | —        |
| Add         | Click empty space to create a state (max. 16) | `Alt+S`  |
| Remove      | Click a state or transition to delete it      | `Alt+R`  |
| Connect     | Drag between states to create a transition    | —        |
| Auto Layout | Automatically rearrange the graph             | `Alt+A`  |

## Creating a Transition

Select the **Connect** tool, drag from the source state to the target state, and fill in the requested bits - the input bits and, in Mealy mode, the output bits - using only `0`, `1`, or `-`. The new transition is drawn as an arrow labeled with `input / output` in Mealy mode, or only the input bits in Moore mode.

![Connecting two states with the Connect tool](/screenshots/state-machine/connect.png)

## State Labels

Each circle shows the **state name**; in Moore mode it additionally shows the state's output bits (`name / output`). The initial state is marked with an incoming arrow, and you can drag the arrow's tail handle onto another state to make that state the initial one.

Click a state in **Move** or **Add** mode to open its options: you can edit the state's name and color and mark it as the initial state. In Moore mode you can also edit the state's output bits.

![State options popup for editing a state](/screenshots/state-machine/state-options.png)

## Hidden don't-care transitions

A transition whose next-state bits and output bits are **all** don't-cares is not drawn in the editor, because it carries no state/output information. In Mealy mode, the output belongs to the transition; in Moore mode, the output belongs to the target state, so an all-don't-care next-state transition is hidden. The input may be concrete and does not affect this rule. While at least one such transition exists, an amber **"Hidden don't-care transitions"** warning badge appears next to the legend. These transitions are not lost - they remain in the State Table and are drawn again as soon as they receive a concrete next state or output.

![Warning that indicates which transitions are currently hidden](/screenshots/state-machine/hidden-transitions.png)

## Validation

The automaton is validated continuously while you work. As soon as it becomes invalid, the Editor is replaced by an **"Automaton Invalid"** view. The editor is not synchronized or editable while this view is shown. It displays the precise reason for the invalidity; fix the reported issue in the [State Table](./tables.md) to show the editor again.

The following rules make an automaton invalid:

1. **Every concrete next-state combination must exist.** A concrete next state must point to an existing state. A pattern containing don't-cares is expanded into every possible `0`/`1` combination, and **all** of those combinations must be used by existing state IDs. For example, `1-` expands to `10` and `11`; it is valid only when both states exist. With `n` state bits, an all-don't-care pattern such as `--` expands to $2^n$ combinations, so it is valid only when all $2^n$ corresponding state IDs exist. A missing combination, a removed target, or an empty target is invalid.
2. **Wildcard clusters can represent multiple targets.** A pattern such as `0-` is valid when every concrete combination it covers exists. This supports NFA-style transitions to multiple states without treating the cluster itself as an error. The cluster remains visible in the editor when it carries state or output information.
3. **In Moore mode, all resolved target states must agree on the output.** A transition that resolves to several target states is only valid if those states carry compatible output bits. Conflicting `0` and `1` values make the automaton invalid.

::: tip
Every editable cell in the [State Table](./tables.md) can always be toggled freely in the order `0 → 1 → - → 0`. The automaton is re-validated after every change, and the Editor locks only when a rule above is actually broken. Fixing the reported issue unlocks it again.
:::

---
