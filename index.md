---
layout: home

hero:
  name: "LogicEasy - Documentation"
  text: "Documentation for LogicEasy"
  tagline: My great project tagline
  image:
    src: /le_1024_iti.png
    alt: VitePress
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started/
    - theme: alt
      text: Try It
      link: https://wanjawischmeier.github.io/logic-easy/

features:
  - title: Truth Tables
    icon:
      src: /screenshots/truth-table/icon.png
      alt: Truth Table
    details: Edit truth tables directly and use search to perform targeted edits quickly.
    link: /views/truth-table
  - title: Karnaugh-Veitch
    icon:
      src: /screenshots/karnaugh-veitch/icon.png
      alt: Karnaugh-Veitch
    details: Visualize the minimized form of your truth table on a KV diagram.
    link: /views/karnaugh-veitch
  - title: Quine McCluskey
    icon:
      src: /screenshots/quine-mccluskey/icon.png
      alt: Quine McCluskey
    details: View the grouping table with parent/merge paths on hover and the prime implicant table showing which minterms each prime implicant covers.
    link: /views/quine-mccluskey/
  - title: State Machines
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /views/quine-mccluskey/
  - title: LogicCircuits
    details: Readonly view of the LogicCircuits canvas with automatic rendering of the circuits
    link: /views/logic-circuits/
    icon:
      src: /screenshots/logic-circuits/icon.png
      alt: Quine McCluskey
  - title: Export into various formats
    icon: 📤
    details: Export designs in multiple formats for seamless integration and documentation. Generate VHDL for hardware workflows, LogicCircuits files for simulation, LaTeX for technical documentation, or images for presentations and reports.
    link: /header/export
---
