import Vue from "vue"
import Vuex from "vuex"
import { API } from "@/services/api"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newsData: []
  },
  mutations: {
    GET_DATA_NEWS(state, News) {
      state.newsData = [...News]
    },
    CLICK(state, date) {
      const index = state.newsData.findIndex(item => item.date === date)
      const select = state.newsData.find(item => item.date === date)
      const newDate = { ...select, click: select.click += 1 }
      const copy = [...state.newsData]
      copy.splice(index, 1, newDate)
      state.newsData = copy
      localStorage.setItem("click", JSON.stringify(copy))
    },

  },
  actions: {
    fetchDataNews(context, url) {
      const clickData = JSON.parse(localStorage.getItem("click"))
      if (!clickData) {
        try {
          API.get(url).then(({ data }) => {
            const News = data.map(item => {
              return { ...item, click: 0 };
            })
            context.commit("GET_DATA_NEWS", News)
          })
        } catch (error) {
          console.log(error)
        }
      }
      else {
        context.commit("GET_DATA_NEWS", clickData)
      }
    },
    addClick(context, date) {
      context.commit("CLICK", date)
    }
  }
})
