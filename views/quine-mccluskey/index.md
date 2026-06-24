---
title: Quine-McCluskey (QMC)
outline: deep
---

# Quine-McCluskey (QMC)

The Quine-McCluskey (QMC) view provides a step-by-step visual minimization process for your boolean functions using the tabular method.

This panel takes your truth table data and breaks down the logic optimization into clear, intermediate stages, helping you track exactly how a boolean expression is simplified to its minimal form.

## View Selection

You can toggle the QMC panel view between two essential stages of the minimization process using the top sub-view selection bar:


Click either option to jump into the detailed documentation for that specific step:

### [Grouping Table](./grouping-table.md)
![QMC sub-view toggle selector showing Grouping Table and Prime Implicants options](/screenshots/quine-mccluskey/selector_grouping.png)
![Grouping table view overview](/screenshots/quine-mccluskey/grouping-table/overview.png)
Displays the systematic pairing of minterms by the number of active inputs (ones), showing how adjacent cells combine.

### [Prime Implicants](./prime-implicants.md)
![QMC sub-view toggle selector showing Grouping Table and Prime Implicants options](/screenshots/quine-mccluskey/selector_pi.png)
![Prime implicants view overview](/screenshots/quine-mccluskey/prime-implicants/overview.png)
Displays the prime implicant chart used to identify the essential prime implicants required for the final minimal expression.

## Download Options

![Download menu showing screenshot option](/screenshots/quine-mccluskey/download.png)

| Format | Description |
|--------|-------------|
| **Screenshot** | Download a PNG image of the current QMC table view |
