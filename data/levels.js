// Ivan's Workshop
var competitionsRaw = {
  '海边派对的搭配': [0.67, 1.33, 1.0, -1.33, 1.33],
  '春天在哪里': [0.67, 1.33, 1.33, 1.33, 1.0],
  '办公室明星': [1.33, -1.33, -1.33, -1.0, 0.67],
  '夏日物语': [1.33, 0.67, -1.33, 1.0, 1.33],
  '圣诞家庭聚会': [1.33, 1.0, 0.67, 1.33, -1.33],
  '年轻的春游': [1.33, 1.33, 1.33, 1.0, 0.67],
  '运动进行时': [1.0, 0.67, 1.33, 1.33, 1.33],
  '金色音乐厅': [-1.33, -1.33, -1.33, -1.0, -0.67],
  '夏季游园会': [1.33, 1.0, 0.67, 1.33, 1.33],
  '女王大人': [-1.0, -1.33, -1.33, -1.33, 0.67],
  '冬天里的一把火': [-0.67, 1.0, 1.33, -1.33, -1.33],
  '大侦探福尔摩斯': [1.33, -1.33, -1.33, 0.67, -1.0],
  '宫廷歌舞会': [-1.33, -1.0, -1.33, -1.33, -0.67],
  '奇幻童话园': [-1.33, 1.33, -1.33, 1.0, 0.67],
  '有女初长成': [0.67, -1.33, -1.33, 1.33, -1.0],
  '绝色无双': [-1.33, -1.0, -1.33, 1.33, -0.67],
  '清秀佳人': [1.33, 0.67, -1.33, 1.33, 1.0]
};

var tasksRaw = {
  'g1-1': [0.47, 0.67, 0.47, 0.67, -0.47],
  'g1-2': [0.87, 0.67, 0.87, 0.67, 0.67],
  'g1-3': [0.8, 0.8, -0.8, 1.0, 1.0],
  'g1-4': [1.13, 1.33, 1.13, 1.13, -1.33],
  'g1-5': [-0.8, 0.8, -0.8, -0.73, 0.73],
  'g1-6': [-1.13, -1.13, -0.93, -0.93, 0.93],
  'g1-7': [-0.67, 0.47, 0.67, 0.47, -0.47],
  'g2-1': [-0.47, -0.47, -0.67, 0.67, -0.47],
  'g2-2': [-1.0, -1.0, -1.0, -1.27, 1.27],
  'g2-3': [-1.4, 1.0, 1.4, 1.0, 1.0],
  'g2-4': [-1.2, -1.2, -1.2, 0.87, 0.87],
  'g2-5': [-0.87, 0.87, -0.6, 0.6, 0.6],
  'g2-6': [1.0, 1.2, 1.0, 1.2, 0.93],
  'g2-7': [0.8, 0.6, -0.8, 0.6, -0.6],
  'g3-1': [-1.07, 1.33, 1.07, -1.33, 1.07],
  'g3-2': [0.6, 0.8, 0.6, -0.6, 0.8],
  'g3-3': [0.8, -1.0, 0.8, -1.0, 0.8],
  'g3-4': [-0.53, 0.73, -0.53, 0.73, 0.53],
  'g3-5': [-1.27, -1.0, -1.27, 1.0, 1.0],
  'g3-6': [1.07, -0.93, -1.07, 0.93, 0.93],
  'g3-7': [-0.87, 0.6, 0.87, -0.6, 0.6],
  'g4-1': [-0.87, 1.0, 0.87, 1.0, 0.87],
  'g4-2': [-0.4, 0.67, 0.4, 0.67, 0.4],
  'g4-3': [1.0, 1.13, 1.13, 1.0, 1.0],
  'g4-4': [1.2, -1.07, -1.07, 1.07, -1.2],
  'g4-5': [-0.73, -0.53, -0.53, -0.53, 0.73],
  'g4-6': [-0.87, 0.87, 0.93, 0.93, 0.87],
  'g4-7': [-1.33, 1.07, 1.07, -1.33, 1.33],
  'g5-1': [0.93, 0.87, -1.13, 1.2, -0.67],
  'g5-2': [1.07, 0.67, -0.67, 1.2, -0.67],
  'g5-3': [0.67, -0.93, -0.67, -0.93, 0.4],
  'g5-4': [-0.8, -0.93, 0.8, -0.53, 0.33],
  'g5-5': [0.73, 0.93, -0.73, 1.13, 0.4],
  'g5-6': [0.93, -0.6, 0.93, 1.2, 1.2],
  'g5-7': [-0.67, 0.47, -0.6, 0.33, 0.33],
}

