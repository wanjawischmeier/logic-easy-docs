---
title: Prime Implicants
outline: deep
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Prime Implicants

The Prime Implicants view displays the second and final stage of the Quine-McCluskey method, where essential prime implicants are identified using a coverage chart to construct the minimal boolean expression.

![Prime implicants view overview](/screenshots/quine-mccluskey/prime-implicants/overview.png)

## Table Structure

The prime implicant chart is split into two primary column sections:

1. **Terms (Left)**: Displays the prime implicant in both its binary representation (e.g., `0101`) and literal algebraic variable form (e.g., $\bar{a}b\bar{c}d$).
2. **Minterm Columns (Right)**: Dedicated columns for each individual term index involved in the function, used to track coverage.

The grid cells are populated with the following symbols to identify which terms dominate the final expression:

| Symbol | Label | Description |
| :---: | :--- | :--- |
| $\times$ | **Covered Minterm** | Indicates that the respective prime implicant covers this minterm from the truth table. |
| $\oplus$ | **Essential Minterm** | Identifies a critical minterm that can only be covered by *one* single prime implicant. This forces that specific prime implicant to be part of the final minimized function. |
| <span style="border: 2px dashed #dc2626; padding: 2px 6px; border-radius: 0.375rem;"> </span> | **Essential Prime Implicant Bounds** | A dashed visual bounding box highlighting all minterms already satisfied by a selected essential prime implicant. Minterms within these bounds no longer need to be considered for further coverage. |

## Global Color Coding


![Side-by-side comparison linking Prime Implicant table bounds to the KV Diagram](/screenshots/quine-mccluskey/prime-implicants/kv_comp.png)

The **Essential Prime Implicant Bounds** use a global color-coding system that is consistent across views. If an essential prime implicant group is assigned a specific color in the table, it shares the exact same color when looking at it in the KV Diagram.

## Legend

![Prime implicants legend modal contents](/screenshots/quine-mccluskey/prime-implicants/legend.png)

Shows you a summarized version of this page inside the program, in case you need a reminder.

## Settings

![Prime implicants settings panel](/screenshots/quine-mccluskey/prime-implicants/settings.png)

- [Output Variable](../../getting-started/combinatorial-circuit.md#output-variable)
- [Function Type](../../getting-started/combinatorial-circuit.md#function-type)