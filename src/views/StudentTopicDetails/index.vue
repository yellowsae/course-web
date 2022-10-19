<script>
export default {
  name: 'StudentTopicDetails',
  data() {
    return {
      size: '',
      radio: '',
      topicParticularData: {},
    }
  },
  mounted() {
    this.$api.get('/api/topicDetails', {}).then((res) => {
      // 赋值
      this.topicParticularData = res.data.topicParticularData[0]
      this.radio = res.data.topicParticularData[0].type
    }).catch((e) => {
    })
  },
}
</script>

<template>
  <div>
    <el-card>
      <el-descriptions class="margin-top caption" title="题目基本信息" :column="2" :size="size">
        <el-descriptions-item label="题目" class="RemoveColon">
          {{ topicParticularData.titleName }}
        </el-descriptions-item>
        <el-descriptions-item label="可选专业大类">
          {{ topicParticularData.specialityClasses }}
        </el-descriptions-item>
        <el-descriptions-item label="题目申报时间">
          {{ topicParticularData.declarationTime }}
        </el-descriptions-item>
        <el-descriptions-item label="上机时数">
          {{ topicParticularData.hours }}
        </el-descriptions-item>
        <el-descriptions-item label="题目难度">
          {{ topicParticularData.difficulty }}
        </el-descriptions-item>
        <el-descriptions-item label="题目编号">
          {{ topicParticularData.identifier }}
        </el-descriptions-item>
        <el-descriptions-item label="题目来源">
          {{ topicParticularData.source }}
        </el-descriptions-item>
        <el-descriptions-item label="横向/纵向">
          {{ topicParticularData.direction }}
        </el-descriptions-item>
        <el-descriptions-item label="教师职称">
          {{ topicParticularData.occupation }}
        </el-descriptions-item>
        <el-descriptions-item label="指导教师">
          {{ topicParticularData.guidanceTeacher }}
        </el-descriptions-item>
        <el-descriptions-item label="教研室">
          {{ topicParticularData.staffRoom }}
        </el-descriptions-item>
        <el-descriptions-item label="导师联系邮箱">
          {{ topicParticularData.Teachermail }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card>
      <p class="caption">
        类型
      </p>
      <el-radio v-model="radio" class="radioOne" disabled label="工程设计">
        工程设计
      </el-radio>
      <el-radio v-model="radio" disabled label="工程技术">
        工程技术
      </el-radio>
      <el-radio v-model="radio" disabled label="实验研究">
        实验研究
      </el-radio>
      <el-radio v-model="radio" disabled label="软件开发">
        软件开发
      </el-radio>
      <el-radio v-model="radio" disabled label="理论研究">
        理论研究
      </el-radio>
      <el-radio v-model="radio" disabled label="应用研究">
        应用研究
      </el-radio>
    </el-card>

    <el-card>
      <p class="caption">
        主要任务简述
      </p>
      <pre>
        {{ topicParticularData.taskDescription }}
              </pre>
    </el-card>

    <el-card>
      <p class="caption">
        要求简述
      </p>
      <pre>
        {{ topicParticularData.requireDescription }}
              </pre>
    </el-card>

    <el-card>
      <p class="caption">
        需要具备的基础知识，技能
      </p>
      <pre>
        {{ topicParticularData.needskill }}
              </pre>
    </el-card>

    <el-card>
      <p class="caption">
        所需设备
      </p>
      <pre>
        {{ topicParticularData.requireEquipment }}
              </pre>
    </el-card>
  </div>
</template>

<style>
@import "./StudentTopicDetails.scss";
</style>
