<template>
    <div class="manage">
        <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
            <common-form>

                
            </common-form>
        </el-dialog>
    </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
export default {
    name: 'user',
    components: {
        CommonForm
    },
    props: {},
    data() {
        return {
            operateType: 'add',
            isShow: false
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