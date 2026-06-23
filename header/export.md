---
title: Export
--- 

# Export

The export dropdown allows you to export parts of the project in various formats. It is not possible to import these formats back into LogicEasy. 

![export popup with export list](/screenshots/header/export/image.png)

Export is only possible when a project is open, and varies depending on the project type (Combinatorial Circuit or State Machine).

In general, export is possible in four formats: 

- **LogicCircuits** (.lc): <br>
For Combinatorial Circuit projects, you can also select here exactly how the representation is to appear: whether minimal, disjunctive, or conjunctive, and which gate types are to be used.
For state machines, you can select the encoding and the flip-flop type. 

- **VHDL**: <br>
In Combinatorial Circuit projects, you can select the method for the VHDL export, whether ‘case when’ or Boolean expressions, and also specify whether the representation is disjunctive or conjunctive. 

- **Screenshots**: <br>
This generates a ZIP file containing all relevant views. These views have to be open in order for the screenshots to be created; it is also acceptable for them to be open in a background tab. No screenshots are generated for LogicCircuits. 

- **LaTeX**: <br>
For Combinatorial Circuit projects, the table and the KV diagram are exported to LaTeX here.