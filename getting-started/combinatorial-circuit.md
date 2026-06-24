---
title: Getting Started
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Getting Started with Combinatorial Circuits

This guide introduces the core configuration steps required when initializing and managing any Combinatorial Circuit project - whether you are working with [Truth Tables](../views/truth-table.md), [KV Diagrams](../views/karnaugh-veitch.md), or [Quine-McCluskey](../views/quine-mccluskey/index.md).

## Project Creation

When creating a new combinatorial circuit project, you will be prompted with the project initialization dialog.

![Project creation popup window](/screenshots/combinatorial-circuit/creation.png)

### 1. Project Name
Specify a custom identifier for your project at the top of the dialog. 

::: info
Project names do not need to be unique. If you create multiple projects with the identical name, the application automatically handles duplicates by appending an incremental index (e.g., `Project (1)`, `Project (2)`).
:::

### 2. Variable Configuration
By default, projects initialize with **4 input variables** and **2 output variables**. You can scale the number of inputs (up to 10 variables) and outputs (up to 16 variables) up or down directly within the prompt to match your boolean function requirements.

![Expanding the input rename fields](/screenshots/combinatorial-circuit/settings_input.png)

* **Renaming Inputs**: Click the **"Rename"** button next to the input variable counter to expand the field view. This allows you to customize the labels of your independent boolean variables (e.g., changing $a, b, c$ to $x, y, z$).

![Expanding the output rename fields](/screenshots/combinatorial-circuit/settings_output.png)

* **Renaming Outputs**: Click **"Rename"** next to the output variable counter to expand and customize dependent variable labels for multi-output logic systems.

::: info
Up to **5 characters** per variable name are supported.
:::
---

## The Global Settings Menu

In the majority of views, you will find a **Settings** gear icon located in the top right corner of the panel interface.

![Global view settings button context](/screenshots/combinatorial-circuit/settings.png)

When clicked, this button reveals a dropdown panel containing configuration toggles customized for your current workspace. 

::: info
**State Synchronization:** While certain advanced configuration options are view-specific, core parameters are globally linked. Adjusting a shared setting within one view (e.g., the Truth Table) instantly applies that state across all other views (e.g., KV Diagram and QMC).
:::

The core combinatorial circuit settings include:

### Output Variable
In functions utilizing multiple dependent outputs, this switch can select which specific output variable is currently active and rendered.

### Function Type
Determines the algebraic optimization approach used to evaluate your boolean truth table:
* **Disjunctive Minimal Form (DMF)**: Configures the engine to focus on **minterms** (rows resulting in an output of `1`), optimizing your logic circuit into a sum-of-products representation.
* **Conjunctive Minimal Form (CMF)**: Configures the engine to focus on **maxterms** (rows resulting in an output of `0`), optimizing your logic circuit into a product-of-sums representation.

### Representation
Switches the operational logic state between two distinct structural visibility options:
* **Normal**: Displays the raw, unaltered truth table state or full canonical boolean expression.
* **Minimal**: Displays the optimized, reduced version of your boolean logic structure.

### Variation Selection

Unlike general configurations, the **Variation Selection** control is not housed inside the global settings gear menu. Instead, it appears contextually directly within the workspace workspace panels - such as right next to a minimized formula - whenever it becomes relevant.

![Variation selection dropdown menu](/screenshots/combinatorial-circuit/settings_variation.png)

In boolean optimization, a single truth table can sometimes yield multiple distinct, yet equally optimal, minimized expressions. This can happen due to overlapping prime implicants or flexible "don't care" conditions.

* **Dropdown Indices**: Clicking the variation button opens a clean dropdown listing all mathematically valid minimal solutions by index. Selecting a different index instantly updates the displayed formula.
* **Global Synchronization**: Like core settings, your selected variation index is globally synchronized. Choosing a variation while looking at a minimized formula will for example automatically update the corresponding highlights in the KV Diagram view.