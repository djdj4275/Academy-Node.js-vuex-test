import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 
// 이번엔 전역사용이 아닌 vuex(store)에서만 사용할거기 때문에 prototype 지정 안함

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 값 넣기
    user : "",
    memos : [
        {
            id : 1,
            writer : "익명",
            title : "확인용입니다"
        }
    ],
    memo : {
        title : "제목",
        memo : "내용"
    },
    comments : [
        {
            writer : "익명",
            comment : "내용"
        }
    ],
  },
  getters: {
  },
  mutations: { // 값 수정 (state값 들고와서)
    loginuser(state, user) { // 컴포넌트에서 보내준 user값과 state값 들고옴
      state.user = user; // 받아온 user값을 현재 vuex(store)의 state user값에 넣어줌
    },
    changememolist(state, mlist) {
      state.memos = mlist;
    },
    changememo(state, memo) {
      state.memo = memo;
    },
    changecomment(state, comment) {
      state.comments = comment;
    }
  },
  actions: { // mutation과 비슷하게 작동하지만 비동기적
    getmemolist({commit}) { // req로 받은것안의 {commit} 부분만 들고옴
      axios.get('/api/memo').then( (response)=>{
        // 가져온 response의 data값을 memos에 넣어줌
        // 넣어주는것은 값의 변경이므로 mutation에서 함수로서 실행
        // changememolist라는 함수로서 밑의 data 값을 mlist 변수로서 가져와서 값 변경
        commit('changememolist', response.data);
      })
    },
    getmemo({commit}, id) { // 컴포넌트에서 보내준 id 값을 받아서 실행
      axios.get(`/api/memo/${id}`).then( (response)=>{ // 실행시 백의 apimemo에서 해당하는 값 get으로 받아옴
        // 가져온 response의 data값을 memo에 넣어줌
        commit('changememo', response.data);
      })
    },
    getcomment({commit}, id) { // 컴포넌트에서 보내준 id 값을 받아서 실행
      axios.get(`/api/comment/${id}`).then( (response)=>{ // 실행시 백의 apimemo에서 해당하는 값 get으로 받아옴
        // 가져온 response의 data값을 comment에 넣어줌
        commit('changecomment', response.data);
      })
    },
    postcomment({commit}, comment) { // comment객체를 컴포넌트에서 받아옴
      // 들고온 comment의 내용을 바꿀수있음
      // ex . comment.id = ~~
      axios.post('/api/comment', {
        data : {
          comment : comment
        }
      }).then( (response)=> {
        console.log(response.data);
        // comments의 내용을 가져와야함
        commit('changecomment', response.data); // 위의 changecomment를 이용하여 코멘트창 변경
      });
    }
  },
  modules: {
  }
})
