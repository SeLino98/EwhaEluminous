<template>
  <div class="about">
    <div class="creators-section">
      <h2 class="section-title">만든이들</h2>
    </div>
      <div class="creator-grid">
        <div class="creator" v-for="(creator, index) in creators" :key="index">
          <h3>{{ creator.name }}</h3>
        </div>
      </div>
      <div class="content">
      <div class="club-introduction">
        <h3>DoIT 동아리 소개</h3>
        <p>DoIT는 개발에 관심있는 청년들의 동아리입니다.<br>
           개발을 처음 접하는 청년들에게는 진입장벽이 높다고 생각합니다.<br>
          동아리원끼리 화합하면서,<br>
         서로의 개발 장벽을 낮추는 데에 초점을 두고 운영 중입니다.</p>
      </div>
      <br>
      <div class="qr-links">
        <div class="qr-link">
          <h4>동아리 오픈 카톡</h4>
          <!-- QR 이미지 또는 링크 -->
        </div>
          <div class="qr-link">
            <h4>버그 신고</h4>
            <!-- QR 이미지 또는 링크 -->
            <img id="openLink" src="../assets/doIT.png" alt="동아리 오픈 카톡 QR 코드">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      creators: [
        { name: '금예인', role: '담당1' },
        { name: '김인호', role: '담당2' },
        { name: '이중원', role: '담당1' },
        { name: '이창곤', role: '담당2' },
        { name: '조남현', role: '담당2' },
        { name: '최재성', role: '담당1' },
      ]
    };
  }
}
</script>

<style>
.about-page {
  padding: 4%;
  text-align: center;
}

.creators-section {
  background-color: #00462A;
  color: white;
  padding: 20px;
  margin: 0 auto;
}

.section-title {
  font-weight: bold;
}
#openLink{
  max-width: 15%;
}
.creator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}
.creator {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>