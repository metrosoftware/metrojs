var assert = require('assert');
var mtr = require('../index.js');

describe('account', function() {

  it('converts RS to numeric and back', function(done) {
    var acc = 'MTR-QNGJ-V239-L69J-3MSK-9RH3-UCC8';
    var result = mtr.rsConvert(acc);
    var result2 = mtr.rsConvert(result.account);
    assert.equal(result2.accountRS, acc);
    done();
  });

  it('get public key from secret phrase', function(done) {
    var pubkey = mtr.secretPhraseToPublicKey(
      'yesterday wall forget mention anywhere former again funny return collect moral music'
    );
    assert.equal(
      pubkey,
      '14c13309665441cb866582cbc06ff2bf4183712c69014c667c02f259f028e819'
    );
    done();
  });

  it('get account ID from public key', function(done) {
    var accountId = mtr.publicKeyToAccountId(
      '14c13309665441cb866582cbc06ff2bf4183712c69014c667c02f259f028e819'
    );
    assert.equal(accountId, 'MTR-QNGJ-V239-L69J-3MSK-9RH3-UCC8');
    done();
  });

  it('get account ID from public key (numeric)', function(done) {
    var accountId = mtr.publicKeyToAccountId(
      '14c13309665441cb866582cbc06ff2bf4183712c69014c667c02f259f028e819',
      true
    );
    assert.equal(accountId, '59081683588445778371518616016');
    done();
  });

  // it('sign transaction bytes', function(done) {
  //   var unsignedTxBytes = '0010802c8805a0051dc37e55e94559b6e8ad45202ab8e87cbfd76fa2ee9920c4e12ee1d6535456179bac9ed2c24b5cdd00e1f5050000000000e1f50500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007ed80e00c9449dcb24d260cf';
  //   // Please don't empty my testnet account :P
  //   var secretPhrase = 'usually yard maybe limb peaceful curse serve peaceful nerve history crash bullet';
  //   var signedBytes = mtr.signTransactionBytes(unsignedTxBytes, secretPhrase);
  //   assert.equal(
  //     signedBytes,
  //     '0010802c8805a0051dc37e55e94559b6e8ad45202ab8e87cbfd76fa2ee9920c4e12ee1d6535456179bac9ed2c24b5cdd00e1f5050000000000e1f505000000000000000000000000000000000000000000000000000000000000000000000000c34622d13d2962386825f923198cd7dd94e65ae67d97927dbe843939aa0a9e0efe37038d4ee0e55599344cb83f4f28207175075e7b2dfb84521d8689ee4dcaca000000007ed80e00c9449dcb24d260cf'
  //   );
  //   done();
  // });
});

// describe('token', function() {
//   it('generate and validate token', function(done) {
//
//     var token = mtr.createToken('mystring', 'mypassphrase');
//     var result = mtr.parseToken(token, 'mystring');
//     assert.equal(result.isValid, true);
//
//     var fail = mtr.parseToken(token, 'notmystring');
//     assert.equal(fail.isValid, false);
//
//     done();
//   });
// });
//
//
// describe('message encryption', function() {
//   it('encrypt and decrypt a message', function(done) {
//
//     var secretPhraseRecp = 'It was a bright cold day in April, and the clocks were striking thirteen.';
//     var publicKeyRecp = '1259ec21d31a30898d7cd1609f80d9668b4778e3d97e941044b39f0c44d2e51b';
//     var secretPhraseSender = 'test';
//     var publicKeySender = 'd9d5c57971eefb085e3abaf7a5a4a6cdb8185f30105583cdb09ad8f61886ec65';
//     var message = 'hello world';
//     var result = mtr.encryptMessage(message, publicKeyRecp, secretPhraseSender);
//     var decrypted = mtr.decryptMessage(
//       result.message,
//       result.nonce,
//       publicKeySender,
//       secretPhraseRecp
//     );
//     assert.equal(decrypted, message);
//     done();
//   });
// });
