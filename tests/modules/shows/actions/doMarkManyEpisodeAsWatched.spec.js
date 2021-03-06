import episodesReducer from '../../../../lib/modules/shows/reducers/episodes';
import membersEpisodesToSeeReducer
  from '../../../../lib/modules/shows/reducers/membersEpisodesToSee';
import arrayToHash from '../../../../lib/utils/func/arrayToHash';

const actionFile = '../lib/modules/shows/actions/doMarkManyEpisodeAsWatched';
const episodesFixture = require('../../../fixtures/episodes.json');

describe('Mark many episodes as watched', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with episode already exist on reducer state', () => {
    let action;

    const store = mockStore({
      showsEpisodes: arrayToHash(episodesFixture.slice(0, 2)),
      showsMembersEpisodesToSee: { 1: [239475, 239477, 239476, 239478] }
    });

    const actionToDispatch = getInstance(Promise.resolve({}));

    before(async () => {
      await store.dispatch(actionToDispatch({ episodeIds: [239475, 239476] }));
      action = store.getActions()[0];
    });

    it('validate many episode as watched action', () => {
      expect(action.type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
      expect(action.payload.episodeIds).to.have.lengthOf(2);
      expect(action.payload.seen).to.equal(true);
    });

    it('validate episodes reducer for many watched', () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(stateEpisodesReducer[239475].user.seen).to.deep.equal(true);
      expect(stateEpisodesReducer[239476].user.seen).to.deep.equal(true);
    });

    it('validate membersEpisodesToSee reducer', () => {
      const stateMembersEpisodesToSeeReducer = membersEpisodesToSeeReducer(
        store.getState().showsMembersEpisodesToSee,
        action
      );

      expect(stateMembersEpisodesToSeeReducer[1]).to.deep.equal([
        239477,
        239478
      ]);
    });
  });

  describe('call api with episode not existing on reducer state', () => {
    let action;

    const store = mockStore({
      showsEpisodes: arrayToHash(episodesFixture.slice(0, 2))
    });

    const actionToDispatch = getInstance(Promise.resolve({}));

    before(async () => {
      await store.dispatch(
        actionToDispatch({ episodeIds: [23947589, 23947690] })
      );
      action = store.getActions()[0];
    });

    it('validate many episode as watched action', () => {
      expect(action.type).to.equal('MARK_MANY_EPISODE_AS_WATCHED');
      expect(action.payload.episodeIds).to.have.lengthOf(2);
      expect(action.payload.seen).to.equal(true);
    });

    it("validate episodes reducer for many watched not changed and don't have episodes", () => {
      const stateEpisodesReducer = episodesReducer(
        store.getState().showsEpisodes,
        action
      );

      expect(stateEpisodesReducer[23947589]).to.equal(undefined);
      expect(stateEpisodesReducer[23947690]).to.equal(undefined);
      expect(Object.keys(stateEpisodesReducer)).to.have.lengthOf(2);
    });
  });
});
