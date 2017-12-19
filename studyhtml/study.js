/**
 * Created by merbng on 2017/8/31.
 *
 * alert(isNaN('Lee')); true 不能转换为数值
 *
 * alert(isNaN(true)); false  true可以转换成1
 *
 * var box  = {};
 * alert(isNaN(box));   true   如果对象的toString方法能够返回数值，那么就不是NaN了
 *
 * alert(Number(25));  25数值型 直接返回
 * alert(Number(true)); Boolean类型的 true和false 分别转换成1 和 0
 * alert(Number(null)); 空对象 返回 0
 * alert(Number(undefined)); NaN  undefined 返回 NaN
 *
 * var box ={toString :function () {
 *  return null }};
 *alert(Number(box));
 * parseInt 只能转换字符串数值
 * alert(parseInt('456Lee')) 会返回整数部分
 * alert(parseInt('Lee456')) NaN 如果第一个不是数值 就返回 NaN
 * alert(parseInt('56.12'))  56
 * alert(parseInt(''))  NaN
 * alert(parseInt('070'))  70  八进制的
 * alert(parseInt('0x1f'))  31
 * alert(parseInt('0x1f',16));   31
 * alert(parseInt('1f',16));   31 可省略0x
 * alert(parseInt('01011011001101',2));
 * alert(parseInt('70',8));   56
 * alert(parseFloat('0xA'));  0 不认识十六进制
 * alert(parseFloat('123.4.5'));  123.4  只认一个小数点
 * alert(parseFloat('0123.400'));   123.4    前导 后导 去掉、
 * alert('Lee');
 * alert("Lee");
 * alert('L \n e'); 换行
 * alert('\t\'Le\ne\'')  转义字符
 * alert('\x41');  十六进制
 * alert('\u03a3'); uncode字符
 * var box ='Mr';
 * box=box+'Lee';
 * alert(box);
 *var box =123;
 *alert(  box.toString()); 数值转换字符串的过程
 *var box =10;
 *alert(box.toString(2))  // '1010'
 *alert(box.toString(8))  // '12'
 *alert(box.toString(16))  // 'a'
 *var box =null;
 *alert(String(box))  //  'null'
 *var box;
 *alert(typeof String(box))  //  'null'  是string类型
 *var box ={};
 *alert(typeof box)   object Object
 *var box =new Object();  //通过new 创建一个对象
 *alert(typeof box)
 *box =new Object(2);
 *alert(box)  //  2
 *box =new Object(2);
 *alert(typeof box)  //  object类型
 *var age =100;
 *alert(box+age);//  102  可以运算

 *var box =new Number(50);//这种方法也是创建一个数值对象
 *alert(typeof box) //object
 *var box =new String('Lee');
 *alert( box);  // objct 类型
 *
 *运算符
 * var box =100;
 * ++box;
 * alert(box);  // 101   前置递增  box =box +1
 * var box =100;
 * --box;
 * alert(box);  // 99   前置递减  box =box -1
 *
 * var box =100;
 * var age =++box;
 * alert(age);  // 101   先box累加到101  然后赋值给age
 *
 * var box =100;
 * var age =box++;
 * alert(age);// 100   先box赋值给age 100  然后box累加101
 * alert(box);  // 101   先box累加到101  然后赋值给age
 * var box ='89';
 * box++;      //++ 如果对数值字符串，有一个转型的作用
 * alert(typeof box);
 * var box ={};
 * box++; //  NaN
 * alert( box);
 * var box ='89';
 * alert( +box); // + 有自动转型的功能
 *
 * var box =10+{toString:function () {  // 10123
*        return '123';
*    }};
 * alert(box);
 *如果对象toString返回的是数值，那么就按数值来
 * var box =10+{toString:function () { // 133
*        return 123;
*    }};
 * alert(box);
 * var box =3<2;
 * alert(box);    //false  关系运算符大多返回布尔值
 * var box ='33'>22;
 * alert(box);    //如果只有一个数值字符串，那么会将他转换成数值，在比较
 * var box ='433'>'22';
 * alert(box);    //如果两个都是数值字符串，那么会比较进行第一个字符串的比较
 * var box = 2>{toString :function () {
 *       return '1';
 *   }};
 * alert(box);
 *
 * var box = 'a'<'b'; //true  比较的是ASCII编码   97<98
 * alert(box);
 var box =['Merbng',25,'北京'];
 // alert(box.unshift('朝阳区'));//给数组前端添加一个元素，并且返回最新的长度 4
 // alert(box.shift('朝阳区'));//移除数组开头的一个元素，并且返回这个元素
 alert(box);
 var box =[1,2,3,4,5];
 alert(box.reverse());//返回一个逆序后的数组
 alert(box);//原数组也被逆序了 ，说明 值改变了

 var box =[13,22,34,24,15];
 alert(box.sort());//从小到大排序
 alert(box);
 function compare(value1, value2) {
    if(value1<value2){
        return -1;
    }else   if(value1<value2){
        return 1;
    }else {
        return 0;
    }
}
 var box =['0','1','5','10','15'];
 alert(box.sort(compare));//从小到大排序
 alert(box.reverse());//逆序
 var box =['Merbng',25,'北京'];
 var box2 =box.concat('安卓');//追加，基于当前，
 alert(box);
 alert(box2);
 var box =['Merbng',25,'北京','www'];
 var box2 =box.slice(1,3);//从第一个位置 取到第三个位置'Merbng',25,'北京'
 alert(box2);
 var box =['Merbng',25,'北京','www'];
 var box2 =box.splice(0,2);//这里表示从第0个位置取2个，而不是从第0个位置取到第二个位置
 alert(box2);


 var box =['Merbng',25,'北京','www'];
 var box2 =box.splice(0,2);//这里表示从第0个位置取2个，而不是从第0个位置取到第二个位置
 alert(box2);
 alert(box);//并且有删除功能  '北京','www'


 var box =['Merbng',25,'北京','www'];
 var box2 =box.splice(1,0,"计算机");//从第一个插入点插入元素， 0表示不删除
 alert(box2);
 alert(box);

 var box =['Merbng',25,'北京','www'];
 var box2 =box.splice(1,1,100);//   25 替换  100
 alert(box2);//被删除的那一条
 alert(box);

 //时间和日期
 var box =new Date(Date.parse('4/12/2017'));
 alert(box);//Wed Apr 12 2017 00:00:00 GMT+0800 (中国标准时间)

 var box1 =new Date('5/12/2008');//默认自动后台调用Date.parse();
 alert(box1);

 alert(Date.parse());// NaN   没有传入格式日期参数，返回NaN

 var box =new Date('wwa lklfkal');
 alert(box);//火狐返回：Invalid Date 谷歌返回混乱的日期， ie返回NaN 乱写 会返回 Invalid Date 无效的日期

 var box =new Date('May 23,2008');
 alert(box);//Fri May 23 2008 00:00:00 GMT+0800 (中国标准时间)

 var box =new Date('Fri May 23 2018 00:00:00 GMT+0800 ');
 alert(box);//Fri May 23 2008 00:00:00 GMT+0800 (中国标准时间)

 var box =new Date('May 33 2018 00:00:00 GMT+0800');
 alert(box);//谷歌Invalid Date
 alert(Date.UTC());//谷歌浏览器 NaN     必须传入月份，不传会各种错误
 alert(Date.UTC(2018,10));//返回毫秒数  1541030400000

 //UTC 世界协调时间。他会按照他的区域基准计算
 var box =new Date(Date.UTC(2018,8,5,23,2,15));//如果不加Date.UTC  就会返回本地的时间
 alert(box);//Fri Nov 16 2018 06:43:15 GMT+0800 (中国标准时间)
 alert(box.toLocaleString());//2018/9/6 上午7:02:15

 var box =new Date(2017,10,5,23,8,15);
 alert(box.toDateString());//Sun Nov 05 2017
 alert(box.toTimeString());//23:08:15 GMT+0800 (中国标准时间)
 alert(box.toLocaleDateString());//2017/11/5
 alert(box.toLocaleTimeString());//下午11:08:15
 alert(box.toUTCString());//Sun, 05 Nov 2017 15:08:15 GMT

 //组件方法， 单独获取想要的日期时间   有UTC 和没有UTC  相差8小时
 var box =new Date(2017,10,5,23,8,15);//alert(box.getYear());//废弃
 box.setTime(100);//可以设置  可以输出
 alert(box.getTime());//Sun Nov 05 2017
 alert(box.getFullYear());
 alert(box.getMonth()+1);//月份要加1才是最终的月份
 正则表达式
 var box =new RegExp('Box');//第一个参数是 模式字符串
 alert(box);
 var box2 =new RegExp('Box','ig');//第二个参数可选， 模式修饰符
 alert(box2);

 var box =/Box/ig;//使用字面量的正则 ，
 alert(box) ;
 var pattern =new RegExp('Box','i');//区分大小写
 var box ='box';//字符串
 alert(pattern.test(box)); //true
 alert(/Box/i.test('box')); // 一句话匹配
 var str1 ='box';
 var str2 ='Box';
 alert(str1==str2);  //字符串的匹配比较方式

 var pattern =/Box/i;//不区分大小写匹配
 var str ='this is a box! ';
 alert(pattern.test(str)); //true

 var pattern =/Box/i;
 var str ='box';
 alert(pattern.exec(str));
 alert(typeof  pattern.exec(str));

 //Map  键值对结构，急速查找
 var m =new Map([['merbng',100],['xiaoming',99],['wangqiang',97]]);
 alert(m.get('merbng'));
 alert(m.get('xiaoming'));
 alert(m.get('wangqiang'));
 var m2=new Map();
 m2.set('merbng2',99);
 m2.set('xiaoming',110);
 m2.set('wangqiang',11);
 m2.has('merbng');
 m2.has('merbng2');
 m2.delete('xiaoqiang');

 //Set 也是一组key的集合，但不存储value，由于key不能重复，所以，在Set中，没有重复的key，要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set
 var s1 =new Set();
 var s2=new Set([1,3,4]);
 //重复的元素在set中自动被过滤
 var s3 =new Set([1,3,3,4,5,'7']);
 s3.add(4);
 s3.delete(5);

 //for ... of循环遍历集合
 var a= ['A','B','C'];
 var s = new Set(['A', 'B', 'C']);
 var m =new Map([[1,'x'],[2,'y'],[3,'z']]);
 for (var x of a) { // 遍历Array
    alert(x);
}
 for(var x of s){
    alert(x);
}
 for(var x of m){
    alert(x);
}



 var a =['A','B','C'];
 a.forEach(function (element, index, array) {
    //element 指向当前元素的值
    //index 指向当前索引
    //array 指向Array对象本身
    alert(element);
    // alert(index);
    // alert(array);
});

 //Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
 var s = new Set(['A', 'B', 'C']);
 s.forEach(function (element, sameElement, set) {
    alert(p3);
});


 //Map的回调函数参数依次为 value key map本身
 var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
 m.forEach(function (value, key, map) {
    alert(value);
    // alert(key);
    // alert(map);
});

 //函数
 function abs(x) {
    if(x>=0){
        return x;
    }else {
        return -x;
    }
}

 var abs =function (x) {
    if(x>=0){
        return x;
    }else{
        return -x;
    }
};
 //在这种方式下，function (x) { ... }是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量abs，所以，通过变量abs就可以调用该函数。
 // 上述两种定义完全等价，注意第二种方式按照完整语法需要在函数体末尾加一个;，表示赋值语句结束。
 alert(abs(6));
 alert(abs);

 function abs(x) {
    if(typeof x !=='number'){
        throw 'Not a Number';
    }
    if(x>=0){
        return x;
    }else {
        return -x;
    }
}
 alert(abs('1'));

 function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    alert('a =' + a);
    alert('b =' + b);
    alert(rest);
}

 foo(1, 2, 3, 4, 5);

 function foo2(a, b, ...rest) {
    alert('a =' + a);
    alert('b =' + b);
    alert(rest);
}
 foo2(1, 2, 3, 4, 5);
 foo2(1);

 // todo :2017年9月20日21:56:09
 var box ='Mr. Lee';
 // alert(box.toLowerCase());//小写
 // alert(box.toUpperCase());//大写
 // alert(box.match('L'));//找到L 即返回L
 // alert(box.match('a'));//没找到  即返回null
 // alert(box.search('L'));//找到L的位置   4
 // alert(box.replace('L','Q'));//Mr. Qee 替换
 // alert(box.split(' '));//Mr.,Lee  分割成数组
 // alert(String.fromCharCode(76));// 输出 Ascii码 对应值

 var box ='Lee';
 // alert(box.localeCompare('Lee'));// 0
 // alert(box.localeCompare('Aee'));//1
 // alert(box.localeCompare('Zee'));//-1
 // alert(box.localeCompare('123'));//1
 // alert(box.localeCompare('周'));//1
 // alert(box.localeCompare('哎'));//1

 var box ='百度';
 alert(box.link('http//www.baidu.com'));//<a href="http//www.baidu.com">百度</a>
 alert(box.bold('http//www.baidu.com'));

 //内置对象
 var box ='Lee';
 // alert(Global);
 alert(window);

 var box ='//Lee李';
 // alert(encodeURI(box));//    //Lee%E6%9D%8E
 // alert(encodeURIComponent(box));// %2F%2FLee%E6%9D%8E  编码的更彻底
 var a= encodeURI (box);
 alert(a);
 alert(decodeURI(a));

 var b= encodeURIComponent(box);
 alert(b);
 alert(decodeURIComponent(b));

 eval方法主要担当一个字符串解析器的作用，他只接受一个参数，而这个参数就是要执行的JavaScript代码的字符串
// eval('var box =100;')
// alert(box);   //100
eval('alert(100)')

 //eval()方法更能非常强大
 eval('function box(){return 123;}');
 alert(box());

 // Global属性
 alert(Array);
 alert(window.array);

内置对象
 alert(Math.max(2,4,6,8,5,1));//最大值
 alert(Math.min(2,4,6,8,5,1));//最小值

 //向上舍入  24
 alert(Math.ceil(23.9));
 alert(Math.ceil(23.5));
 alert(Math.ceil(23.1));

 //向下舍入 23
 alert(Math.floor(23.9));
 alert(Math.floor(23.5));
 alert(Math.floor(23.1));


// alert(Math.random());// 0-1 之间， 不包含0 1
// for(var i=0;i<10;i++){{
//     document.write(Math.floor(Math.random()*10+1));//范围1-10
//     document.write(Math.floor(Math.random()*10+5));//范围5-14   10+5-1；
//     document.write('<br/>')
// }}
//5-10
// for(var i=0;i<10;i++){{
//     document.write(Math.floor(Math.random()*6+5));
//     document.write('<br/>')
// }}
// function select(start,end) {
//     var total=end-start+1;
//     return Math.floor(Math.random()*total+start);
// }
// for(var i=0;i<10;i++){{
//     document.write(select(1,16));
//     document.write('<br/>')
// }}
 var box={};
 box.name='Lee';
 box.age=100;
 box.run=function () {
    return this.age+this.name+'运行中。。。';//this 表示当前作用域下的对象
};
 //this 表示new Object实例化出来的那个对象
 alert(box.run());
 var box=new Object();
 box.name='Lee';
 box.age=100;
 box.run=function () {
    return this.age+this.name+'运行中。。。';//this 表示当前作用域下的对象
};
 //this 表示new Object实例化出来的那个对象
 alert(box.run());
 var box2 =box;
 box2.name='www';
 box2.age=100;
 box2.run=function () {
    return this.name+this.age+'运行中。。。';//this 表示当前作用域下的对象
};

 alert(box2.run());
工厂模式
 function createObject(name, age) {
    var obj =new Object();
    obj.name=name;
    obj.age=age;
    obj.run =function () {
        return this.name+this.age+'运行中,,,';
    };
    return obj;
}
 var box1 =createObject('lle',100);
 var box2 =createObject('kke',200);

 alert(box1.run());
 alert(box2.run());


 function createObject(name, age) {
    var obj =new Object();
    obj.name=name;
    obj.age=age;
    obj.run =function () {
        return this.name+this.age+'运行中,,,';
    };
    return obj;
}
 var box1 =createObject('lle',100);
 var box2 =createObject('kke',200);
 var box3 =createObject('xxx',20);

 alert(box1.run());
 alert(box2.run());
 alert(box1 instanceof  Object);
 alert(box2 instanceof  Object);
 alert(box3 instanceof  Object);//不管怎样 他们都是Object，就无法区分到底是谁的对象

 */
function Box(name, age) {
    this.name=name;
    this.age=age;
    this.run =function () {
        return this.name+this.age+'运行中。。。';
    }
}
//1.构造函数没有new Object  但他后台会自动var obj =new Object
//2.this 就相当于obj
//3.没有return语句

//1.构造函数也是函数，函数名第一个字母大写
//2.必须使用new 构造函数名，，new Box(); 而这个Box第一个字母也是大写的
//3.必须使用new 运算符

var box1 =new Box('xxx',10);
var box2 =new Box('qqq',20);
alert(box1 instanceof Object);

// 2017年12月18日23:23:51
//熟悉博客搭建



















