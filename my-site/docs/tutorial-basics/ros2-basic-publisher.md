---
sidebar_position: 1
title: ROS 2 Basic Publisher Tutorial
---

# ROS 2 Basic Publisher Tutorial

This tutorial will guide you through creating a simple ROS 2 publisher in Python. A publisher node sends messages over a topic, which can then be received by subscriber nodes.

## Prerequisites

*   ROS 2 Humble installed (or equivalent distribution).
*   A basic understanding of Python.
*   A ROS 2 workspace set up. If not, follow the official ROS 2 tutorial for creating a workspace.

## 1. Create a Package

First, navigate to your ROS 2 workspace `src` directory and create a new Python package.

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_python my_publisher_pkg
```

## 2. Create the Publisher Node

Inside your `my_publisher_pkg` directory, create a Python file named `simple_publisher.py` in the `my_publisher_pkg/my_publisher_pkg` subdirectory (e.g., `~/ros2_ws/src/my_publisher_pkg/my_publisher_pkg/simple_publisher.py`).

Add the following Python code to `simple_publisher.py`:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class SimplePublisher(Node):

    def __init__(self):
        super().__init__('simple_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello ROS 2! %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    simple_publisher = SimplePublisher()
    rclpy.spin(simple_publisher)
    simple_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## 3. Update `setup.py`

Modify `~/ros2_ws/src/my_publisher_pkg/setup.py` to include your executable script.
Find the `entry_points` dictionary and add an entry for your publisher:

```python
# ... other imports
import os
from glob import glob

# ... other setup parameters

entry_points={
    'console_scripts': [
        'simple_publisher = my_publisher_pkg.simple_publisher:main',
    ],
},
```

Make sure to also include the `data_files` if you have any, typically like this:

```python
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'launch'), glob(os.path.join('launch', '*launch.[pxy][yeml]'))),
    ],
```

## 4. Build Your Package

Navigate back to your workspace root (`~/ros2_ws`) and build the package:

```bash
cd ~/ros2_ws
colcon build --packages-select my_publisher_pkg
```

## 5. Source the Setup Files

Before running, source your workspace's setup files:

```bash
source install/setup.bash
```
(If you are in a new terminal, you might also need to source your ROS 2 environment, e.g., `source /opt/ros/humble/setup.bash`)

## 6. Run the Publisher

Now, run your publisher node:

```bash
ros2 run my_publisher_pkg simple_publisher
```

You should see messages being published in your terminal.

## 7. Verify with a Subscriber

Open a new terminal, source your ROS 2 environment, and then run a generic ROS 2 subscriber to listen to your topic:

```bash
source install/setup.bash # or /opt/ros/humble/setup.bash
ros2 topic echo /topic
```

You should see the "Hello ROS 2!" messages appearing in this new terminal.

Congratulations! You've successfully created and run a basic ROS 2 publisher and verified it with a subscriber.