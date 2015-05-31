module.exports =
[ [ 'line', 'TAP version 13\n' ],
  [ 'version', '13' ],
  [ 'line', '    # Subtest: test/debug-test.js\n' ],
  [ 'child',
    [ [ 'line', '# Subtest: test/debug-test.js\n' ],
      [ 'comment', '# Subtest: test/debug-test.js\n' ],
      [ 'line', 'TAP version 13\n' ],
      [ 'version', '13' ],
      [ 'line', '# debug test\n' ],
      [ 'comment', '# debug test\n' ],
      [ 'line', 'ok 1 Should output debugger message\n' ],
      [ 'line', '1..1\n' ],
      [ 'assert',
        { ok: true, id: 1, name: 'Should output debugger message' } ],
      [ 'plan', { start: 1, end: 1 } ],
      [ 'line', '# tests 1\n' ],
      [ 'comment', '# tests 1\n' ],
      [ 'line', '# pass  1\n' ],
      [ 'comment', '# pass  1\n' ],
      [ 'line', '# ok\n' ],
      [ 'comment', '# ok\n' ],
      [ 'complete',
        { ok: true, count: 1, pass: 1, plan: { start: 1, end: 1 } } ] ] ],
  [ 'line', 'debug test\n' ],
  [ 'extra', 'debug test\n' ],
  [ 'line', 't.plan=1\n' ],
  [ 'extra', 't.plan=1\n' ],
  [ 'line', '\'Debugger listening on port 5858\\n\'\n' ],
  [ 'extra', '\'Debugger listening on port 5858\\n\'\n' ],
  [ 'line', '    TAP version 13\n' ],
  [ 'line', '    # debug test\n' ],
  [ 'line', '    ok 1 Should output debugger message\n' ],
  [ 'line', '    \n' ],
  [ 'line', '    1..1\n' ],
  [ 'line', '    # tests 1\n' ],
  [ 'line', '    # pass  1\n' ],
  [ 'line', '    \n' ],
  [ 'line', '    # ok\n' ],
  [ 'line', 'ok 1 - test/debug-test.js # time=537.383ms\n' ],
  [ 'line', '1..1\n' ],
  [ 'assert',
    { ok: true, id: 1, time: 537.383, name: 'test/debug-test.js' } ],
  [ 'plan', { start: 1, end: 1 } ],
  [ 'line', '# time=543.783ms\n' ],
  [ 'comment', '# time=543.783ms\n' ],
  [ 'complete',
    { ok: true, count: 1, pass: 1, plan: { start: 1, end: 1 } } ] ]
