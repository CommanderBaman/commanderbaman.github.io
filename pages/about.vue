<template>
  <div class="about-page">
    <div class="heading-section">
      <h1 class="back-heading">Intro</h1>
      <h2 class="main-heading">
        <span class="heading-highlight"> About</span> Me
      </h2>
    </div>
    <div class="about-card">
      <div class="photo-section">
        <img
          src="/images/about/portrait.jpg"
          alt="Shubham Ojha's portrait"
          class="portrait"
        />
        <h3 class="name">Shubham Ojha</h3>
        <p class="tagline">Student @IITB</p>
      </div>
      <div class="about-description">
        <p class="about-description-text">
          Hello! I am a student currently pursuing Dual Degree (B.Tech. +
          M.Tech.) in Electrical Engineering from IIT Bombay. <br />
          I love building things from scratch, like I built this website using
          NuxtJS. <br />
          Feel free to peruse this site to know about me more
        </p>
        <a
          href="/documents/resume/11-2022.pdf"
          target="_blank"
          class="resume-link-container"
        >
          <div class="resume-text">See Resume</div>
        </a>
        <div class="contact-icons-section">
          <div class="contact-description">Contact me via...</div>
          <div class="contact-icons-container">
            <!-- facebook -->
            <IconRoundDot
              :icon-type="['fab', 'facebook-f']"
              icon-link="https://www.facebook.com/shubham.ojha.90/"
            />
            <!-- linkedin -->
            <IconRoundDot
              :icon-type="['fab', 'linkedin-in']"
              icon-link="https://www.linkedin.com/in/shubham-ojha-80b52a1a9/"
            />
            <!-- insta -->
            <IconRoundDot
              :icon-type="['fab', 'instagram']"
              icon-link="https://www.instagram.com/commander.baman/"
            />
            <!-- mail -->
            <IconRoundDot
              :icon-type="['far', 'envelope']"
              icon-link="mailto:shubhamojha18@gmail.com"
            />
          </div>
          <div class="contact-form">
            Or you can fill up this
            <NuxtLink class="contact-form-link" :to="ContactRoute.path">
              contact form
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="about-page-section skills-section">
      <h2 class="about-page-heading">Skills</h2>
    </div> -->
    <div class="about-page-section education-section">
      <h2 class="about-page-heading">Education</h2>
      <div class="job-display-grid education-grid">
        <CardJobDisplay
          v-for="edu in Education"
          :key="edu.id"
          :start-date="edu.startDate"
          :end-date="edu.endDate"
          :job-title="edu.name"
          :job-place="edu.place"
          :job-description="edu.description"
          :job-icon="edu.icon"
        />
      </div>
    </div>
    <div class="about-page-section intern-section">
      <h2 class="about-page-heading">Work Experience</h2>
      <div class="job-display-grid work-experience-grid">
        <CardJobDisplay
          v-for="work in WorkExperience"
          :key="work.id"
          :start-date="work.startDate"
          :end-date="work.endDate"
          :job-title="work.name"
          :job-place="work.place"
          :job-description="work.description"
          :job-icon="work.icon"
        />
      </div>
    </div>
    <div class="about-page-section por-section">
      <h2 class="about-page-heading">Positions held</h2>
      <div class="job-display-grid por-grid">
        <CardJobDisplay
          v-for="por in PositionOfResponsibilities"
          :key="por.id"
          :start-date="por.startDate"
          :end-date="por.endDate"
          :job-title="por.name"
          :job-place="por.place"
          :job-description="por.description"
          :job-icon="por.icon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ContactRoute,
  Education,
  PositionOfResponsibilities,
  WorkExperience,
} from '~/assets/constants'

export default Vue.extend({
  name: 'AboutPage',
  data() {
    return {
      ContactRoute,
      Education,
      PositionOfResponsibilities,
      WorkExperience,
    }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/about.css';
</style>
