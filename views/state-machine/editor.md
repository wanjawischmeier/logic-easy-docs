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

A state has exactly one next state per input, so every state and input pair corresponds to a single row in the [State Table](./tables.md). A transition drawn in the editor always has a concrete next state and never creates don't-cares, see [Hidden Transitions](#hidden-transitions).

If a row already exists for the state and input you draw, one of three things happens:

- **The row is hidden**, because its next state contains don't-cares. The transition you draw replaces it.
- **The row is visible and leads to the same state.** The next state stays the same; in **Mealy** mode the drawn output updates that row.
- **The row is visible and leads to a different state.** The popup stays locked and explains that one row holds one next state. Change the row in the [State Table](./tables.md) instead.

In **Moore** mode the output belongs to the state, so the output shown for a transition is the output of the state it leads to.

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

The editor only draws transitions with a single, concrete next state. A next state that contains a don't-care (`-`) stands for several states at once and therefore has no unique target, so the transition is not drawn as an arrow; it only exists in the [State Table](./tables.md).

Such a transition becomes visible again as soon as it receives a concrete next state, and drawing a transition for the same state and input replaces it.

## Validation

The machine is validated continuously while you work. As soon as it becomes invalid, the Editor is replaced by a notification that states the reason, and it cannot be edited while this notification is shown. Correcting the reported problem in the [State Table](./tables.md) restores the Editor. The validation rules are listed in the [State Table article](./tables.md#validation).

---