var extraRaw = {
  /*
  '七夕浪漫夜': [1.4, 1.53, 1.53, 1.4, 1.33],
  '特别的七夕装扮': [-0.4, -0.33, -1.67, 1.67, 0.33],
  '相思脉脉': [0.07, -0.2, 0.07, -0.07, -0.2],
  '甜美情人夜': [-0.8, -1.33, -0.8, -1.33, 0.8],
  '锦锦的最爱': [-2.07, -1.4, 1.4, -1.93, -0.73],

  /*
  '医疗所之谜1': [2.0, -1.0, 1.0, 2.0, -2.67],
  '医疗所之谜2': [-1.67, 1.33, -1.67, -1.33, 1.2],
  '医疗所之谜3': [2.67, 1.33, 2.67, -0.53, 0.53],
  '医疗所之谜4': [-3.0, -1.8, -2.33, -3.0, -1.47],
  '医疗所之谜5': [3.07, -2.13, 2.13, -2.13, 2.13],

  /*
  '满天繁星: 朱雀煌煌': [1.33, 1.0, 0.67, 1.33, -1.33],
  '满天繁星: 苍龙之腹': [1.33, 1.33, 1.33, 1.0, 0.67],
  '满天繁星: 月鹿仰颈': [-1.0, -1.33, -1.33, -1.33, 0.67],
  '满天繁星: 第四天': [1.33, 0.67, -1.33, 1.33, 1.0],
  '满天繁星: 第五天': [-1.33, -1.0, 1.33, -1.33, 0.67],
  '满天繁星: 第六天（预计）': [0.67, -1.33, -1.33, 1.33, -1.0],
  '满天繁星: 第七天（预计）': [-1.33, -1.0, -1.33, 1.33, -0.67],
  /*  
  '黑蔷薇1': [0.53, 1.0, 1.0, 0.53, 0.33],
  '黑蔷薇2': [-0.13, -0.07, 0.13, -0.2, 0.07],
  '黑蔷薇3': [1.67, -1.0, 2.4, -1.67, 1.0],
  '黑蔷薇4': [2.53, -1.2, 1.2, -1.2, 1.2],
  '黑蔷薇5': [-2.07, 1.0, -2.07, -1.0, -0.67],

  /*
  '音乐会3': [2.0, 3.33, 2.0, 1.33, -1.33],
  '音乐会4': [0.8, 1.33, -1.8, 1.67, 0.8],
  '音乐会5': [2.0, -1.0, 1.0, 2.0, -2.67],

  '愚人节1': [-1.0, 2.0, -1.0, 2.67, 2.0],
  '愚人节2': [2.0, 3.33, 2.0, 1.33, -1.33],
  '愚人节3': [2.0, -3.33, -2.0, 1.27, -1.27],
  '愚人节4': [2.2, -2.87, 1.47, -2.87, 2.2],
  '愚人节5': [2.0, -1.0, 1.0, 2.0, -2.67],

  '婚恋奇迹1': [1.0, 1.33, 1.33, 1.33, 0.67],
  '婚恋奇迹2': [1.33, -1.33, 0.67, -1.33, 1.0],
  '婚恋奇迹3': [-1.33, -1.33, -1.33, -1.0, -0.67],
  '婚恋奇迹4': [-1.33, 0.67, 1.33, 1.33, -1.0],
  '婚恋奇迹5': [1.33, -1.0, -1.33, 1.33, -0.67],

  
  
  '冰雪舞会1': [0.1, 0.2, 0.2, 0.1, -0.3],
  '冰雪舞会2': [1.4, 0.67, -1.4, 2.2, 0.67],
  '冰雪舞会3': [0.8, 1.5, -1.5, 2.33, 0.8],
  '冰雪舞会4': [-0.8, 0.67, 0.67, 0.8, 0.6],
  '冰雪舞会5': [-0.8, -0.8, -0.67, -0.67, 0.67]
  */
};

