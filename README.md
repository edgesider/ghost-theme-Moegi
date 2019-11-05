# Moegi「萌黄」 - 一个优雅有趣的Ghost主题

*forked from moegi-design/ghost-theme-Moegi*

## 下载与使用

### 主题下载

在[Github](https://github.com/ddiu8081/ghost-theme-Moegi)下载zip后，上传到Ghost后台即可。

### 主题配置

#### 搜索、作者、评论与目录功能

本主题使用 [Valine](https://valine.js.org/) 作为评论系统。要开启评论功能，请参照 [这篇教程](https://valine.js.org/quickstart/#appidappkey) 注册 LeanCloud 并获取 appId 和 appKey（注意配置好安全域名）。

然后进入 Ghost 后台 - Code injection，在`Blog Header`中插入以下代码：

```
<style>
    /* 隐藏文章底部作者信息，注释掉此段取消隐藏 */
    .author-card {
        display: none;
    }
</style>
<script>
    var main_color = '#86B81B'; //主色调，默认为#86B81B
    var show_search = true; //是否开启搜索功能，默认为true
    var show_toc = true; //是否开启文章目录，默认为true
    var show_valine = true; //是否开启评论功能，默认为true
    var show_index_tag = true; //是否开启首页底部标签云，默认为true
    
    //要开启评论功能需正确填写lc_appId与lc_appKey，并保证show_valine为true
    var lc_appId = '这里填上面获得的appid';
    var lc_appKey = '这里填上面获得的appkey';

    //footer相关
    var footer_text = ''; //自定义footer第二行文字，默认为空
</script>
```

搜索、评论、文章目等功能均可以通过修改上述配置项进行开启与关闭。

开启作者信息时，建议在`后台-Team`处自定义作者头像与信息，否则将显示默认信息。

注：**搜索功能目前仅支持标题搜索**。

#### 归档页

在 Ghost 后台新建独立页面（勾选`Turn this post into a page`），标题随意（如`归档`），页面地址为`archives`，在设置中添加指向该地址的菜单即可。

#### 标签云

默认显示在首页底部。如要做成单独页面方法同上，在 后台新建独立页面，页面地址为`tags`，最后修改菜单即可。

### 注意事项

1. 该主题仅适用于 Ghost 1.0 及以上版本，0.x版本不支持。
2. 欢迎 Fork 本项目并修改成自己喜欢的样子。欢迎提 issue。

## 其他

### 致谢

该主题在Casper基础上修改，并引用了如下代码及框架：

* [Typo.css](https://github.com/sofish/typo.css)：中文网页重设与排版，构建最适合中文阅读的网页排版。
* [Highlight.js](https://highlightjs.org/)：一个出色的代码高亮插件。
* [Moment.js](http://momentjs.cn/)：js时间处理插件，用于归档页面。
* [jQuery](https://jquery.com/)：最流行的JavaScript工具库。
* [@ldsun](https://ldsun.com/2016/07/23/ghost-archives/)：归档页实现灵感来源。
* [jquery.tocify.js](https://github.com/gfranko/jquery.tocify.js)：快速生成动态文章目录，并且有scrollspy功能。
* [Valine](https://valine.js.org/)：一款快速、简洁且高效的无后端评论系统。
* [NProgress](https://github.com/rstacruz/nprogress/)：方便、可自定义的网页加载进度条插件。

### License

MIT
