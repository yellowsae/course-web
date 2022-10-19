<script>
export default {
  name: 'StudentTopicDetails',
  data() {
    return {
      size: '',
      radio: '选中且禁用',
    }
  },
}
</script>

<template>
  <div />
</template>

<template>
    <div>
        <div>
            <el-descriptions class="margin-top caption" title="题目基本信息" :column="2" :size="size">
                <el-descriptions-item label="题目" class="RemoveColon">基于树莓派的xxxxxxxxxx</el-descriptions-item>
                <br>
                <el-descriptions-item label="可选专业">计算机专业</el-descriptions-item>
                <el-descriptions-item label="题目申报时间">？？？</el-descriptions-item>
                <el-descriptions-item label="上机时数">？？？</el-descriptions-item>
                <el-descriptions-item label="题目难度">？？？</el-descriptions-item>
                <el-descriptions-item label="题目编号">？？？</el-descriptions-item>
                <el-descriptions-item label="题目来源">？？？</el-descriptions-item>
                <el-descriptions-item label="横向/纵向">？？？</el-descriptions-item>
                <el-descriptions-item label="教师职称">？？？</el-descriptions-item>
                <el-descriptions-item label="指导教师">？？？</el-descriptions-item>
                <el-descriptions-item label="教研室">？？？</el-descriptions-item>
                <el-descriptions-item label="导师联系邮箱">？？？</el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="SingleType">
            <template>
                <p class="caption">类型</p>
                <div class="TitleTypeBackground">
                    <el-radio disabled v-model="radio" label="禁用">工程设计</el-radio>
                    <el-radio disabled v-model="radio" label="禁用">工程技术</el-radio>
                    <el-radio disabled v-model="radio" label="禁用">实验研究</el-radio>
                    <el-radio disabled v-model="radio" label="禁用">软件开发</el-radio>
                    <el-radio disabled v-model="radio" label="禁用">理论研究</el-radio>
                    <el-radio disabled v-model="radio" label="选中且禁用">应用研究</el-radio>
                </div>
            </template>
        </div>
        <template>
            <p class="caption">主要任务简述</p>
            <div class="CaptionContent">
                1、对校园网安全态势感知系统的调研、资料的获取、有关知识的准备等；
                2、针对安全设备、网络设备、日志服务器、应用主机的数据采集；
                3、学习网络信息的大数据处理、深度学习技术，针对校园网服务器和网络；
                4、设计大数据平台、网络威胁检测分析、安全事件应用展示等功能；
                5、实现安全事件可发现、可预警、可溯源、可视化、安全设备可联动的校园网安全态势感知系统。
            </div>
        </template>
        <template>
            <p class="caption">要求简述</p>
            <div class="CaptionContent">
                在“互联网+”的大环境下，高校的计算机网络应用越来越广泛，其规模越来越大，多层面的网络安全威胁和安全风险也与日俱增，主要工作设计一种校园网的安全态势感知建设方案，通过安全设备、网络设备、日志服务器、应用主机的数据采集、大数据平台建设、威胁检测分析、安全事件应用展示等功能，实现安全事件可发现、可预警、可溯源、可视化、安全设备可联动的校园网安全态势感知系统，有效的提高校园网安全水平，降低网络安全隐患。
            </div>
        </template>
        <template>
            <p class="caption">需具备的基础知识、技能</p>
            <div class="CaptionContent">
                Linux、流量测试；RDMA；Tensorflow；机器学习
            </div>
        </template>
        <template>
            <p class="caption">所需设备</p>
            <div class="CaptionContent">
                PC主机、服务器、交换机、路由器
            </div>
        </template>
    </div>
</template>

<style>
@import"./StudentTopicDetails.scss";
</style>
