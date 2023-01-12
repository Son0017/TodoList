let formEl = document.querySelector(".label");
let todoList = document.querySelector(".todoList");
let active = document.querySelector("#active");
let completed = document.querySelector("#completed");
let all = document.querySelector("#all");
let clear = document.querySelector("#clear");
let localStorageEl = localStorage;
let listArray = localStorage.getItem("listItem")
  ? JSON.parse(localStorage.getItem("listItem"))
  : [];

let modeBtn = document.querySelector(".modeBtn");
let yVar = localStorageEl.getItem("modeTodoEv")
  ? localStorageEl.getItem("modeTodoEv")
  : 0;
modeBtn.addEventListener("click", () => {
  if (yVar == 0) {
    document.body.classList.remove("modeEvent");
    modeBtn.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z" fill="white"/>
      </svg>
      `;
    localStorageEl.setItem("modeTodoEv", yVar);
    yVar = 1;
  } else if (yVar == 1) {
    document.body.classList.add("modeEvent");
    modeBtn.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4V1ZM18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13ZM13 21C12.4477 21 12 21.4477 12 22V25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25V22C14 21.4477 13.5523 21 13 21ZM25 12C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H22C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12H25ZM5 13C5 12.4477 4.55228 12 4 12H1C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H4C4.55228 14 5 13.5523 5 13ZM20.7782 3.80761C21.1687 3.41709 21.8019 3.41709 22.1924 3.80761C22.5829 4.19814 22.5829 4.8313 22.1924 5.22183L20.0711 7.34315C19.6805 7.73367 19.0474 7.73367 18.6569 7.34315C18.2663 6.95262 18.2663 6.31946 18.6569 5.92893L20.7782 3.80761ZM7.34315 18.6569C6.95262 18.2663 6.31946 18.2663 5.92893 18.6569L3.80761 20.7782C3.41709 21.1687 3.41709 21.8019 3.80761 22.1924C4.19814 22.5829 4.8313 22.5829 5.22183 22.1924L7.34315 20.0711C7.73367 19.6805 7.73367 19.0474 7.34315 18.6569ZM22.1924 20.7782C22.5829 21.1687 22.5829 21.8019 22.1924 22.1924C21.8019 22.5829 21.1687 22.5829 20.7782 22.1924L18.6569 20.0711C18.2663 19.6805 18.2663 19.0474 18.6569 18.6569C19.0474 18.2663 19.6805 18.2663 20.0711 18.6569L22.1924 20.7782ZM7.34315 7.34315C7.73367 6.95262 7.73367 6.31946 7.34315 5.92893L5.22183 3.80761C4.8313 3.41709 4.19814 3.41709 3.80761 3.80761C3.41709 4.19814 3.41709 4.8313 3.80761 5.22183L5.92893 7.34315C6.31946 7.73367 6.95262 7.73367 7.34315 7.34315Z" fill="white"/>
      </svg>
      `;
    localStorageEl.setItem("modeTodoEv", yVar);
    yVar = 0;
  }
});
modeEvTo();
function modeEvTo() {
  if (yVar == 0) {
    document.body.classList.remove("modeEvent");
    modeBtn.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z" fill="white"/>
      </svg>
      `;
  } else if (yVar == 1) {
    document.body.classList.add("modeEvent");
    modeBtn.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4V1ZM18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13ZM13 21C12.4477 21 12 21.4477 12 22V25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25V22C14 21.4477 13.5523 21 13 21ZM25 12C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H22C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12H25ZM5 13C5 12.4477 4.55228 12 4 12H1C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H4C4.55228 14 5 13.5523 5 13ZM20.7782 3.80761C21.1687 3.41709 21.8019 3.41709 22.1924 3.80761C22.5829 4.19814 22.5829 4.8313 22.1924 5.22183L20.0711 7.34315C19.6805 7.73367 19.0474 7.73367 18.6569 7.34315C18.2663 6.95262 18.2663 6.31946 18.6569 5.92893L20.7782 3.80761ZM7.34315 18.6569C6.95262 18.2663 6.31946 18.2663 5.92893 18.6569L3.80761 20.7782C3.41709 21.1687 3.41709 21.8019 3.80761 22.1924C4.19814 22.5829 4.8313 22.5829 5.22183 22.1924L7.34315 20.0711C7.73367 19.6805 7.73367 19.0474 7.34315 18.6569ZM22.1924 20.7782C22.5829 21.1687 22.5829 21.8019 22.1924 22.1924C21.8019 22.5829 21.1687 22.5829 20.7782 22.1924L18.6569 20.0711C18.2663 19.6805 18.2663 19.0474 18.6569 18.6569C19.0474 18.2663 19.6805 18.2663 20.0711 18.6569L22.1924 20.7782ZM7.34315 7.34315C7.73367 6.95262 7.73367 6.31946 7.34315 5.92893L5.22183 3.80761C4.8313 3.41709 4.19814 3.41709 3.80761 3.80761C3.41709 4.19814 3.41709 4.8313 3.80761 5.22183L5.92893 7.34315C6.31946 7.73367 6.95262 7.73367 7.34315 7.34315Z" fill="white"/>
      </svg>
      `;
  }
}
const itemLeft = document.querySelector(".itemLeft");
all.style.color = "#3A7CFD";
addingItems();
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputEl = formEl.input.value;
  if (inputEl.length > 0) {
    formEl.reset();
    addingItem(inputEl);
    localStorageEl.setItem("listItem", JSON.stringify(listArray));
    allFunc();
    writeLeftItem();
  } else {
    alert("Yozing");
  }
});
active.addEventListener("click", () => {
  changeColor(active, all, completed);
  activeFunc();
});
all.addEventListener("click", () => {
  changeColor(all, active, completed);
  allFunc();
});
completed.addEventListener("click", () => {
  changeColor(completed, active, all);
  completedFunc();
});
function addingItem(item) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let li = document.createElement("li");
  let span = document.createElement("span");
  div.classList.add("chekcbox");
  p.innerHTML = item;
  span.innerHTML = "x";
  span.classList.add("delete");
  li.classList.add("listStyle");
  p.classList.add("textStyle");
  li.appendChild(div);
  li.appendChild(p);
  li.appendChild(span);
  let itemObj = {
    itemValue: item,
    clicked: true,
    class: "clickedText",
    chacked: true,
  };
  div.addEventListener("click", () => {
    if (itemObj.chacked) {
      div.classList.add("clickedcheakbox");
      itemObj.chacked = false;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    } else if (itemObj.chacked == false) {
      div.classList.remove("clickedcheakbox");
      itemObj.chacked = true;
      div.classList.add("chekcbox");
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    }
  });
  p.addEventListener("click", () => {
    if (itemObj.clicked) {
      p.classList.add(`${itemObj.class}`);
      itemObj.clicked = false;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    } else if (itemObj.clicked == false) {
      p.classList.remove(`${itemObj.class}`);
      itemObj.clicked = true;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    }
  });
  span.addEventListener("click", () => {
    listArray.forEach((element, i) => {
      if (element.itemValue == p.textContent) {
        li.remove();
        listArray.splice(i, 1);
        localStorageEl.setItem("listItem", JSON.stringify(listArray));
      }
    });
    writeLeftItem();
  });
  listArray.push(itemObj);
  todoList.appendChild(li);
}

