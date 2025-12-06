# Quickstart: Contributing a New Chapter

**Date**: 2025-12-06

This guide provides a quick overview for contributors on how to create and add a new chapter to the "Physical AI & Humanoid Robotics" book.

## 1. Understand the Structure

The book is organized into **Modules** and **Chapters**.
- A **Module** is a top-level directory under `docs/`.
- A **Chapter** is a Markdown file (`.md` or `.mdx`) within a module's directory.

## 2. Create a New Chapter File

1.  **Navigate** to the appropriate module directory (e.g., `docs/module-1-ros2/`). If the module doesn't exist, create a new directory.
2.  **Create a new Markdown file**. Name it descriptively using kebab-case (e.g., `01-basic-ros-concepts.md`). The numeric prefix helps with ordering.

## 3. Add Content to Your Chapter

- **Frontmatter**: Start your file with Docusaurus frontmatter to set the title and sidebar position.
  ```markdown
  ---
  title: Basic ROS 2 Concepts
  sidebar_position: 1
  ---
  ```
- **Content**: Write your content using standard Markdown.
- **Code Snippets**: Use Markdown code fences.
  ````markdown
  ```cpp
  #include <iostream>

  int main() {
    std::cout << "Hello, ROS 2!" << std::endl;
    return 0;
  }
  ```
  ````
- **Diagrams**: Use Mermaid.js syntax within a `mermaid` code fence.
  ````markdown
  ```mermaid
  graph TD;
      A[Start] --> B{Is it working?};
      B -- Yes --> C[End];
      B -- No --> D[Fix it!];
      D --> B;
  ```
  ````

## 4. Update the Sidebar

1.  Open the `sidebars.js` file in the root directory.
2.  Locate the array for the module you are adding to.
3.  **Add the path** to your new chapter file. The path is relative to the `docs` directory and excludes the `.md` extension.

   ```javascript
   // sidebars.js
   
   // ...
       {
         type: 'category',
         label: 'Module 1: The Robotic Nervous System',
         items: [
           'module-1-ros2/01-basic-ros-concepts', // <-- Add your new file here
           // ... other chapters
         ],
       },
   // ...
   ```

## 5. Preview Your Changes

Run the local development server to see your new chapter and ensure it renders correctly.

```bash
npm run start
```
