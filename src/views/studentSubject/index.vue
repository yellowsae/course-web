<script>
export default {
  name: 'StudentSub',
  data() {
    return {
      tableData: [{
        subject: '基于舆论分析的信息安全系统',
        subjectType: '实验研究',
        subjectFrom: '教师自选题',
        mentor: '于子涵 (11111)',
        subjectState: '确认通过',
        operate: '题目详情',
      },
      {
        subject: '基于舆论分析的信息安全系统',
        subjectType: '实验研究',
        subjectFrom: '教师自选题',
        mentor: '于子涵',
        subjectState: '不通过',
        operate: '题目详情',
      }],
    }
  },

  methods: {
    // 项目个数 list
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1)
        return 'warning-row'
      else if (rowIndex === 3)
        return 'success-row'
      return ''
    },
  },
}
</script>

<template>
  <div class="studentSubject">
    <!-- 已选题目列表 -->
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
          width="180"
        />
        <el-table-column
          prop="subjectType"
          label="题目类型"
          width="180"
        />
        <el-table-column
          prop="subjectFrom"
          label="题目来源"
        />
        <el-table-column
          prop="mentor"
          label="指导教师"
        />
        <el-table-column
          prop="subjectState"
          label="确认状态"
        />
        <el-table-column
          prop="operate"
          label="操作"
        />
      </el-table>
    </el-card>
    <!-- 题目列表 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input clearable placeholder="请输入内容">
            <el-button icon="el-icon-search" />
          </el-input>
        </el-col>
      </el-row>
    </el-card>

    <!-- 展示题目信息 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input clearable placeholder="请输入内容">
            <el-button icon="el-icon-search" />
          </el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style>
@import "./studentSubject.scss";
</style>
