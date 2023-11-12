<template>
    <div class="home">
      <div class="section">
        <label for="project"><h1> 프로젝트 </h1></label>
        <input type="text" id="project" v-model="project">
      </div>
      <hr>
      <div class="section">
        <label for="hashTag"><h1> 초록 </h1>  </label>
        <div v-for="(hash,index) in hashTags" :key="index">
            <input type="text" v-model="hashTags[index]">
        </div>
        <div class="buttonSection">
            <button @click="addHashTag" >태그 추가</button>
            <button @click="deleteHashTag">태그 삭제</button>
        </div>
      </div>
      <hr>
      <div class="section">
        <label for="toc1"><h1> 목차 </h1></label>
        <div v-for="(toc,index) in tocs" :key="index">
            <input type="text" v-model="tocs[index]">
        </div>
        <div class="buttonSection">
            <button @click="addToc" >목차 추가</button>
            <button @click="deleteToc">목차 삭제</button>
        </div>
      </div>
      <hr>
      <div class="section">
        <label for="mainContent"><h1> 본론 </h1></label>
        <textarea id="mainContent" v-model="mainContent" rows="10"></textarea>
      </div>
      <hr>
      <div class="section">
        <label><h1> 참고문헌 </h1></label>
        <div v-for="(reference, index) in references" :key="index">
          <input type="text" v-model="references[index]">
        </div>
        <div class="buttonSection">
            <button @click="addReference">참고문헌 추가</button>
            <button @click="deleteReference">참고문헌 삭제</button>
        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    name: 'EditProjectView',
    data() {
      return {
        project: '',
        hashTags: [''],
        tocs:[''],
        mainContent: '',
        references: ['']
      };
    },
    methods: {
        addHashTag() {
            this.hashTags.push('');
        },
        addReference() {
            this.references.push('');
        },
        addToc() {
            this.tocs.push('');
        },
        deleteToc() {
            if (this.tocs.length > 1) {
            this.tocs.pop();
            } else {
            alert('최소 하나의 목차는 필요합니다.'); // 선택 사항
            }
        },
        deleteReference() {
            if (this.references.length > 1) {
            this.references.pop();
            } else {
            alert('최소 하나의 참고문헌이 필요합니다.'); 
            }
        },
        deleteHashTag() {
            if (this.hashTags.length > 1) {
            this.hashTags.pop();
            } else {
            alert('최소 하나의 참고문헌이 필요합니다.'); 
            }
        }
    }
  }
  </script>
  <style>
  .home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .section {
    margin-bottom: 20px;
    background-color: rgb(12, 91, 12);
    color: white;
  }
  .section label {
    display: block;
    margin-bottom: 5px;
  }
  .section input, .section textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  hr{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .buttonSection {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .buttonSection button {
    background-color: #4CAF50; /* 초록색 배경 */
    color: white;
    border: none;
    padding: 10px 15px;
    margin-right: 10px; /* 버튼 간 간격 */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 부드러운 색상 전환 효과 */
  }
  .buttonSection button:hover {
    background-color: #367c39; /* 호버 시 색상 변경 */
  }

  .buttonSection button:last-child {
    background-color: #f44336; /* 삭제 버튼 색상 */
    
  }
  .buttonSection button:last-child:hover {
    background-color: #d32f2f; /* 삭제 버튼 호버 색상 */
  }
</style>
  


