function completedFunc() {
  todoList.innerHTML = ``;
  let x = 0;
  for (let i = 0; i < listArray.length; i++) {
    if (listArray[i].clicked == false) {
      createEl(listArray[i]);
      x++;
    }
  }
  writeLeftItems(x);
}
function activeFunc() {
  todoList.innerHTML = ``;
  let x = 0;
  for (let i = 0; i < listArray.length; i++) {
    if (listArray[i].clicked == true) {
      createEl(listArray[i]);
      x++;
    }
  }
  writeLeftItems(x);
}
function allFunc() {
  todoList.innerHTML = ``;

  for (let i = 0; i < listArray.length; i++) {
    if (listArray[i].clicked == true || listArray[i].clicked == false) {
      createEl(listArray[i]);
    }
  }
  writeLeftItem();
}
clear.addEventListener("click", () => {
  todoList.innerHTML = ``;

  for (let index = 0; index < listArray.length; index++) {
    if (listArray[index].chacked == false) {
      listArray.splice(index, 1);
      index = 0;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    }
  }
  listArray.forEach((element, i) => {
    if (element.chacked == false) {
      listArray.splice(i, 1);
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    }
  });
  listArray.forEach((element) => {
    createEl(element);
  });
  writeLeftItem();
});
function addingItems() {
  listArray.forEach((element) => {
    createEl(element);
  });
}
function createEl(element) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = "x";
  span.classList.add("delete");
  div.classList.add("chekcbox");
  p.innerHTML = element.itemValue;
  li.classList.add("listStyle");
  p.classList.add("textStyle");
  li.appendChild(div);
  li.appendChild(p);
  li.appendChild(span);
  if (element.chacked == false) {
    div.classList.add("clickedcheakbox");
    element.chacked = false;
  } else if (element.chacked) {
    div.classList.remove("clickedcheakbox");
    element.chacked = true;
  }
  span.addEventListener("click", () => {
    listArray.forEach((element, i) => {
      if (element.itemValue == p.textContent) {
        li.remove();
        listArray.splice(i, 1);
        localStorageEl.setItem("listItem", JSON.stringify(listArray));
      }
    });
    writeLeftItem();
  });
  if (element.clicked == false) {
    p.classList.add(`${element.class}`);
    element.clicked = false;
  } else if (element.clicked) {
    p.classList.remove(`${element.class}`);
    element.clicked = true;
  }
  div.addEventListener("click", () => {
    if (element.chacked) {
      div.classList.add("clickedcheakbox");
      element.chacked = false;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    } else if (element.chacked == false) {
      div.classList.remove("clickedcheakbox");
      element.chacked = true;

      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    }
  });
  p.addEventListener("click", () => {
    // console.log(element.chacked);
    if (element.clicked) {
      p.classList.add(`${element.class}`);
      element.clicked = false;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    } else if (element.clicked == false) {
      p.classList.remove(`${element.class}`);
      element.clicked = true;
      localStorageEl.setItem("listItem", JSON.stringify(listArray));
    }
  });
  todoList.appendChild(li);
}
function changeColor(item, item1, item2) {
  item.style.color = "#3A7CFD";
  item1.style.color = "#000";
  item2.style.color = "#000";
}
writeLeftItem();
function writeLeftItem() {
  itemLeft.innerHTML = `${listArray.length} items left`;
}
function writeLeftItems(a) {
  itemLeft.innerHTML = `${a} items left`;
}
