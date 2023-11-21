<template>
    <div class="home">
        <div v-if="content">

            <h3 class="section-title">{{ content.title }}</h3>
            <br>
            <!-- 작성자들 이름 가로로 나열 -->
            <div class="authors">
                <span>참여자 이름 :</span>
                <span v-for="(author, index) in content.author" :key="index" class="author">{{ author }}</span>
            </div>

            <!-- 나머지 내용은 content가 정의된 경우에만 표시 -->
            <div class="keywords">
                <span class="keyword">#{{ content.category }}</span>
                <!-- <span v-for="(keyword, keyIndex) in content.category" :key="keyIndex">
                    <span class="keyword">#{{ content.category }}</span>
                </span> -->
            </div>

            <br>
            <hr>
            <h4 class="section-title">목차</h4>
            <br>
            <ul class="table-of-contents">
            <li v-for="(section, index) in content.contents" :key="index">
                <br>
                <div v-for="(con, idx) in section" :key="idx">
                    <h6 v-if="idx==0" style="">{{con}}</h6>
                    <a v-if="idx!=0">&nbsp;&nbsp;&nbsp;{{con}}</a>
                    
                </div>
            </li>

                
            </ul>
            <br>

            <br>
            <hr>
            <h4 class="section-title">본론</h4>
            <br>
            <ul class="table-of-contents">
            <li v-for="(section, index) in content.contents" :key="index">
                <br>
                <div v-for="(con, idx) in section" :key="idx">
                    <div v-if="idx==0">
                        <h6 v-if="idx==0" style="">{{con}}</h6>
                        <a v-if="con!=''">&nbsp;{{content.text[index][idx]}}</a>
                    </div>
                    <div v-if="idx!=0">
                        <h6 v-if="idx!=0">{{con}}</h6>
                        &nbsp;{{content.text[index][idx]}}
                    <br>
                    <br>
                    </div>
                </div>
            </li>

            </ul>
            <br>

            <br>
            <hr>
            <h4 class="section-title">참고문헌</h4>
            <br>
            <ul class="table-of-contents">
            <li v-for="(line, index) in content.references" :key="index">
                <div v-if="line[1]==''">{{line[0]}}</div>
                <div v-else><a v-bind:href=line[1]>{{line[0]}}</a></div>
                <br>
                <!-- <br>
                <div v-for="(item, idx) in line" :key="idx">
                    <div v-if="idx==1">
                        <div v-if="item==''">{{references[index][0]}}</div>
                        <div v-else>
                            <a :href=references[index][1]>{{reference[index][0]}}</a>
                        </div>
                    </div>
                </div> -->
            </li>

            </ul>

            <hr>
            <!-- <br>
            <h4 class="section-title">공감 및 댓글</h4>
            <br> -->
            <!-- 공감 및 댓글 템플릿 추가 -->
            <br>

            <router-link to="/battery">Back to BatteryView</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ThesisView',
    data() {
        return {
            content: {
                author: [],
                category: "",
                contents: [],
                id: -1,
                references: [],
                text: [],
                title: ""
                // title: '프로젝트 제목1',
                // keywords: ['키워드1', '키워드2', '키워드3'],
                // authors: ['작성자1', '작성자2', '작성자3'], // 작성자 이름을 추가
                // abstract: '초록 내용',
                // tableOfContents: ['목차 항목1', '목차 항목2'],
                // mainContent: '<p>본론 내용</p>',
                // references: ['참고문헌1', '참고문헌2'],
            },
            searchText : ""
        };
    },
    created() {
    // axios의 get을 이용하여 비동기방식으로 서버와 통신.
    axios
      .get('http://13.125.53.90:8080/thesis')
      .then((response) => {
        console.log(response.data)
        console.log(response.data[this.$route.params.contentId])
        this.content = response.data[this.$route.params.contentId]
        // this.content.title = result.title
        // this.authors = result.author
        // this.content.title = response.data.title;
      })
      .catch((error) => {
        console.dir(error);
      })
    
  },
};
</script>

<style scoped>
.home {
  padding: 4%;
  overflow: hidden;
}

.section-title{
    text-align: left; /* 제목을 왼쪽으로 정렬 */
}

.authors{
    text-align: left; /* 제목을 왼쪽으로 정렬 */
}

.author{
    margin-left: 10px;
}


.keywords {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.keyword {
  padding: 2px 6px;
  color: black;
  font-size: 12px;
  border: 1px solid #00462A;
  border-radius: 3px;
  margin-left: 5px; /* 적당한 여백 추가 */
}

li {
    text-align: left;
}
</style>
