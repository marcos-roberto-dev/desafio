export const dateText = {
  methods: {
    toLocaleDate(text) {
      return new Date(text).toLocaleDateString("pt-BR");
    },
    simpleText(text) {
      return text.substring(text.indexOf("."), 1);
    }
  }
}