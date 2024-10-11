import axios from "axios"
export default class PageService {
  async loadPageContents() {
    try {
      let response = await axios.get<any>(
        "https://nodejs-serverless-function-express-eight-mocha.vercel.app/api/portfolio/load-page-content"
      )
      if (response) {
        return response?.data
      }
    } catch (err: any) {
      console.error(err)
    } finally {
      console.log("fullfilled")
    }
  }
}
export const pageService = new PageService()
