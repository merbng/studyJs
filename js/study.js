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
*        return '1';
*    }};
 * alert(box);
 *
 * var box = 'a'<'b'; //true  比较的是ASCII编码   97<98
 * alert(box);
 */
var box =true==1;
alert(box);























