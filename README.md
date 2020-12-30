# wx-image-bridge

解决微信外链公众号图片防盗链图片无法正常展示的问题,其他网站的图片应该也适用，未测试。

## 使用方法

在启动服务后，将图片地址按如下格式拼接在服务器地址后，可以正常访问。

示例：

```
http://localhost:3000/?url=https://mmbiz.qpic.cn/mmbiz_jpg/DezXb6Zd7SjnsZIDmuicXRjIrXsouuCaz6Sa82UBFQiar22j8VSrO1qu41HibTyJXkVCL8X9ib6Fy4N1leU0k904KA/640?wx_fmt=jpeg
```


## 其中一个使用场景

instapaper收藏微信文章后图片加载失败，可以在启动服务后配合这个脚本[instapaper显示公众号防盗链图片](https://greasyfork.org/zh-CN/scripts/419374-instapaper%E6%98%BE%E7%A4%BA%E5%85%AC%E4%BC%97%E5%8F%B7%E9%98%B2%E7%9B%97%E9%93%BE%E5%9B%BE%E7%89%87)使用。