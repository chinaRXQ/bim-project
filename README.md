# bim-project
bim-project

---


工作列表业务逻辑

工作/对应json为YangHaojing分支内 -> 我的项目 -> 项目列表（多个项目） -> 任务列表（每个多个任务）/对应json为project.json(详见rp图)

projectlist.json 实际为userid
| 名称 | 示例数据 | 备注 |
| :------: | :------: | :------: |
| key | 1 | 索引顺序 |
| name | 西四环项目部 | 项目组名称 |
| projectid | projectid | 对应的任务id |

task.json 字段名称 实际为文件名为的projectid.json

| 名称 | 示例数据 | 备注 |
| :------: | :------: | :------: |
| taskid | 1 |  任务编号索引字段，可能是个16位的key值 |
| taskname | HY1-22-1S-1-001 | 任务名称 |
| timestatus | doing | 任务状态 |
| starttime | 2018-2-21 | 开始时间 |
| planendtime | 2018-2-29 | 计划完成时间 |
| delaytotime | NULL | 延期时间 |
| principal | 张三 | 负责人 |
| principalid | 20000712001 | 负责人用户id |
| processid | 1210 | 流程id （这个设想是这样的，id由三部分组成，第一部分位16位的任务key值。第二部分为流程模板，对应的是一个json文件，由后台api提供；比如21，记录了要填的表，及其顺序和是否填了表的状态。第三部分是显示该填的表有没有完成 |
| note | 无 | 用户备注 |

processid.json示例 process/2211.json
| 名称 | 示例数据 | 备注 |
| :------: | :------: | :------: |
| order | 1 | 执行顺序 |
| name | 检查是否合格 | 名称 |
| excelname | excel.xls | 空模板名称 |
| excelfile | 2211-ckeck.xls | 填写完或者未填写表的名称 |
| status | false | 有没有填 |
