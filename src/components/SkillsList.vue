<template>
<div>
   <skill-range v-for="skill in skills"
            v-bind:skill="skill" v-bind:key="skill.name">
    </skill-range>
     <input type="text" v-model="newSkillName" />
    <button v-on:click="addSkills">Add skill</button>
</div>
</template>

<script>
// import SkillRange from "./SkillRange.vue";

export default {
  name: "skills-list",
  // components: {
  //   SkillRange
  // },
  data: function() {
    return {
      skills: this.$store.state.skills,
      newSkillName: ""
    };
  },
  methods: {
    addSkills: function() {
      // Commit to mutation
      this.$store.dispatch("addSkill", this.newSkillName);
      // Empty text input
      this.newSkillName = "";
    }
  },
  mounted() {
    this.$store.dispatch("getSkills");
  }
};
</script>
<style scoped>

</style>
