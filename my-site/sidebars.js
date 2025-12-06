// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro', // The main introduction page
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      link: {type: 'doc', id: 'module-1-ros2/introduction-to-ros2'},
      items: [
        'module-1-ros2/introduction-to-ros2',
        'module-1-ros2/ros2-actions-and-services',
        'module-1-ros2/ros2-tf2-transforms',
        'module-1-ros2/ros2-navigation-basics',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      link: {type: 'doc', id: 'module-2-digital-twin/intro-to-simulation'},
      items: [
        'module-2-digital-twin/intro-to-simulation',
        'module-2-digital-twin/robot-model-creation',
        'module-2-digital-twin/unity-simulation-integration',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      link: {type: 'doc', id: 'module-3-ai-robot-brain/intro-to-isaac-sim'},
      items: [
        'module-3-ai-robot-brain/intro-to-isaac-sim',
        'module-3-ai-robot-brain/reinforcement-learning-with-isaac',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {type: 'doc', id: 'module-4-vla/foundations-of-vla'},
      items: [
        'module-4-vla/foundations-of-vla',
        'module-4-vla/prompt-engineering-for-robots',
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project: The Autonomous Humanoid',
      link: {type: 'doc', id: 'capstone-project/project-overview'},
      items: [
        'capstone-project/project-overview',
        'capstone-project/system-integration',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Requirements & Setup',
      link: {type: 'doc', id: 'hardware-setup/hardware-components'},
      items: [
        'hardware-setup/hardware-components',
        'hardware-setup/lab-and-cloud-options',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {type: 'doc', id: 'tutorial-basics/ros2-basic-publisher'}, // Link to the first tutorial
      items: [
        'tutorial-basics/ros2-basic-publisher',
      ],
    },
  ],
};

export default sidebars;
