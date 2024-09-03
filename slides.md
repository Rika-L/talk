---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSize: 0.1
glowX: -100
glowY: 50
---

<div class=" fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    <div class="shell">
      <span class="blob"></span>
      <span class="blob"></span>
      <span class="blob"></span>
      <span class="blob"></span>
    </div>
</div>


<style>

.shell {
  display: grid;
  position: relative;
  animation: spin infinite 5s linear;
  grid-area: stack;
}

.blob {
  --border-radius: 115% 140% 145% 110%/125% 140% 110% 125%;
  aspect-ratio: 1;
  display: block;
  grid-area: stack;
  background-repeat: no-repeat;
  background-position: center;
  border: 40px solid transparent;
  border-radius: var(--border-radius, 50%);
  mask-image:
      linear-gradient(transparent, transparent),
      linear-gradient(black, white);
  mask-clip: padding-box,border-box;
  mask-composite: intersect;
  mix-blend-mode: screen;
  height: 300px;
  filter: blur(100px);
}

.blob:nth-child(1){
  background-color: #07D;
  background-image: linear-gradient(#07D,#3cc,#07D);
  rotate: 30deg;
  scale: 1.03;
}
.blob:nth-child(2){
  background-color: #F43;
  background-image: linear-gradient(#F43,#F81,#F43);
  rotate: 60deg;
  scale: 0.95;
}
.blob:nth-child(3){
  background-color: #3A7;
  background-image: linear-gradient(#3A7,#1f7,#3A7);
  rotate: 90deg;
  scale: 0.97;
}
.blob:nth-child(4){
  background-color: #B1C;
  background-image: linear-gradient(#B1C,#814,#B1C);
  rotate: 120deg;
  scale: 1.02;
}

@keyframes spin {
  from{
    rotate: 0deg;
  }
  to{
    rotate: 360deg;
  }
}
</style>

---
layout: center
---

<h1 flex="~ col">
<div text-2xl op50>认识和理解前端，掌握学习方法</div>
<div class="font-thin">前端基础指北</div>
</h1>

<div uppercase text-sm tracking-widest op50>
李卓熙
</div>

---
layout: intro
glowX: 0
glowY: 90
style: 'padding-left: 9rem;'
---

# 李卓熙

<div class="leading-10 opacity-80">
前端学习时长7个月左右<br>
项目经验3+<br>
</div>


<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div  class="i-ph-user op50 ma text-xl"/>
  <div><a href="https://rika-me.netlify.app/#/" target="_blank" class="border-none! font-300">rika.me</a></div>
  <div i-carbon-logo-github op50 ma text-xl ml3/>
  <div><a href="https://github.com/Rika-L" target="_blank" class="border-none! font-300">Rika</a></div>
</div>

<img src="/avatar.jpg" rounded-full w-35 abs-tr mt-32 mr-40 />


---
layout: intro
---

What{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>前端是什么？</h2>

<!-- 负责页面绘制，算是一个网站的门面 -->


---
clicks: 4
glowX: 0
glowY: 0
---

## 前后端分离的开发模式

<div v-click="1" class="absolute top-40 left-20">
<div>
JavaWeb - 即当爹又当妈的时代
</div>
<img src="/java.svg" class="w-60  top-20 right-20 fixed"/>
</div>

<div v-click="2" class="absolute top-60 left-20">
<div class="text-2xl">前后端分离实际上是<span class="font-bold">职责</span>的分离</div>
</div>


<div v-click="3" class="absolute top-70 left-30">
<div class="mt-4">后端：处理数据存储、业务逻辑和服务器管理</div>
</div>

<div v-click="4" class="absolute top-80 left-30">
<div class="mt-4">前端：专注于用户界面和用户体验</div>
</div>


<!-- 旧现代的开发方式中，一个程序员同时处理数据和页面绘制 -->

---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.5
---

#### For example {.op60}

<!-- 可以举一个前后端分离开发的例子 -->


---
layout: center
---


---
glowX: 0
glowY: 100
clicks: 7
class: h-full
---


<div px4 ml--4 py3 inline-block>
  <div op50>总体流程:</div>
<div class="mt-4" v-click="1">前端通过接口以json等形式向后端进行请求，后端根据请求处理数据并返回响应</div>
</div>
<div class="mt-4 flex gap-2 items-center">
<img src="/login.png" width="200" v-click="2"/>
<div v-click="3">
 =========>
</div>
<div v-click="3">
```ts
axios.post(url,{
    username: 123, password:123
})
```
</div>


</div>

<div v-click="4" class="mt-4">后端经过一系列数据处理并返回</div>

<div v-click="5" class="mt-4">
```json
{
  "code": 200,
  "msg": "success"
}
```
</div>

<div v-click="6" class="mt-4">前端对返回的数据进行处理并进行登陆成功等操作...</div>

<img src="/loginSuccess.png" width="200" v-click="7"/>

<!-- 前端先画好一个登陆的页面给后端传数据<br/> 
在这个例子中前端只需要专注于页面交互的实现而将数据的存储，处理等交给后端
-->


---
glowX: 100
glowY: 100
class: text-center
layout: center
---

# 前端可以做什么？

<v-clicks>

<div>网页</div>
<div>小程序</div>
<div>应用</div>
<div>游戏</div>
<div>甚至是。。。PPT？</div>

</v-clicks>

---
glowX: 90
glowY: 90
layout: intro
clicks: 1
---

## 只用后端可以写一个好看的网页吗？

<div v-click="1" class="op50 mt-4 text-4xl">No</div>

<!-- 
-->

---
glowX: 30
glowY: 30
layout: intro
clicks: 1
---

## 只用前端可以写一个好看的网页吗？

<div v-click="1" class="op70 mt-4 text-6xl">Yes</div>

---
layout: intro
---

学啥{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>前端要学什么</h2>

---
glowX: 100
glowY: 50
clicks: 6
---

## 基础三件套

<div class="absolute top-40 left-20">
    <div v-click="1" class="flex items-center justify-start gap-5 my-4"> 
        <img src="/html.svg" width="50"/><span>HTML</span>
        <span v-click="4">====> HTML5</span>
    </div>
    <div v-click="2" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/CSS.svg" width="50"/><span>CSS</span>
        <span v-click="5">====> CSS3</span>
    </div>
    <div v-click="3" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/JavaScript.svg" width="50"/><span>JavaScript</span>
        <span v-click="6">====> </span><img v-click="6" src="/typescript.svg" width="50"/><span v-click="6">TypeScript</span>
    </div>
</div>

---
glowX: 0
glowY: 50
clicks: 5
---

## 三大框架

<div class="absolute top-40 right-20">
    <div v-click="1" class="flex items-center justify-end gap-5 my-4">
        <span>AngularJs</span><img src="/Angular.svg" width="50"/>
    </div>
    <div v-click="2" class="flex justify-end items-center gap-5 my-4"> 
        <img v-click="4" src="/cib-next-js.svg" width="50"/>
        <span v-click="4">Next.js <=====</span>
        <span>React</span><img src="/React.svg" width="50"/>
    </div>
    <div v-click="3" class="flex justify-end items-center gap-5 my-4"> 
        <img v-click="5" src="/nuxt.svg" width="50"/>
        <span v-click="5">Nuxt.js <=====</span>
        <span>Vue.js</span><img src="/Vue.svg" width="50"/>
    </div>
</div>

<!-- 看着挺唬人，但不是每个都必要学的，当前只需要精通其中一个即可 -->


---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.5
---

<h1 class="!text-7xl font-thin">Vue.js</h1>

<!-- Vue是一个比较火的开源前端框架，其中一部分原因是他的作者是一个新加披籍华人吧 -->


---
glowX: 50
glowY: 0
glowSize: 2
clicks: 7
---

## 一些工具库

<div class="absolute top-30 left-20">
    <div v-click="1" class="flex items-center justify-start gap-5 my-4"> 
        <img src="/axios.svg" width="50"/><span>axios</span>
    </div>
    <div v-click="2" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/vueuse.svg" width="50"/><span>VueUse</span>
    </div>
    <div v-click="3" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/lodash.svg" width="50"/><span>lodash</span>
    </div>
<div v-click="4" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/tailwindcss-mark.svg" width="50"/><span>TailwindCSS</span>
    </div>
<div v-click="5" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/Unocss.svg" width="50"/><span>UnoCSS</span>
    </div>
<div v-click="6" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/element-plus.svg" width="50"/><span>ElementPlus</span>
    </div>
<div v-click="7">
...
    </div>
</div>


---
glowX: 90
glowY: 10
glowSize: 1
clicks: 5
---

## 一些小玩具

<div class="absolute top-30 left-20">
    <div v-click="1" class="flex items-center justify-start gap-5 my-4"> 
        <img src="/electron.svg" width="50"/><span>Electron - 使用前端技术写桌面端应用</span>
    </div>
    <div v-click="2" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/slidev.svg" width="50"/><span>Slidev - 前端写PPT</span>
    </div>
    <div v-click="3" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/uni-app.svg" width="50"/><span>UniApp - 用Vue写小程序</span>
    </div>
<div v-click="4" class="flex justify-start items-center gap-5 my-4"> 
        <img src="/vuepress.png" width="50"/><img src="/vitepress.svg" width="50"/><span>VitePress、VuePress 等各种SSG (Static site generator)</span>
    </div>
<div v-click="5">
...
    </div>
</div>

<!-- 可以举下例子，比如qq -->


---
layout: intro
---

How{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>前端要怎么学</h2>

<!-- 每个人的学习方法都不一样，所以我给的是一些思路吧 -->

---
glowX: 25
glowY: 10
glowSize: 0.3
---

# 找到属于自己的前端动力

<div class="flex justify-center mt-[20vh] font-thin text-5xl op50">
    Share a few of my experiences
</div>

<!--
刚开始学前端的时候我也觉得很无聊，一方面是学的东西有点杂，感觉各种东西混在一起，学完还不知道怎么用吧<br/>
后来开始做项目之后我发现所有学到的都能串起来，运用起来，就是感觉他们发生了一些化学反应吧<br/>
从开始写一个组件，写一个路由，到最后自己真的把一个项目做了出来，每一步都能给我带来很大的成就感吧可以说<br/>
差不多寒假还有一个多星期开学的时候吧，想赚钱，然后跟同学一起搞了个gpt镜像站吧，结果还是没赚到钱，但是那段时间可以说是我能力提升最快的时候吧，有图片可以看看
-->

---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.5
---

<div class="text-gray-400 text-3xl">interestDriver</div>
<h1 class="!text-7xl font-thin">兴趣驱动</h1>

<!-- 
可以从一个idea入手，可能是一个组件，可能是一个功能，总是是一个有兴趣去实现的部分，自己实现一次，实现的过程中也可以提升自己的能力<br/>
举个例子 什么调色板 演示一下
-->

---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.7
---

<div class="text-gray-400 text-3xl">lazyDriver</div>
<h1 class="!text-7xl font-thin">懒惰驱动</h1>

<!-- 
比如说开发的过程中部分代码会重复很多次，写多了就懒得写了，就可以考虑封装成组件，封装组件比直接写更有难度，也可以提升自己吧
-->

---
layout: center
class: text-center
glowX: 20
glowY: 20
glowSize: 1
---

<h1 class="!text-7xl font-thin">Code Review</h1>

<!-- 
重点针对已经有项目能力的同学
-->

---
glowX: 95
glowY: 95
glowSize: 0.6
---

# 推荐的学习路线

<div class="flex justify-center mt-[20vh] font-thin text-5xl gap-20">
<img src="/html.svg" width="50"/>
<img src="/CSS.svg" width="50"/>
<img src="/JavaScript.svg" width="50"/>
<img src="/markdown.svg" width="50"/>
</div>

---
glowX: 90
glowY: 90
glowSize: 0.7
---

# 推荐的学习路线

<div class="flex justify-center mt-[20vh] font-thin text-5xl gap-20">
<img src="/git.svg" width="50"/>
<img src="/Node.js.svg" width="50"/>
<img src="/JavaScript.svg" width="50"/>
<img src="/axios.svg" width="50"/>
</div>

---
glowX: 85
glowY: 85
glowSize: 0.8
---

# 推荐的学习路线

<div class="flex justify-center mt-[20vh] font-thin text-5xl gap-20">
<img src="/vite.svg" width="50"/>
<img src="/Vue.svg" width="50"/>
<img src="/typescript.svg" width="50"/>
</div>

---
glowX: 80
glowY: 80
glowSize: 0.9
---

# 推荐的学习路线

<div class="flex justify-center mt-[20vh] font-thin text-5xl gap-20 op50">
Following that, you can do any.
</div>

---
glowX: 50
glowY: 120
glowSize: 1
---

# 前端必修课

<div class="text-center mt-[20vh] font-thin text-3xl gap-20 op90 leading-12">
<div>
xxx-admin
</div>
<div>
xxx-管理平台
</div>
<div>
xxx-后台管理系统
</div>
</div>
<div>
<a href="https://pure-admin-thin.netlify.app/#/welcome" class="text-sm">
pure-admin
</a>
</div>
<div>
<a href="https://fantastic-admin.hurui.me/basic-example/#/" class="text-sm">
Fantastic-admin
</a>
</div>

---
layout: intro
---

选择性必修{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>前端选修课 - Blog</h2>

---
glowX: 100
glowY: 80
glowSize: 1
clicks:1
---

<h1 class="font-thin">some Example</h1>
<h3 class="font-thin">体现个人风格</h3>
<h5 class="font-thin op50">要是去面试也会有帮助</h5>
<img v-click="1" src="/example.png" alt="" class="fixed top-20 right-20 w-120">

<div class="mt-24">
<a href="https://fuxiaochen.com/">fuxiaochen.com</a>
</div>
<div>
<a href="https://joy-yujiepeng.xyz/en#home">joy-yujiepeng.xyz</a>
</div>
<div>
<a href="https://esm.dev/">esm.dev</a>
</div>
<div>
<a href="https://sarah.dev/">sarah.dev</a>
</div>
<div>
<a href="https://rika-me.netlify.app/#/">rika.me</a>
</div>

---
layout: intro
glowX: 0
glowY: 90
glowSize: 2
style: 'padding-left: 9rem;'
---

<h1 class="font-thin">The End</h1>

---
layout: intro
glowX: 50
glowY: 50
glowSize: 5
---

<h1 class="font-thin text-center">Question</h1>
