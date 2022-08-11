<template>
    <el-row class="home" :gutter="20">
        <!-- 左侧 -->
        <el-col :span="8" style="margin-top:20px">
            <!-- 用户信息 -->
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" alt="" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间<span>2022-08-11</span></p>
                    <p>上次登录地点<span>北京</span></p>
                </div>
            </el-card>
            <!-- 表格 -->
            <el-card style="margin-top:20px;height:460px">
                <el-table :data="tableData">
                    <el-table-column align="center" v-for="(val, key) in tableLabel" :key="key" :prop="key"
                        :label="val">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <!-- 右侧 -->
        <el-col :span="16" style="margin-top:20px">
            <!-- 订单数据 -->
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="num">
                            ￥{{ item.value }}
                        </p>
                        <p class="txt">
                            {{ item.name }}
                        </p>
                    </div>
                </el-card>
            </div>
            <!--  -->
            <el-card style="height:280px">

            </el-card>
            <!-- 图表 -->
            <div class="graph">
                <el-card style="height:260px">

                </el-card>
                <el-card style="height:260px">

                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'home',
    components: {},
    props: {},
    data() {
        return {
            userImg: require('../../src/assets/images/user.png'),
            // 表格列名
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总共购买'
            },
            // 表格数据
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '三星',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            // 订单数据
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],

        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="less" scoped>
</style>