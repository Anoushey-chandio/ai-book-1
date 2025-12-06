# Research: Diagramming Tool for Docusaurus

**Date**: 2025-12-06

## Decision

We will use **Mermaid.js** for all diagrams within the book.

## Rationale

- **Native Integration**: Docusaurus has built-in support for Mermaid.js, allowing diagrams to be rendered directly from Markdown code blocks. This eliminates the need for external tools or image files.
- **Version Control Friendly**: Because diagrams are defined as text, they are easily versioned with Git, and changes can be tracked and reviewed effectively.
- **Accessibility**: As text, diagrams are more accessible than images.
- **Ease of Use**: The syntax is relatively simple for creating a wide variety of common diagrams (flowcharts, sequence diagrams, etc.).

## Alternatives Considered

- **diagrams.net (draw.io) exported as SVG/PNG**: This is a powerful tool, but it requires exporting images, which are harder to maintain, version, and keep stylistically consistent.
- **PlantUML**: Another powerful text-based tool, but it requires a Java dependency and is not as seamlessly integrated into Docusaurus as Mermaid.js.
