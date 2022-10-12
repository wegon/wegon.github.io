import{_ as d,r as i,o as a,c as r,a as e,b as n,d as t,e as l}from"./app.0e778faf.js";const c={},o=e("h1",{id:"ha",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ha","aria-hidden":"true"},"#"),n(" Ha")],-1),u=e("h2",{id:"vuepress-\u642D\u5EFA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-\u642D\u5EFA","aria-hidden":"true"},"#"),n(" VuePress \u642D\u5EFA")],-1),v={href:"https://v2.vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>\u7BA1\u7406\u5458\u653B\u51FBcmd</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>corepack enable
npm i -g corepack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u81EA\u5DF1\u7684\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn init
yarn add -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9879\u76EE\u6765\u7684package.json \u4E2D \u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728gitignore\u4E2D\u6DFB\u52A0\u9700\u8981\u5C4F\u853D\u7684\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;node_modules&#39; 
&#39;.temp&#39; 
&#39;.cache&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u7B2C\u4E00\u4E2A\u6587\u6863</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir docs
echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6253\u5F00\u63A7\u5236\u53F0\u4E2D\u7684\u5730\u5740</p><p>\u6253\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function p(b,x){const s=i("ExternalLinkIcon");return a(),r("div",null,[o,u,e("p",null,[n("\u5B98\u7F51\u642D\u5EFA\u6D41\u7A0B\uFF1A"),e("a",v,[n("\u5B98\u7F51"),t(s)])]),m])}const h=d(c,[["render",p],["__file","index.html.vue"]]);export{h as default};
