import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as t,a as e,b as i,d as c,e as r}from"./app-c481a5ec.js";const n={},s=e("h1",{id:"iglobaleditoroptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iglobaleditoroptions","aria-hidden":"true"},"#"),i(" IGlobalEditorOptions")],-1),h=e("code",null,"interface",-1),u={href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.BracketPairColorizationOptions.html",target:"_blank",rel:"noopener noreferrer"},b=r('<h2 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties" aria-hidden="true">#</a> 属性 Properties</h2><h3 id="autodetecthighcontrast" tabindex="-1"><a class="header-anchor" href="#autodetecthighcontrast" aria-hidden="true">#</a> autoDetectHighContrast</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>-</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，编辑器将自动检测操作系统是否正在使用高对比度主题，并在检测到时自动更改为高对比度主题。默认为 true。</li></ul><h3 id="detectindentation" tabindex="-1"><a class="header-anchor" href="#detectindentation" aria-hidden="true">#</a> detectIndentation</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，编辑器将自动检测文档中使用的缩进，并在下次打开该文档时使用相同的缩进。如果禁用，则编辑器将始终使用 tab 字符作为缩进。</li></ul><h3 id="insertspaces" tabindex="-1"><a class="header-anchor" href="#insertspaces" aria-hidden="true">#</a> insertSpaces</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，编辑器将使用空格而不是 tab 字符进行缩进。如果禁用，则编辑器将始终使用 tab 字符作为缩进。</li></ul><h3 id="largefileoptimizations" tabindex="-1"><a class="header-anchor" href="#largefileoptimizations" aria-hidden="true">#</a> largeFileOptimizations</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，编辑器将在处理大文件时应用优化。如果禁用，则编辑器可能会在处理大文件时变得缓慢或不稳定。</li></ul><h3 id="maxtokenizationlinelength" tabindex="-1"><a class="header-anchor" href="#maxtokenizationlinelength" aria-hidden="true">#</a> maxTokenizationLineLength</h3><ul><li>类型： <code>number</code> <code>可选</code></li><li>默认值： <code>20000</code></li><li>可选项： <code>-</code></li><li>描述：指定编辑器在标记化行时使用的最大行长度。如果行的长度超过此值，则编辑器将不会对该行进行标记化。这可以提高性能，但可能会导致某些语言的语法高亮显示不正确。</li></ul><h3 id="semantichighlighting-enabled" tabindex="-1"><a class="header-anchor" href="#semantichighlighting-enabled" aria-hidden="true">#</a> semanticHighlighting.enabled</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，编辑器将使用语义高亮显示来突出显示代码中的符号。如果禁用，则编辑器将使用语法高亮显示。</li></ul><h3 id="stablepeek" tabindex="-1"><a class="header-anchor" href="#stablepeek" aria-hidden="true">#</a> stablePeek</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，编辑器将在查看定义等操作期间尝试保持打开的编辑器不变。如果禁用，则编辑器可能会在查看定义等操作期间打开新的编辑器。</li></ul><h3 id="tabsize" tabindex="-1"><a class="header-anchor" href="#tabsize" aria-hidden="true">#</a> tabSize</h3><ul><li>类型： <code>number</code> <code>可选</code></li><li>默认值： <code>4</code></li><li>可选项： <code>-</code></li><li>描述：指定编辑器在进行缩进时使用的空格数。如果 insertSpaces 为 false，则此设置无效。</li></ul><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li>类型： <code>string</code> <code>可选</code></li><li>默认值： <code>&quot;vs&quot;</code></li><li>可选项： <code>&quot;vs&quot;</code> , <code>&quot;vs-dark&quot;</code> , <code>&quot;hc-black&quot;</code></li><li>描述：指定编辑器使用的主题。可以是 &quot;vs&quot;（明亮主题），&quot;vs-dark&quot;（暗黑主题）或 &quot;hc-black&quot;（高对比度主题）。</li></ul><h3 id="trimautowhitespace" tabindex="-1"><a class="header-anchor" href="#trimautowhitespace" aria-hidden="true">#</a> trimAutoWhitespace</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，则编辑器将在保存文件时删除行末尾的自动插入空格。如果禁用，则编辑器将保留这些空格。</li></ul><h3 id="wordbasedsuggestions" tabindex="-1"><a class="header-anchor" href="#wordbasedsuggestions" aria-hidden="true">#</a> wordBasedSuggestions</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>true</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，则编辑器将根据当前文档中的单词提供代码建议。如果禁用，则编辑器将仅根据语言中的关键字提供建议。</li></ul><h3 id="wordbasedsuggestionsonlysamelanguage" tabindex="-1"><a class="header-anchor" href="#wordbasedsuggestionsonlysamelanguage" aria-hidden="true">#</a> wordBasedSuggestionsOnlySameLanguage</h3><ul><li>类型： <code>boolean</code> <code>可选</code></li><li>默认值： <code>false</code></li><li>可选项： <code>-</code></li><li>描述：如果启用，则编辑器将仅根据当前文档中的单词提供与当前文档的语言相同的代码建议。如果禁用，则编辑器将根据当前文档中的单词提供所有可用的代码建议。</li></ul>',25);function g(m,p){const o=d("ExternalLinkIcon");return l(),t("div",null,[s,e("p",null,[h,i(),e("a",u,[i("官网地址"),c(o)])]),b])}const _=a(n,[["render",g],["__file","IGlobalEditorOptions.html.vue"]]);export{_ as default};