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

### Rules

Each input pattern can only be used once per state, because the [State Table](./tables.md) stores exactly one next state per state and input. Drawing a second transition from the same state with the same input is therefore handled in one of three ways:

1. **The targets share one don't-care pattern** (their binary indexes differ in exactly one bit): the editor combines them automatically. While you type, the popup shows an amber note that both targets will share one row (for example `-1`). The State Table then stores a single next state with a don't-care bit, and the editor draws an arrow to each of the combined targets.
2. **The row is a don't-care row** (all of its next-state cells are `-`, so every next state is allowed): such rows are not drawn in the editor (see [Hidden don't-care transitions](#hidden-dont-care-transitions)). Drawing the transition for exactly this state and input replaces the don't-care row: the State Table then stores the concrete next state, and the row's previous output is replaced by the new one (a short note reports it if the row already had an output).
3. **The targets do not fit one pattern**: every don't-care pattern would also cover states in between, so the two next states would silently become targets as well. The popup shows which states a pattern would add and does not let you save. The State Table stores one next state per state and input, so it cannot display this configuration - use a don't-care cluster inside the [State Table](./tables.md), or add the states in an order that puts the targets next to each other, because the binary index follows the creation order.

This works the same in Mealy and Moore mode. In Moore mode the combined targets must also agree on their output bits; conflicting outputs would make the automaton invalid, so the popup keeps the transition blocked. In Mealy mode the row keeps its own output: an output that already contains don't-cares stays unchanged when the new transition fits it, while a different output blocks the save, because one row carries one output.

## State Labels

Each circle shows the **state name**; in Moore mode it additionally shows the state's output bits (`name / output`). The initial state is marked with an incoming arrow, and you can drag the arrow's tail handle onto another state to make that state the initial one. The initial state is optional - if no state is marked as initial, no arrow is drawn.

Click a state in **Move** or **Add** mode to open its options: you can edit the state's name and color and mark it as the initial state. In Moore mode you can also edit the state's output bits. Press `Enter` to apply the changes or `Escape` to discard them. Names support up to 12 characters, are limited to letters, digits, spaces, `_` and `-`, and must be unique - a duplicate name is rejected and the popup cannot be saved in this case.

![State options popup for editing a state](/screenshots/state-machine/state-options.png)

## Hidden don't-care transitions

A transition whose next-state bits are **all** don't-cares allows **every** next state: the input does not matter for the next-state function and the transition is a pure don't-care, which is what makes the minimization work. Such rows are therefore **not drawn** in the editor - otherwise every auto-generated don't-care row (for example after adding a new state) would fill the canvas with an arrow to each state. The input bits may be concrete and do not affect this rule, and in Mealy mode the transition may still carry an output. While at least one such transition exists, an amber **"Hidden don't-care transitions"** warning badge appears next to the legend. These transitions are not lost - they remain in the State Table and are drawn again as soon as they receive a concrete next state.

Drawing a transition for exactly the same state and input **replaces** that don't-care row. This is the only case in which a drawn transition may overwrite an existing row; rows that already carry concrete next states can only be extended or combined (see [Creating a Transition](#creating-a-transition)).

![Warning that indicates which transitions are currently hidden](/screenshots/state-machine/hidden-transitions.png)

## Validation of the state machine

The automaton is validated continuously while you work. As soon as it becomes invalid, the Editor is replaced by an **"Automaton Invalid"** view. The editor is not synchronized or editable while this view is shown. It displays the precise reason for the invalidity; fix the reported issue in the [State Table](./tables.md) to show the editor again.

The following rules make an automaton invalid:

1. **Every concrete next-state combination must exist.** A concrete next state must point to an existing state. A pattern containing don't-cares is expanded into every possible `0`/`1` combination, and **all** of those combinations must be used by existing state IDs. For example, `1-` expands to `10` and `11`; it is valid only when both states exist. A missing combination, a removed target, or an empty target is invalid.
2. **All-don't-care next states never lock the editor.** A next state that is **all** don't-cares (`--`) allows every next state and is ignored by the validation. While the number of states is not a power of two, such a pattern also covers indexes that no state uses yet; the [State Table](./tables.md) then shows an amber **"Don't-care next states also cover …"** warning instead of locking the editor.
3. **Don't care statements as next states can represent multiple target states.** A pattern such as `0-` is valid when every concrete combination it covers exists. This supports NFA-style transitions to multiple states without treating the cluster itself as an error. Such a partial cluster stays visible in the editor (one arrow per covered state); only a next state that is **all** don't-cares is not drawn, see [hidden don't-care transitions](#hidden-dont-care-transitions).
4. **In Moore mode, all resolved target states must agree on the output.** A transition that resolves to several target states is only valid if those states carry compatible output bits. Conflicting `0` and `1` values make the automaton invalid. Transitions with an all-don't-care next state are excluded, because they do not resolve to a single target.

::: tip
Every editable cell in the [State Table](./tables.md) can always be toggled freely in the order `0 → 1 → - → 0`. The automaton is re-validated after every change, and the Editor locks only when a rule above is actually broken. Fixing the reported issue unlocks it again.
:::

---
