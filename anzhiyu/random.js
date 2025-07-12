var posts=["2025/07/11/FirstPage/","2025/07/12/模板函数声明与定义分离的问题/","2025/07/12/友元函数无法访问私有成员/","2025/07/12/埃氏筛法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };