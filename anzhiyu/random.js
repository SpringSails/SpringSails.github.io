var posts=["2025/07/11/FirstPage/","2025/09/08/DFS和BFS学习笔记/","2025/07/12/explicit关键字导致的没有适当的类复制构造函数问题/","2025/07/12/友元函数无法访问私有成员/","2025/07/12/埃氏筛法/","2025/07/12/模板函数声明与定义分离的问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };