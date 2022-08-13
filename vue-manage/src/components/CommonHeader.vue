<template>
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <!-- <h3 style="color:#fff">首页</h3> -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item class="tag" v-for="item in tags" :key="item.path" :to="{ path: item.path}">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImg" alt="" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>

</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'CommonHeader',
    components: {},
    props: {},
    data() {
        return {
            userImg: require('../assets/images/user.png')
        };
    },
    watch: {},
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    },
    created() {
    },
    mounted() { }
};
</script>
<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}

.l-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }
}

.r-content {
    display: flex;
    justify-content: center;

    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
.tag /deep/ .el-breadcrumb__inner.is-link{
    color:#888 ;
    font-weight: normal;
}
.tag /deep/ .el-breadcrumb__inner:hover{
    color:#fff ;
}

</style>