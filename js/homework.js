function handleFileSelection() {
    var selectedFiles = document.getElementById('fileInput').files;
    var fileContainer = document.getElementById('fileContainer');

    for (var i = 0; i < selectedFiles.length; i++) {
      var fileList = document.createElement('div');
      fileList.classList.add('file-box');
      fileList.dataset.index = i + 1;

      var fileName = document.createElement('p');
      fileName.classList.add('file-name');
      fileName.textContent = selectedFiles[i].name;

      var deleteButton = document.createElement('span');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = '삭제';

      deleteButton.addEventListener('click', function () {
        fileList.remove();
      });

      fileList.appendChild(fileName);
      fileList.appendChild(deleteButton);
      fileContainer.appendChild(fileList);
    }
}

function submitForm() {
  // 더미 데이터 생성
  var submitterData = {
      submitter: 'loopy'
      // 다른 필요한 더미 데이터 추가 가능
  };

  // FormData 객체 생성
  var formData = new FormData();

  // 더미 데이터를 FormData에 추가
  for (var key in submitterData) {
      formData.append(key, submitterData[key]);
  }

  // 파일 input에서 선택한 파일들을 FormData에 추가
  var fileInput = document.getElementById('fileInput');
  for (var i = 0; i < fileInput.files.length; i++) {
      formData.append('files[]', fileInput.files[i]);
  }

  // 콘솔에 FormData 출력
  for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
  }
}