// all data are presented in order "simple", "cute", "active", "pure", "cool"
var levelsRaw = {
  '1-1': [1, 2, 3, 2, 1],
  '1-2': [3, 1.5, -3, 3, -1],
  '1-3': [-2, -1, -3, 2, 1],
  '1-4': [2, -3, -2, -1, -1],
  '1-5': [-1, 3, 2, -2, 1],
  '1-6': [2, 1, -2, 3, 1],
  '1-7': [3, -2, -2, 1, 1],
  '1-8': [-1, -2, -2, -4, 1],
  '1-9': [-1, -2, 2, -3, 1],
  '2-1': [-2, 3, 1, 2, 1],
  '2-2': [3, 1, 2, 2, -1],
  '2-3': [2, -2, -3, -1, -1],
  '2-4': [1, 2, 1, 2, -3],
  '2-5': [2, -2, 3, 1, -1],
  '2-6': [-1, 3, -2, 2, 1],
  '2-7': [0.07, 0.13, 0.13, 0.07, -0.2],
  '2-8': [-2, 2, -2, 2, 1],
  '2-9': [-3, -2, -2, -1, 1],
  '2-支1': [-3, -2, -2, -1, -1],
  '2-支2': [2, -2, -3, 1, 1],
  '3-1': [2, -1, -3, 2, 1],
  '3-2': [-4, -1, 2, -2, 1],
  '3-3': [2, -3, -2, 1, -1],
  '3-4': [2, 1, -2, 3, 1],
  '3-5': [2, 1, 3, 1, 2],
  '3-6': [0.13, 0.13, 0.07, -0.07, 0.2],
  '3-7': [-2, 2, -2, 1, 1],
  '3-8': [2, 1, 3, 1, 2],
  '3-9': [2, -1, -2, -3, 1],
  '3-10': [-1, 3, 2, 2, 1],
  '3-11': [-3, -2, -2, -2, 1],
  '3-12': [2, 1, 3, 1, -2],
  '3-支1': [-3, -2, -2, 1, -1],
  '3-支2': [-1.0, -0.33, -0.6, -0.33, 0.67],
  '4-1': [3, 1, 2, 1, -3],
  '4-2': [0.07, 3.07, 0.07, 2.67, 0.07],
  '4-3': [0.07, -3.2, 0.07, -2.67, 0.07],
  '4-4': [1, 2, -2, 3, 1],
  '4-5': [2, -1, 2, 1, 3],
  '4-6': [-1, -2, -3, -2, -1],
  '4-7': [-3, -1, -2, 2, -1],
  '4-8': [0.2, 0.13, 0.13, -0.07, 0.07],
  '4-9': [2, -1, -3, 2, 1],
  '4-10': [1, 2, 3, 2, 1],
  '4-11': [2, -2, -3, -1, 1],
  '4-12': [0.13, 0.2, 0.2, -0.13, 0.07],
  '4-支1': [-1, 3, 2, 2, 1],
  '4-支2': [3, 2, 2, 1, 1],
  '4-支3': [2, 2, 3, -1, -1],
  '5-1': [2, 1, 3, 1, 2],
  '5-2': [3, -2, -2, 1, 1],
  '5-3': [-3, -2, -2, 1, 1],
  '5-4': [-1.2, -0.75, -1.25, -2, 0.75],
  '5-5': [-3, 2, -2, 1, 1],
  '5-6': [3, 1, -2, 2, -1],
  '5-7': [-0.07, 0.07, 0.13, 0.13, 0.07],
  '5-8': [2, -1, -2, 1, -3],
  '5-9': [-3, -2, -2, -1, 1],
  '5-10': [-3, 3, -4, 1.5, 1.5],
  '5-11': [0.13, -0.07, 0.2, -0.13, 0.07],
  '5-12': [2, 1.125, -3.375, 2, -1.35],
  '5-支1': [1, 2, -1, 2, -3],
  '5-支2': [2, 2, 1, 3, 1],
  '5-支3': [0.13, 0.07, -0.2, -0.13, 0.07],
  '6-1': [-2, 3, 1, 2, -1],
  '6-2': [2, -1, -3, 2, 1],
  '6-3': [-1, 2, -1, 3, 2],
  '6-4': [2, 3, 2, 1, -1],
  '6-5': [-2, 3, 2, 1, 1],
  '6-6': [3, 1, 2, 2, 1],
  '6-7': [-1, 3, 2, 2, 1],
  '6-8': [0.07, -0.07, -0.2, -0.13, 0.13],
  '6-9': [-1, -2, -3, -2, 1],
  '6-10': [-1, 2, -1, 1, -1],
  '6-11': [2, -1, -3, 2, 1],
  '6-支1': [-2, -2, -1, -3, 1],
  '6-支2': [-1, 2, 2, 1, 3],
  '6-支3': [-0.13, -0.07, 0.13, -0.2, 0.07],
  '7-1': [2, -2.5, -3, -2, 1.5],
  '7-2': [-3, -2, -3, 3, -2],
  '7-3': [3, -2.5, 2, -3, 3],
  '7-4': [-1.25, -2, -2, 1.5, -1],
  '7-5': [3, 2, 3, 2, 2],
  '7-6': [-2.0, -1.33, -2.0, 1.33, 1.33],
  '7-7': [-0.2, -0.2, -0.13, -0.13, 0.07],
  '7-8': [0.2, -0.13, 0.2, -0.13, 0.07],
  '7-9': [2, -3, 1.5, 2, -3],
  '7-支1': [2, -3, -3, 2, 2],
  '7-支2': [2, 3, -3, 2, 1.5],
  '7-支3': [0.2, -0.2, 0.13, -0.13, 0.13],
  '7-支4': [2, 2.5, -2, 2.5, 1.75],
  '7-支5': [2.5, 2, 2.5, 2, 1.75],
  '8-1': [2, 2.5, 2.5, 2, 1.5],
  '8-2': [-2.5, -2, 2.5, -2, 1.5],
  '8-3': [2.7, 2, -2, 2.7, -1.66],
  '8-4': [2, -2.5, -2.5, 1.5, -2],
  '8-5': [1.25, 1.25, -2, 1.25, 1.25],
  '8-6': [-2, -1.25, -2, -1.25, 1.25],
  '8-7': [2.5, 2, 2.5, 2, 1.75],
  '8-8': [-3, -2.5, -2.5, -2.5, 3],
  '8-9': [-2.5, 2.5, -2, 2, 1.5],
  '8-支1': [2.5, -1.75, 2, -2.5, 2],
  '8-支2': [2, 2, -2.5, 2.5, -1.5],
  '8-支3': [-2.5, -2, -2.5, -2, 1.75],
  '9-1': [2.75, 2, 2.75, 2, 1.75],
  '9-2': [-1.75, 1.33, -1.75, -1.33, 1.25],
  '9-3': [1.5, -1.5, -2, 1.5, -2],
  '9-4': [-1, -1.5, -1.5, -1, -1],
  '9-5': [2, 2.25, 2.25, 2, 2.25],
  '9-6-1': [2, -1.25, -2, 1.25, 1.25],
  '9-6-2': [1.4, -2, -2.25, -1.4, 1.2],
  '9-7': [1.6, 1.4, 1.4, -1.5, 1.25],
  '9-8': [1.75, 1.5, 1.75, 1.5, -1.5],
  '9-9-1': [-2, 1, 1.4, -1, 1],
  '9-9-2': [-2.5, 2, 2, -2.4, 1.5],
  '9-9-3': [-2.5, -2, -2.5, 1.75, 1.5],
  '9-支1': [1.5, 1.5, 2, 1.5, 2],
  '9-支2': [-1.5, 1.5, -1.8, 2, 1.6],
  '9-支3': [2, -2.5, 2, -2.5, 1.75],
  '10-1': [-1.33, 1.33, 1.67, 1.67, -1.67],
  '10-2': [1.5, -1.1, -1.1, 1.5, -1.1],
  '10-3': [1.33, 1.0, 1.33, 1.0, 1.0],
  '10-4': [1.0, -1.33, -1.67, -1.33, -3.0],
  '10-5': [1.67, -1.33, -1.67, -1.33, 1.33],
  '10-6': [-1.6, 1.9, 1.9, -1.6, 1.6],
  '10-7': [-1.5, 1.2, 1.2, 1.5, -1.5],
  '10-8': [1.67, -1.33, -1.67, 1.6, -1.6],
  '10-9-1': [-1.9, 2.5, 2.5, -1.9, 1.9],
  '10-9-2': [1.2, -1.9, -1.9, 1.2, 1.2],
  '10-支1': [1.7, 1.4, 1.7, 1.4, 1.4],
  '10-支2': [1.4, 1.7, 1.4, 1.4, 1.7],
  '10-支3': [-1.4, -1.1, -1.4, -1.1, -1.1],
  '11-1': [2.6, 2.0, 2.6, 2.0, 1.33],
  '11-2': [2.3, 2.9, 2.9, -2.3, 1.6],
  '11-3': [2.0, 2.0, -2.67, 2.67, -1.33],
  '11-4': [2.9, 1.5, -2.2, 2.2, -2.9],
  '11-5': [-2.67, -2.0, -2.67, -2.0, -1.33],
  '11-6': [2.2, -2.9, 1.5, -2.9, 2.2],
  '11-7': [-1.33, -2.67, -2.0, -2.67, -2.0],
  '11-8': [-2.0, 2.0, 2.67, 2.67, 1.33],
  '11-9': [2.6, 1.33, 2.6, 2.0, 2.0],
  '11-支1': [2.7, -2.0, -2.7, 2.0, 1.33],
  '11-支2': [2.3, 1.6, -2.3, 1.6, 1.1],
  '11-支3': [2.3, 2.9, 2.9, -1.6, 2.3],
  '12-1': [-2.2, -2.2, 3, -1.5, -3],
  '12-2': [1.9, -2.5, -2.5, -1.9, 1.33],
  '12-3': [-1.9, 1.0, -1.9, 1.0, 1.0],
  '12-4': [2.1, 2.8, -2.1, 2.8, -1.33],
  '12-5': [3.0, 2.33, 3.0, -2.33, 1.67],
  '12-6': [-1.2, -0.67, -2.1, 1.2, 0.67],
  '12-7': [1.5, 1.1, 2.33, 1.1, 1.0],
  '12-8': [-2.33, 2.33, 1.67, -1.67, 1.0],
  '12-9': [1.3, 0.67, -1.3, 0.67, 0.67],
  '12-支1': [-1.9, -1.3, -1.9, 1.3, -0.67],
  '12-支2': [1.33, 1.67, 1.33, 1.67, 1.67],
  '12-支3': [2.3, 1.0, 2.3, 1.67, 1.0],
  '13-1': [-1.33, -0.8, -1.2, 0.8, 0.67],
  '13-2': [2.67, 2.0, 1.9, 1.33, 2.5],
  '13-3': [-3.0, -1.8, 2.9, -1.8, 1.2],
  '13-4': [1.67, -0.9, -1.33, 1.6, -1.33],
  '13-5': [-2.67, -1.67, -2.5, 1.7, 1.1],
  '13-6': [2.9, 1.9, -1.9, 1.2, 2.8],
  '13-7': [-2.4, 2.33, 1.8, -1.5, 1.1],
  '13-8': [-2.67, -2.8, -1.9, -1.1, -1.9],
  '13-9': [-2.8, -1.9, -2.6, -1.8, -1.2],
  '13-支1': [1.8, 2.8, 1.9, 2.8, 1.1],
  '13-支2': [2.33, 1.67, 2.2, 1.4, 0.8],
  '13-支3': [-1.2, -1.6, 1.67, -0.67, -1.2],
  '14-1': [0.67, 1.67, 1.67, 3.0, 2.93],
  '14-2': [0.67, -3.0, -3.33, -0.67, 0.67],
  '14-3': [-1.67, 3.33, 1.0, 3.33, -0.67],
  '14-4': [-2.33, 1.0, -2.93, 1.0, -0.67],
  '14-5': [-0.67, 0.67, 3.0, -3.0, 2.67],
  '14-6': [-2.0, 2.67, -1.53, 0.8, -0.33],
  '14-7': [-1.67, 2.93, 3.33, -1.33, -0.67],
  '14-8': [-2.27, -1.33, -2.27, 0.67, 0.67],
  '14-9': [2.4, 1.33, -1.33, 1.33, -3.33],
  '14-支1': [3.13, 1.67, 2.33, 1.0, 0.8],
  '14-支2': [2.93, -2.27, -2.93, 1.33, -0.67],
  '14-支3': [0.67, 1.33, -0.67, 1.6, -2.53],
  '15-1': [0.67, 2.13, 2.8, 2.8, 0.67],
  '15-2': [-1.2, 2.33, 2.33, 0.93, -0.47],
  '15-3': [0.67, -3.33, -2.0, -3.33, -1.33],
  '15-4': [2.8, -1.6, -2.8, 1.2, -1.2],
  '15-5': [-1.0, -2.13, 2.8, 0.8, -2.8],
  '15-6': [2.33, 1.0, 2.33, 0.53, -1.33],
  '15-7': [0.67, 2.33, 2.33, 0.67, -0.67],
  '15-8': [2.67, -2.67, -1.67, 0.67, -1.0],
  '15-9': [-33.4, -21.0, -33.4, 6.73, -6.67],
  '15-支1': [-3.0, 1.33, 3.0, -2.0, 1.33],
  '15-支2': [2.33, 0.67, -3.0, 1.67, 0.67],
  '15-支3': [-0.8, -0.8, -2.2, 2.2, -0.47],
};

