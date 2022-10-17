# course-web
选课系统前端部分

### 开发技术栈

- 包管理工具： pnpm 
- UI组件库: ElementUI
- 数据模拟： Mock.js 
- 前端技术栈： 
  - Vue : 2.7 
  - vite: 3
  - vue-router : 3
  - eslint : @antfu/eslint-config
  - pinia : 2
  - Axios 





###  模拟数据Mock 

使用方式 

```ts
// 侧边栏数据
Mock.mock('/api/menuInfo', (_req, _res) => {
  const menuList = [
    {
      authName: '教师双选管理',
      id: 1,
      icon: 'el-icon-s-home',
      children: [
        {
          authName: '教师申报题目',
          id: 2,
          path: 'addSubject',
          children: [
          ],
        },
        {
          authName: '教师题目审核',
          id: 4,
          path: 'review',
        },
      ],
    },
  ]
  return {
    menuList,
    isCollapse: true,
  }
})

```



### Axios 请求模块 

```ts
// 已经封装 axios 
//api/index.js


// 按照请求类型对axios进行封装
const api = {
  get(url, data) {
    return instanceA.get(url, { params: data })
  },
  post(url, data) {
    return instanceA.post(url, qs.stringify(data))
  },

  // 与后端交互使用 instanceB
  doGet(url, data) {
    return instanceB.get(url, { params: data })
  },
  doPost(url, data) {
    return instanceB.post(url, qs.stringify(data))
  },
}

```



使用方式

```ts
    // 使用 async await 建议使用
    async getMenuList() {
      const res = await this.$api.get('/api/menuInfo', {})
      // this.MenuList = res.data.menuList
      // eslint-disable-next-line no-console
      console.log(res, 'res-> async await 方法获取数据')

      // 赋值
      this.MenuList = res.data.menuList
      this.isCollapse = res.data.isCollapse
    },
```

```ts
    // 获取侧边栏数据
    this.$api.get('/api/menuInfo', {}).then((res) => {
      // 赋值
      this.MenuList = res.data.menuList
    }).catch((e) => {
      console.log(e)
  })

```


### 与后端的交互
```ts
    // get请求 -> doGet
    async getStudentPageInfo () {
      const res = await this.$api.doGet('/student/graduation', { pageNum: 1, pageSize: 1, categoryId: 1 })
    }


    // post 请求 -> doPost
    async getStudentPageInfo () {
      const res = await this.$api.doPost()
    }
```
