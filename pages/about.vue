<template>
  <v-container class="ma-0 pa-0" text-xs-center>
    <v-layout v-for="(i, ii) in skills" :key="ii" row wrap>
      <v-flex xs12>
        <h1>{{ i.type }}</h1>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="(j, ij) in i.list" :key="ij" xs6 sm4 md3 pa-2>
          <v-card class="text-xs-center pt-2" light>
            <div class="icon-placeholder" :class="j.addedClass"></div>
            <div>
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
            </div>
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
              color: 'red',
              addedClass: 'angularjsClass'
            },
            {
              skillName: 'Angular',
              percentage: 60,
              color: 'red',
              addedClass: 'angularClass'
            },
            {
              skillName: 'VueJS',
              percentage: 70,
              color: 'green',
              addedClass: 'vuejsClass'
            },
            {
              skillName: 'JQuery',
              percentage: 85,
              color: 'blue',
              addedClass: 'jqueryClass'
            }
          ]
        },
        {
          type: 'Back-end Development Tools',
          list: [
            {
              skillName: 'PHP',
              percentage: 80,
              color: '#7E57C2',
              addedClass: 'phpClass'
            },
            {
              skillName: 'GoLang',
              percentage: 60,
              color: '#42A5F5',
              addedClass: 'golangClass'
            },
            {
              skillName: 'NodeJS',
              percentage: 60,
              color: 'green',
              addedClass: 'nodejsClass'
            }
          ]
        },
        {
          type: 'Cross-platform Mobile Development Tools',
          list: [
            {
              skillName: 'IonicJS (Cordova)',
              percentage: 50,
              color: '#2962FF',
              addedClass: 'ionicClass'
            },
            {
              skillName: 'Flutter',
              percentage: 40,
              color: '#0D47A1',
              addedClass: 'flutterClass'
            },
            {
              skillName: 'Xamarin',
              percentage: 75,
              color: '#42A5F5',
              addedClass: 'xamarinClass'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.icon-placeholder {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  -webkit-transition: 250ms ease-out;
  -moz-transition: 250ms ease-out;
  -o-transition: 250ms ease-out;
  transition: 250ms ease-out;
}
.icon-placeholder:hover {
  z-index: 1;
  opacity: 1;
}
.angularjsClass {
  background: url('../assets/angularjsIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.angularClass {
  background: url('../assets/angularIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.vuejsClass {
  background: url('../assets/vueJsIcon.jpg') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.jqueryClass {
  background: url('../assets/jqueryIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.phpClass {
  background: url('../assets/phpIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.golangClass {
  background: url('../assets/golangIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.nodejsClass {
  background: url('../assets/nodejsIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.ionicClass {
  background: url('../assets/ionicIcon.jpg') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.flutterClass {
  background: url('../assets/flutterIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
.xamarinClass {
  background: url('../assets/xamarinIcon.png') no-repeat;
  background-color: white;
  background-position: center;
  background-size: contain;
}
</style>
