import * as types from './mutation-types'

export const getSkills = ({commit}) => {
  fetch(`/api/skills`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_SKILLS, json))
}

export const addSkill = ({commit}, skill_payload) => {
  fetch(`/api/skill`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(skill_payload)
  })
  .then(response => response.json())
  .then(json => commit(types.ADD_SKILL, json))
}
