<template>
    <h1>这是App组件</h1>
    <mt-button type="danger" icon="more" @click="show">default</mt-button>
    <mt-button type="danger" size="large" icon="more" plan>default</mt-button>
    <mt-button type="danger" size="small" icon="more" disable>default</mt-button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>
    <router-view></router-view>
</template>
<script>
    import {Toast} from "mint-ui";

    export default {
        data() {
            return {
                toastInstanse: null
            }
        },
        create() {
            this.getList()
        },
        methods: {
            getList() {
                this.show();
                setTimeout(() => {
                    this.toastInstance.close();
                }, 3000)
            },
            show() {
                // Toast("提示")
                this.toastInstance = Toast({
                    message: "提示",
                    duration: 1000,
                    position: 'top',
                    iconClass: 'glyphicon glyphicon-heart',//设置图标的类
                    className: 'mytoast'//自定义Toast的样式，需要自己提供一个类名

                })
            }
        }
    }
</script>