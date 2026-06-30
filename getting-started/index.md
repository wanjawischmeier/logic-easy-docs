---
title: Getting Started
outline: deep
---

# Getting Started with LogicEasy

This guide serves as the initial entry point into the LogicEasy documentation.
Here you get an overview of the [project management](#project-lifecycle) and the general [panel/view management](#general-panel-view-management) within projects, with links to more in-depth articles.

## Landing Page

![landing page](/screenshots/getting-started/landing-page.png)

The landing page lets you [create](#create-new-projects) new projects and [manage](#manage-existing-projects) existing ones.

## Project Lifecycle

### Create new projects

New projects can be created on the landing page under "Getting started".

Here you can select the project type ([Combinatorial Circuit](/getting-started/combinatorial-circuit.md) or [State Machine](/getting-started/state-machine.md)). For Combinatorial Circuit projects you can also choose between different layouts, so you start directly with a specific view layout.

![Getting Started section](/screenshots/getting-started/create-project.png)

Available layouts:

| Project Type | Layout | Initial panels |
|---|---|---|
| Combinatorial Circuit | Truth Table | [Truth-Table](/views/truth-table.md) and [KV](/views/karnaugh-veitch.md) |
| Combinatorial Circuit | Karnaugh-Veitch | [Truth-Table](/views/truth-table.md) and [KV](/views/karnaugh-veitch.md) |
| Combinatorial Circuit | Quine-McCluskey | [KV](/views/karnaugh-veitch.md) and [QMC](/views/quine-mccluskey/) |
| State Machine | State Machine | [State Table](/views/state-table.md) and [FSM Editor](/views/fsm-editor.md) |

The creation process differs depending on the selected project type.

[Continue here for Combinatorial Circuit projects](/getting-started/combinatorial-circuit.md).

[Continue here for State Machine projects](/getting-started/state-machine.md).

::: tip
New projects can be created at any time with the same options via the [Header](/header/).
:::


### Manage existing projects

![Recently opened section](/screenshots/getting-started/recently-opened.png)

Your 5 most recently opened projects are shown here, the most recent first. Older projects are **discarded**!

If you want to keep projects permanently, you have to **[save](/header/project)** them to your PC.

You can then **[open](/header/project)** projects saved on disk at a later time.

To **rename** an open project, click on its current name in the top right corner.

![Rename project](/screenshots/getting-started/rename-project.png)


### Close projects

Open projects can be closed either via the [Header](/header/project.md) under "Project" -> "Close", or with the cross in the top right corner.

![close project](/screenshots/getting-started/close-project.png)


## General panel/view management

Within projects, panels/views can be [opened](/header/view.md).

Via drag and drop, views can be **moved** within a project to change the layout.

![move view](/screenshots/getting-started/move-view.png)


And closed:

![close view](/screenshots/getting-started/close-view.png)
