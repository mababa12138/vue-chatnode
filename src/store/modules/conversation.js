import tim from 'tim'
import TIM from 'tim-js-sdk'
import store from '..'

const conversationModules = {
  state: {
    currentConversation: {},
    currentMessageList: [],
    nextReqMessageID: '',
    isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息
    conversationList: []
  },
  getters: {
    toAccount: state => {
      if (!state.currentConversation || !state.currentConversation.conversationID) {
        return ''
      }
      switch (state.currentConversation.type) {
        case 'C2C':
          return state.currentConversation.conversationID.replace('C2C', '')
        case 'GROUP':
          return state.currentConversation.conversationID.replace('GROUP', '')
        default:
          return state.currentConversation.conversationID
      }
    },
    currentConversationType: state => {
      if (!state.currentConversation || !state.currentConversation.type) {
        return ''
      }
      return state.currentConversation.type
    },
  },
  actions: {
    
  }
}

export default conversationModules
