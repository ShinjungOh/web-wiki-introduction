document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.querySelector(".comment-list");
  const cancelButton = document.getElementById("cancel-button");
  const submitButton = document.getElementById("submit-button");

  if (!commentForm || !commentInput || !commentList || !cancelButton || !submitButton) {
    console.error("필요한 요소 중 하나를 찾을 수 없습니다. HTML을 확인하세요!");
    return;
  }

  submitButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText === "") {
      alert("댓글을 입력해주세요.");
      return;
    }

    addComment(commentText);
    commentInput.value = "";
  });

  cancelButton.addEventListener("click", function () {
    commentInput.value = "";
  });

  function addComment(text) {
    const listItem = document.createElement("li");
    listItem.classList.add("comment-item");

    const authorDiv = document.createElement("div");
    authorDiv.classList.add("comment-author");

    const authorImg = document.createElement("img");
    authorImg.src = "./images/comment-author-icon.png";
    authorImg.alt = "사용자 프로필 이미지";

    const authorName = document.createElement("span");
    authorName.textContent = "방문자";

    authorDiv.appendChild(authorImg);
    authorDiv.appendChild(authorName);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("comment-content");
    contentDiv.textContent = text;

    listItem.appendChild(authorDiv);
    listItem.appendChild(contentDiv);

    commentList.appendChild(listItem);
    alert("댓글이 등록되었습니다.");
  }
});
