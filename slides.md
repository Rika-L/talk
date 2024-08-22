---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowX: 50
glowY: 130
glowSize: 1.5
---

<h1 flex="~ col">
<div text-2xl op50>认识和理解前端，掌握学习方法</div>
<div>主题名字</div>
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
前端学习时长7个月以上<br>
项目经验3+<br>
关注新兴技术并将其投入到开发中<br>
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

---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.5
---

#### For example {.op60}

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

---
layout: center
class: text-center
glowX: 50
glowY: 50
glowSize: 0.5
---

<h1 class="!text-7xl font-thin">Vue.js</h1>

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
layout: intro
---

How{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>前端要怎么学</h2>
