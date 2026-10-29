import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
// Incident: viewer user-4 received claim-B, owned by user-42 (docs/contract.md).
test('viewer user-4 cannot receive claim-B owned by user-42', () => {
  const claimB = {id:'claim-B',ownerId:'user-42',status:'pending'};
  assert.equal(getClaim([claimB],'user-4','claim-B'),null);
  assert.deepEqual(getClaim([claimB],'user-42','claim-B'),claimB);
});
