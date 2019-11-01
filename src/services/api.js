import axios from "axios"

const baseURL = "https://gist.githubusercontent.com/leocabrallce/6b54d252d62832de2c6166b08ae7727a/raw/5342daff7ea0b030488943f2cd45455534e30112/"

export const API = axios.create({
  baseURL
})

API.get