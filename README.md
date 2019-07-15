# checkbox 复选框

### 接口设计
##### checkbox
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|value|指定选中的选项,只在单独使用时有效| Boolean|false| 
|label|组合使用时有效|String\|Number\|Boolean|-|
|disabled|是否禁用|Boolean|false|
|onChange|变化时回调函数|Function(checkedValue)|-|
##### checkbox-group
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|defaultValue|指定选中项目的集合|string[]|[]|
|disabled|整组失效|Boolean|false|
|options|指定特定选项|string[]|[]|
|onChange|在选项状态发生改变时触发，返回已选中的数组|Function(checkedValue)|-|