function tagMatcher(whitelist, clothes) {
  if (clothes.type.mainType == '萤光之灵') {
    return false;
  }
  for (var i in clothes.tags) {
    var tag = clothes.tags[i];
    if (tag.length > 0 && whitelist.indexOf(tag) >= 0) {
      return true;
    }
  }
  return false;
}

function nameMatcher(whitelist, clothes) {
  var names = whitelist.split('/');
  for (var i in names) {
    if (clothes.name.indexOf(names[i]) >= 0) {
      return true;
    }
  }
  return false;
}

function noOp() {
  return {
    filter: function() {
      return;
    }
  };
}

function blacklistFilter() {
  return {
    lvlList: {},
    add: function(category, id) {
      if (!this.lvlList[category]) {
        this.lvlList[category] = {};
      }
      this.lvlList[category][id] = 1;
    },
    matches: function(c) {
      return this.lvlList[c.type.mainType] && this.lvlList[c.type.mainType][c.id];
    },
    filter: function(c) {
      if (this.matches(c)) {
        c.tmpScore /= 10;
        c.tmpScoreByCategory.f();
        c.bonusByCategory.f();
      }
    }
  }
}

// Note: filters decides which clothes will be penalized (usually 1/10 of the score)
// Only applicable to dresses, coats, tops and bottoms
var levelFilters = function() {
  var ret = {};
  for (var i in blacklist) {
    var black = blacklist[i];
    if (!ret[black[0]]) {
      ret[black[0]] = blacklistFilter();
    }
    ret[black[0]].add(black[1], black[2]);
  }
  return ret;
}();

