---
title: Grouping Table
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Grouping Table

The Grouping Table view displays the initial stage of the Quine-McCluskey minimization process, where minterms are organized by the number of active inputs and systematically merged.

![Grouping table view overview](/screenshots/quine-mccluskey/grouping-table/overview.png)

The table organizes and identifies terms using the following dedicated columns:

| Column | Label | Description |
| :---: | :--- | :--- |
| $K_n$ | **Term Class** | Groups terms systematically based on the number of `1`s (for Disjunctive Minimal Form / DMF) or `0`s (for Conjunctive Minimal Form / CMF) they contain. |
| **Term** | **Term** | A given term's binary representation. |
| **#** | **Term Index** | The decimal equivalent of the term's binary representation, making it easy to cross-reference with the original truth table rows. |

## Term Merging & Prime Implicants

As terms are successfully paired across adjacent groups, the tool tracks which terms can no longer be simplified. 

![Terms highlighted that cannot be merged further](/screenshots/quine-mccluskey/grouping-table/pi.png)

When a term cannot be combined with any other term in the adjacent group, it is marked as a **Prime Implicant (PI)**. These unmergeable terms are visually highlighted in the table, indicating they must be carried over to the final selection process.

## Hover & Pathing Feature

When multiple combination paths result in the exact same minimized term, the table preserves every unique path as an individual row. Redundant duplicate terms are only discarded when moving forward to the Prime Implicants stage.

![Hovering over a cell to reveal its specific merge path](/screenshots/quine-mccluskey/grouping-table/pathing.png)

You can trace the lineage of any simplified term using the interactive hover feature:

- **Path Tracking**: Hovering over a cell instantly highlights all the parent cells that merged to create it.
- **Multi-Path Layout**: If there are two different ways to arrive at the term `8, 9, 10, 11: 10--`, two separate cells are displayed. Hovering over the first one highlights its specific merge path, while hovering over the second reveals the alternative path.

## Legend

![Grouping table legend modal contents](/screenshots/quine-mccluskey/grouping-table/legend.png)

Shows you a summarized version of this page inside the program, in case you need a reminder.

## Settings

![Grouping table settings panel](/screenshots/quine-mccluskey/grouping-table/settings.png)

- [Output Variable](../../getting-started/combinatorial-circuit.md#output-variable)
- [Function Type](../../getting-started/combinatorial-circuit.md#function-type)