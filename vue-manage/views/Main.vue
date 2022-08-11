<template>
    <el-container>
        <el-aside width="auto">
            <Common-aside></Common-aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <h3>888</h3>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
export default {
    name: 'Main',
    components: {CommonAside},
    props: {},
    data() {
        return {
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
.el-header {
    background-color: #333;
}
.el-main{
    padding-top: 0;
}
</style>