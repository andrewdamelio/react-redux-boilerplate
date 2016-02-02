import delay from '../delay';
import assert from 'assert';

const getStateMock = () => {
  return {
    loading: true,
  };
};

const iterator = delay(getStateMock);

describe('delay generator', () => {
  it('1. yield should take SHOW_LOADING_MODAL action', () => {
    assert.deepEqual(iterator.next().value, {
      TAKE: 'SHOW_LOADING_MODAL',
    });
  });

  it('2. yield should call wait', () => {
    const generatorValue = iterator.next('SHOW_LOADING_MODAL').value;
    assert.strictEqual(generatorValue.CALL.fn.name, 'wait');
    assert.strictEqual(generatorValue.CALL.args[0], 500);
  });

  it('3. yield should put hideLoadingModal and trigger the action', () => {
    assert.deepEqual(iterator.next().value, {
      PUT: {
        type: 'HIDE_LOADING_MODAL',
      },
    });
  });
});
