export default class APIHelper {
  constructor (ctx) {
    this.ctx = ctx
  }

  async init () {}

  async getPostsWithPagination () {
    const posts = await this.ctx.$axios.$get('https://blog.programsmagic.in/api/paginate')
    console.log(posts)
    return posts
  }

  async getRandomPosts () {
    const response = await this.ctx.$axios.$get('https://blog.programsmagic.in/api/postRrandom')
    return response.data ?? []
  }
}
