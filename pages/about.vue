<template>
  <v-container class="ma-0 pa-0" text-xs-center>
    <v-layout v-for="(i, ii) in skills" :key="ii" row wrap>
      <v-flex xs12>
        <h1>{{ i.type }}</h1>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="(j, ij) in i.list" :key="ij" xs6 sm4 md3 pa-2>
          <v-card class="text-xs-center pt-2" light>
            <v-progress-circular
              :size="100"
              :width="15"
              :value="j.percentage"
              :color="j.color"
            >
              {{ j.percentage }}
            </v-progress-circular>
            <v-card-title primary-title>
              <div class="ma-auto">
                <h4 class="headline mb-0">{{ j.skillName }}</h4>
                <div></div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          type: 'Front-end Development Tools',
          list: [
            {
              skillName: 'AngularJS',
              percentage: 80,
              color: 'red'
            },
            {
              skillName: 'Angular',
              percentage: 60,
              color: 'red'
            },
            {
              skillName: 'VueJS',
              percentage: 70,
              color: 'green'
            },
            {
              skillName: 'JQuery',
              percentage: 85,
              color: 'blue'
            }
          ]
        },
        {
          type: 'Back-end Development Tools',
          list: [
            {
              skillName: 'PHP',
              percentage: 80,
              color: '#7E57C2'
            },
            {
              skillName: 'GoLang',
              percentage: 60,
              color: '#42A5F5'
            },
            {
              skillName: 'NodeJS',
              percentage: 60,
              color: 'green'
            }
          ]
        },
        {
          type: 'Cross-platform Mobile Development Tools',
          list: [
            {
              skillName: 'IonicJS (Cordova)',
              percentage: 50,
              color: '#2962FF'
            },
            {
              skillName: 'Flutter',
              percentage: 40,
              color: '#0D47A1'
            },
            {
              skillName: 'Xamarin',
              percentage: 75,
              color: '#42A5F5'
            }
          ]
        }
      ]
    }
  }
}
</script>
