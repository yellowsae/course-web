<script>
export default {
  name: 'Subject',
  data() {
    return {
      // 发起请求获取 专业数据
      professions: [
        {
          value: '通信类',
        },
        {
          value: '计算机类',
        },
      ],
      // 题目类型
      subjectType: [
        {
          value: '工程研究',
        },
        {
          value: '软件开发',
        },
        {
          value: '工程设计',
        },
      ],

      // 教师姓名
      teacherName: [
        {
          value: '于子涵',
        },
        {
          value: '李四',
        },
        {
          value: '王五',
        },
      ],

      // 可选项目
      SubjectOptions: [
        {
          value: '项目A',
        },
        {
          value: '项目B',
        },
        {
          value: '项目C',
        },
      ],

      // 题目难度
      subjectDifficulty: [
        {
          value: 'A',
        },
        {
          value: 'B',
        },
        {
          value: 'C',
        },
      ],

      // 查询表单 -> 之后传递的参数
      queryForm: {
        grade: '',
        class: '',
        studentId: '',
        studentName: '',

        // 保存选中的数据
        searchInfo: {
          q_professions: '',
          q_subjectType: '',
          q_teacherName: '',
          q_subject_options: '',
          q_subjectDifficulty: '',
        },
      },
    }
  },
}
</script>

<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form :data="queryForm">
            <!-- 选项 -->
            <el-select v-model="queryForm.searchInfo.q_professions" placeholder="专业大类">
              <el-option
                v-for="item in professions"
                :key="item.value"
                :value="item.value"
              />
            </el-select>

            <el-select v-model="queryForm.searchInfo.q_subjectType" placeholder="题目类型">
              <el-option
                v-for="item in subjectType"
                :key="item.value"
                :value="item.value"
              />
            </el-select>

            <el-select v-model="queryForm.searchInfo.q_teacherName" placeholder="教师姓名">
              <el-option
                v-for="item in teacherName"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
            <el-select v-model="queryForm.searchInfo.q_subject_options" placeholder="可选项目">
              <el-option
                v-for="item in SubjectOptions"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
            <el-select v-model="queryForm.searchInfo.q_subjectDifficulty" placeholder="题目难度">
              <el-option
                v-for="item in subjectDifficulty"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form>
          <el-button type="primary">
            查询
          </el-button>
        </el-col>
      </el-row>
    </el-card>

    <!-- 添加数据 -->
    <!-- 展示题目信息 -->
    <el-card>
      <!-- table -->
      <el-table
        :data="tableData"
        border
        :row-class-name="tableRowClassName"
        stripe
      >
        <el-table-column label="#" type="index" />
        <el-table-column
          prop="subject"
          label="题目"
          align="center"
          width="300"
        />
        <el-table-column
          prop="profession"
          label="专业大类"
          align="center"
          width="180"
        />
        <el-table-column
          prop="subjectType"
          label="题目类型"
          width="180"
          align="center"
        />
        <el-table-column
          prop="subjectDifficulty"
          label="题目难度"
          align="center"
        />
        <el-table-column
          prop="mentor"
          align="center"
          label="指导教师（编号）"
        />
        <el-table-column
          prop="teachingRoom"
          label="教研室"
          align="center"
        />
        <el-table-column
          prop="operate"
          label="操作"
          width="180"
          align="center"
        >
          <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              题目详情
            </el-button>
            <el-button
              type="text"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              选择题目
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
