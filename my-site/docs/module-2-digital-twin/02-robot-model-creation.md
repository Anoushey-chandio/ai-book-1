---
title: "Robot Model Creation: URDF/SDF"
sidebar_position: 2
---

# Robot Model Creation: URDF/SDF

Before a robot can be simulated in environments like Gazebo, its physical properties and structure must be digitally defined. This is where **Robot Description Formats** come into play. The two primary formats used in ROS 2 and Gazebo are **URDF** (Unified Robot Description Format) and **SDF** (Simulation Description Format).

## URDF: Unified Robot Description Format

URDF is an XML format for describing all aspects of a robot. It's primarily designed for describing the kinematic and inertial properties of a robot for use in **ROS** (Robot Operating System) and **RViz** (ROS Visualization).

Key elements of a URDF file:
-   **`<link>`**: Defines the physical and inertial properties of a rigid body part of the robot (e.g., a torso, an arm segment, a wheel).
    -   `inertial`: Mass and inertia tensor.
    -   `visual`: Visual properties (geometry, color).
    -   `collision`: Collision geometry.
-   **`<joint>`**: Describes the kinematic and dynamic properties of the connection between two links.
    -   `parent`, `child`: The links connected by the joint.
    -   `type`: The type of joint (e.g., `revolute`, `continuous`, `prismatic`, `fixed`).
    -   `axis`: The axis of rotation or translation.
    -   `limit`: Software limits for joint position, velocity, and effort.

**Why URDF?** It's human-readable, widely supported in the ROS ecosystem, and excellent for kinematics, dynamics, and visualization.

## SDF: Simulation Description Format

SDF is also an XML format but is specifically designed to describe objects and environments for **Gazebo**. While URDF can describe a single robot, SDF can describe an entire world, including:
-   Multiple robots.
-   Static objects (walls, tables).
-   Lights, sensors, and terrain.
-   More detailed physics properties (e.g., friction coefficients).

**Why SDF?** It's more expressive for simulation, providing a richer set of elements for physics, sensors, and environmental interactions. Gazebo internally converts URDF models to SDF when importing them into a world.

## Example: URDF for a Simple Humanoid Leg Segment

Let's look at a simplified URDF snippet for a single segment of a humanoid leg, demonstrating a revolute joint.

```xml
<?xml version="1.0"?>
<robot name="simple_leg">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.1 0.1 0.1"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 0.8 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.1 0.1 0.1"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0"/>
      <mass value="0.5"/>
      <inertia ixx="0.001" ixy="0.0" ixz="0.0"
               iyy="0.001" iyz="0.0"
               izz="0.001"/>
    </inertial>
  </link>

  <link name="thigh_link">
    <visual>
      <geometry>
        <cylinder length="0.3" radius="0.05"/>
      </geometry>
      <material name="green">
        <color rgba="0 0.8 0 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.3" radius="0.05"/>
      </geometry>
    </collision>
    <inertial>
      <origin xyz="0 0 0.15"/>
      <mass value="1.0"/>
      <inertia ixx="0.005" ixy="0.0" ixz="0.0"
               iyy="0.005" iyz="0.0"
               izz="0.0005"/>
    </inertial>
  </link>

  <joint name="hip_pitch_joint" type="revolute">
    <parent link="base_link"/>
    <child link="thigh_link"/>
    <origin xyz="0 0 0.05" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="10"/>
  </joint>
</robot>
```
This XML defines a `base_link` and a `thigh_link` connected by a `hip_pitch_joint`. It specifies their visual appearance, collision properties, inertial characteristics, and the joint's type, axis, and limits.

## Chapter Summary

URDF and SDF are fundamental for describing robots and their environments in the digital realm. URDF excels at defining a single robot's kinematic and dynamic properties for ROS tools, while SDF provides a more comprehensive world description for high-fidelity simulations in Gazebo. Mastering these formats is key to building and testing virtual robots.

## Assessment

1.  What is the primary difference in purpose between URDF and SDF?
2.  List three key elements you would expect to find in a `<link>` tag within a URDF file.
3.  Why is it important to define `inertial` properties for a robot's links in a simulation?
4.  If you wanted to connect two links with a joint that allows continuous rotation (like a wheel), what `type` would you use for the `<joint>`?
