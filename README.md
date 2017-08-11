# 项目说明文档
## 项目启动命令（cmd操作命令） 
cmd  npm install  安装依赖包
     gulp 启动项目
## 项目启动配置（编辑器）
   
## 项目启动访问地址
    http://localhost:8080/
## 目录结构

```
.

├── node_modules                                // 项目依赖包
├── src                                         // 源码目录
│   ├── public                                 
│   │   ├── css                                 // 样式文件夹
│   │   │   └── base                             
│   │   │       └── reset.styl                  // 重置浏览器样式
│   │   │   └── index.styl                      // 样式文件 
│   │   │   └── index1.styl         
│   │   │   └── demo.styl                       // 样式文件 
│   │   ├── images                              // 图片文件夹
│   │   │   └── bg.png                         
│   │   └── js                                 // js文件夹
│   │   │   ├── index.js                       // index的js文件
│   │   │   └── index1.js                         
│   │   │   └── demo.js                         
│   │   │   └── component.js                   // 公共组件js
│   │   └── libs                               // 插件文件夹
│   │   │   ├── jquery                         // jquery
│   │   │   │    └── jquery.js                 
│   │   │   └── vue                             // vue
│   │   │       └── vue.js                  
│   ├── view                                    // html文件夹
│   │   └── index.html                          // html页面
│   │   └── demo.html                           // html页面
├── www                                         // 编译后文件目录
│   ├── public                                  
│   │   ├── css                                // 样式文件夹
│   │   │   └── index.css                      // 样式文件 
│   │   │   └── index1.css                      // 样式文件 
│   │   │   └── demo.css                      // 样式文件 
│   │   ├── images                             // 图片文件夹
│   │   │   └── bg.png                      
│   │   └── js                                  // js文件夹
│   │   │   └── index.js                        // index的js文件
│   │   │   └── index1.js                      // 样式文件
│   │   │   └── demo.js                      // 样式文件 
│   │   │   └── component.js                    // 公共组件js
│   │   │   └── build.js                        // 合并的js文件
│   │   └── libs                                //插件文件夹
│   │   │   ├── jquery                          // jquery
│   │   │   │    └── jquery.js                  
│   │   │   └── vue                             // vue
│   │   │       └── vue.js                  
│   └── index.html                              // index页面
│   └── index1.html                               
│   └── demo.html                               // index页面
├── .gitignore                                  // git忽略文件
├── gulpfile.js                                 // gulp配置文件
├── package.json                                // 依赖包
└── REAND.md                                    // 项目说明文件


```

