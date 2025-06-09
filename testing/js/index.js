const texts = [
  "lê thanh hùng",
  "một thành viên của IT2427",
  "một thằng thích học ngôn ngữ",
  "một thành viên của Thang Long's Vinyl",
  "một thành viên của Mèo Lạt Band",
  "một guitarist nửa mùa",
  "một ca six gà mờ",
  "lana con",
  "một codẻ",
  "bi sét (đừng chê tớ?!?!)",
  "extrovert (hoặc không)",
  "liên fire con",
  "một chú cú đêm",
  "fỏnt end develốpẻ",
  "thám tử nửa mùa (đặt cho sang thôi)"
];

const typingElement = document.getElementById('typing');
const typingSpeed = 100;
const pauseBetweenTexts = 3000;
const longPauseForFirstText = 6000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  
  if (!isDeleting) {
    typingElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      const pauseTime = textIndex === 0 ? longPauseForFirstText : pauseBetweenTexts;
      setTimeout(type, pauseTime);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    typingElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, typingSpeed / 2);
    }
  }
}

type();
