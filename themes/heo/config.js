const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-11-28', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'Welcome My 埠洛格', url: '/' },
    { title: '我乃世人无法理解之飞舞', url: '/' },
    { title: '缺仍怀自由之心协bike', url: '/' },
    { title: '《广告位。。。。。》', url: '/' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Share coding',
  HEO_HERO_TITLE_2: 'Share life',
  HEO_HERO_TITLE_3: 'chat.openai.com',
  HEO_HERO_TITLE_4: '船欣版本发布',
  HEO_HERO_TITLE_5: 'NextJS 14.2 - 更好的Turbopack(99.8%)',
  HEO_HERO_TITLE_LINK: 'https://nextjs.org',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '精选', url: '/tag/精选' },
  HEO_HERO_CATEGORY_2: { title: '热门', url: '/tag/热门' },
  HEO_HERO_CATEGORY_3: { title: '教程', url: '/tag/教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
    // HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '我什么人？我是->',
    '✨ NextJS开发者',
    '🤝 专修莫名其妙bug',
    '🔍 热情分享好公民',
    '🚲 山地骑行爱好者',
    '🏃 脚踏实地行动派',
    '🧱 团队小组发动机'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/LSNXUV', // 个人资料底部按钮链接

  // 技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Docker',
      img_1: '/images/heo/docker.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/ps.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'HTML',
      img_1: '/images/heo/html.webp',
      color_1: '#e9572b',
      title_2: 'CSS3',
      img_2: '/images/heo/css.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/js.webp',
      color_1: '#f7cb4f',
      title_2: 'TS',
      img_2: '/images/heo/ts.webp',
      color_2: '#0B7FCF'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/git.webp',
      color_1: '#df5b40',
      title_2: 'Github',
      img_2: '/images/heo/github.png',
      color_2: '#000'
    },
    {
      title_1: 'React',
      img_1: '/images/heo/react.png',
      color_1: '#212329',
      title_2: 'Next',
      img_2: '/images/heo/next.png',
      color_2: '#fff'
    },
    {
      title_1: 'Node',
      img_1: '/images/heo/node.png',
      color_1: '#18171D',
      title_2: 'MySQL',
      img_2: '/images/heo/mysql.png',
      color_2: '#23272F'
    },
    {
      title_1: 'ChatGPT',
      img_1: '/images/heo/chat.webp',
      color_1: '#000',
      title_2: 'Vscode',
      img_2: '/images/heo/vscode.png',
      color_2: '#203756'
    }
    
    // {
    //   title_1: 'illustrator',
    //   img_1: '/images/heo/illustrator.webp',
    //   color_1: '#f29e39',
    //   title_2: 'CSS3',
    //   img_2: '/images/heo/css.webp',
    //   color_2: '#2c51db'
    // },
    // {
    //   title_1: 'FinalCutPro',
    //   img_1: '/images/heo/FinalCutPro.webp',
    //   color_1: '#ffffff',
    //   title_2: 'Python',
    //   img_2: '/images/heo/py.webp',
    //   color_2: '#ffffff'
    // },
    // {
    //   title_1: 'Swift',
    //   img_1: '/images/heo/swift.webp',
    //   color_1: '#eb6840',
    //   title_2: 'Principle',
    //   img_2: '/images/heo/Principle.webp',
    //   color_2: '#8f55ba'
    // },
    // {
    //   title_1: 'Git',
    //   img_1: '/images/heo/git.webp',
    //   color_1: '#df5b40',
    //   title_2: 'Rhino',
    //   img_2: '/images/heo/rhino.webp',
    //   color_2: '#1f1f1f'
    // },
    // {
    //   title_1: 'AfterEffect',
    //   img_1: '/images/heo/ae.png',
    //   color_1: '#989bf8',
    //   title_2: 'Sketch',
    //   img_2: '/images/heo/sketch.webp',
    //   color_2: '#ffffff'
    // },
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流方式',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的QQ群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Y5JpQTQ6vpCs7c_6EUG70N9zMXfUmspP&authKey=0mieyhdHvppwDtPpw2bQibJMR02Wo4p6YD424FW5C1cG8VBqfR%2BbvBxRwNbhMXZ6&noverify=0&group_code=580549517',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
