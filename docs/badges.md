[Back to API index](README.md)

# Badges

* [Badges](#module_Badges)
    * _actions_
        * [.doFetchBadge([obj])](#module_Badges.doFetchBadge) ⇒ {Promise}
        * [.doFetchManyBadges([obj])](#module_Badges.doFetchManyBadges) ⇒ {Promise}
        * [.doPostElevatorBadge([obj])](#module_Badges.doPostElevatorBadge) ⇒ {Promise}
    * _reducers_
        * [.badges(state, action)](#module_Badges.badges) ⇒ {Object}
    * _selectors_
        * [.getBadge](#module_Badges.getBadge) ⇒ {Array}

<a name="module_Badges.doFetchBadge"></a>

### .doFetchBadge([obj])

Retrieve badge

**Dispatch**: `FETCH_BADGE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.badgeId] | {Number} | Badge ID |

**Example**  

```js
BetaSeries.getAction('shows', 'doFetchBadge')({ badgeId: 123 });
```

<a name="module_Badges.doFetchManyBadges"></a>

### .doFetchManyBadges([obj])

Retrieve many badges

**Dispatch**: `FETCH_MANY_BADGES`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.badgeIds] | {Array} | List of badges ID |

**Example**  

```js
BetaSeries.getAction('badges', 'doFetchManyBadges')({ badgeIds: [1275, 481] });
```

<a name="module_Badges.doPostElevatorBadge"></a>

### .doPostElevatorBadge([obj])

Add count for elevator badge

**Dispatch**: `POST_ELEVATOR_BADGE`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the following: |
| [obj.value] | {Number} | Count for elevator music played |

**Example**  

```js
BetaSeries.getAction('badges', 'doPostElevatorBadge')({
  value: 10,
});
```

<a name="module_Badges.badges"></a>

### .badges(state, action)

List of badges

**Actions listened**:

 * `FETCH_BADGE`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('badges', 'badges').badges;

// state example
{
  '4': {      // badge ID
    id: 4,    // badge element
    ...badge,
  },
  ...,
}
```

<a name="module_Badges.getBadge"></a>

### .getBadge

Select badge by ID from state

**Returns**: {Array} - Badge element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the following: |
| [obj.badgeId] | {Number} | Badge ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  episode: BetaSeries.getSelector('badges', 'getBadge')(state, {
    badgeId: props.badgeId,
  });
});
```

