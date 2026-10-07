---
title: Editor
outline: deep
---

# Editor

The State Machine Editor is the visual canvas for drawing the state machine. States are drawn as circles, transitions as directed arrows, and a toolbar at the bottom provides the tools. It shows the same machine as the [State Table](./tables.md) and stays synchronized with it.

![Editor canvas with states and transitions](/screenshots/state-machine/editor.png)

## Tools

The toolbar at the bottom of the canvas provides the tools. A tool stays active until another one is selected.

| Tool        | Purpose                                       | Shortcut |
| ----------- | --------------------------------------------- | -------- |
| Move        | Select and drag states to reposition them     | —        |
| Add         | Click empty space to create a state (max. 16) | `Alt+S`  |
| Remove      | Click a state or transition to delete it      | `Alt+R`  |
| Connect     | Drag between states to create a transition    | —        |
| Auto Layout | Automatically rearrange the graph             | `Alt+A`  |

- **Move**: drag a state to a new position. Clicking a state opens its options, see [States](#states).
- **Add**: click an empty area to create a new state.
- **Remove**: click a state or a transition to delete it.
- **Connect**: drag from one state to another to create a transition, see [Creating a Transition](#creating-a-transition).
- **Auto Layout**: arrange all states and transitions automatically.

The canvas can be moved with every tool: dragging an empty area pans the view. In the **Add** and **Remove** tools the states are not draggable, so there dragging over a state moves the canvas as well.

In addition, the **FSM** menu above the canvas provides **Load FSM** to load a state machine from a `.fsm` file into the editor, as well as another entry for **Auto Layout**.

## Creating a Transition

Select the **Connect** tool and drag from the source state to the target state. A popup then asks for the transition bits, one box per input bit and, in Mealy mode, one per output bit. Only the characters `0`, `1` and a don't-care value (`-`) are accepted. Use `Tab` and the arrow keys to move between the boxes and `Enter` to apply the transition or `Escape` to cancel it. `Enter` applies the transition only once every box is filled and the transition is valid; otherwise the popup stays open and highlights the missing boxes.

![Connecting two states with the Connect tool](/screenshots/state-machine/connect.png)

The new transition is drawn as an arrow labeled with `input / output` in Mealy mode, or with only the input bits in Moore mode.

### Overlapping Transitions

A state can have only one next state per input. When a transition is drawn for a state and input that already has one, the editor reacts as follows:

1. **The targets form a possible pattern.** If the binary indexes of the wanted next states can be combined into a single pattern with don't-cares, the editor merges them. The State Table then stores one next state with don't-care bits, and the editor draws an arrow to each covered state. In **Moore** mode the editor only merges states that already show the same output, because the output of the merged transition is the output of the next state; otherwise the popup explains that the outputs differ and keeps the transition blocked.
2. **The existing row has only don't cares as next state.** If the existing next state is all don't-cares, the new transition replaces it with its concrete next state and output.
3. **The targets do not form one pattern.** Every pattern with don't-cares would also cover states that are not wanted. The popup lists the additional states a pattern would cover and does not allow saving. In this case the targets must be adjusted in the [State Table](./tables.md), or the states must be created in an order that places the wanted targets next to each other, since the binary index follows the creation order.

The same rules apply in Mealy and Moore mode. In **Moore** mode the output belongs to the state, so all states that are merged into one transition must show the same output. In **Mealy** mode the output belongs to the transition: drawing a transition onto an existing one updates its output, and when several targets are merged, an output bit that differs becomes a don't-care. The popup only reports a transition that cannot be saved, together with the reason.

## States

States are represented by circles. Each circle shows the **state name**; in Moore mode it additionally shows the state's output bits in the form `name / output`. The initial state is marked with an incoming arrow whose tail handle can be dragged onto another state to make that state the initial one. The initial state is optional; if no state is marked, no arrow is drawn.

Click a state in **Move** or **Add** mode to open its options. There you can:

- edit the state's **name**,
- pick a **color**,
- toggle whether the state is the **initial state**,
- and, in Moore mode, edit the state's **output bits**.

Press `Enter` to apply the changes or `Escape` to discard them. Names must be unique and follow the same rules as in the [State Table](./tables.md#states); a duplicate name prevents saving.

![State options popup for editing a state](/screenshots/state-machine/state-options.png)

## Hidden Transitions

The editor does not draw a transition whose next state is left completely open, i.e. a transition whose next-state bits are **all** don't-cares. Such a transition allows every next state, so it carries no information for the drawing and is not shown as an arrow; it only exists in the [State Table](./tables.md). This keeps the canvas readable, because otherwise every state would show an arrow to every other state.

Such a transition becomes visible again as soon as it receives a concrete next state, and drawing a transition for the same state and input replaces it.

## Validation

The machine is validated continuously while you work. As soon as it becomes invalid, the Editor is replaced by a notification that states the reason, and it cannot be edited while this notification is shown. Correcting the reported problem in the [State Table](./tables.md) restores the Editor. The validation rules are listed in the [State Table article](./tables.md#validation).

---