function abstractBonusFactory(note, replace, param, tagWhitelist, nameWhitelist, callback) {
  return function(criteria) {
    return {
      tagWhitelist: tagWhitelist,
      nameWhitelist: nameWhitelist,
      note: note,
      replace: replace,
      param: param,
      filter: function(clothes) {
        if ((tagWhitelist && tagMatcher(tagWhitelist, clothes))
            || (nameWhitelist && nameMatcher(nameWhitelist, clothes))) {
          return callback(criteria, clothes);
        }
        return [0, {}];
      }
    }
  };
}

function featureBasedScoringFactory(bonus, multiplier){
  return function(criteria, clothes) {
    var total = 0;
    var byFeature = {};
    for (var i in FEATURES) {
      var f = FEATURES[i];
      var addon = Math.abs(criteria[f] * clothes.type.score[bonus] * multiplier);
      byFeature[f] = addon;
      total += addon;
    }
    return [total, byFeature];
  }
}

function addScoreBonusFactory(bonus, multiplier, tagWhitelist, nameWhitelist) {
  return abstractBonusFactory('各属性依权重加分', false, bonus + " * " + multiplier, tagWhitelist,
      nameWhitelist, featureBasedScoringFactory(bonus, multiplier));
}

function bonusInfo(base, weight, tag, replace) {
  return {
    base: base,
    weight: weight,
    tag: tag,
    replace: replace
  }
}

