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

// 侧边栏数据 - 学生端
Mock.mock('/api/student/menuInfo', (_req, _res) => {
  const menuList = [
    {
      menuName: '首页',
      id: 1,
      icon: 'el-icon-s-home',
      path: 'welcome',

    },
    {
      menuName: '选题分析',
      id: 2,
      icon: 'el-icon-document',
      path: 'test',
    },
    {
      menuName: '学生选题',
      id: 3,
      icon: 'el-icon-reading',
      path: 'studentSubject',
    },
    {
      menuName: '任务书',
      id: 4,
      icon: 'el-icon-edit-outline',
      path: 'studentReview',
    },
  ]
  return {
    menuList,
    isCollapse: true,
  }
})

// 已选题列表
Mock.mock('/api/subjectInfo', (_req, _res) => {
  const tableData = [
    {
      subject: '基于舆论分析的信息安全系统', // 题目
      subjectType: '实验研究', // 题目类型
      subjectFrom: '教师自选题', // 题目来源
      mentor: '张三 (11111)', // 教师编号
      subjectState: '确认通过', // 是否确认通过
      reportTime: '2020-12-12 19:16:10', // 申报时间
      operate: '题目详情', // 操作
      profession: '计算机科学与技术', // 所属院系
    },
    {
      subject: '基于舆论分析的信息安全系统',
      subjectType: '软件开发',
      subjectFrom: '教师自选题',
      mentor: '张三',
      reportTime: '2020-12-12 19:16:10', // 申报时间
      subjectState: '不通过',
      profession: '设计系', // 所属院系
      operate: '题目详情',
    },
    {
      subject: '基于舆论分析的信息安全系统',
      subjectType: '工程设计',
      subjectFrom: '教师自选题',
      reportTime: '2020-12-12 19:16:10', // 申报时间
      mentor: '李四 (2222)',
      subjectState: '确认通过',
      profession: '电子信息工程系', // 所属院系
      operate: '题目详情',
    },
  ]
  return {
    tableData,
  }
})

// 模拟登录
Mock.mock('/api/login', (_req, _res) => {
  const data = {
    token: 'user-student-token-123456',
    id: 300,
    studentId: 1951400299,
    username: '张三',
    profession: '网络工程',
    grade: '2019',
    email: 'test@test.test',
  }
  const meta = {
    msg: '登录成功',
    status: 200,
  }
  return {
    data,
    meta,
  }
})
