import test from 'ava'
import { helloWorld } from '../src/index'

test('test', async t => {
  helloWorld()
  t.pass()
})