function parseCriteriaList(criteria) {
  return {
    'simple': criteria[0],
    'cute': criteria[1],
    'active': criteria[2],
    'pure': criteria[3],
    'cool': criteria[4]
  }
}

function level(name, criteria) {
  var filter = null;
  if (levelFilters[name]) {
    filter = levelFilters[name];
  }
  var bonusFilter = [];
  if (levelBonus[name]) {
    for (var i in levelBonus[name]) {
      bonusFilter.push(levelBonus[name][i]);
    }
  }
  return {
    name: name, // useful?
    weight: criteria,
    filter: filter,
    bonus: bonusFilter,
  }
}

allThemes = function() {
  var ret = {};
  for (var theme in extraRaw) {
    var criteria = extraRaw[theme];
    ret[theme] = level(theme, parseCriteriaList(criteria));
  }
  for (var theme in competitionsRaw) {
    var criteria = competitionsRaw[theme];
    ret['竞技场: ' + theme] = level(theme, parseCriteriaList(criteria));
  }
  for (var theme in tasksRaw) {
    var criteria = tasksRaw[theme];
    ret['联盟委托: ' + theme] = level(theme, parseCriteriaList(criteria));
  }
  for (var theme in levelsRaw) {
    var criteria = levelsRaw[theme];
    ret['关卡: ' + theme] = level(theme, parseCriteriaList(criteria));
  }
  return ret;
}();

console.log(allThemes);
