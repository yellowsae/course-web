<script>
export default {
  name: 'Subject',
  data() {
    return {
      tableData: [],
      formInline: {
        user: '',
        region: '',
        bigClass: '',
        classInfo: '',
        state: '',
        subjectType: '',
      },
    }
  },
  methods: {
    onSubmit() {
      // eslint-disable-next-line no-console
      console.log('submit!')
    },
  },
}
</script>

<template>
  <div>
    <!-- 查询 -->
    <el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="题目所属院">
          <el-select v-model="formInline.bigClass">
            <el-option label="信息工程学院" value="bigClass" />
          </el-select>
        </el-form-item>
        <el-form-item label="专业大类">
          <el-select v-model="formInline.classInfo">
            <el-option label="通信类" value="tongxinlei" />
            <el-option label="计算机类" value="jisuanjilei" />
          </el-select>
        </el-form-item>
        <el-form-item label="确认状态">
          <el-select v-model="formInline.state">
            <el-option label="未确认" value="weiquren" />
            <el-option label="已确认" value="yiqueren" />
          </el-select>
        </el-form-item>
        <el-form-item label="题目类型">
          <el-select v-model="formInline.subjectType">
            <el-option label="工程设计" value="gongchengsheji" />
            <el-option label="工程技术" value="gongchengjishu" />
            <el-option label="实验研究" value="shiyanyanjiu" />
            <el-option label="软件开发" value="ruanjiankaifa" />
            <el-option label="理论研究" value="lilunyanjiu" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 添加数据 -->
    <!-- 展示题目信息 -->
    <el-card>
      <!-- table -->
      <el-table
        :data="tableData"
        border
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
