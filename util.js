// https://jojoldu.tistory.com/600 이글을 참고해 보시면 좋을 것 같습니다!!!

const { LocalDateTime, nativeJs } = require("@js-joda/core");

function transformLocalDate(data) {
  data._doc.createdAt = LocalDateTime.from(nativeJs(data.createdAt)).toString();
  data._doc.updatedAt = LocalDateTime.from(nativeJs(data.updatedAt)).toString();
  return data;
}

module.exports = {
  transformLocalDate,
};
