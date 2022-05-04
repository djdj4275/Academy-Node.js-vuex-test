<template>
    <div>
        <h1>{{this.$store.state.memo.title}}</h1>
        <p>{{this.$store.state.memo.memo}}</p>
        <hr>
        <ul>
            <li>
                작성자 : 내용
            </li>
            <li v-for="(comment,i) in this.$store.state.comments" :key="i">
                {{comment.writer}} : {{comment.comment}}
            </li>
        </ul>
        <hr>
        <input type="text" v-model="comment">
        <button @click="addcomment">추가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment : ""
        }
    },
    created() { 
        this.$store.dispatch('getmemo', this.$route.params.id);
        // 현재 주소의 파람 id값을 들고 store의 action의 getmemo 실행
        this.$store.dispatch('getcomment', this.$route.params.id);
        // 현재 주소의 파람 id값을 들고 store의 action의 getcomment 실행
    },
    methods : {
        addcomment() {
            const comment = {
                memoid : this.$route.params.id,
                writer : this.$store.state.user,
                comment : this.comment
            }
            this.$store.dispatch('postcomment', comment);
        }
    }
}
</script>