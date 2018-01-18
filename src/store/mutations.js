import * as types from './mutation-types'
// import { stat } from 'fs';

export const mutations = {
    [types.ADD_SKILL](state, skill) {
        // Add to existing skills
        state.skills.unshift(skill);
    },
    [types.GET_SKILLS](state, skills_payload) {
        state.skills.push(...skills_payload)
    },
    [types.CHANGE_LEVEL](state, payload) {
        state.skills = state.skills.map(s => {
            if (s.id === payload.id) {
              // Update the skills 
              return { name: s.name, level: payload.level, id: s.id }
            }
            return s;
          })
    }

}

// export const UPDATE_AUTH = (state, auth) => {
//     state.auth = auth
// }

// export const UPDATE_USER = (state, user) => {
//     state.user = user
// }

// export const APPNAV_SEARCH = (state, searchData) => {
//     state.appnav = searchData
// }

/**
 * Clear each property, one by one, so reactivity still works.
 *
 * (ie. clear out state.auth.isLoggedIn so Navbar component automatically reacts to logged out state,
 * and the Navbar menu adjusts accordingly)
 *
 * TODO: use a common import of default state to reset these values with.
 */
// export const CLEAR_ALL_DATA = (state) => {
//     // Auth
//     state.auth.isLoggedIn = false
//     state.auth.accessToken = null
//     state.auth.refreshToken = null

//     // User
//     state.user.name = ''
// }