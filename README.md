# 这是啥

[奇迹暖暖衣服自动选择搭配器](http://CroMarmot.github.io/nikkiup2u3/)

# 功能

支持

- [ ] 完成度`90%`所有衣柜分类显示/个人衣柜分类显示,并可以排序/筛选
- [ ] 完成度`85%`个人衣柜的增删 (添加功能和参考项目中的兼容,更新功能采用json)
- [ ] 完成度`33%` 根据关卡自动选择衣服(最好/个人/个人+所有可用金币购买)(可能有参考项目中就有的bug 并且如参考项目一样和实际得分有出入)
- [ ] 完成度`10%` 根据参数自动选择衣服(最好/个人/个人+所有可用金币购买)(可能有参考项目中就有的bug 并且如参考项目一样和实际得分有出入)
- [ ] 完成度`0%` 个人衣柜的图片化
- [ ] 完成度`0%` 算钻/金币/爱心(并不是很想支持 不过感觉比较好移植 先放在这个分类里)

不计划支持
 * 衣服的设计图制作需要/以及天数估计等(参考的项目中有 但是作为奇暖玩家 表示用大喵直接就有了)
 * 技能选择使用建议(参考项目中有 感觉真的是有用但鸡肋)
 * 自由搭配/添加到购物车(参考项目中有 出门左转自由换装 出门右转根据参数自动选择衣服)


# 衣柜更新

整个衣柜数据库
 * 手工更新,我想起了就更新....依赖于参考文档中的项目。

个人衣柜更新
 * 方法与下方参考项目的更新方法相同

# 编码时的疑问

关于bonus的计算
 * 阅读参考的代码,发现bonus实现的过程为 常规得分+  `满足bonus的部件的分值 = bonu权重*sum(abs(各部件权重))*类别[bonus等级]` 我满脸懵逼？？目前我的代码还是保持和参考代码的算法数学一致 
 * 哪里能拿到准确数据？真都是测的？

# 参考

[seal100x](http://seal100x.github.io/nikkiup2u3/)

[ivangift](http://ivangift.github.io/nikkiup2u3/)

[一个文字的说明](http://bbs.xiaopi.com/thread-80198-1-1.html) 为了避免链接失效把内容cp了过来

```
为了避免打广告的嫌疑，地址我就不放啦~感觉大神说的很有技术性，把总结放上！

　　一、关卡设置
　　每一关五项属性的权重是各不相同的，竞技场模式尚未测试过，但是很可能也是如此。
　　举例来说，少女1-1的权重是简约1 可爱2 活泼3 清纯2 清凉1，少女1-2的权重是简约3 可爱1.5 优雅3 清纯3 保暖1

　　二、属性相克
　　相克的属性不计分!相克的属性不计分!相克的属性不计分!(重要的事情就是得说三遍)
　　不计分的意思是这个属性当0分计，不倒扣分。换句话说，再差的衣服(饰品除外，下面另讲)，哪怕只搭上了一个属性也是值得穿上的。关于这个结论如何证明请参见逆向工程贴

　　三、F了
　　某些连衣裙、上衣、下装穿上会导致F。在F的情况下，所有的分数被除以10计算。
　　F的原因仍然未知，大家的观察结果是某些tag的衣服只能用于要求该tag的关卡，但是也有例外。

　　四，衣服的分值
　　每件衣服都会有一个五维的属性，然后根据这个分数落在哪个区间决定给予何种等级的评定。考虑到随机因素，最高分的A类衣服的得分偶尔可能会超过最低分的S类衣服。
　　从档位划分上看，上衣的分数=下装的分数=连衣裙的分数/2
　　以下是我测出的所有部位的分数档位，请注意由于体力和衣服数量有限，有些数据存在比较大的误差：
　　头发
　　SS:est 1250 S:950~1150 A:750~900 B:550~750 C:est 550
　　连衣裙
　　SS:est 5000~5200 S:3800~4200 A:3000~3800 B:2500~3000 C:1900~2500
　　外套 (部分结果来自@dianashusy)
　　SS:490~520 S:370~450 A:300~360 B:230~280 C:est 190~210
　　上衣
　　SS:est 2725 S:1750~2100 A:1400~1700 B:1250~1400 C: 800~1200
　　下装
　　SS:est 2725 S:1800~2100 A:1400~1800 B:1250~1400 C: 800~1200
　　袜子 (部分结果来自@dianashusy)
　　SS:est 860 S:570~650 A:440~550 B:400~440 C:270~300
　　鞋子
　　SS:est 1000 S:770~950 A:640~750 B:530~580 C:380~450
　　饰品 (所有部位均一致)
　　SS:est 470~500 S:370~450 A:290~370 B:220~280 C:est 190~210
　　妆容 (样本太少)
　　SS:est 250~280 S:190 A:130 B:120 C:无数据

　　五、饰品问题
　　穿在身上的饰品一旦超过三件就会被惩罚，目前惩罚的规律还不明确，只能确定与饰品数量有关。大致来说
　　4件饰品：将被扣除饰品总分的6.5%
　　5件饰品：将被扣除饰品总分的11%
　　6件饰品：将被扣除饰品总分的18%
　　7件饰品：将被扣除饰品总分的25%
　　8件饰品：将被扣除饰品总分的31%
　　9件饰品：将被扣除饰品总分的36%
　　10件饰品：将被扣除饰品总分的42%
　　11件饰品：将被扣除饰品总分的46%
　　所以如果某些部位只有1000分以下的饰品，请不要穿了，不然反而分数更低

　　六、future work
　　-测出所有关卡的属性权重
　　-搞清楚饰品的惩罚规律
　　-研究tag相关物品的评分规律

　　七、吐槽
　　说实话我很反感奇暖公布属性并且用属性来决定评分，每一次过关或者参加评选赛我都没有功夫去看衣服的样子，而总是陷入了一群五维数据中寻找一个分数最高的结果，每次都这样实在是太伤脑细胞了，这也是让我有动力去逆向工程并且写了一个在线模拟器的原因。我希望暖暖类的游戏能真的回到注重色彩、搭配、主题等等的命题上来，让我们看到一个真实的名叫暖暖的女孩子，而不是她衣柜里一堆又一堆的SABC。

```

# 其它

我才不会说我是为了练一练`angularjs + gulp`

其它疑问/建议/意见请开`Issues`

# 待完成代码列表 不按先后顺序
 * ownView
 * accessories punishment
 * wardrobe append
 * namefilter
 * wardrobe add/remove table
 * custom weight
 * gulp
 * newdata(level)]
 * phone special css
 * 萤光之灵 特殊能力
 * 替换 '饰品-手持·双','饰品-手持·左','饰品-手持·右'
 * 合并 代码内部的bonu+weight,category+wardrobe 减少重复调用

尚未发现作用
 * blacklist/flist
