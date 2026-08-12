// TEMPORARY WORKAROUND: backend fetching is switched off for these areas.
// Flip a flag back to true to restore the normal ApiService calls — the call
// sites are still in place, guarded by these flags.
// See also event-constants.ts, which hard-codes the events list.
export const FEATURE_FLAGS = {
    fetchSermons: false,
    fetchLifeGroups: false
};
