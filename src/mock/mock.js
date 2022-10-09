// es6语法引入mock模块
import Mock from 'mockjs'
const Random = Mock.Random

// 测试数据
Mock.mock('/api/data', (_req, _res) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  const list = []
  for (let i = 0; i < 30; i++) {
    const listObject = {
      title: Random.csentence(5, 10), // 随机生成一段中文文本。
      company: Random.csentence(5, 10),
      attention_degree: Random.integer(100, 9999), // 返回一个随机的整数。
      photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js'),
    }
    list.push(listObject)
  }
  return {
    data: list,
  }
})

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
  // console.log('_req', _req)  // {url: '/api/menuInfo', type: 'GET', body: null}body: nulltype: "GET"url: "/api/menuInfo"[[Prototype]]: Object
  // console.log('_res', _res)   // {url: '/api/menuInfo', type: 'GET', body: null}
  return {
    menuList,
    isCollapse: true,

  }
})
