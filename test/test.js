QUnit.test('getDecimal(int)', function (assert) {
    assert.strictEqual(getDecimal(123), 123, '123 >> 123');
});

QUnit.test('getDecimal(real)', function (assert) {
    assert.strictEqual(getDecimal(123.45), 123.45, '123.45 >> 123.45');
    assert.strictEqual(getDecimal(123.45678), 123.46, '123.45678 >> 123.46');
});

QUnit.test('getDecimal(string)', function (assert) {
    assert.strictEqual(getDecimal('123'), 123, '"123" >> 123');
    assert.strictEqual(getDecimal('123,45'), 123.45, '"123,45" >> 123.45');
    assert.strictEqual(getDecimal('123.45678'), 123.46, '"123.45678" >> 123.46');
    assert.strictEqual(getDecimal(' 123 '), 123, '" 123 " >> 123');
    assert.strictEqual(getDecimal(' 123,45 '), 123.45, '" 123,45 " >> 123.45');
    assert.strictEqual(getDecimal(' 123.45 '), 123.45, '" 123.45 " >> 123.45');
});

QUnit.test('getDecimal(real, 3)', function (assert) {
    assert.strictEqual(getDecimal(123.45, 3), 123.45, '123.45 >> 123.45');
    assert.strictEqual(getDecimal(123.45678, 3), 123.457, '123.45678 >> 123.457');
});

QUnit.test('getDecimal(string, 3)', function (assert) {
    assert.strictEqual(getDecimal('123,45', 3), 123.45, '"123,45" >> 123.45');
    assert.strictEqual(getDecimal('123.45678', 3), 123.457, '"123.45678" >> 123.457');
    assert.strictEqual(getDecimal(' 123,45678 ', 3), 123.457, '" 123,45678 " >> 123.457');
    assert.strictEqual(getDecimal(' 123.45678 ', 3), 123.457, '" 123.45678 " >> 123.457');
});