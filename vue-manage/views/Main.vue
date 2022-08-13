<template>
    <el-container>
        <el-aside width="auto">
            <Common-aside></Common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <Common-header></Common-header>
            </el-header>
            <common-tag></common-tag>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import CommonAside from '@/components/CommonAside.vue';
import CommonTag from '@/components/CommonTag.vue';
export default {
    name: 'Main',
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    },
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

.el-main {
    padding-top: 0;
}
</style>