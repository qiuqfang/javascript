# 事件代理

> 事件代理是利用事件冒泡原理来实现的，

## 优点

- 减少整个页面所需的内存，提升整体性能
- 动态绑定，减少重复工作

## 局限性

- `focus`、`blur`这些事件没有事件冒泡机制，所以无法进行委托绑定事件
- `mousemove`、`mouseout`这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的
