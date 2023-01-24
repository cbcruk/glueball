import * as Gluon from '@gluon-framework/gluon'

async function main() {
  await Gluon.open('https://eunsoolee.vercel.app', {
    windowSize: [800, 500],
  })
}
main()
