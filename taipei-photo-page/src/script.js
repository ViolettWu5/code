var currentIndex = 0;
      var itemArr;
      getData(); 

      function getData() {
        let req = new XMLHttpRequest();
        let url =
          "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
        req.open("get", url);
        req.onload = function () {
          

          itemArr = ParseData(this.responseText);

          createBoxes(itemArr, currentIndex, 8);
          createLoadMoreBtn();
        };
        req.send();
      }

      function ParseData(rawData) {
        let jsonData = JSON.parse(rawData);
        let results = jsonData.result.results;
        let resultsLen = results.length;
        let itemArr = [];

        // Get data
        for (let i = 0; i < resultsLen; i++) {
          let data = results[i];
          let stitle = data.stitle;
          let longitude = data.longitude;
          let latitude = data.latitude;
          let urlStr = data.file;
          // get url
          searchStr = "http";
          indexOfSecondHttp = urlStr.indexOf(searchStr, searchStr.length - 1);
          if (indexOfSecondHttp === -1) {
            
            url = urlStr;
          } else {
            url = urlStr.substring(0, indexOfSecondHttp);
          }
          // array
          itemArr.push([stitle, longitude, latitude, url]);
        }
        return itemArr;
      }

      function createBox(itemArr, index) {
        
        let myContent = document.getElementById("content");

        let newDivBox = document.createElement("div");
        newDivBox.className = "box";

        let newDivBg = document.createElement("div");
        newDivBg.className = "bg";
        newDivBg.style.backgroundImage = "url(" + itemArr[index][3] + ")";
        let newDivDescription = document.createElement("div");
        newDivDescription.className = "pictitle";

        let newPDescription = document.createElement("p");
        let stitle = itemArr[index][0];
        let textNodeDescription = document.createTextNode(stitle);
        newPDescription.appendChild(textNodeDescription); // 
        newDivDescription.appendChild(newPDescription); // 
        
        newDivBox.appendChild(newDivBg);
        newDivBox.appendChild(newDivDescription);
        myContent.appendChild(newDivBox);
      }

      function createBoxes(itemArr, startIndex, addNum) {
        for (let i = startIndex; i < startIndex + addNum; i++) {
          if (i >= itemArr.length) {
            break;
          }
          createBox(itemArr, i);
          currentIndex++; // 更新顯示圖片
        }
      }

function createLoadMoreBtn() {
        // 取得容器 並 建立排版
        let myMainTag = document.getElementById("main");
        myMainTag.style.display = "flex";
        myMainTag.style.flexDirection = "column";

        // 1. 建立新的 <button> 元素: button
        let newButton = document.createElement("button");
        newButton.id = "btnLoad";
        newButton.style.display = "flex";
        newButton.style.margin = "0 0 2rem 0";
        newButton.style.padding = "0.5rem 2rem";
        // 2. 建立 button 文字: buttonText
        let buttonText = "Load More";
        let textNodeButton = document.createTextNode(buttonText);
        // 3. 把 buttonText 加入至 button
        newButton.appendChild(textNodeButton);
        // 4. 把 button 都加入至 myMainTag
        myMainTag.appendChild(newButton);

        // 5. 綁定event
        let btnLoad = document.getElementById("btnLoad");
        btnLoad.addEventListener("click", AddEight);
      }
      function AddEight() {
        if (currentIndex >= itemArr.length) {
          alert("已經沒有更多景點囉");
        }
        createBoxes(itemArr, currentIndex, 8);
      }