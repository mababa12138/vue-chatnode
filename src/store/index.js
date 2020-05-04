import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import user from './modules/user'
import conversation from './modules/conversation'
import {Message} from 'element-ui'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    current: Date.now(), // 当前时间
    intervalID: 0,
    message: undefined,
    loading: false,
    sending: false,
    error: 'Relax! This is just a drill error message',
    user: {
      username: 'Jack',
      name: 'Jack Sparrow'
    },
    reconnect: false,
    activeRoom: { 
      id: '124'
    },
    rooms: [
      {
        id: '123',
        name: 'Ships'
      },
      {
        id: '124',
        name: 'Treasure'
      }
    ],
    users: [
      {
        username: 'Jack',
        name: 'Jack Sparrow',
        presence: 'online'
      },
      {
        username: 'Barbossa',
        name: 'Hector Barbossa',
        presence: 'offline'
      }
    ],
    messages: [
      {
        username: 'Jack',
        date: '11/12/1644',
        text: 'Not all treasure is silver and gold mate'
      },
      {
        username: 'Jack',
        date: '12/12/1644',
        text: 'If you were waiting for the opportune moment, that was it'
      },
      {
        username: 'Hector',
        date: '12/12/1644',
        text: 'You know Jack, I thought I had you figured out'
      }
    ],
    userTyping: null
  },
  getters: {
    hidden(state) {
      // eslint-disable-next-line no-unused-vars
      const temp = state.current 
      if (typeof document.hasFocus !== 'function') {
        return document.hidden
      }
      return !document.hasFocus()
    }
  },
  mutations: {
    startComputeCurrent(state) {
      state.intervalID = setInterval(() => {
        state.current = Date.now()
      }, 500)
    },
    stopComputeCurrent(state) {
      clearInterval(state.intervalID)
      state.intervalID = 0
    },
    showMessage(state, options) {
      if (state.message) {
        state.message.close()
      }
      state.message = Message({
        message: options.message,
        type: options.type || 'success',
        duration: options.duration || 2000,
        offset: 40
      })
    }
  },
  modules: {
    user,
    conversation
  },
})