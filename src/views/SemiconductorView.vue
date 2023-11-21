<template>
  <div class="home">

    <div id="title">
      <div id="title_name">반도체</div>
    </div>
    <br><br><br>
    <div class="input-group">  
      <input type="text" class="form-control" placeholder="Search" v-model="searchText" @keyup.enter="goToSearchResultView()">
      <div class="input-group-append">
        <b-button class="btn" @click="goToSearchResultView()" style="position: relative; z-index: auto;background-color: white;  border-color: lightgray; border-left-color: transparent;"> 
          <b-icon icon="search"/>
        </b-button>
      </div>
    </div>
    <br>
    <div id="keyword">
      <button id="button" @click="goToBatteryPage">#배터리</button>
      <button id='button' @click="goToSemiconductorPage">#반도체</button>
      <button id='button' @click="goToBioPage">#바이오</button>
      <button id='button' @click="goToProcessDesignPage">#공정설계</button>
      <button id='button' @click="goToMaterialsEnergyPage">#신소재/에너지</button>
    </div>
    <br>
    <hr>
    <br>
    <div class="content">
      <ul>
        <li v-for="(content, index) in displayedContent" :key="index">
          <div class="content-item" @click="goToThesisView(index)">
            <div class="content-details">
              <h5 class="content-title">{{ content.title }}</h5>
              <hr>
              <!-- <h3 class="content-title">{{ content.title }}</h3> -->
              <!-- <div class="keywords">
                <span v-for="(keyword, keyIndex) in content.keywords" :key="keyIndex">
                  <span class="keyword">#{{ keyword }}</span>
                </span>
              </div> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'SemiConductorView',
  data() {
    return {
      contentList: [
        { title: '컨텐츠 1', keywords: ['배터리', '키워드2', '키워드3'] },
        { title: '컨텐츠 2', keywords: ['배터리', '키워드5'] },
        { title: '컨텐츠 3', keywords: ['키워드1', '키워드2', '키워드3'] },
        { title: '컨텐츠 4', keywords: ['키워드4', '키워드5'] },
        { title: '컨텐츠 5', keywords: ['키워드1', '키워드2', '키워드3'] },
        { title: '컨텐츠 6', keywords: ['키워드1', '키워드2', '키워드3'] },
      ],
      currentPage: 0, // 현재 페이지를 나타내는 변수 추가
      itemsPerPage: 5, // 한 페이지에 보여질 항목 수,
      searchText : ""
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.contentList.length / this.itemsPerPage);
    },
    visiblePages() {
      const maxVisiblePages = 10; // 최대 보여질 페이지 수
      const currentPage = this.currentPage + 1;
      const totalPages = this.totalPages;

      let startPage = currentPage - Math.floor(maxVisiblePages / 2);
      startPage = Math.max(startPage, 1);

      let endPage = startPage + maxVisiblePages - 1;
      endPage = Math.min(endPage, totalPages);

      const visiblePages = [];
      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }

      return visiblePages;
    },
    displayedContent() {
      const startIdx = this.currentPage * this.itemsPerPage;
      const endIdx = startIdx + this.itemsPerPage;
      return this.contentList.slice(startIdx, endIdx);
    },
  },
  created() {
    // axios의 get을 이용하여 비동기방식으로 서버와 통신.
    axios
      .get('http://13.125.53.90:8080/thesis/category/SemiConductor')
      .then((response) => {
        console.log(response.data)
        this.contentList = response.data
        // this.contentList = response.data;
      })
      .catch((error) => {
        console.dir(error);
      })
    
  },
  components: {
  },
  methods: {
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber - 1;
    },
    goToBatteryPage() {
      if (this.$route.path !== '/battery') {
        this.$router.push('/battery');
      }
    },
    goToSemiconductorPage() {
      if (this.$route.path !== '/semiconductor') {
        this.$router.push('/semiconductor');
      }
    },
    goToBioPage() {
      if (this.$route.path !== '/bio') {
        this.$router.push('/bio');
      }
    },
    goToProcessDesignPage() {
      if (this.$route.path !== '/processDesign') {
        this.$router.push('/processDesign');
      }
    },
    goToMaterialsEnergyPage() {
      if (this.$route.path !== '/materialsEnergy') {
        this.$router.push('/materialsEnergy');
      }
    },
    // ThesisView 페이지로 이동하는 메서드
    goToThesisView(contentId) {
      // '/thesis/:contentId' 경로로 이동하면서 contentId를 동적 라우팅 파라미터로 전달
      this.$router.push({ name: 'thesis', params: { contentId: contentId } });
    },
        goToSearchResultView() {
      // '/thesis/:contentId' 경로로 이동하면서 contentId를 동적 라우팅 파라미터로 전달
      this.$router.push({ name: 'searchResult', params: { searchText: this.searchText } });
    },
  }
}
</script>

<style>
.home {
  padding: 4%;
  align-items: center;
}

#title {
  background-color: #00462A;
  max-width: 70%;
  margin: 0 auto;
}

#title_name {
  line-height : 60px;

  color: white;
  font-size: 24pt;
}

#button {
  background-color: white;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14pt;
}

.content-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.content-number {
  margin-right: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00462A;
  color: white;
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 14px;
}

.content-title {
  margin-bottom: 5px;
}

.content-item {
  margin-bottom: 30px; /* 각 컨텐츠 사이에 여백을 추가 */
  display: flex;
  align-items: center;
}

.content-details {
  flex: 1;
}

.content-details h3 {
  text-align: left; /* 제목을 왼쪽으로 정렬 */
}

.keywords {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.keyword {
  padding: 2px 6px;
  /* background-color: #00462A; */
  color: black;
  font-size: 12px;
  border: 1px solid #00462A;
  border-radius: 3px;
  margin-left: 5px; /* 적당한 여백 추가 */
}

.pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px 0; /* 상하 여백 추가 */
  position: fixed;
  bottom: 0; /* 화면 하단에 고정 */
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
}

.pagination-button {
  background-color: #FFFFFF;
  color: black;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}


</style>