const $fill = document.querySelector('.fill');
const $empties = document.querySelectorAll('.empty');

// $fill에는 dragStart, dragEnd 함수가 필요
$fill.addEventListener('dragstart', dragStart);
$fill.addEventListener('dragend', dragEnd);

$empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});

// for (const empty of $empties) {
//   empty.addEventListener('dragover', dragOver);
//   empty.addEventListener('dragenter', dragEnter);
//   empty.addEventListener('dragleave', dragLeave);
//   empty.addEventListener('drop', dragDrop);
// }

function dragStart() {
  // 기존에 있던 class는 그대로 두고 클래스 추가함 (기존에 있던 fill 클래스 존재하고 hold를 추가함)
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver() {
  console.log('drag over');
}

function dragEnter() {
  console.log('drag enter');
}

function dragLeave() {
  console.log('drag leave');
}

function dragDrop() {
  console.log('drag drop');
}
