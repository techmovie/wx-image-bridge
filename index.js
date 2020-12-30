const Koa = require('koa')
const app = new Koa()
const superagent = require('superagent')
app.use(async (ctx, next) => {
  const url = ctx.query.url
  if (!url) {
    ctx.status = 404
    ctx.body = ''
    return false
  }
  ctx.set(
    'Content-Type', 'image/*'
  )
  try {
    const { body } = await superagent.get(url)
      .set('Referer', '')
      .set('User-Agent',
        'User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      )
    ctx.body = body
  } catch (error) {
    ctx.status = 500
    ctx.body = ''
  }
})
app.listen(3000)