## 插件说明
-    [gulp ](http://www.gulpjs.com.cn/)
-    [vue2.0](https://cn.vuejs.org/)
-    [stylus](http://www.zhangxinxu.com/jq/stylus/)
-    [jquery](http://jquery.com/)


## github地址
 https://github.com/kola828/gulp_demo
 
 
## 项目搭建步骤
### 创建github仓库
- git init 
- echo "# gulp_demo" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin (你的github远程地址)
- git push -u origin master
### 安装常用的依赖包
- npm init   （初始化package.json文件）
- npm install （name） --save-dev   安装依赖包
 ### 创建项目目录
 ### 配置gulpfile.js文件

---


## 编码规范
### 目录：
+ JavaScript
+ HTML
+ CSS

### JavaScript
(1)使用 === 和 !== 判等；不要使用 == 和 != 判等； 

	if(word === str)

(2)if(变量)足够判断变量是否为null、 '' 、undefine等情况；不用依次判断；  

	var name = getJSON().name; //这里不知道是否能取到，如果属性层次较深，建议使用getJSON()['name']
	if(name){ //简约判断
		.......
	}
 
(3)能在函数作用域内声明的变量，不要放在作用域外面； 

	var domain = 'xx.com'; //共享变量
	var getLBSObj = function(){
		//下面的变量没有必要暴露在外面，仅供该方法使用
		var name = 'LBS',
			desc = '基于LBS的应用',
			api = ['JS', 'android', 'iOS']; 
		....
	}
  
(4){}的位置紧随对象和函数，例如var getName = function(){   
	
	var getName = function(){
		var name = '大世界，小流量'；
		...
		return name;
	}

(5)js大体兼容IE8+，例如使用JSON，当然可以使用 (new Function("return " + str))();向下兼容

    var getJSONObj = function(jsonStr){
		if(JSON && JSON.parse)
			return JSON.parse(jsonStr);
		return (new Function('return' + jsonStr))();
	}
	
		
   
(6)字符串全部使用单引号，例如 var str = 'id="result" name="address"';

	var div = document.createElement('div');
	div.innerHTML = '<div id="news">conetnt...</div>';

(7)所有变量和表达式间空一格，例如for(var index in nameArr){, for(var i = 0, n = nameArr.length; i < n; i++){ 

	var name = 'Github';
	var apiArr = ['JavaScript API', 'iOS SDK', 'Android SDK'];
	// ++i或者i++ 在严格模式下，可写成i += 1;
	for(var i = 0, n = apiArr.length; i < n; ++i){
		console.log(apiArr[i]);
	}
(8)变量的命名需要见名知意，例如 var driverInfo = JSON.parse(jsonStr);

	var tipInfo = '请输入提示语'; //good case
    var str1 = '请输入提示语';  // base case

(9)所有变量的声明在逻辑块的最前部

	var SERVER_URL = 'http://127.0.0.1:3000/amap/js'; //常量
	var user = new User(); // global variable

	//使用上面的全局变量
	var setName = function(){
		getJSON(SERVER_URL + '/user/get');
		...	
	}

	//一下变量被下面2个函数使用，而不被上面的函数使用，建议变量定义在逻辑块上面
	//下面2个函数算是一个逻辑块
	var name = 'xxxx';
    var locationHash = 'nearby';
	var setPath = function(id){
		location.hash = locationHash + '/' + name + '/' + id;
	}

	var getData = function(pid){
		getJSON(SERVER_URL + '/' + name + '/' + pid);
	}

(9) return 后面变量不要换行，因为压缩会引起很多问题
	
	(function(){
		return {  //这里不要换行
			name: '测试服务',  //注意name和value之间有空格
			url: 'test:3000'
		};
	})();

(10)建议使用 && 、 || 、！!(obj)、三元运算符等

	if(data && data.length) //这是合理的判断，&&是依次判断，遇否中断， 建议
    var name = data.name || ''; //依次都判断，遇true赋值，建议
	var isName = names.split(',').lenght > 1 ? '名称正确'： '名称错误';
	var isCanvas = !!(canvas.getContext('2d'));

(11)所有callback建议return

	function getData(url, callback){
		.... 
		getJSON(url, function(status, data){
			if(status){
				var data = JSON.parse(data);
				data.status = status;
				return callback(data);
			}
			return callback({
				status: 0
			});
		});
	}

(12)建议所有数组声明，使用[],例如 var arr = [];
	
	var names = new Array(); //不建议
	var names = []; //建议
	

(13)++和--等一元自操作运算符紧跟变量
    
	i++； //建议
	++i; //建议
    i ++; //不建议
    ++ i; //不建议

(14)注释，建议单行注释；注释为单独一行

	//创建用户（这是单行注释，且占据一行）
	var user = new User('xiaoming', 25);
	//设置用户姓名
    user.setName('鬼谣');

(15)语句统一使用分号';'结尾，建议
	var getName = function(){
		...
	}; //这里有分号

(16)所有的JavaScript代码放在一个闭包内,避免污染全局变量
	
	(function(exports){
		var user = new User();
		//do something
		...
	})(window);

## #HTML
(1)统一使用HTML5的DOCTYPE
	
	<!DOCTYPE html>

(2)使用UTF8字符编码，全部简写成如下即可

	<meta charset="utf-8" />

(3)id紧跟标签名（空一格）,即id放在标签属性的最前面
   
	<div id="" name="" ...></div>

(4)JavaScript外部引用脚本全部放在body闭合标签上；不放在head里面

	<!DOCTYPE html>
	<html ng-app="app">
		<head>
			<meta charset="utf-8" />
			<title></title>
		</head>
		<body>
			<div></div>
			<script type="text/javascript" src="js/angular.min.js" ></script>
			<script type="text/javascript" src="lib/1.js" ></script>
		</body>
	</html>

(5)css文件，公共样式放入common.css, 其他内联到head标签内部

	<head>
		<meta charset="utf-8" />
		<title></title>
		<link rel="stylesheet" href="css/common.css" />
		<style type="text/css">
			html body{...}
			body>div:nth-child(2){...}
		</style>
	</head>

(6)建议减少使用table、H等标签，如果有必要使用display: table;建议全部使用DIV+CSS布局    
(7)HMTL文件中的标签属性全部使用双引号
	
	<body>
		<div id="parent">
			<div id="detail">
				
			</div>
		</div>
	</body>

(8)HTML标签内不建议内联样式
 
	<!--不建议内联样式-->
	<div style="color:#ccc; font-size:14px;"></div> 

(9)保持HTML文件的干净，看上去清爽，只剩下标签和class属性最好

(10)scrip标签标准格式，建议不使用language

	<script type="text/javascript" src="外部脚本" ></script>

### CSS
(1)所有样式都必须分号(';')结尾, 标签和样式都在一行，不换行，减少页面代码行数

	html body{font-size:12px;color:#ddd;}
	body>div:nth-child(2){width:300px;height:300px;border:1px solid red;}
(2)所有样式尽量使用class、标签表示；减少使用id

	/*一篇HTML中尽量看去只用class，必要id除外*/
	.fl{float:left;}
	/*尽量减少使用id*/
	#title_text{float:left;}
(3)如果兼容低版本浏览器，建议不带前缀的css在前，然后是带前缀的样式，毕竟高版本浏览器居多

	div{transform: ...;-webkit-transform: ...;-moz-transform: ...;-ms-transform: ...;}
(4)css内部属性字符串使用单引号

	html body{font-size:12px;color:#ddd;font-family: '微软雅黑', georgia;}
(5)提示信息，字体为12px; 按钮字体为14px(只针对js-demo)

(6)css外部脚本标准为
	
	<link rel="stylesheet" href="css/common.css" />


