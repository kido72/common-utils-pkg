/* global describe, it */

import chai from 'chai';
import BoolUtil from './boolean.util';

chai.expect();

const {
  expect
} = chai;

describe('BOOLEAN', () => {
  describe('toBool', () => {
    it('should return Bolean', () => {
      expect(BoolUtil.toBool(true)).to.be.equal(true);
      expect(BoolUtil.toBool('true')).to.be.equal(true);
      expect(BoolUtil.toBool('yes')).to.be.equal(true);
      expect(BoolUtil.toBool('y')).to.be.equal(true);
      expect(BoolUtil.toBool(1)).to.be.equal(true);
      expect(BoolUtil.toBool('1')).to.be.equal(true);

      expect(BoolUtil.toBool(false)).to.be.equal(false);
      expect(BoolUtil.toBool('false')).to.be.equal(false);
      expect(BoolUtil.toBool('no')).to.be.equal(false);
      expect(BoolUtil.toBool('n')).to.be.equal(false);
      expect(BoolUtil.toBool(0)).to.be.equal(false);
      expect(BoolUtil.toBool('0')).to.be.equal(false);

      expect(BoolUtil.toBool(null)).to.be.equal(false);
      expect(BoolUtil.toBool(undefined)).to.be.equal(false);
    });
  });
});
